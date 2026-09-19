function RiskScore({ score = 92 }) {
  const level = score >= 75 ? "HIGH RISK" : score >= 45 ? "MEDIUM RISK" : "LOW RISK";

  return (
    <section className="risk-card">
      <div className="risk-card-left">
        <div className="risk-title">RISK ASSESSMENT</div>

        <div className="risk-level">
          <span className="risk-alert">!</span>
          {level}
        </div>

        <div className="score">
          {score}
          <span>/100</span>
        </div>

        <div className="risk-bar">
          <div
            className="risk-progress"
            style={{ width: `${score}%` }}
          ></div>
        </div>
      </div>

      <div className="risk-card-right">
        <p>
          This message shows multiple characteristics commonly associated with
          digital scams.
        </p>
      </div>
    </section>
  );
}

export default RiskScore;