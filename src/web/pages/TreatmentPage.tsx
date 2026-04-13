import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "wouter";
import { getTreatmentBySlug } from "../data/treatments";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

function useReveal(key: string) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Reset all reveals on navigation
    const els = ref.current?.querySelectorAll(".reveal");
    els?.forEach((el) => el.classList.remove("visible"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    // small delay to allow reset to paint
    const timer = setTimeout(() => {
      const elements = ref.current?.querySelectorAll(".reveal");
      elements?.forEach((el) => observer.observe(el));
    }, 50);

    return () => { clearTimeout(timer); observer.disconnect(); };
  }, [key]);
  return ref;
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className={`faq-icon ${open ? "open" : ""}`}>+</span>
      </button>
      <div className={`faq-answer ${open ? "open" : ""}`}>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.875rem",
          lineHeight: 1.8, color: "#5C5651",
          paddingBottom: "1.5rem", margin: 0,
        }}>{a}</p>
      </div>
    </div>
  );
}

export function TreatmentPage() {
  const params = useParams<{ slug: string }>();
  const treatment = getTreatmentBySlug(params.slug);
  const revealRef = useReveal(params.slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [params.slug]);

  if (!treatment) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "8rem 2rem" }}>
          <p className="label-tag" style={{ textAlign: "center" }}>404</p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 300, color: "#0E0E0E", marginBottom: "1.5rem", textAlign: "center" }}>
            Tratamento não encontrado
          </h1>
          <Link href="/" className="btn-copper">Voltar ao início</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page-enter" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{
        position: "relative",
        height: "88vh", minHeight: 520, maxHeight: 820,
        overflow: "hidden",
        display: "flex", alignItems: "flex-end",
      }}>
        {/* Background image */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${treatment.heroImage})`,
          backgroundSize: "cover", backgroundPosition: "center",
          animation: "heroZoom 14s ease-out forwards",
        }} />
        <style>{`
          @keyframes heroZoom {
            from { transform: scale(1.06); }
            to   { transform: scale(1.0);  }
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .h-label { animation: fadeUp 0.7s 0.2s both cubic-bezier(0.25,0.46,0.45,0.94); }
          .h-title { animation: fadeUp 0.7s 0.4s both cubic-bezier(0.25,0.46,0.45,0.94); }
          .h-sub   { animation: fadeUp 0.7s 0.6s both cubic-bezier(0.25,0.46,0.45,0.94); }
          .h-cta   { animation: fadeUp 0.7s 0.8s both cubic-bezier(0.25,0.46,0.45,0.94); }
          @media (max-width:768px) {
            .tp-overview { grid-template-columns: 1fr !important; gap: 3rem !important; }
          }
        `}</style>
        <div className="hero-overlay" style={{ position: "absolute", inset: 0 }} />

        {/* Breadcrumb */}
        <div style={{
          position: "absolute", top: "5.5rem",
          left: 0, right: 0,
          maxWidth: 1200, margin: "0 auto", padding: "0 2rem",
        }}>
          <nav style={{
            display: "flex", alignItems: "center", gap: "0.5rem",
            fontFamily: "var(--font-body)", fontSize: "0.6875rem",
            color: "rgba(248,248,248,0.45)", letterSpacing: "0.04em",
          }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Início</Link>
            <span>/</span>
            <a href="/#tratamentos" style={{ color: "inherit", textDecoration: "none" }}>Tratamentos</a>
            <span>/</span>
            <span style={{ color: "rgba(248,248,248,0.8)" }}>{treatment.name}</span>
          </nav>
        </div>

        {/* Hero content */}
        <div style={{
          position: "relative", width: "100%",
          maxWidth: 1200, margin: "0 auto",
          padding: "0 2rem clamp(3.5rem, 8vw, 5.5rem)",
        }}>
          <p className="label-tag h-label" style={{ color: "#A85E2E" }}>Tratamento</p>
          <h1 className="h-title" style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.75rem, 7vw, 6rem)",
            fontWeight: 300, color: "#F8F8F8",
            lineHeight: 1.04, marginBottom: "1.125rem",
            maxWidth: 680,
          }}>
            {treatment.name}
          </h1>
          <p className="h-sub" style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.9375rem, 1.8vw, 1.0625rem)",
            fontWeight: 300, color: "rgba(248,248,248,0.75)",
            maxWidth: 520, lineHeight: 1.75, marginBottom: "2.5rem",
          }}>
            {treatment.heroSubtitle}
          </p>
          <a href="#agendar" className="btn-copper h-cta">Agendar Avaliação</a>
        </div>
      </section>

      <main ref={revealRef} style={{ flex: 1 }}>

        {/* ── OVERVIEW ─────────────────────────────────────────────── */}
        <section className="section-padding" style={{ backgroundColor: "#F8F8F8" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
            <div className="tp-overview" style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: "5rem", alignItems: "start",
            }}>
              <div className="reveal">
                <p className="label-tag">Sobre o tratamento</p>
                <h2 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.625rem, 3.5vw, 2.5rem)",
                  fontWeight: 400, color: "#0E0E0E",
                  lineHeight: 1.2, marginBottom: "1.75rem",
                }}>
                  {treatment.overviewTitle}
                </h2>
                {treatment.overviewParagraphs.map((p, i) => (
                  <p key={i} style={{
                    fontFamily: "var(--font-body)", fontSize: "0.9375rem",
                    lineHeight: 1.8, color: "#5C5651", marginBottom: "1.25rem",
                  }}>{p}</p>
                ))}
              </div>

              <div className="reveal reveal-delay-2">
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.625rem",
                  fontWeight: 500, letterSpacing: "0.16em",
                  textTransform: "uppercase", color: "#0E0E0E",
                  marginBottom: "1.25rem",
                }}>O que inclui</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {treatment.overviewPoints.map((point, i) => (
                    <li key={i} style={{
                      display: "flex", alignItems: "flex-start", gap: "1rem",
                      padding: "0.875rem 0",
                      borderBottom: "1px solid #DDD6CE",
                      fontFamily: "var(--font-body)", fontSize: "0.875rem",
                      lineHeight: 1.6, color: "#5C5651",
                    }}>
                      <span style={{ color: "#8C4A1E", fontSize: "0.375rem", marginTop: "0.5rem", flexShrink: 0 }}>◆</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── BENEFITS ─────────────────────────────────────────────── */}
        <section className="section-padding" style={{ backgroundColor: "#EDE4DA" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
            <div className="reveal" style={{ marginBottom: "3.5rem" }}>
              <p className="label-tag">Por que considerar</p>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.625rem, 3.5vw, 2.5rem)",
                fontWeight: 400, color: "#0E0E0E",
                lineHeight: 1.2, maxWidth: 460,
              }}>
                Benefícios do tratamento
              </h2>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
            }}>
              {treatment.benefits.map((b, i) => (
                <div key={i} className={`benefit-card reveal reveal-delay-${i + 1}`}
                  style={{ backgroundColor: "#F8F8F8" }}>
                  <div style={{
                    fontFamily: "var(--font-display)", fontSize: "1.375rem",
                    color: "#8C4A1E", marginBottom: "1.25rem", opacity: 0.65,
                  }}>{b.icon}</div>
                  <h3 style={{
                    fontFamily: "var(--font-display)", fontSize: "1.125rem",
                    fontWeight: 600, color: "#0E0E0E",
                    marginBottom: "0.75rem", lineHeight: 1.3,
                  }}>{b.title}</h3>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "0.875rem",
                    lineHeight: 1.75, color: "#5C5651", margin: 0,
                  }}>{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ──────────────────────────────────────────────── */}
        <section className="section-padding" style={{ backgroundColor: "#F8F8F8" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
            <div className="reveal" style={{ marginBottom: "4rem" }}>
              <p className="label-tag">Como funciona</p>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.625rem, 3.5vw, 2.5rem)",
                fontWeight: 400, color: "#0E0E0E",
                lineHeight: 1.2, maxWidth: 460,
              }}>
                {treatment.processTitle}
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {treatment.steps.map((step, i) => (
                <div key={i} className={`reveal reveal-delay-${(i % 4) + 1}`}
                  style={{
                    display: "grid", gridTemplateColumns: "72px 1fr",
                    gap: "2rem", padding: "2.25rem 0",
                    borderBottom: i < treatment.steps.length - 1 ? "1px solid #DDD6CE" : "none",
                    alignItems: "start",
                  }}>
                  <div className="step-number">{step.number}</div>
                  <div>
                    <h3 style={{
                      fontFamily: "var(--font-display)", fontSize: "1.3rem",
                      fontWeight: 600, color: "#0E0E0E",
                      marginBottom: "0.625rem", lineHeight: 1.3,
                    }}>{step.title}</h3>
                    <p style={{
                      fontFamily: "var(--font-body)", fontSize: "0.875rem",
                      lineHeight: 1.8, color: "#5C5651", margin: 0,
                    }}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="section-padding" style={{ backgroundColor: "#EDE4DA" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 2rem" }}>
            <div className="reveal" style={{ marginBottom: "3.5rem" }}>
              <p className="label-tag">Dúvidas frequentes</p>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.625rem, 3.5vw, 2.5rem)",
                fontWeight: 400, color: "#0E0E0E", lineHeight: 1.2,
              }}>
                Perguntas comuns
              </h2>
            </div>
            <div className="reveal reveal-delay-1">
              {treatment.faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.question} a={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────── */}
        <section id="agendar" className="section-padding" style={{
          backgroundColor: "#3D1F0D",
          textAlign: "center",
        }}>
          <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 2rem" }}>
            <div className="reveal">
              <p className="label-tag" style={{ color: "#8C4A1E", textAlign: "center" }}>
                COI — Centro Odontológico Integrado
              </p>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 300, fontStyle: "italic",
                color: "#F8F8F8", lineHeight: 1.12,
                marginBottom: "1.25rem",
              }}>
                Pronto para dar o<br />próximo passo?
              </h2>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.9375rem",
                lineHeight: 1.8, color: "rgba(248,248,248,0.45)",
                marginBottom: "2.5rem",
              }}>
                {treatment.ctaText}. Nossa equipe está disponível para esclarecer suas dúvidas e encontrar a melhor solução para você.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="/#contato" className="btn-copper">Agendar Avaliação</a>
                <a href="https://wa.me/5500000000000" className="btn-outline-white">WhatsApp</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── RETURN ───────────────────────────────────────────────── */}
        <section style={{
          padding: "2rem 0",
          backgroundColor: "#F8F8F8",
          borderTop: "1px solid #DDD6CE",
        }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
            <a href="/#tratamentos"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.625rem",
                fontFamily: "var(--font-body)", fontSize: "0.8125rem",
                color: "#5C5651", textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#8C4A1E")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#5C5651")}
            >
              <span>←</span> Ver todos os tratamentos
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
