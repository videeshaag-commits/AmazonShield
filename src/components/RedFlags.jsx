const flags = [
  {
    title: "Payment requested",
    description: "The sender asks for money before verification.",
  },
  {
    title: "Artificial urgency",
    description: "The message pressures you to act immediately.",
  },
  {
    title: "Possible impersonation",
    description: "The sender may be pretending to represent another organization.",
  },
  {
    title: "Suspicious URL",
    description: "The included link may require additional verification.",
  },
];

function RedFlags() {
  return (
    <section className="red-flags-card">
      <h2>
        <span>🚩</span>
        Red Flags Detected
      </h2>

      <div className="flags-list">
        {flags.map((flag) => (
          <div className="flag" key={flag.title}>
            <span className="flag-icon">🚩</span>

            <div className="flag-content">
              <strong>{flag.title}</strong>
              <p>{flag.description}</p>
            </div>

            <span className="flag-arrow">›</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RedFlags;