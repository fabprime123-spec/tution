"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, BrainCircuit, GraduationCap } from "lucide-react";
import { useThemeContext } from "../context/ThemeContext";

export default function Home() {
  const { colors } = useThemeContext();

  const buttonStylePrimary = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    background: `linear-gradient(to right, ${colors.accent1}, ${colors.accent2})`,
    color: "#ffffff",
    padding: "16px 32px",
    borderRadius: "9999px",
    fontSize: "1.125rem",
    fontWeight: 600,
    textDecoration: "none",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    border: "none",
    cursor: "pointer"
  };

  const buttonStyleSecondary = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    backgroundColor: colors.surface,
    color: colors.foreground,
    border: `1px solid ${colors.border}`,
    padding: "16px 32px",
    borderRadius: "9999px",
    fontSize: "1.125rem",
    fontWeight: 600,
    textDecoration: "none",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    cursor: "pointer"
  };

  const cardStyle = {
    backgroundColor: colors.card + "cc",
    backdropFilter: "blur(8px)",
    padding: "32px",
    borderRadius: "24px",
    border: `1px solid ${colors.border}`,
    flex: "1 1 300px",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  };

  const iconWrapperStyle = {
    width: "56px",
    height: "56px",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "24px",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Hero Section */}
      <section style={{
        width: "100%",
        position: "relative",
        padding: "80px 0 128px 0",
        overflow: "hidden",
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 16px", position: "relative", zIndex: 10 }}>
          <div style={{ textAlign: "center", maxWidth: "768px", margin: "0 auto" }}>
            <span style={{
              display: "inline-block",
              padding: "4px 12px",
              borderRadius: "9999px",
              backgroundColor: colors.accent3 + "20",
              color: colors.accent3,
              fontSize: "0.875rem",
              fontWeight: 600,
              marginBottom: "24px"
            }}>
              Welcome to Wisdom Tution
            </span>
            <h1 style={{
              fontSize: "clamp(3rem, 5vw, 4rem)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              marginBottom: "32px",
              lineHeight: 1.1
            }}>
              Empowering Minds, <br />
              <span style={{
                backgroundImage: `linear-gradient(to right, ${colors.accent1}, ${colors.accent2})`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent"
              }}>Shaping the Future.</span>
            </h1>
            <p style={{
              fontSize: "1.25rem",
              color: colors.foreground,
              opacity: 0.7,
              marginBottom: "40px",
              lineHeight: 1.6
            }}>
              Expert tutoring in Mathematics, Physics, Chemistry, Coding, and foundational subjects for all grades. Unlock your true academic potential with personalized guidance.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
              <Link href="/apply" style={buttonStylePrimary}>
                Apply Now <ArrowRight style={{ height: "20px", width: "20px" }} />
              </Link>
              <Link href="/courses" style={buttonStyleSecondary}>
                Explore Courses
              </Link>
            </div>
          </div>
        </div>

        {/* Abstract Background Elements */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translate(-50%, -50%)",
          width: "400px",
          height: "400px",
          backgroundColor: colors.accent1,
          borderRadius: "50%",
          filter: "blur(100px)",
          opacity: 0.1,
          zIndex: 1
        }}></div>
        <div style={{
          position: "absolute",
          top: 0,
          right: 0,
          transform: "translate(25%, -25%)",
          width: "500px",
          height: "500px",
          backgroundColor: colors.accent4,
          borderRadius: "50%",
          filter: "blur(100px)",
          opacity: 0.1,
          zIndex: 1
        }}></div>
      </section>

      {/* Features Section */}
      <section style={{
        width: "100%",
        padding: "96px 0",
        backgroundColor: colors.surface
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 16px" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 style={{ fontSize: "2.25rem", fontWeight: 700, marginBottom: "16px" }}>Why Choose Wisdom Tution?</h2>
            <p style={{ color: colors.foreground, opacity: 0.7, maxWidth: "672px", margin: "0 auto", fontSize: "1.125rem" }}>
              We provide a supportive, engaging, and challenging environment that caters to the individual needs of every student.
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
            <div style={cardStyle}>
              <div style={{ ...iconWrapperStyle, backgroundColor: colors.accent1 + "20", color: colors.accent1 }}>
                <BrainCircuit style={{ height: "28px", width: "28px" }} />
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "12px" }}>Specialized Focus</h3>
              <p style={{ color: colors.foreground, opacity: 0.7, lineHeight: 1.6 }}>
                Expert coaching in Math, Physics, Physical Chemistry, and Coding, while also focusing on improving brain consciousness and logical thinking.
              </p>
            </div>

            <div style={cardStyle}>
              <div style={{ ...iconWrapperStyle, backgroundColor: colors.accent2 + "20", color: colors.accent2 }}>
                <BookOpen style={{ height: "28px", width: "28px" }} />
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "12px" }}>Strong Foundations</h3>
              <p style={{ color: colors.foreground, opacity: 0.7, lineHeight: 1.6 }}>
                Comprehensive tutoring for all subjects from Grade 1 to 10 by an experienced school educator, ensuring a robust academic base.
              </p>
            </div>

            <div style={cardStyle}>
              <div style={{ ...iconWrapperStyle, backgroundColor: colors.accent4 + "20", color: colors.accent4 }}>
                <GraduationCap style={{ height: "28px", width: "28px" }} />
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "12px" }}>Personalized Learning</h3>
              <p style={{ color: colors.foreground, opacity: 0.7, lineHeight: 1.6 }}>
                Small batch sizes and dedicated attention mean that every student learns at their own optimal pace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        width: "100%",
        padding: "80px 0",
        background: `linear-gradient(to right, ${colors.accent1}, ${colors.accent2})`,
      }}>
        <div style={{ maxWidth: "896px", margin: "0 auto", padding: "0 16px", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "24px" }}>Ready to start learning?</h2>
          <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "1.125rem", marginBottom: "40px" }}>
            Join Wisdom Tution today and take the first step towards academic excellence.
          </p>
          <Link href="/apply" style={{
            display: "inline-block",
            backgroundColor: "#ffffff",
            color: colors.accent1,
            padding: "16px 32px",
            borderRadius: "9999px",
            fontSize: "1.125rem",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
          }}>
            Book a Free Trial Class
          </Link>
        </div>
      </section>
    </div>
  );
}
