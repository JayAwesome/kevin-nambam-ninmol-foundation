import { useState } from 'react';
import { faqs, siteContact } from '../siteData';

function FloatingActions() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <a
        href={siteContact.whatsapp}
        className="floating-whatsapp"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
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
        <div className="chatbot-card" role="dialog" aria-label="FAQ assistant">
          <div className="chatbot-header">
            <strong>Foundation Assistant</strong>
            <button type="button" onClick={() => setIsChatOpen(false)} aria-label="Close assistant">
              x
            </button>
          </div>
          <p className="chatbot-copy">Quick answers to common questions. Full AI integration can be connected later.</p>
          <div className="chatbot-faqs">
            {faqs.map((faq) => (
              <div key={faq.question} className="chatbot-faq">
                <strong>{faq.question}</strong>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default FloatingActions;
