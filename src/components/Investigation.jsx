function Investigation() {
  return (
    <section className="investigation-card">
      <div className="agent-header">
        <div className="agent-icon">
          <span>🤖</span>
        </div>

        <div>
          <h3>AI Investigation in Progress</h3>
          <p>AmazonShield is analyzing the submitted message...</p>
        </div>
      </div>

      <div className="investigation-layout">
        <div className="investigation-steps">
          <div className="investigation-step active">
            <span className="step-icon spinner">◌</span>
            <span>Analyzing message...</span>
          </div>

          <div className="investigation-step completed">
            <span className="step-icon">✓</span>
            <span>Checking scam patterns</span>
          </div>

          <div className="investigation-step completed">
            <span className="step-icon">✓</span>
            <span>Analyzing links</span>
          </div>

          <div className="investigation-step completed">
            <span className="step-icon">✓</span>
            <span>Gathering evidence</span>
          </div>

          <div className="investigation-step completed">
            <span className="step-icon">✓</span>
            <span>Calculating risk</span>
          </div>
        </div>

        <div className="agent-network" aria-hidden="true">
          <div className="network-circle">
            <span>●</span>
            <span>●</span>
            <span>●</span>
            <span>●</span>
            <span>●</span>
          </div>
          <div className="network-core">AI</div>
        </div>
      </div>
    </section>
  );
}

export default Investigation;