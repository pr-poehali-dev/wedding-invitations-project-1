import { useState } from "react";
import Icon from "@/components/ui/icon";

const BG_IMAGE = "https://cdn.poehali.dev/projects/29aa877d-7366-4c0c-80d6-0ede894798d4/files/0ef8792d-3b32-4f71-9cae-ecf051a403e0.jpg";

const CornerOrnament = ({ position }: { position: string }) => {
  const classes: Record<string, string> = {
    "tl": "top-4 left-4 border-t-2 border-l-2",
    "tr": "top-4 right-4 border-t-2 border-r-2",
    "bl": "bottom-4 left-4 border-b-2 border-l-2",
    "br": "bottom-4 right-4 border-b-2 border-r-2",
  };
  return <div className={`corner-ornament ${classes[position]}`} />;
};

const DetailCard = ({
  icon,
  label,
  value,
  sub,
  delay,
}: {
  icon: string;
  label: string;
  value: string;
  sub?: string;
  delay: string;
}) => (
  <div
    className={`details-card rounded-2xl p-6 text-center opacity-0 animate-fade-in-up ${delay}`}
    style={{ animationFillMode: "forwards" }}
  >
    <div className="flex justify-center mb-3">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center"
        style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)" }}
      >
        <Icon name={icon} fallback="Star" size={22} className="text-yellow-400" />
      </div>
    </div>
    <p className="text-xs uppercase tracking-[0.2em] mb-1" style={{ color: "var(--gold)", fontFamily: "'Montserrat', sans-serif" }}>
      {label}
    </p>
    <p
      className="text-xl font-light leading-tight"
      style={{ fontFamily: "'Cormorant Garamond', serif", color: "#F5E6C0", fontSize: "1.2rem" }}
    >
      {value}
    </p>
    {sub && (
      <p className="text-xs mt-1" style={{ color: "rgba(245,230,192,0.5)", fontFamily: "'Montserrat', sans-serif" }}>
        {sub}
      </p>
    )}
  </div>
);

export default function Index() {
  const [rsvpSent, setRsvpSent] = useState(false);
  const [form, setForm] = useState({ name: "", guests: "1", attend: "yes" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRsvpSent(true);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start py-10 px-4 bg-pattern"
      style={{ backgroundColor: "var(--navy)", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "fixed",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        className="invitation-card relative w-full max-w-2xl rounded-3xl px-8 py-12 md:px-14 md:py-16 opacity-0 animate-fade-in"
        style={{ animationFillMode: "forwards", zIndex: 1 }}
      >
        <CornerOrnament position="tl" />
        <CornerOrnament position="tr" />
        <CornerOrnament position="bl" />
        <CornerOrnament position="br" />

        <div
          className="w-full h-40 rounded-2xl mb-10 overflow-hidden opacity-0 animate-fade-in delay-100"
          style={{ animationFillMode: "forwards", position: "relative" }}
        >
          <img
            src={BG_IMAGE}
            alt="Свадебный декор"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 30%" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "80px",
              background: "linear-gradient(to bottom, transparent, #141628)",
            }}
          />
        </div>

        <p
          className="text-center uppercase tracking-[0.35em] text-xs mb-5 opacity-0 animate-fade-in-up delay-200"
          style={{
            color: "var(--gold)",
            fontFamily: "'Montserrat', sans-serif",
            animationFillMode: "forwards",
          }}
        >
          Вы приглашены
        </p>

        <h1
          className="gold-text text-center mb-3 leading-none opacity-0 animate-fade-in-up delay-300"
          style={{
            fontFamily: "'Cormorant SC', serif",
            fontSize: "clamp(2.8rem, 10vw, 5rem)",
            fontWeight: 300,
            letterSpacing: "0.04em",
            animationFillMode: "forwards",
          }}
        >
          Анна & Михаил
        </h1>

        <div
          className="flex items-center justify-center gap-4 my-6 opacity-0 animate-fade-in-up delay-400"
          style={{ animationFillMode: "forwards" }}
        >
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.5))" }} />
          <span style={{ color: "var(--gold)", fontSize: "1.1rem" }}>✦</span>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              color: "rgba(245,230,192,0.55)",
              fontSize: "1rem",
              fontWeight: 300,
            }}
          >
            приглашают разделить радость этого дня
          </p>
          <span style={{ color: "var(--gold)", fontSize: "1.1rem" }}>✦</span>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(201,168,76,0.5), transparent)" }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <DetailCard icon="Calendar" label="Дата" value="14 июня 2025" sub="Суббота" delay="delay-400" />
          <DetailCard icon="Clock" label="Время" value="17:00" sub="Начало церемонии" delay="delay-500" />
          <DetailCard icon="MapPin" label="Место" value='Усадьба "Дворянское гнездо"' sub="Москва, Рублёвское шоссе, 42" delay="delay-600" />
        </div>

        <div
          className="flex items-center justify-center gap-3 mt-8 mb-6 opacity-0 animate-fade-in-up delay-800"
          style={{ animationFillMode: "forwards" }}
        >
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.25))" }} />
          <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ border: "1px solid rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.06)" }}>
            <Icon name="Sparkles" size={14} style={{ color: "var(--gold)" }} />
            <span className="text-xs uppercase tracking-[0.2em]" style={{ color: "var(--gold-light)", fontFamily: "'Montserrat', sans-serif" }}>
              Дресс-код: Black Tie
            </span>
          </div>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(201,168,76,0.25), transparent)" }} />
        </div>

        <div
          className="mt-8 opacity-0 animate-fade-in-up delay-1000"
          style={{ animationFillMode: "forwards" }}
        >
          <p
            className="text-center mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              color: "rgba(245,230,192,0.45)",
              fontSize: "0.95rem",
              letterSpacing: "0.03em",
            }}
          >
            Пожалуйста, подтвердите своё присутствие до 1 июня 2025
          </p>

          {!rsvpSent ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                  style={{
                    background: "rgba(201,168,76,0.06)",
                    border: "1px solid rgba(201,168,76,0.25)",
                    color: "#F5E6C0",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.6)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.25)")}
                />
                <select
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{
                    background: "rgba(201,168,76,0.06)",
                    border: "1px solid rgba(201,168,76,0.25)",
                    color: "#F5E6C0",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  <option value="1" style={{ background: "#141628" }}>1 гость</option>
                  <option value="2" style={{ background: "#141628" }}>2 гостя</option>
                  <option value="3" style={{ background: "#141628" }}>3 гостя</option>
                  <option value="4" style={{ background: "#141628" }}>4+ гостей</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {(["yes", "no"] as const).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setForm({ ...form, attend: opt })}
                    className="py-3 rounded-xl text-xs uppercase tracking-[0.15em] transition-all"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      background: form.attend === opt ? "rgba(201,168,76,0.2)" : "rgba(201,168,76,0.05)",
                      border: form.attend === opt ? "1px solid rgba(201,168,76,0.6)" : "1px solid rgba(201,168,76,0.2)",
                      color: form.attend === opt ? "var(--gold-light)" : "rgba(245,230,192,0.5)",
                    }}
                  >
                    {opt === "yes" ? "✓ Приду" : "✗ Не смогу"}
                  </button>
                ))}
              </div>

              <button type="submit" className="rsvp-btn w-full py-4 rounded-xl text-sm animate-glow">
                Подтвердить участие
              </button>
            </form>
          ) : (
            <div
              className="text-center py-8 rounded-2xl"
              style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.3)" }}
            >
              <div className="text-3xl mb-3" style={{ color: "var(--gold)" }}>✦</div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", color: "var(--gold-light)", fontStyle: "italic" }}>
                Спасибо! До встречи на торжестве
              </p>
              <p className="text-xs mt-2" style={{ color: "rgba(245,230,192,0.4)", fontFamily: "'Montserrat', sans-serif" }}>
                Мы свяжемся с вами для уточнения деталей
              </p>
            </div>
          )}
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 pt-8 opacity-0 animate-fade-in-up delay-1000"
          style={{ borderTop: "1px solid rgba(201,168,76,0.15)", animationFillMode: "forwards" }}
        >
          <a
            href="tel:+79991234567"
            className="flex items-center gap-2 text-sm transition-opacity hover:opacity-80"
            style={{ color: "rgba(245,230,192,0.5)", fontFamily: "'Montserrat', sans-serif" }}
          >
            <Icon name="Phone" size={14} style={{ color: "var(--gold)" }} />
            +7 (999) 123-45-67
          </a>
          <span style={{ color: "rgba(201,168,76,0.3)" }}>·</span>
          <a
            href="mailto:wedding@example.com"
            className="flex items-center gap-2 text-sm transition-opacity hover:opacity-80"
            style={{ color: "rgba(245,230,192,0.5)", fontFamily: "'Montserrat', sans-serif" }}
          >
            <Icon name="Mail" size={14} style={{ color: "var(--gold)" }} />
            wedding@example.com
          </a>
        </div>

        <p
          className="text-center mt-6 opacity-0 animate-fade-in delay-1000"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            color: "rgba(201,168,76,0.3)",
            fontSize: "0.85rem",
            letterSpacing: "0.08em",
            animationFillMode: "forwards",
          }}
        >
          «Любовь никогда не перестаёт»
        </p>
      </div>
    </div>
  );
}