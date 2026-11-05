"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { LogIn, LogOut, Loader2, Database, Calendar } from "lucide-react";
import { useThemeContext } from "../../context/ThemeContext";

interface ApplicationData {
  _id: string;
  studentName: string;
  parentName?: string;
  email: string;
  phone: string;
  grade: string;
  subject: string;
  message?: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const [applications, setApplications] = useState<ApplicationData[]>([]);
  const [loading, setLoading] = useState(true);
  const { colors } = useThemeContext();

  useEffect(() => {
    if (session) {
      fetch("/api/apply")
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setApplications(data.data);
          }
        })
        .finally(() => setLoading(false));
    }
  }, [session]);

  const spinStyle = {
    animation: "spin 1s linear infinite"
  };

  if (status === "loading") {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Loader2 style={{ height: "40px", width: "40px", color: colors.accent1, ...spinStyle }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (!session) {
    return (
      <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 16px" }}>
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
          <Database style={{ height: "64px", width: "64px", color: colors.accent4, margin: "0 auto 24px auto" }} />
          <h1 style={{ fontSize: "1.875rem", fontWeight: 700, marginBottom: "16px", color: colors.foreground }}>Admin Access</h1>
          <p style={{ color: colors.foreground, opacity: 0.8, marginBottom: "32px" }}>
            You must be signed in with your Google account to view student applications.
          </p>
          <button
            onClick={() => signIn("google")}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              background: `linear-gradient(to right, ${colors.accent4}, ${colors.accent3})`,
              color: "#fff",
              padding: "12px",
              borderRadius: "12px",
              fontWeight: 700,
              fontSize: "1rem",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            }}
          >
            <LogIn style={{ height: "20px", width: "20px" }} /> Sign In with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", padding: "32px", boxSizing: "border-box" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
          backgroundColor: colors.surface + "cc",
          backdropFilter: "blur(12px)",
          padding: "24px",
          borderRadius: "16px",
          border: `1px solid ${colors.border}`
        }}>
          <div>
            <h1 style={{
              fontSize: "1.875rem",
              fontWeight: 700,
              backgroundImage: `linear-gradient(to right, ${colors.accent1}, ${colors.accent4})`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent"
            }}>
              Applications Dashboard
            </h1>
            <p style={{ color: colors.foreground, opacity: 0.7, marginTop: "4px" }}>Logged in as {session.user?.email}</p>
          </div>
          <button
            onClick={() => signOut()}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: colors.accent6 + "20",
              color: colors.accent6,
              padding: "8px 20px",
              borderRadius: "12px",
              border: `1px solid ${colors.accent6}40`,
              cursor: "pointer",
              fontWeight: 600,
              marginTop: "16px"
            }}
          >
            <LogOut style={{ height: "16px", width: "16px" }} /> Sign Out
          </button>
        </div>

        {/* Content */}
        {loading ? (
          <div style={{ display: "flex", justifyContent: "center", padding: "80px" }}>
            <Loader2 style={{ height: "40px", width: "40px", color: colors.accent1, ...spinStyle }} />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        ) : applications.length === 0 ? (
          <div style={{
            textAlign: "center",
            padding: "80px",
            backgroundColor: colors.surface + "80",
            borderRadius: "24px",
            border: `1px solid ${colors.border}`
          }}>
            <Database style={{ height: "48px", width: "48px", color: colors.foreground, opacity: 0.3, margin: "0 auto 16px auto" }} />
            <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "8px" }}>No applications yet</h3>
            <p style={{ color: colors.foreground, opacity: 0.6 }}>When students apply, they will appear here.</p>
          </div>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px"
          }}>
            {applications.map((app) => (
              <div 
                key={app._id}
                style={{
                  backgroundColor: colors.card + "cc",
                  backdropFilter: "blur(16px)",
                  padding: "24px",
                  borderRadius: "24px",
                  boxShadow: "0 8px 32px 0 rgba(0,0,0,0.05)",
                  border: `1px solid ${colors.border}`,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: colors.foreground }}>{app.studentName}</h3>
                  <span style={{
                    display: "inline-block",
                    padding: "4px 12px",
                    backgroundColor: colors.accent1 + "20",
                    color: colors.accent1,
                    borderRadius: "9999px",
                    fontSize: "0.75rem",
                    fontWeight: 600
                  }}>
                    {app.grade}
                  </span>
                </div>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
                  <p style={{ fontSize: "0.875rem" }}><span style={{ color: colors.foreground, opacity: 0.6 }}>Subject:</span> <strong style={{ color: colors.accent4 }}>{app.subject}</strong></p>
                  <p style={{ fontSize: "0.875rem" }}><span style={{ color: colors.foreground, opacity: 0.6 }}>Email:</span> <a href={`mailto:${app.email}`} style={{ color: colors.accent2, textDecoration: "none" }}>{app.email}</a></p>
                  <p style={{ fontSize: "0.875rem" }}><span style={{ color: colors.foreground, opacity: 0.6 }}>Phone:</span> {app.phone}</p>
                  {app.parentName && <p style={{ fontSize: "0.875rem" }}><span style={{ color: colors.foreground, opacity: 0.6 }}>Parent:</span> {app.parentName}</p>}
                </div>
                
                {app.message && (
                  <div style={{
                    backgroundColor: colors.surface,
                    padding: "12px",
                    borderRadius: "12px",
                    border: `1px solid ${colors.border}`,
                    marginBottom: "16px"
                  }}>
                    <p style={{ fontSize: "0.875rem", fontStyle: "italic", color: colors.foreground, opacity: 0.8 }}>&quot;{app.message}&quot;</p>
                  </div>
                )}
                
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "0.75rem",
                  color: colors.foreground,
                  opacity: 0.5,
                  marginTop: "16px",
                  borderTop: `1px solid ${colors.border}`,
                  paddingTop: "16px"
                }}>
                  <Calendar style={{ height: "12px", width: "12px" }} />
                  {new Date(app.createdAt).toLocaleDateString()} at {new Date(app.createdAt).toLocaleTimeString()}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
