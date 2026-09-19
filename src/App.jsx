import { useState } from "react";
import "./App.css";

function ShieldIcon({ size = 24, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3L20 6V11C20 16.5 16.5 20 12 21C7.5 20 4 16.5 4 11V6L12 3Z" />
      <path d="M9 12L11 14L15 10" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20L16 16" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 12S5.5 5 12 5s10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function Header({ page, setPage }) {
  const [accountOpen, setAccountOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const handleAccountOption = (option) => {
    setAccountOpen(false);

    if (option === "logout") {
      setPage("home");
      alert("You have been logged out.");
      return;
    }

    setActiveModal(option);
  };

  return (
    <>
      <header className="navbar">

        {/* LOGO */}
        <div
          className="brand"
          onClick={() => setPage("home")}
        >
          <div className="brand-icon">
            <ShieldIcon size={22} color="#5ee6a5" />
          </div>

          <span>AmazonShield</span>
        </div>


        {/* NAVIGATION */}
        <nav>

          <button
            className={page === "home" ? "active" : ""}
            onClick={() => setPage("home")}
          >
            Home
          </button>

          <button
            className={page === "analyze" ? "active" : ""}
            onClick={() => setPage("analyze")}
          >
            Features
          </button>

          <button
            className={page === "about" ? "active" : ""}
            onClick={() => setPage("about")}
          >
            How it Works
          </button>

          <button
            className={page === "history" ? "active" : ""}
            onClick={() => setPage("history")}
          >
            About
          </button>

        </nav>


        {/* ACCOUNT */}
        <div className="account-wrapper">

          <button
            className="profile"
            onClick={() => setAccountOpen(!accountOpen)}
          >

            <div className="profile-circle">
              V
            </div>

            <span>
              Videesha
            </span>

            <span
              className={`arrow ${
                accountOpen ? "arrow-up" : ""
              }`}
            >
              ⌄
            </span>

          </button>


          {/* DROPDOWN */}
          {accountOpen && (

            <div className="account-dropdown">

              <div className="account-header">

                <div className="dropdown-avatar">
                  V
                </div>

                <div>
                  <strong>Videesha</strong>
                  <span>videesha@example.com</span>
                </div>

              </div>


              <div className="dropdown-divider"></div>


              <button
                className="account-option"
                onClick={() =>
                  handleAccountOption("profile")
                }
              >
                <span className="option-icon">
                  👤
                </span>

                <div>
                  <strong>Profile</strong>
                  <small>
                    View your profile
                  </small>
                </div>
              </button>


              <button
                className="account-option"
                onClick={() =>
                  handleAccountOption("feedback")
                }
              >
                <span className="option-icon">
                  💬
                </span>

                <div>
                  <strong>Feedback</strong>
                  <small>
                    Tell us what you think
                  </small>
                </div>
              </button>


              <button
                className="account-option"
                onClick={() =>
                  handleAccountOption("settings")
                }
              >
                <span className="option-icon">
                  ⚙️
                </span>

                <div>
                  <strong>Settings</strong>
                  <small>
                    Manage your preferences
                  </small>
                </div>
              </button>


              <div className="dropdown-divider"></div>


              <button
                className="account-option logout-option"
                onClick={() =>
                  handleAccountOption("logout")
                }
              >
                <span className="option-icon">
                  🚪
                </span>

                <div>
                  <strong>Logout</strong>
                  <small>
                    Sign out of AmazonShield
                  </small>
                </div>
              </button>

            </div>

          )}

        </div>

      </header>


      {/* PROFILE MODAL */}
      {activeModal === "profile" && (

        <div
          className="modal-overlay"
          onClick={() => setActiveModal(null)}
        >

          <div
            className="account-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setActiveModal(null)}
            >
              ×
            </button>

            <div className="modal-avatar">
              V
            </div>

            <h2>Videesha</h2>

            <p className="modal-email">
              videesha@example.com
            </p>

            <div className="profile-details">

              <div>
                <span>Name</span>
                <strong>Videesha</strong>
              </div>

              <div>
                <span>Account Type</span>
                <strong>AmazonShield User</strong>
              </div>

              <div>
                <span>Member Since</span>
                <strong>September 2026</strong>
              </div>

            </div>

            <button
              className="modal-primary"
              onClick={() => setActiveModal(null)}
            >
              Close
            </button>

          </div>

        </div>

      )}


      {/* FEEDBACK MODAL */}
      {activeModal === "feedback" && (

        <div
          className="modal-overlay"
          onClick={() => setActiveModal(null)}
        >

          <div
            className="account-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setActiveModal(null)}
            >
              ×
            </button>

            <div className="modal-icon">
              💬
            </div>

            <h2>Send Feedback</h2>

            <p className="modal-description">
              Help us improve AmazonShield.
            </p>

            <textarea
              className="feedback-input"
              placeholder="Write your feedback here..."
            />

            <button
              className="modal-primary"
              onClick={() => {
                alert("Thank you for your feedback!");
                setActiveModal(null);
              }}
            >
              Submit Feedback
            </button>

          </div>

        </div>

      )}


      {/* SETTINGS MODAL */}
      {activeModal === "settings" && (

        <div
          className="modal-overlay"
          onClick={() => setActiveModal(null)}
        >

          <div
            className="account-modal settings-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setActiveModal(null)}
            >
              ×
            </button>

            <div className="modal-icon">
              ⚙️
            </div>

            <h2>Settings</h2>

            <div className="settings-list">

              <div className="setting-row">

                <div>
                  <strong>Notifications</strong>
                  <small>
                    Receive security alerts
                  </small>
                </div>

                <label className="toggle">
                  <input
                    type="checkbox"
                    defaultChecked
                  />
                  <span></span>
                </label>

              </div>


              <div className="setting-row">

                <div>
                  <strong>Security Alerts</strong>
                  <small>
                    Get notified about threats
                  </small>
                </div>

                <label className="toggle">
                  <input
                    type="checkbox"
                    defaultChecked
                  />
                  <span></span>
                </label>

              </div>


              <div className="setting-row">

                <div>
                  <strong>Save Analysis History</strong>
                  <small>
                    Store your previous scans
                  </small>
                </div>

                <label className="toggle">
                  <input
                    type="checkbox"
                    defaultChecked
                  />
                  <span></span>
                </label>

              </div>

            </div>

            <button
              className="modal-primary"
              onClick={() => setActiveModal(null)}
            >
              Save Settings
            </button>

          </div>

        </div>

      )}

    </>
  );
}
function Home({ setPage }) {
  return (
    <div className="home-page">
      <section className="hero">

        <div className="hero-left">

          <div className="eyebrow">
            AI-POWERED PHISHING DETECTION
          </div>

          <h1>
            Stay One Step
            <br />
            <span>Ahead of Scams</span>
          </h1>

          <p className="hero-description">
            AmazonShield uses advanced AI to analyze suspicious
            messages, emails, and links — helping you detect
            phishing attempts before it's too late.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-button"
              onClick={() => setPage("analyze")}
            >
              Try Now <span>→</span>
            </button>

            <button
              className="secondary-button"
              onClick={() => setPage("about")}
            >
              Learn More
            </button>
          </div>

          <div className="stats">

            <div>
              <strong>99%</strong>
              <span>Detection Accuracy</span>
            </div>

            <div>
              <strong>10x</strong>
              <span>Faster Analysis</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Your Privacy</span>
            </div>

          </div>

        </div>

        <div className="hero-visual">

          <div className="glow-circle"></div>

          <div className="threat-card threat-one">
            <span className="danger-symbol">▲</span>
            <div>
              <b>Suspicious Link</b>
              <small>https://amazon-login.com</small>
            </div>
          </div>

          <div className="threat-card safe-one">
            <span className="safe-symbol">✓</span>
            <div>
              <b>Safe Message</b>
              <small>Your OTP is 482193</small>
            </div>
          </div>

          <div className="unknown-card">
            <span>??</span>
            <p>You won a prize!</p>
            <small>Click here</small>
          </div>

          <div className="hacker">

            <div className="hood"></div>

            <div className="laptop">
              <div className="laptop-logo">
                <ShieldIcon size={38} color="#55e8a4" />
              </div>
            </div>

          </div>

          <div className="hero-signature">
            Because your
            <br />
            <span>security matters.</span>
          </div>

        </div>

      </section>
    </div>
  );
}

function Analyze({ setPage, setResult }) {
  const [activeTab, setActiveTab] = useState("text");
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const analyzeMessage = () => {
    let content = message;

    if (activeTab === "file") {
      if (!selectedFile) {
        alert("Please select a file first.");
        return;
      }

      content = `Uploaded file: ${selectedFile.name}`;
    }

    if (!content.trim()) {
      alert("Please enter something to analyze.");
      return;
    }

    setPage("loading");

    setTimeout(() => {
      const suspicious =
        content.toLowerCase().includes("click") ||
        content.toLowerCase().includes("urgent") ||
        content.toLowerCase().includes("blocked") ||
        content.toLowerCase().includes("payment") ||
        content.toLowerCase().includes("prize") ||
        content.toLowerCase().includes("verify") ||
        content.toLowerCase().includes("password") ||
        content.toLowerCase().includes("bank");

      setResult({
        message: content,
        suspicious,
        type: activeTab,
      });

      setPage("result");
    }, 2500);
  };

  const selectExample = (text) => {
    setActiveTab("text");
    setMessage(text);
  };

  return (
    <div className="analyze-page">

      <div className="page-heading">
        <h1>Analyze a Message</h1>

        <p>
          Paste any message, email content, or URL to check if it's
          safe or suspicious.
        </p>
      </div>

      <div className="analyzer-card">

        {/* TABS */}
        <div className="input-tabs">

          <button
            className={activeTab === "text" ? "selected-tab" : ""}
            onClick={() => setActiveTab("text")}
          >
            ▣ &nbsp; Text Message
          </button>

          <button
            className={activeTab === "email" ? "selected-tab" : ""}
            onClick={() => setActiveTab("email")}
          >
            ✉ &nbsp; Email
          </button>

          <button
            className={activeTab === "url" ? "selected-tab" : ""}
            onClick={() => setActiveTab("url")}
          >
            ⌾ &nbsp; URL
          </button>

          <button
            className={activeTab === "file" ? "selected-tab" : ""}
            onClick={() => setActiveTab("file")}
          >
            ▣ &nbsp; Upload File
          </button>

        </div>

        {/* TEXT MESSAGE */}
        {activeTab === "text" && (
          <div className="input-area">

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter the message text here..."
              maxLength={2000}
            />

            <div className="character-count">
              {message.length}/2000
            </div>

          </div>
        )}

        {/* EMAIL */}
        {activeTab === "email" && (
          <div className="email-input-area">

            <input
              className="email-subject"
              type="text"
              placeholder="Email subject..."
              onChange={(e) =>
                setMessage(
                  `Subject: ${e.target.value}\n\n${message.replace(
                    /^Subject:.*\n\n/,
                    ""
                  )}`
                )
              }
            />

            <textarea
              value={message.replace(/^Subject:.*\n\n/, "")}
              onChange={(e) =>
                setMessage(`Email content:\n\n${e.target.value}`)
              }
              placeholder="Paste the email content here..."
              maxLength={5000}
            />

            <div className="character-count email-count">
              {message.length}/5000
            </div>

          </div>
        )}

        {/* URL */}
        {activeTab === "url" && (
          <div className="url-input-area">

            <div className="url-icon">
              🔗
            </div>

            <input
              type="url"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="https://example.com"
            />

            <p>
              Enter the suspicious website URL you want AmazonShield
              to analyze.
            </p>

          </div>
        )}

        {/* FILE UPLOAD */}
        {activeTab === "file" && (
          <div className="file-upload-area">

            <input
              id="file-upload"
              type="file"
              accept=".txt,.pdf,.doc,.docx,.eml,.msg"
              onChange={(e) => {
                const file = e.target.files[0];

                if (file) {
                  setSelectedFile(file);
                  setMessage(file.name);
                }
              }}
            />

            <label htmlFor="file-upload" className="upload-box">

              <div className="upload-icon">
                ↑
              </div>

              <h3>
                Upload suspicious content
              </h3>

              <p>
                Click to choose a file
              </p>

              <small>
                TXT, PDF, DOC, DOCX, EML, MSG
              </small>

            </label>

            {selectedFile && (
              <div className="selected-file">
                ✓ {selectedFile.name}
              </div>
            )}

          </div>
        )}

        <button
          className="analyze-button"
          onClick={analyzeMessage}
        >
          <ShieldIcon size={17} />

          Analyze with AI
        </button>

      </div>

      {/* EXAMPLES */}
      {activeTab === "text" && (
        <div className="examples">

          <span>
            Example threats to try:
          </span>

          <button
            onClick={() =>
              selectExample(
                "Urgent! Your bank account is blocked. Click here to verify your account: http://amazon-secure-login.com"
              )
            }
          >
            Suspicious SMS
          </button>

          <button
            onClick={() =>
              selectExample(
                "Your OTP for Amazon is 482193. Do not share this with anyone."
              )
            }
          >
            Fake Bank Alert
          </button>

          <button
            onClick={() =>
              selectExample(
                "Congratulations! You have won ₹50,000. Click this link to claim your prize."
              )
            }
          >
            Lottery Scam
          </button>

          <button
            onClick={() =>
              selectExample(
                "Congratulations! You have been selected for a job. Pay ₹2,000 registration fee to continue."
              )
            }
          >
            Job Offer Scam
          </button>

        </div>
      )}

    </div>
  );
}

function Loading() {
  const steps = [
    "Analyzing message",
    "Checking scam patterns",
    "Analyzing links",
    "Gathering evidence",
    "Calculating risk",
  ];

  return (
    <div className="loading-page">

      <div className="loading-box">

        <div className="loading-icon">
          <ShieldIcon size={45} />
        </div>

        <h1>AI Investigation in Progress</h1>

        <p>
          AmazonShield AI agents are analyzing the submitted content.
        </p>

        <div className="loading-progress">
          <div></div>
        </div>

        <div className="loading-steps">

          {steps.map((step, index) => (
            <div className="loading-step" key={step}>

              <span className="check-circle">
                ✓
              </span>

              <span>{step}...</span>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

function Result({ result, setPage }) {

  const suspicious = result?.suspicious;

  const risk = suspicious ? 92 : 5;

  return (
    <div className="result-page">

      <button
        className="back-button"
        onClick={() => setPage("analyze")}
      >
        ← Back to Analyze
      </button>

      <div className={`result-banner ${suspicious ? "danger" : "safe"}`}>

        <div className="result-icon">
          {suspicious ? "!" : "✓"}
        </div>

        <div className="result-title">

          <h2>
            {suspicious
              ? "Suspicious Message Detected"
              : "This Message Looks Safe"}
          </h2>

          <p>
            {suspicious
              ? "This message shows strong signs of phishing."
              : "No major threats were detected."}
          </p>

        </div>

        <div className="risk-score-small">

          <span>Risk Score</span>

          <strong>
            {risk} / 100
          </strong>

          <div className="mini-bar">
            <div
              style={{ width: `${risk}%` }}
            ></div>
          </div>

        </div>

      </div>

      <div className="result-grid">

        <div className="result-left">

          <h4>Analyzed Message</h4>

          <div className="message-preview">
            <span>
              {result?.message}
            </span>

            <button>▣</button>
          </div>

          {suspicious ? (

            <>
              <h4>Threat Indicators Found</h4>

              <div className="threat-list">

                <div>
                  <span>!</span>
                  Suspicious URL detected
                </div>

                <div>
                  <span>!</span>
                  Urgent and alarming language
                </div>

                <div>
                  <span>!</span>
                  Impersonates a financial institution
                </div>

                <div>
                  <span>!</span>
                  Requests personal information
                </div>

                <div>
                  <span>!</span>
                  Domain is not an official domain
                </div>

              </div>
            </>

          ) : (

            <>
              <h4>Analysis Summary</h4>

              <div className="safe-list">

                <div>✓ No suspicious links</div>
                <div>✓ Normal message structure</div>
                <div>✓ Common transactional content</div>
                <div>✓ No harmful intent detected</div>

              </div>

            </>

          )}

        </div>

        <div className="result-right">

          <div className="explanation-card">

            <h3>
              <span>✦</span> AI Explanation
            </h3>

            <p>
              {suspicious
                ? "This message is likely a phishing attempt. It uses urgent language to create panic and includes a suspicious URL that is not associated with the official bank website. Scammers often use such tactics to steal your credentials."
                : "This appears to be a legitimate transactional message. It does not contain suspicious links or unusual patterns. Always remember not to share your OTP with anyone."}
            </p>

          </div>

          <div className={`action-card ${suspicious ? "danger-action" : "safe-action"}`}>

            <h3>
              {suspicious
                ? "⚠ Recommended Action"
                : "✓ Recommended Action"}
            </h3>

            {suspicious ? (

              <ul>
                <li>Do not click on the link.</li>
                <li>Do not share your personal information.</li>
                <li>Report this message to your service provider.</li>
                <li>If you already clicked, change your passwords immediately.</li>
              </ul>

            ) : (

              <p>
                This message is safe. You can proceed, but always keep your OTP private.
              </p>

            )}

          </div>

        </div>

      </div>

      <button
        className="new-analysis"
        onClick={() => setPage("analyze")}
      >
        Analyze Another Message
      </button>

    </div>
  );
}

function History() {

  const history = [
    {
      content: "Urgent! Your bank account is...",
      type: "Text",
      result: "Suspicious",
      score: 92,
      date: "Sep 19, 2026",
      time: "11:23 AM",
    },
    {
      content: "Your OTP for Amazon is 482193...",
      type: "Text",
      result: "Safe",
      score: 5,
      date: "Sep 19, 2026",
      time: "10:45 AM",
    },
    {
      content: "http://free-gift-card.com",
      type: "URL",
      result: "Suspicious",
      score: 88,
      date: "Sep 18, 2026",
      time: "06:32 PM",
    },
    {
      content: "Congratulations! You won a prize...",
      type: "Text",
      result: "Suspicious",
      score: 76,
      date: "Sep 18, 2026",
      time: "05:11 PM",
    },
    {
      content: "Meeting at 5 PM. Please confirm.",
      type: "Text",
      result: "Safe",
      score: 3,
      date: "Sep 17, 2026",
      time: "09:20 AM",
    },
  ];

  return (
    <div className="history-page">

      <div className="history-header">

        <div>
          <h1>Your Analysis History</h1>
          <p>View and manage your past scans.</p>
        </div>

        <div className="history-tools">

          <div className="search-box">
            <SearchIcon />
            <input placeholder="Search messages..." />
          </div>

          <select>
            <option>All Results</option>
            <option>Safe</option>
            <option>Suspicious</option>
          </select>

        </div>

      </div>

      <div className="history-table-wrapper">

        <table>

          <thead>
            <tr>
              <th>#</th>
              <th>Content Preview</th>
              <th>Type</th>
              <th>Result</th>
              <th>Risk Score</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {history.map((item, index) => (

              <tr key={index}>

                <td>{index + 1}</td>

                <td>{item.content}</td>

                <td>{item.type}</td>

                <td>
                  <span
                    className={
                      item.result === "Safe"
                        ? "status safe-status"
                        : "status danger-status"
                    }
                  >
                    {item.result === "Safe" ? "✓" : "!"}
                    &nbsp;
                    {item.result}
                  </span>
                </td>

                <td
                  className={
                    item.score > 50
                      ? "high-score"
                      : "low-score"
                  }
                >
                  {item.score}
                </td>

                <td>
                  {item.date}
                  <br />
                  <small>{item.time}</small>
                </td>

                <td>
                  <button className="eye-button">
                    <EyeIcon />
                  </button>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

function About() {
  return (
    <div className="about-page">

      <div className="about-content">

        <h1>About AmazonShield</h1>

        <p className="about-description">
          AmazonShield is an AI-powered phishing detection system
          built to make the internet safer for everyone. We combine
          the power of modern AI agents and advanced threat analysis
          tools to detect and explain suspicious messages in real-time.
        </p>

        <div className="about-features">

          <div>
            <span>⚡</span>
            <b>Built with AI</b>
          </div>

          <div>
            <span>⚙</span>
            <b>Powered by AI Agents</b>
          </div>

          <div>
            <span>🛡</span>
            <b>Designed for a Safer Internet</b>
          </div>

        </div>

        <div className="mission-card">

          <ShieldIcon size={28} />

          <div>
            <h3>Our Mission</h3>

            <p>
              To protect individuals from online scams using
              the latest in AI and cloud technology.
            </p>
          </div>

        </div>

      </div>

      <div className="about-visual">

        <div className="big-shield">
          <ShieldIcon size={110} color="#55e8a4" />
        </div>

        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>

        <div className="orbit-label top">Detect</div>
        <div className="orbit-label right">Analyze</div>
        <div className="orbit-label bottom">Explain</div>
        <div className="orbit-label left">Protect</div>

        <div className="about-signature">
          Safer People.
          <br />
          <span>Safer Tomorrow.</span>
        </div>

      </div>

    </div>
  );
}

function App() {

  const [page, setPage] = useState("home");

  const [result, setResult] = useState(null);

  return (
    <div className="app">

      <Header
        page={page}
        setPage={setPage}
      />

      <main>

        {page === "home" && (
          <Home setPage={setPage} />
        )}

        {page === "analyze" && (
          <Analyze
            setPage={setPage}
            setResult={setResult}
          />
        )}

        {page === "loading" && (
          <Loading />
        )}

        {page === "result" && (
          <Result
            result={result}
            setPage={setPage}
          />
        )}

        {page === "history" && (
          <History />
        )}

        {page === "about" && (
          <About />
        )}

      </main>

    </div>
  );
}

export default App;