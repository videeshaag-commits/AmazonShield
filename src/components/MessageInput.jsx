import { useState } from "react";

function MessageInput({ onInvestigate }) {
  const [message, setMessage] = useState("");

  const handleInvestigate = () => {
    if (!message.trim()) {
      alert("Please paste a suspicious message first.");
      return;
    }

    onInvestigate(message.trim());
  };

  return (
    <section className="input-section">
      <div className="section-label">PASTE SUSPICIOUS MESSAGE</div>

      <textarea
        className="message-box"
        placeholder="Paste the suspicious message, email, job offer or link here..."
        value={message}
        maxLength={10000}
        onChange={(event) => setMessage(event.target.value)}
      />

      <div className="input-footer">
        <span className="character-count">{message.length}/10000</span>

        <button
          className="investigate-button"
          onClick={handleInvestigate}
        >
          🔍 INVESTIGATE
        </button>
      </div>
    </section>
  );
}

export default MessageInput;