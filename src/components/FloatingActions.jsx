import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { assistantTopics, faqs, siteContact } from '../siteData';

function FloatingActions() {
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [query, setQuery] = useState('');
  const chatCardRef = useRef(null);
  const triggerRef = useRef(null);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: t('floating.greeting'),
    },
  ]);

  useEffect(() => {
    setMessages([
      {
        role: 'assistant',
        text: t('floating.greeting'),
      },
    ]);
  }, [language, t]);

  const topicLabels = useMemo(
    () => ({
      'what-we-do': t('floating.topicWhatWeDo'),
      donate: t('floating.topicDonate'),
      volunteer: t('floating.topicVolunteer'),
      contact: t('floating.topicContact'),
      faq: t('floating.topicFaq'),
    }),
    [t],
  );

  const normalizedTopics = useMemo(
    () =>
      assistantTopics.map((topic) => ({
        ...topic,
        label: topicLabels[topic.id] || topic.label,
        keywords: topic.keywords.map((keyword) => keyword.toLowerCase()),
      })),
    [topicLabels],
  );

  useEffect(() => {
    if (!isChatOpen) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      if (chatCardRef.current?.contains(event.target) || triggerRef.current?.contains(event.target)) {
        return;
      }

      setIsChatOpen(false);
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsChatOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isChatOpen]);

  const goToAction = (href) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }

    navigate(href);
    setIsChatOpen(false);
  };

  const findReply = (input) => {
    const text = input.trim().toLowerCase();

    const topic = normalizedTopics.find((item) => item.keywords.some((keyword) => text.includes(keyword)));

    if (topic) {
      const translatedReplies = {
        'what-we-do': {
          text: t('floating.responseWhatWeDo'),
          actionLabel: t('floating.viewPrograms'),
        },
        donate: {
          text: t('floating.responseDonate'),
          actionLabel: t('floating.goToDonate'),
        },
        volunteer: {
          text: t('floating.responseVolunteer'),
          actionLabel: t('floating.getInvolved'),
        },
        contact: {
          text: t('floating.responseContact'),
          actionLabel: t('floating.contactUs'),
        },
        faq: {
          text: t('floating.responseFaq'),
          actionLabel: t('floating.openWhatsapp'),
        },
      };

      return {
        text: translatedReplies[topic.id]?.text || topic.response,
        actionLabel: translatedReplies[topic.id]?.actionLabel || topic.actionLabel,
        actionHref: topic.actionHref,
      };
    }

    const faq = faqs.find(
      (item) =>
        item.question.toLowerCase().includes(text) || item.answer.toLowerCase().includes(text),
    );

    if (faq) {
      return {
        text: faq.answer,
        actionLabel: t('floating.contactFoundation'),
        actionHref: '/contact',
      };
    }

    return {
      text: t('floating.fallback'),
      actionLabel: t('floating.openWhatsapp'),
      actionHref: siteContact.whatsapp,
    };
  };

  const submitQuestion = (input, displayText = input) => {
    const trimmed = input.trim();

    if (!trimmed) {
      return;
    }

    const reply = findReply(trimmed);

    setMessages((current) => [
      ...current,
      { role: 'user', text: displayText.trim() },
      {
        role: 'assistant',
        text: reply.text,
        actionLabel: reply.actionLabel,
        actionHref: reply.actionHref,
      },
    ]);
    setQuery('');
  };

  return (
    <>
      <a
        href={siteContact.whatsapp}
        className="floating-whatsapp"
        target="_blank"
        rel="noreferrer"
        aria-label={t('floating.whatsappAria')}
      >
        {t('floating.whatsapp')}
      </a>

      <button
        ref={triggerRef}
        type="button"
        className="floating-chat-trigger"
        onClick={() => setIsChatOpen((current) => !current)}
        aria-expanded={isChatOpen}
        aria-controls="foundation-assistant"
      >
        {t('floating.faq')}
      </button>

      {isChatOpen ? (
        <div
          ref={chatCardRef}
          id="foundation-assistant"
          className="chatbot-card"
          role="dialog"
          aria-label={t('floating.assistantTitle')}
        >
          <div className="chatbot-header">
            <div>
              <strong>{t('floating.assistantTitle')}</strong>
              <p className="chatbot-status">{t('floating.assistantStatus')}</p>
            </div>
            <button type="button" onClick={() => setIsChatOpen(false)} aria-label={t('floating.assistantClose')}>
              x
            </button>
          </div>

          <p className="chatbot-copy">{t('floating.assistantCopy')}</p>

          <div className="chatbot-quick-actions">
            {normalizedTopics.map((topic) => (
              <button
                key={topic.id}
                type="button"
                onClick={() => submitQuestion(topic.keywords[0], topic.label)}
              >
                {topic.label}
              </button>
            ))}
          </div>

          <div className="chatbot-thread" aria-live="polite">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`chatbot-message chatbot-message-${message.role}`}
              >
                <p>{message.text}</p>
                {message.actionLabel && message.actionHref ? (
                  <button
                    type="button"
                    className="chatbot-message-action"
                    onClick={() => goToAction(message.actionHref)}
                  >
                    {message.actionLabel}
                  </button>
                ) : null}
              </div>
            ))}
          </div>

          <form
            className="chatbot-form"
            onSubmit={(event) => {
              event.preventDefault();
              submitQuestion(query);
            }}
          >
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t('floating.assistantInput')}
              aria-label={t('floating.assistantInputLabel')}
            />
            <button type="submit">{t('floating.send')}</button>
          </form>
        </div>
      ) : null}
    </>
  );
}

export default FloatingActions;
