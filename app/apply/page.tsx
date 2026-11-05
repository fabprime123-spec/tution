"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { useThemeContext } from "../../context/ThemeContext";

export default function Apply() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const { colors } = useThemeContext();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "12px",
    backgroundColor: colors.surface,
    border: `1px solid ${colors.border}`,
    color: colors.foreground,
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    fontFamily: "inherit",
    fontSize: "1rem",
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.875rem",
    fontWeight: 500,
    color: colors.foreground,
    opacity: 0.9,
    marginBottom: "8px",
  };

  const gridRowStyle = {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "24px",
    marginBottom: "24px"
  };

  const gridColStyle = {
    flex: "1 1 250px"
  };

  if (isSubmitted) {
    return (
      <div style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 16px"
      }}>
        <div style={{
          backgroundColor: colors.card + "cc",
          backdropFilter: "blur(16px)",
          padding: "40px",
          borderRadius: "24px",
          boxShadow: "0 8px 32px 0 rgba(0,0,0,0.1)",
          border: `1px solid ${colors.border}`,
          maxWidth: "448px",
          width: "100%",
          textAlign: "center"
        }}>
          <CheckCircle2 style={{ height: "80px", width: "80px", color: colors.accent1, margin: "0 auto 24px auto" }} />
          <h2 style={{ fontSize: "1.875rem", fontWeight: 700, marginBottom: "16px", color: colors.foreground }}>Application Received!</h2>
          <p style={{ color: colors.foreground, opacity: 0.8, marginBottom: "32px", lineHeight: 1.6 }}>
            Thank you for applying to Wisdom Tution. We will contact you shortly to schedule your free trial class.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            style={{
              width: "100%",
              backgroundColor: colors.accent1,
              color: "#fff",
              padding: "12px",
              borderRadius: "12px",
              fontWeight: 600,
              fontSize: "1rem",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
              transition: "transform 0.1s"
            }}
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Header */}
      <section style={{
        width: "100%",
        padding: "64px 0",
        backgroundColor: colors.surface,
        borderBottom: `1px solid ${colors.border}`
      }}>
        <div style={{ maxWidth: "896px", margin: "0 auto", padding: "0 16px", textAlign: "center" }}>
          <h1 style={{
            fontSize: "clamp(2.25rem, 5vw, 3rem)",
            fontWeight: 800,
            marginBottom: "24px",
            backgroundImage: `linear-gradient(to right, ${colors.accent1}, ${colors.accent4})`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent"
          }}>Apply Now</h1>
          <p style={{ fontSize: "1.25rem", color: colors.foreground, opacity: 0.8, lineHeight: 1.6, maxWidth: "672px", margin: "0 auto" }}>
            Take the first step towards academic success. Fill out the form below and we will get back to you immediately.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section style={{ width: "100%", padding: "64px 0" }}>
        <div style={{ maxWidth: "768px", margin: "0 auto", padding: "0 16px" }}>
          <div style={{
            backgroundColor: colors.card,
            padding: "48px",
            borderRadius: "24px",
            boxShadow: "0 8px 32px 0 rgba(0,0,0,0.05)",
            border: `1px solid ${colors.border}`
          }}>
            {error && <p style={{ color: colors.accent6, textAlign: "center", marginBottom: "16px" }}>{error}</p>}
            <form onSubmit={handleSubmit}>

              <div style={gridRowStyle}>
                <div style={gridColStyle}>
                  <label htmlFor="studentName" style={labelStyle}>Student Name</label>
                  <input type="text" id="studentName" name="studentName" required style={inputStyle} placeholder="John Doe" />
                </div>
                <div style={gridColStyle}>
                  <label htmlFor="parentName" style={labelStyle}>Parent Name (Optional)</label>
                  <input type="text" id="parentName" name="parentName" style={inputStyle} placeholder="Jane Doe" />
                </div>
              </div>

              <div style={gridRowStyle}>
                <div style={gridColStyle}>
                  <label htmlFor="email" style={labelStyle}>Email Address</label>
                  <input type="email" id="email" name="email" required style={inputStyle} placeholder="john@example.com" />
                </div>
                <div style={gridColStyle}>
                  <label htmlFor="phone" style={labelStyle}>Phone Number</label>
                  <input type="tel" id="phone" name="phone" required style={inputStyle} placeholder="(555) 123-4567" />
                </div>
              </div>

              <div style={gridRowStyle}>
                <div style={gridColStyle}>
                  <label htmlFor="grade" style={labelStyle}>Grade Level</label>
                  <select id="grade" name="grade" required style={inputStyle}>
                    <option value="">Select Grade</option>
                    {[...Array(12)].map((_, i) => (
                      <option key={i} value={`Grade ${i + 1}`}>Grade {i + 1}</option>
                    ))}
                    <option value="Other">Other (Coding only)</option>
                  </select>
                </div>
                <div style={gridColStyle}>
                  <label htmlFor="subject" style={labelStyle}>Subject of Interest</label>
                  <select id="subject" name="subject" required style={inputStyle}>
                    <option value="">Select Subject</option>
                    <option value="Math">Mathematics</option>
                    <option value="Science">Science / Physics / Chemistry</option>
                    <option value="Coding">Coding & Web Dev</option>
                    <option value="All Subjects">All Subjects</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: "24px" }}>
                <label htmlFor="message" style={labelStyle}>Additional Information (Optional)</label>
                <textarea id="message" name="message" rows={4} style={{ ...inputStyle, resize: "none" }} placeholder="Tell us about the student's learning goals..."></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  background: `linear-gradient(to right, ${colors.accent1}, ${colors.accent2})`,
                  color: "#fff",
                  padding: "16px",
                  borderRadius: "12px",
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  border: "none",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  opacity: isSubmitting ? 0.7 : 1,
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                }}
              >
                {isSubmitting ? (
                  <span style={{
                    display: "inline-block",
                    width: "24px",
                    height: "24px",
                    border: "3px solid rgba(255,255,255,0.3)",
                    borderTopColor: "#fff",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite"
                  }}></span>
                ) : (
                  <>Submit Application <Send style={{ height: "20px", width: "20px" }} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
      
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
