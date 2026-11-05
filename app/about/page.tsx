"use client";

import { Users, GraduationCap, Award } from "lucide-react";
import { useThemeContext } from "../../context/ThemeContext";

export default function About() {
  const { colors } = useThemeContext();

  const cardStyle = {
    display: "flex",
    flexDirection: "column" as const,
    gap: "32px",
    backgroundColor: colors.card + "cc",
    backdropFilter: "blur(8px)",
    padding: "32px",
    borderRadius: "24px",
    border: `1px solid ${colors.border}`,
    flex: "1 1 300px",
  };

  const mdRowStyle = {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "32px",
    alignItems: "flex-start",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Header */}
      <section style={{
        width: "100%",
        backgroundColor: colors.surface,
        padding: "64px 0",
        borderBottom: `1px solid ${colors.border}`
      }}>
        <div style={{ maxWidth: "896px", margin: "0 auto", padding: "0 16px", textAlign: "center" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "24px" }}>About Us</h1>
          <p style={{ fontSize: "1.25rem", color: colors.foreground, opacity: 0.7, lineHeight: 1.6 }}>
            At Wisdom Tution, we believe in the power of personalized education to unlock every student&apos;s full potential. Meet the passionate educators behind our success.
          </p>
        </div>
      </section>

      {/* Tutors Section */}
      <section style={{
        width: "100%",
        padding: "80px 0",
        backgroundColor: colors.background
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 16px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "64px" }}>
            
            {/* Tutor 1 */}
            <div style={{ ...cardStyle, flex: "1 1 45%" }}>
              <div style={mdRowStyle}>
                <div style={{
                  width: "128px", height: "128px",
                  borderRadius: "50%",
                  backgroundColor: colors.accent3 + "20",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  border: `4px solid ${colors.card}`,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  flexShrink: 0
                }}>
                  <Users style={{ height: "64px", width: "64px", color: colors.accent3 }} />
                </div>
                <div style={{ flex: 1, minWidth: "250px" }}>
                  <div style={{
                    display: "inline-block",
                    padding: "4px 12px",
                    backgroundColor: colors.accent3 + "20",
                    color: colors.accent3,
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    borderRadius: "9999px",
                    marginBottom: "12px"
                  }}>
                    Lead Tutor
                  </div>
                  <h2 style={{ fontSize: "1.875rem", fontWeight: 700, marginBottom: "8px" }}>Yasmeen Begum</h2>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: 500, color: colors.accent1, marginBottom: "16px" }}>MA, B.Ed & Senior Educator</h3>
                  <p style={{ color: colors.foreground, opacity: 0.7, marginBottom: "16px", lineHeight: 1.6 }}>
                    Working as a dedicated teacher in a nearby school, I bring decades of pedagogical experience. I specialize in teaching all foundational subjects, fostering a nurturing environment that builds strong fundamental knowledge and a lifelong love for learning.
                  </p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.875rem", color: colors.foreground, opacity: 0.8 }}>
                      <GraduationCap style={{ height: "16px", width: "16px", color: colors.accent1 }} /> Comprehensive Tutoring for All Subjects
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.875rem", color: colors.foreground, opacity: 0.8 }}>
                      <Award style={{ height: "16px", width: "16px", color: colors.accent1 }} /> Experienced School Educator
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tutor 2 */}
            <div style={{ ...cardStyle, flex: "1 1 45%" }}>
              <div style={mdRowStyle}>
                <div style={{
                  width: "128px", height: "128px",
                  borderRadius: "50%",
                  backgroundColor: colors.accent2 + "20",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  border: `4px solid ${colors.card}`,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  flexShrink: 0
                }}>
                  <Users style={{ height: "64px", width: "64px", color: colors.accent2 }} />
                </div>
                <div style={{ flex: 1, minWidth: "250px" }}>
                  <div style={{
                    display: "inline-block",
                    padding: "4px 12px",
                    backgroundColor: colors.accent2 + "20",
                    color: colors.accent2,
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    borderRadius: "9999px",
                    marginBottom: "12px"
                  }}>
                    Specialized Tutor
                  </div>
                  <h2 style={{ fontSize: "1.875rem", fontWeight: 700, marginBottom: "8px" }}>Abdul Hadi Kamaal</h2>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: 500, color: colors.accent2, marginBottom: "16px" }}>Math, Physics, Chemistry & Coding</h3>
                  <p style={{ color: colors.foreground, opacity: 0.7, marginBottom: "16px", lineHeight: 1.6 }}>
                    Currently pursuing my BSc in PMCs (Physics, Mathematics, Computer Science). I have extensive experience in Web Development (React, React Native, JS, TS, HTML, CSS) and Python. I focus on analytical subjects and helping students improve brain consciousness and logical thinking.
                  </p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.875rem", color: colors.foreground, opacity: 0.8 }}>
                      <GraduationCap style={{ height: "16px", width: "16px", color: colors.accent2 }} /> Mathematics, Physics, Physical Chemistry
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.875rem", color: colors.foreground, opacity: 0.8 }}>
                      <Award style={{ height: "16px", width: "16px", color: colors.accent2 }} /> Web Development & Python Coding
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
