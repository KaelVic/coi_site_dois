import { Link } from "wouter";

const TREATMENT_LINKS = [
  ["cirurgia", "Cirurgia"],
  ["clinico-geral", "Clínico Geral"],
  ["clareamento-dental", "Clareamento Dental"],
  ["endodontia", "Endodontia"],
  ["implantodontia", "Implantodontia"],
  ["estetica-dental", "Estética Dental"],
  ["ortodontia", "Ortodontia"],
  ["periodontia", "Periodontia"],
  ["protese-dental", "Prótese Dental"],
  ["harmonizacao-facial", "Harmonização Facial"],
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#3D1F0D", color: "#F8F8F8" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 2rem 2.5rem" }}>
        <div 
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            marginBottom: "3.5rem",
          }}
        >
          <style>{`
            @media (max-width: 768px) {
              .footer-grid { text-align: center; justify-items: center; }
              .footer-grid > div { width: 100%; display: flex; flexDirection: column; alignItems: center; }
              .footer-brand-p { margin: 0 auto !important; }
              .footer-bottom { flex-direction: column !important; text-align: center; }
            }
          `}</style>
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Link href="/" style={{ textDecoration: "none", display: "inline-block", marginBottom: "1.25rem" }}>
              <img
                src="/coi-logo.png"
                alt="COI – Centro Odontológico Integrado"
                style={{
                  height: 42,
                  width: "auto",
                  objectFit: "contain",
                  filter: "brightness(0) invert(1)",
                  opacity: 0.9,
                }}
              />
            </Link>
            <p className="footer-brand-p" style={{
              fontFamily: "var(--font-body)", fontSize: "0.875rem",
              lineHeight: 1.75, color: "rgba(248,248,248,0.38)", maxWidth: 220,
            }}>
              Cuidado odontológico integrado, com foco em saúde, função e estética.
            </p>
          </div>

          {/* Tratamentos col 1 */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p className="label-tag" style={{ color: "#8C4A1E", marginBottom: "1.125rem" }}>Tratamentos</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {TREATMENT_LINKS.slice(0, 5).map(([slug, label]) => (
                <Link key={slug} href={`/tratamentos/${slug}`}
                  style={{
                    fontFamily: "var(--font-body)", fontSize: "0.875rem",
                    color: "rgba(248,248,248,0.38)", textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#A85E2E")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(248,248,248,0.38)")}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Tratamentos col 2 */}
          <div className="hide-mobile" style={{ display: "flex", flexDirection: "column" }}>
            <p className="label-tag" style={{ color: "#8C4A1E", marginBottom: "1.125rem" }}>&nbsp;</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {TREATMENT_LINKS.slice(5).map(([slug, label]) => (
                <Link key={slug} href={`/tratamentos/${slug}`}
                  style={{
                    fontFamily: "var(--font-body)", fontSize: "0.875rem",
                    color: "rgba(248,248,248,0.38)", textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#A85E2E")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(248,248,248,0.38)")}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Show remaining treatments stacked on mobile */}
          <div className="show-mobile" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
             {TREATMENT_LINKS.slice(5).map(([slug, label]) => (
                <Link key={slug} href={`/tratamentos/${slug}`}
                  style={{
                    fontFamily: "var(--font-body)", fontSize: "0.875rem",
                    color: "rgba(248,248,248,0.38)", textDecoration: "none",
                  }}
                >
                  {label}
                </Link>
              ))}
          </div>

          {/* Contato */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p className="label-tag" style={{ color: "#8C4A1E", marginBottom: "1.125rem" }}>Contato</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "inherit" }}>
              {[
                "Paraça General Osório, 219 — Centro",
                "Curitiba, PR — 80020-010",
                "(41) 98523-4394",
                "contato@coi.com.br",
              ].map((line) => (
                <p key={line} style={{
                  fontFamily: "var(--font-body)", fontSize: "0.875rem",
                  color: "rgba(248,248,248,0.38)", margin: 0,
                }}>
                  {line}
                </p>
              ))}
              <a href="https://wa.me/5541985234394" className="btn-copper"
                style={{ marginTop: "1rem", textAlign: "center", fontSize: "0.75rem", width: "100%", maxWidth: "200px" }}>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom" style={{
          borderTop: "1px solid rgba(248,248,248,0.06)",
          paddingTop: "2rem",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: "1rem",
        }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.6875rem",
            color: "rgba(248,248,248,0.18)", margin: 0,
          }}>
            © {new Date().getFullYear()} COI – Centro Odontológico Integrado. All rights reserved.
          </p>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "0.6875rem",
            color: "rgba(248,248,248,0.18)", margin: 0,
          }}>
            CRO-PR 00.000
          </p>
        </div>
      </div>
    </footer>
  );
}
