import { useState } from "react";
import "../App.css";
import { Helmet } from "react-helmet";

export default function PasswordStrengthChecker() {
  const [password, setPassword] = useState("");

  const getStrength = () => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2)
      return { text: "Weak", percent: 33 };

    if (score <= 4)
      return { text: "Medium", percent: 66 };

    return { text: "Strong", percent: 100 };
  };

  const strength = getStrength();

  return (
    <>
      <Helmet>
        <title>
          Password Strength Checker - CyberTools
        </title>

        <meta
          name="description"
          content="Check password strength instantly with CyberTools free Password Strength Checker."
        />

        <meta
          name="keywords"
          content="password strength checker, password security, strong password test, password analyzer"
        />
      </Helmet>

      <div className="app tool-page">

        <header className="navbar">
          <div className="logo">
            ⚡ CyberTools
          </div>

          <nav>
            <a href="/">Home</a>
          </nav>
        </header>

        <section className="hero">
          <h1>
            Password Strength Checker
          </h1>

          <p>
            Check how secure your password is
          </p>
        </section>

        <section className="layout">

          <div className="card">

            <h2>
              🔍 Password Strength Checker
            </h2>

            <input
              type="password"
              placeholder="Enter password..."
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="text-input"
            />

            {password && (
              <>
                <div
                  style={{
                    width: "100%",
                    height: "12px",
                    background: "#ddd",
                    borderRadius: "6px",
                    marginTop: "15px"
                  }}
                >
                  <div
                    style={{
                      width: `${strength.percent}%`,
                      height: "100%",
                      background:
                        strength.text === "Weak"
                          ? "red"
                          : strength.text === "Medium"
                          ? "orange"
                          : "green",
                      borderRadius: "6px"
                    }}
                  />
                </div>

                <p>
                  Strength:
                  <strong>
                    {" "}
                    {strength.text}
                  </strong>
                </p>
              </>
            )}

          </div>

        </section>

        <section className="info-section">

          <h2>
            What is Password Strength?
          </h2>

          <p>
            Password strength measures how difficult
            it is for attackers to guess or crack
            your password.
          </p>

          <h2>
            Tips for Strong Passwords
          </h2>

          <ul>
            <li>Use at least 12 characters</li>
            <li>Include uppercase and lowercase letters</li>
            <li>Add numbers and symbols</li>
            <li>Avoid common words and names</li>
            <li>Use a unique password for each account</li>
          </ul>

        </section>

        <footer className="footer">
          Built with ⚡ CyberTools
        </footer>

      </div>
    </>
  );
}