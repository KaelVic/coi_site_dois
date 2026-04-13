import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { treatments } from "../data/treatments";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    const els = ref.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const ICONS: Record<string, string> = {
  cirurgia: "⚕",
  "clinico-geral": "◎",
  "clareamento-dental": "◈",
  endodontia: "◇",
  implantodontia: "◉",
  "estetica-dental": "✦",
  ortodontia: "⊕",
  periodontia: "◐",
  "protese-dental": "◬",
  "harmonizacao-facial": "✧",
};

export default function Index() {
  const revealRef = useReveal();

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{
        position: "relative",
        height: "100vh", minHeight: 620,
        overflow: "hidden",
        display: "flex", alignItems: "flex-end",
      }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-poster.jpg"
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center 30%",
            animation: "heroZoom 18s ease-out forwards",
          }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <style>{`
          @keyframes heroZoom {
            from { transform: scale(1.07); }
            to   { transform: scale(1.0);  }
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .hero-label  { animation: fadeUp 0.8s 0.3s both cubic-bezier(0.25,0.46,0.45,0.94); }
          .hero-title  { animation: fadeUp 0.8s 0.5s both cubic-bezier(0.25,0.46,0.45,0.94); }
          .hero-sub    { animation: fadeUp 0.8s 0.7s both cubic-bezier(0.25,0.46,0.45,0.94); }
          .hero-btns   { animation: fadeUp 0.8s 0.9s both cubic-bezier(0.25,0.46,0.45,0.94); }
        `}</style>

        {/* gradient */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(170deg, rgba(14,14,14,0.18) 0%, rgba(14,14,14,0.50) 45%, rgba(14,14,14,0.82) 100%)",
        }} />

        {/* content */}
        <div style={{
          position: "relative", width: "100%",
          maxWidth: 1200, margin: "0 auto",
          padding: "0 2rem 7rem",
        }}>
          <p className="label-tag hero-label" style={{ color: "#A85E2E" }}>
            Centro Odontológico Integrado
          </p>
          <h1 className="hero-title" style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 7.5vw, 7rem)",
            fontWeight: 300,
            color: "#F8F8F8",
            lineHeight: 1.02,
            marginBottom: "1.5rem",
            maxWidth: 760,
            letterSpacing: "-0.01em",
          }}>
            Cuidado com<br /><em>excelência clínica</em>
          </h1>
          <p className="hero-sub" style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.9375rem, 1.8vw, 1.125rem)",
            fontWeight: 300,
            color: "rgba(248,248,248,0.72)",
            maxWidth: 480, lineHeight: 1.75,
            marginBottom: "2.75rem",
          }}>
            Atendimento odontológico completo, do preventivo à reabilitação, com precisão técnica e atenção individual.
          </p>
          <div className="hero-btns" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#contato" className="btn-copper">Agendar Avaliação</a>
            <a href="#tratamentos" className="btn-outline-white">Nossos Tratamentos</a>
          </div>
        </div>

        {/* scroll indicator */}
        <div style={{
          position: "absolute", bottom: "2.5rem", right: "2.5rem",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
        }}>
          <span style={{
            fontFamily: "var(--font-body)", fontSize: "0.5625rem",
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "rgba(248,248,248,0.35)", writingMode: "vertical-rl",
            marginBottom: 8,
          }}>
            Scroll
          </span>
          <div style={{
            width: 1, height: 52,
            background: "linear-gradient(to bottom, transparent, rgba(248,248,248,0.35))",
            animation: "scrollPulse 2.5s ease-in-out infinite",
          }} />
          <style>{`
            @keyframes scrollPulse {
              0%, 100% { opacity: 0.3; }
              50%       { opacity: 0.8; }
            }
          `}</style>
        </div>
      </section>

      <main ref={revealRef} style={{ flex: 1 }}>

        {/* ── STATS ──────────────────────────────────────────────────── */}
        <section style={{ padding: "5rem 0", backgroundColor: "#3D1F0D" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "2rem", textAlign: "center",
            }}>
              {[
                { n: "10+", l: "Especialidades" },
                { n: "15+", l: "Anos de experiência" },
                { n: "5.000+", l: "Pacientes atendidos" },
                { n: "98%", l: "Índice de satisfação" },
              ].map((s, i) => (
                <div key={i} className={`reveal reveal-delay-${i + 1}`}>
                  <div style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                    fontWeight: 300, color: "#8C4A1E",
                    lineHeight: 1, marginBottom: "0.5rem",
                  }}>{s.n}</div>
                  <p style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.6875rem", fontWeight: 500,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    color: "rgba(248,248,248,0.35)", margin: 0,
                  }}>{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRATAMENTOS ────────────────────────────────────────────── */}
        <section id="tratamentos" className="section-padding" style={{ backgroundColor: "#F8F8F8" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
            <div className="reveal" style={{ marginBottom: "4rem" }}>
              <p className="label-tag">O que oferecemos</p>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                fontWeight: 400, color: "#0E0E0E",
                lineHeight: 1.1, maxWidth: 520,
              }}>
                Tratamentos disponíveis
              </h2>
            </div>

            <style>{`
              .treatments-grid {
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                border-top: 1px solid #DDD6CE;
                border-left: 1px solid #DDD6CE;
                align-items: stretch;
              }
              .treatments-grid a {
                display: flex;
              }
              .treatment-cell {
                border-right: 1px solid #DDD6CE;
                border-bottom: 1px solid #DDD6CE;
                flex: 1;
              }
              @media (max-width: 900px) {
                .treatments-grid {
                  grid-template-columns: repeat(3, 1fr);
                }
              }
              @media (max-width: 768px) {
                .treatments-grid {
                  grid-template-columns: 1fr;
                }
                .treatment-cell {
                  padding: 1.75rem 1.5rem !important;
                }
              }
            `}</style>
            <div className="treatments-grid">
              {treatments.map((t, i) => (
                <Link key={t.slug} href={`/tratamentos/${t.slug}`} style={{ textDecoration: "none" }}>
                  <div
                    className={`treatment-cell reveal reveal-delay-${(i % 4) + 1}`}
                    style={{
                      backgroundColor: "#F8F8F8",
                      padding: "2.25rem 2rem",
                      width: "100%",
                      display: "flex", flexDirection: "column",
                      gap: "1rem", cursor: "pointer",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.backgroundColor = "#3D1F0D";
                      (el.querySelector(".t-icon") as HTMLElement).style.color = "#8C4A1E";
                      (el.querySelector(".t-name") as HTMLElement).style.color = "#F8F8F8";
                      (el.querySelector(".t-tag") as HTMLElement).style.color = "rgba(248,248,248,0.4)";
                      (el.querySelector(".t-arrow") as HTMLElement).style.opacity = "1";
                      (el.querySelector(".t-arrow") as HTMLElement).style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.backgroundColor = "#F8F8F8";
                      (el.querySelector(".t-icon") as HTMLElement).style.color = "#8C4A1E";
                      (el.querySelector(".t-name") as HTMLElement).style.color = "#0E0E0E";
                      (el.querySelector(".t-tag") as HTMLElement).style.color = "#5C5651";
                      (el.querySelector(".t-arrow") as HTMLElement).style.opacity = "0";
                      (el.querySelector(".t-arrow") as HTMLElement).style.transform = "translateX(0)";
                    }}
                  >
                    <span className="t-icon" style={{
                      fontSize: "1.25rem", color: "#8C4A1E",
                      lineHeight: 1, transition: "color 0.3s ease",
                    }}>
                      {ICONS[t.slug] || "◇"}
                    </span>
                    <div>
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                        <h3 className="t-name" style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.2rem", fontWeight: 600,
                          color: "#0E0E0E", lineHeight: 1.25,
                          transition: "color 0.3s ease",
                        }}>
                          {t.name}
                        </h3>
                        <span className="t-arrow" style={{
                          color: "#8C4A1E", fontSize: "0.875rem",
                          opacity: 0, transition: "opacity 0.3s ease, transform 0.3s ease",
                          marginLeft: "0.5rem", marginTop: "0.125rem", flexShrink: 0,
                        }}>→</span>
                      </div>
                      <p className="t-tag" style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8125rem", color: "#5C5651",
                        margin: "0.375rem 0 0", lineHeight: 1.55,
                        transition: "color 0.3s ease",
                      }}>
                        {t.tagline}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOBRE ──────────────────────────────────────────────────── */}
        <section id="sobre" className="section-padding" style={{ backgroundColor: "#EDE4DA" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "5rem", alignItems: "center",
            }} className="two-col">
              <div className="reveal">
                <p className="label-tag">Sobre o Grupo</p>
                <h2 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  fontWeight: 400, color: "#0E0E0E",
                  lineHeight: 1.12, marginBottom: "1.75rem",
                }}>
                  Integração entre<br /><em>especialidades</em>
                </h2>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.9375rem",
                  lineHeight: 1.8, color: "#5C5651", marginBottom: "1.25rem",
                }}>
                  O Centro Odontológico Integrado nasceu com um propósito claro: oferecer atendimento odontológico completo em um único ambiente, com equipe especializada e atuação integrada entre as especialidades.
                </p>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.9375rem",
                  lineHeight: 1.8, color: "#5C5651", marginBottom: "2.5rem",
                }}>
                  Cada paciente recebe diagnóstico detalhado, plano de tratamento individualizado e acompanhamento contínuo, com tecnologia e experiência clínica a serviço da sua saúde.
                </p>
                <a href="#contato" className="btn-copper">Agendar avaliação</a>
              </div>

              <div className="reveal reveal-delay-2">
                <div style={{ position: "relative", overflow: "hidden", aspectRatio: "4/5" }}>
                  <img
                    src="/team.png"
                    alt="Equipe COI – Centro Odontológico Integrado"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                    loading="lazy"
                  />
                  <div style={{
                    position: "absolute", bottom: "2rem", left: "2rem", right: "2rem",
                    backgroundColor: "rgba(14,14,14,0.88)",
                    backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
                    padding: "1.5rem",
                  }}>
                    <p style={{
                      fontFamily: "var(--font-display)", fontSize: "1.1rem",
                      fontStyle: "italic", color: "#F8F8F8",
                      margin: "0 0 0.5rem", lineHeight: 1.45,
                    }}>
                      "Saúde bucal não é só estética.<br />É qualidade de vida."
                    </p>
                    <p style={{
                      fontFamily: "var(--font-body)", fontSize: "0.6875rem",
                      color: "#8C4A1E", margin: 0, letterSpacing: "0.1em",
                    }}>
                      — Equipe COI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) {
              .two-col { grid-template-columns: 1fr !important; gap: 3rem !important; }
            }
          `}</style>
        </section>

        {/* ── DRA GRAZIELA ──────────────────────────────────────────────── */}
        <section id="dra-graziela" className="section-padding" style={{ backgroundColor: "#F8F8F8" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="two-col reverse-col">
              <div className="reveal">
                <div style={{ position: "relative", overflow: "hidden", aspectRatio: "4/5" }}>
                  <img src="/doutora.jpg" alt="Dra. Graziela" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} loading="lazy" />
                </div>
              </div>
              <div className="reveal reveal-delay-2">
                <p className="label-tag">Direção Clínica</p>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 400, color: "#0E0E0E", lineHeight: 1.12, marginBottom: "1.75rem" }}>
                  Dra. Graziela
                </h2>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", fontStyle: "italic", color: "#8C4A1E", marginBottom: "1.25rem" }}>
                  "Estética, precisão funcional e cuidado puramente humanizado."
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.8, color: "#5C5651", marginBottom: "1.25rem" }}>
                  A Dra. Graziela lidera a equipe do Centro Odontológico Integrado com uma visão clara: unir alta performance estética ao que há de mais moderno na Odontologia pautada por evidências. Entendemos que cada sorriso tem uma história, e o nosso papel é transformá-la com o máximo acolhimento e mínimo desconforto.
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.8, color: "#5C5651", marginBottom: "2.5rem" }}>
                  Com anos de excelência e dedicação exclusiva a reabilitações desafiadoras, a Dra. conduz cada etapa pessoalmente, oferecendo a segurança técnica e a confiança que você procura para elevar sua autoestima e saúde bucal.
                </p>
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) {
              .reverse-col { flex-direction: column-reverse; display: flex; }
            }
          `}</style>
        </section>

        {/* ── VALORES ────────────────────────────────────────────────── */}
        <section style={{ padding: "6rem 0", backgroundColor: "#3D1F0D" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
            <div className="reveal" style={{ marginBottom: "4rem" }}>
              <p className="label-tag" style={{ color: "#8C4A1E" }}>Nossos princípios</p>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 400, color: "#F8F8F8",
                lineHeight: 1.2, maxWidth: 440,
              }}>
                O que nos guia
              </h2>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "2.5rem",
            }}>
              {[
                { t: "Diagnóstico preciso", d: "Tratamos a causa, não os sintomas. Cada protocolo começa por uma avaliação rigorosa." },
                { t: "Mínima invasividade", d: "Preservar estrutura saudável é sempre a primeira opção. Intervenção só quando necessária." },
                { t: "Comunicação clara", d: "Explicamos cada etapa em linguagem acessível para que o paciente seja parte do processo." },
                { t: "Atualização contínua", d: "Nossa equipe mantém formação constante nas técnicas e materiais mais modernos." },
              ].map((v, i) => (
                <div key={i} className={`reveal reveal-delay-${i + 1}`}
                  style={{ borderTop: "1px solid rgba(248,248,248,0.08)", paddingTop: "1.75rem" }}>
                  <h3 style={{
                    fontFamily: "var(--font-display)", fontSize: "1.2rem",
                    fontWeight: 600, color: "#F8F8F8",
                    marginBottom: "0.875rem", lineHeight: 1.3,
                  }}>{v.t}</h3>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: "0.875rem",
                    lineHeight: 1.75, color: "rgba(248,248,248,0.38)", margin: 0,
                  }}>{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESSO / COMO FUNCIONA ───────────────────────────────────── */}
        <section id="processo" className="section-padding" style={{ backgroundColor: "#EDE4DA" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
            <div className="reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
              <p className="label-tag">Como funciona</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 400, color: "#0E0E0E", lineHeight: 1.12, margin: "0 auto", maxWidth: 600 }}>
                Sua jornada para um<br/><em>novo sorriso</em>
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem", position: "relative" }}>
              {[
                { n: "01", t: "Primeiro Contato", d: "Agendamento simplificado e alinhamento inicial das suas expectativas e necessidades." },
                { n: "02", t: "Avaliação Clínica", d: "Exame rigoroso, avaliação fotográfica e radiológica para entender o estado atual." },
                { n: "03", t: "Plano Personalizado", d: "Apresentação detalhada da recomendação de tratamento, tempos e custos envolvidos." },
                { n: "04", t: "Execução", d: "Tratamento conduzido com maestria, materiais de ponta e zelo absoluto pelo seu conforto." },
              ].map((s, i) => (
                <div key={i} className={`reveal reveal-delay-${i + 1}`} style={{ position: "relative", backgroundColor: "#F8F8F8", padding: "2.5rem 2rem", border: "1px solid #DDD6CE", zIndex: 1 }}>
                  <div style={{ position: "absolute", top: "-1rem", right: "1rem", fontFamily: "var(--font-display)", fontSize: "6rem", fontWeight: 300, color: "#8C4A1E", opacity: 0.08, lineHeight: 1, zIndex: -1 }}>
                    {s.n}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 600, color: "#0E0E0E", marginBottom: "1rem", lineHeight: 1.25 }}>{s.t}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.75, color: "#5C5651", margin: 0 }}>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DEPOIMENTOS ─────────────────────────────────────────────── */}
        <section id="depoimentos" className="section-padding" style={{ backgroundColor: "#F8F8F8" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
            <div className="reveal" style={{ marginBottom: "4rem", textAlign: "center" }}>
              <p className="label-tag">Experiências</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 400, color: "#0E0E0E", lineHeight: 1.12, margin: "0 auto", maxWidth: 640 }}>
                O que dizem nossos pacientes
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem" }}>
              {[
                { p: "Fernanda T.", txt: "Sempre tive muito medo de dentista, mas a Dra. Graziela e a equipe do COI me deixaram super tranquila. O resultado do meu clareamento e das facetas ficou natural e perfeito." },
                { p: "Rafael M.", txt: "A atenção aos detalhes é impressionante. Todo o plano de implante foi explicado de forma que eu entendi exatamente o que seria feito. Profissionalismo puro e clínica impecável." },
                { p: "Sílvia C.", txt: "Fiz reabilitação. O cuidado humanizado faz toda a diferença. Recuperei não apenas a função da mordida, mas a alegria e a autoestima de sorrir de novo com toda a confiança." },
              ].map((dep, i) => (
                <div key={i} className={`reveal reveal-delay-${i + 1}`} style={{ padding: "2.5rem", border: "1px solid #DDD6CE", backgroundColor: "#F8F8F8" }}>
                  <div style={{ color: "#8C4A1E", fontSize: "1.25rem", marginBottom: "1.25rem", letterSpacing: "4px" }}>
                    ★★★★★
                  </div>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontStyle: "italic", lineHeight: 1.6, color: "#5C5651", marginBottom: "2rem" }}>
                    "{dep.txt}"
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", fontWeight: 600, color: "#0E0E0E", letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>
                    — {dep.p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTATO ────────────────────────────────────────────────── */}
        <section id="contato" className="section-padding" style={{ backgroundColor: "#F8F8F8" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: "5rem", alignItems: "start",
            }} className="two-col">
              <div className="reveal">
                <p className="label-tag">Entre em contato</p>
                <h2 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 400, color: "#0E0E0E",
                  lineHeight: 1.12, marginBottom: "1.5rem",
                }}>
                  Agende sua avaliação
                </h2>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: "0.9375rem",
                  lineHeight: 1.8, color: "#5C5651", marginBottom: "2.5rem",
                }}>
                  A primeira consulta é o ponto de partida para entender suas necessidades e traçar um plano de tratamento adequado.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {[
                    { l: "Telefone / WhatsApp", v: "(41) 98523-4394" },
                    { l: "E-mail", v: "contato@coi.com.br" },
                    { l: "Endereço", v: "Praça General Osório, 219, Salas 4 — Centro, Curitiba/PR" },
                    { l: "Horário", v: "Seg–Sex: 8h às 18h   |   Sáb: 8h às 13h" },
                  ].map(({ l, v }) => (
                    <div key={l} style={{ borderBottom: "1px solid #DDD6CE", paddingBottom: "1.25rem" }}>
                      <p style={{
                        fontFamily: "var(--font-body)", fontSize: "0.625rem",
                        fontWeight: 500, letterSpacing: "0.14em",
                        textTransform: "uppercase", color: "#8C4A1E", margin: "0 0 0.3rem",
                      }}>{l}</p>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "#0E0E0E", margin: 0 }}>{v}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal reveal-delay-2" style={{ position: "relative" }}>
                <div style={{
                  overflow: "hidden",
                  aspectRatio: "4/5",
                  backgroundColor: "#DDD6CE"
                }}>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.2045938486004!2d-49.278385223847844!3d-25.431420732867512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce40df18d1959%3A0x6bba847c1b5003c2!2sPra%C3%A7a%20Gen.%20Os%C3%B3rio%2C%20219%20-%20Centro%2C%20Curitiba%20-%20PR%2C%2080020-010!5e0!3m2!1spt-BR!2sbr!4v1703000000000!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: "grayscale(100%) sepia(10%) opacity(0.85)" }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ──────────────────────────────────────────────── */}
        <section style={{ padding: "5rem 0", backgroundColor: "#8C4A1E", textAlign: "center" }}>
          <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 2rem" }}>
            <div className="reveal">
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.875rem, 4vw, 3rem)",
                fontWeight: 300, fontStyle: "italic",
                color: "#F8F8F8", lineHeight: 1.2, marginBottom: "1.25rem",
              }}>
                Saúde bucal começa com<br />uma boa avaliação
              </h2>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: "0.9375rem",
                color: "rgba(248,248,248,0.72)",
                marginBottom: "2.25rem", lineHeight: 1.75,
              }}>
                Agende sua consulta inicial e descubra qual tratamento é adequado para você.
              </p>
              <a href="#contato" style={{
                display: "inline-block", backgroundColor: "#F8F8F8",
                color: "#8C4A1E", fontFamily: "var(--font-body)",
                fontSize: "0.75rem", fontWeight: 500,
                letterSpacing: "0.14em", textTransform: "uppercase",
                padding: "0.9rem 2.25rem", border: "1px solid #F8F8F8",
                textDecoration: "none",
                transition: "background-color 0.25s ease, color 0.25s ease",
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#F8F8F8";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#F8F8F8";
                  (e.currentTarget as HTMLElement).style.color = "#8C4A1E";
                }}
              >
                Agendar Avaliação
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
