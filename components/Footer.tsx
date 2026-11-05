"use client";

import Link from 'next/link';
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';
import { useThemeContext } from '../context/ThemeContext';

export default function Footer() {
  const { colors } = useThemeContext();

  const sectionStyle = {
    flex: "1 1 200px",
    minWidth: "200px",
    marginBottom: "32px",
  };

  const listStyle = {
    display: "flex",
    flexDirection: "column" as const,
    gap: "12px",
  };

  const textStyle = {
    color: colors.foreground,
    opacity: 0.7,
    fontSize: "0.875rem",
    textDecoration: "none",
  };

  const titleStyle = {
    fontWeight: 600,
    fontSize: "1.125rem",
    marginBottom: "16px",
    color: colors.foreground,
  };

  return (
    <footer style={{
      backgroundColor: colors.surface,
      color: colors.foreground,
      padding: "48px 0 24px 0",
      borderTop: `1px solid ${colors.border}`
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 16px" }}>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "32px",
          justifyContent: "space-between"
        }}>
          <div style={{ flex: "1 1 250px", minWidth: "250px", marginBottom: "32px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <BookOpen style={{ height: "32px", width: "32px", color: colors.accent1 }} />
              <span style={{ fontWeight: "bold", fontSize: "1.25rem" }}>WISDOM TUTION</span>
            </div>
            <p style={textStyle}>
              Empowering students with quality education. Specialized in Science, Math, Coding, and all foundational subjects.
            </p>
          </div>

          <div style={sectionStyle}>
            <h3 style={titleStyle}>Quick Links</h3>
            <ul style={listStyle}>
              <li><Link href="/" style={textStyle}>Home</Link></li>
              <li><Link href="/about" style={textStyle}>About Us</Link></li>
              <li><Link href="/courses" style={textStyle}>Courses</Link></li>
              <li><Link href="/apply" style={textStyle}>Apply Now</Link></li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h3 style={titleStyle}>Subjects</h3>
            <ul style={listStyle}>
              <li style={textStyle}>Mathematics (Grades 1-12)</li>
              <li style={textStyle}>Physics & Chemistry</li>
              <li style={textStyle}>Coding Basics</li>
              <li style={textStyle}>All Subjects (Grades 1-10)</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h3 style={titleStyle}>Contact Us</h3>
            <ul style={listStyle}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <Phone style={{ height: "20px", width: "20px", color: colors.accent1, flexShrink: 0, marginTop: "2px" }} />
                <span style={textStyle}>+91 7353013505<br />+91 7353196505</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <Mail style={{ height: "20px", width: "20px", color: colors.accent1, flexShrink: 0, marginTop: "2px" }} />
                <span style={{ ...textStyle, wordBreak: "break-all" }}>alizayasmeen1989@gmail.com<br />abdulhadikamaal2025@gmail.com</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <MapPin style={{ height: "20px", width: "20px", color: colors.accent1, flexShrink: 0, marginTop: "2px" }} />
                <span style={textStyle}>Hagarga, Kalaburagi<br />Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div style={{
          borderTop: `1px solid ${colors.border}`,
          marginTop: "48px",
          paddingTop: "32px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <p style={{ ...textStyle, opacity: 0.5 }}>
            &copy; {new Date().getFullYear()} Wisdom Tution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
