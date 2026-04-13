import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const LINKS = [
  { href: "/", label: "Início" },
  { href: "/#tratamentos", label: "Tratamentos" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const solid = scrolled || !isHome || menuOpen;

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 200,
        transition: "background-color 0.4s ease, box-shadow 0.4s ease",
        backgroundColor: solid ? "rgba(248,248,248,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(14,14,14,0.07)" : "none",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between", height: "4.75rem",
        }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <img
              src="/coi-logo.png"
              alt="COI – Centro Odontológico Integrado"
              style={{
                height: 38,
                width: "auto",
                objectFit: "contain",
                // On transparent hero: show logo normally (copper colors visible on dark)
                // On solid nav: show normally
                filter: solid ? "none" : "brightness(0) invert(1)",
                transition: "filter 0.4s ease",
              }}
            />
          </Link>

          {/* Desktop nav */}
          <nav
            style={{ display: "flex", alignItems: "center", gap: "2.25rem" }}
            className="show-desktop"
          >
            {LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="nav-link"
                style={{
                  color: solid ? "#0E0E0E" : "rgba(248,248,248,0.9)",
                  transition: "color 0.4s ease",
                }}
              >
                {label}
              </a>
            ))}
            <a href="/#contato" className="btn-copper" style={{ padding: "0.625rem 1.5rem" }}>
              Agendar
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "0.5rem", display: "flex", flexDirection: "column", gap: 5,
            }}
            className="hide-desktop"
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: "block", width: 22, height: 1.5,
                backgroundColor: solid ? "#0E0E0E" : "#F8F8F8",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transformOrigin: "center",
                transform: menuOpen
                  ? i === 0 ? "rotate(45deg) translate(4.5px, 4.5px)"
                  : i === 2 ? "rotate(-45deg) translate(4.5px, -4.5px)"
                  : "none"
                  : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile Backdrop Overlay */}
      <div 
        onClick={() => setMenuOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(14,14,14,0.3)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? "visible" : "hidden",
          transition: "opacity 0.4s ease, visibility 0.4s ease",
          zIndex: -1,
        }}
        className="hide-desktop"
      />

      {/* Mobile dropdown */}
      <div style={{
        maxHeight: menuOpen ? "100vh" : 0,
        opacity: menuOpen ? 1 : 0,
        overflow: "hidden",
        transition: "max-height 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease",
        backgroundColor: "rgba(248,248,248,0.98)",
        borderTop: menuOpen ? "1px solid #DDD6CE" : "none",
      }} className="hide-desktop">
        <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {LINKS.map(({ href, label }) => (
            <a key={href} href={href} style={{
              fontFamily: "var(--font-body)", fontSize: "1.125rem",
              color: "#0E0E0E", textDecoration: "none", fontWeight: 400,
              padding: "0.5rem 0",
              borderBottom: "1px solid rgba(14,14,14,0.03)"
            }}>
              {label}
            </a>
          ))}
          <a href="/#contato" className="btn-copper" style={{ textAlign: "center", marginTop: "1rem", padding: "1.1rem" }}>
            Agendar Avaliação
          </a>
        </div>
      </div>
    </header>
  );
}
