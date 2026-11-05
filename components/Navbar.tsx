"use client";

import Link from 'next/link';
import { BookOpen, Menu, X, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { useSession } from 'next-auth/react';
import { useThemeContext } from '../context/ThemeContext';

const AppleMusicIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
    fill={"currentColor"} viewBox={"0 0 24 24"} {...props} >
    {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
    <path d="M21 8.63V7.45a8 8 0 0 0-.1-1.18c-.07-.4-.19-.76-.37-1.12a3.76 3.76 0 0 0-1.65-1.65c-.36-.18-.73-.3-1.12-.37a8 8 0 0 0-1.18-.1H7.47c-.39.01-.79.03-1.18.1-.4.07-.76.19-1.12.37-.71.36-1.29.94-1.65 1.65-.18.36-.3.73-.37 1.12s-.09.79-.1 1.18v9.1c.01.39.03.79.1 1.18.07.4.19.76.37 1.12.36.71.94 1.29 1.65 1.65.36.18.73.3 1.12.37s.79.09 1.18.1h9.11c.39-.01.79-.03 1.18-.1.4-.07.76-.19 1.12-.37a3.76 3.76 0 0 0 1.65-1.65c.18-.36.3-.73.37-1.12s.09-.79.1-1.18V8.62Zm-4.82 6.08c0 .23 0 .43-.05.66-.05.22-.13.43-.26.62s-.3.34-.49.46c-.2.12-.4.18-.62.23-.42.08-.7.1-.97.05a1.3 1.3 0 0 1-.65-.33c-.26-.24-.42-.56-.45-.89-.04-.39.09-.81.38-1.12.15-.16.34-.28.58-.38.26-.1.55-.16.99-.25l.35-.07c.15-.03.28-.07.39-.2s.11-.29.11-.45V9.08c0-.3-.14-.39-.43-.33-.21.04-4.65.94-4.65.94-.25.06-.34.14-.34.45v5.81c0 .23-.01.43-.06.66-.05.22-.13.43-.26.62s-.3.34-.49.46c-.2.12-.4.19-.62.23-.41.08-.7.1-.97.05-.26-.05-.47-.17-.65-.33-.26-.24-.41-.56-.44-.89-.04-.39.08-.81.37-1.12.15-.16.34-.28.58-.38.26-.1.55-.16.99-.25l.35-.07c.15-.03.28-.07.39-.2s.12-.28.12-.44v-6.7c0-.09 0-.15.01-.18.02-.14.08-.26.18-.35q.12-.105.33-.15s5.35-1.08 5.35-1.08c.05 0 .43-.08.48-.08.29-.02.45.16.45.47z" />
  </svg>
)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const { colors } = useThemeContext();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Courses', href: '/courses' },
  ];

  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      backgroundColor: colors.surface + "cc", // semi-transparent
      backdropFilter: "blur(8px)",
      borderBottom: `1px solid ${colors.border}`,
      boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>

          <Link href={"/"} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <BookOpen style={{ height: "32px", width: "32px", color: colors.accent1 }} />
            <span style={{
              fontWeight: "bold",
              fontSize: "1.25rem",
              letterSpacing: "-0.025em",
              backgroundImage: `linear-gradient(to right, ${colors.accent1}, ${colors.accent2})`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent"
            }}>WISDOM TUTION</span>
            <AppleMusicIcon color='#ff0000' />
          </Link>

          {/* Desktop Menu */}
          <div style={{ display: "none", alignItems: "center", gap: "24px" }} className="md-flex">
            <div style={{ display: "flex", alignItems: "baseline", gap: "24px" }}>
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  style={{
                    color: colors.foreground,
                    opacity: 0.8,
                    padding: "8px 12px",
                    borderRadius: "6px",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "color 0.2s"
                  }}
                >
                  {link.name}
                </Link>
              ))}

              {session && (
                <Link href="/admin" style={{
                  color: colors.accent4,
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "8px 12px",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  textDecoration: "none"
                }}>
                  <ShieldCheck style={{ height: "16px", width: "16px" }} /> Admin
                </Link>
              )}

              <Link
                href="/apply"
                style={{
                  background: `linear-gradient(to right, ${colors.accent1}, ${colors.accent2})`,
                  color: "#fff",
                  padding: "8px 20px",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.2)"
                }}
              >
                Apply Now
              </Link>
            </div>

            <div style={{ borderLeft: `1px solid ${colors.border}`, paddingLeft: "24px" }}>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }} className="md-hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px",
                borderRadius: "6px",
                color: colors.foreground
              }}
            >
              {isOpen ? <X style={{ height: "24px", width: "24px" }} /> : <Menu style={{ height: "24px", width: "24px" }} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          backgroundColor: colors.surface + "e6",
          backdropFilter: "blur(16px)",
          borderBottom: `1px solid ${colors.border}`,
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
        }}>
          <div style={{ padding: "8px", display: "flex", flexDirection: "column", gap: "4px" }}>
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                style={{
                  color: colors.foreground,
                  display: "block",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  fontSize: "1rem",
                  fontWeight: 500,
                  textDecoration: "none"
                }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {session && (
              <Link
                href="/admin"
                style={{
                  color: colors.accent4,
                  display: "block",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  fontSize: "1rem",
                  fontWeight: 500,
                  textDecoration: "none"
                }}
                onClick={() => setIsOpen(false)}
              >
                Admin Dashboard
              </Link>
            )}
            <Link
              href="/apply"
              style={{
                color: "#fff",
                background: `linear-gradient(to right, ${colors.accent1}, ${colors.accent2})`,
                display: "block",
                padding: "8px 12px",
                borderRadius: "6px",
                fontSize: "1rem",
                fontWeight: 500,
                marginTop: "16px",
                textAlign: "center",
                textDecoration: "none"
              }}
              onClick={() => setIsOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}

      {/* Fallback CSS for md-flex / md-hidden since we removed tailwind */}
      <style>{`
        @media (min-width: 768px) {
          .md-flex { display: flex !important; }
          .md-hidden { display: none !important; }
        }
        @media (max-width: 767px) {
          .md-flex { display: none !important; }
          .md-hidden { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
