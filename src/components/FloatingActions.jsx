import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { assistantTopics, faqs, siteContact } from '../siteData';

function FloatingActions() {
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Hello. I can help with what the foundation does, how to donate, how to volunteer, and other common questions.',
    },
  ]);

  const normalizedTopics = useMemo(
    () =>
      assistantTopics.map((topic) => ({
        ...topic,
        keywords: topic.keywords.map((keyword) => keyword.toLowerCase()),
      })),
    []
  );

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

    const topic = normalizedTopics.find((item) =>
      item.keywords.some((keyword) => text.includes(keyword))
    );

    if (topic) {
      return {
        text: topic.response,
        actionLabel: topic.actionLabel,
        actionHref: topic.actionHref,
      };
    }

    const faq = faqs.find(
      (item) =>
        item.question.toLowerCase().includes(text) || item.answer.toLowerCase().includes(text)
    );

    if (faq) {
      return {
        text: faq.answer,
        actionLabel: 'Contact the Foundation',
        actionHref: '/contact',
      };
    }

    return {
      text:
        'I do not have a precise answer for that yet, but I can guide you to the right page or help you contact the foundation directly on WhatsApp.',
      actionLabel: 'Open WhatsApp',
      actionHref: siteContact.whatsapp,
    };
  };

  const submitQuestion = (input) => {
    const trimmed = input.trim();

    if (!trimmed) {
      return;
    }

    const reply = findReply(trimmed);

    setMessages((current) => [
      ...current,
      { role: 'user', text: trimmed },
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
        aria-label="Chat with Kevin Nambam Ninmol Foundation on WhatsApp"
      >
        WhatsApp
      </a>

      <button
        type="button"
        className="floating-chat-trigger"
        onClick={() => setIsChatOpen((current) => !current)}
        aria-expanded={isChatOpen}
      >
        AI Help
      </button>

      {isChatOpen ? (
        <div className="chatbot-card" role="dialog" aria-label="Foundation assistant">
          <div className="chatbot-header">
            <div>
              <strong>Foundation Assistant</strong>
              <p className="chatbot-status">Online for quick guidance</p>
            </div>
            <button type="button" onClick={() => setIsChatOpen(false)} aria-label="Close assistant">
              x
            </button>
          </div>

          <p className="chatbot-copy">
            Ask about the foundation, donations, volunteering, or general FAQs. You can also tap a
            topic below.
          </p>

          <div className="chatbot-quick-actions">
            {assistantTopics.map((topic) => (
              <button key={topic.id} type="button" onClick={() => submitQuestion(topic.label)}>
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
                  <button type="button" className="chatbot-message-action" onClick={() => goToAction(message.actionHref)}>
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
              placeholder="Ask a question..."
              aria-label="Ask the foundation assistant a question"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      ) : null}
    </>
  );
}

export default FloatingActions;
