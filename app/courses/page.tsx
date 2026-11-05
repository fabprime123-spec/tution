"use client";

import { Calculator, Microscope, BookA, ArrowRight, CodeXml } from "lucide-react";
import Link from "next/link";
import { useThemeContext } from "../../context/ThemeContext";

export default function Courses() {
  const { colors } = useThemeContext();

  const courses = [
    {
      title: "Mathematics",
      grades: "Grades 1 - 12",
      icon: <Calculator style={{ height: "32px", width: "32px", color: colors.accent2 }} />,
      description: "From basic arithmetic to advanced calculus, we build strong problem-solving skills and mathematical intuition.",
      accent: colors.accent2
    },
    {
      title: "Physics & Physical Chemistry",
      grades: "Grades 1 - 12",
      icon: <Microscope style={{ height: "32px", width: "32px", color: colors.accent8 }} />,
      description: "In-depth coaching in Physics and Physical Chemistry, taught with an emphasis on conceptual understanding and real-world applications.",
      accent: colors.accent8
    },
    {
      title: "Coding & Web Development",
      grades: "All Ages",
      icon: <CodeXml style={{ height: "32px", width: "32px", color: colors.accent4 }} />,
      description: "Learn Python, React, React Native, JavaScript, TypeScript, HTML & CSS. Master the language of the future with practical coding skills.",
      accent: colors.accent4
    },
    {
      title: "All Foundational Subjects",
      grades: "Grades 1 - 10",
      icon: <BookA style={{ height: "32px", width: "32px", color: colors.accent7 }} />,
      description: "Comprehensive support across all school subjects to ensure a well-rounded education and a strong academic base.",
      accent: colors.accent7
    }
  ];

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
          <h1 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "24px" }}>Our Courses</h1>
          <p style={{ fontSize: "1.25rem", color: colors.foreground, opacity: 0.7, lineHeight: 1.6 }}>
            Discover our comprehensive range of subjects tailored to help students excel at every stage of their academic journey.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section style={{
        width: "100%",
        padding: "80px 0",
        backgroundColor: colors.background
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 16px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
            {courses.map((course, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: course.accent + "10",
                  border: `1px solid ${course.accent}40`,
                  borderRadius: "24px",
                  padding: "32px",
                  flex: "1 1 45%",
                  minWidth: "300px",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  cursor: "default"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
                  <div style={{
                    backgroundColor: colors.card,
                    padding: "16px",
                    borderRadius: "16px",
                    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
                  }}>
                    {course.icon}
                  </div>
                  <span style={{
                    display: "inline-block",
                    padding: "6px 16px",
                    backgroundColor: colors.card + "cc",
                    backdropFilter: "blur(4px)",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                  }}>
                    {course.grades}
                  </span>
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px" }}>{course.title}</h3>
                <p style={{ color: colors.foreground, opacity: 0.7, fontSize: "1.125rem", lineHeight: 1.6, marginBottom: "32px" }}>
                  {course.description}
                </p>
                <Link
                  href={`/apply?course=${encodeURIComponent(course.title)}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontWeight: 600,
                    color: course.accent,
                    textDecoration: "none"
                  }}
                >
                  Apply for this course <ArrowRight style={{ height: "20px", width: "20px" }} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
