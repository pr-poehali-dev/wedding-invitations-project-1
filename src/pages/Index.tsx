import { useState, useRef } from "react";
import Icon from "@/components/ui/icon";

const IMG_ROSES = "https://cdn.poehali.dev/projects/29aa877d-7366-4c0c-80d6-0ede894798d4/files/b9b189a7-2a9d-4224-84f0-cb3a6d7ee8.jpg";
const IMG_VENUE = "https://cdn.poehali.dev/projects/29aa877d-7366-4c0c-80d6-0ede894798d4/bucket/39c18553-489b-4637-b897-85ea05dac879.jpeg";
const IMG_CUPID = "https://cdn.poehali.dev/projects/29aa877d-7366-4c0c-80d6-0ede894798d4/files/81ec72d4-0bf2-4eba-a753-437f8967f78a.jpg";

const WavyPath = () => (
  <svg viewBox="0 0 120 300" className="absolute left-1/2 -translate-x-1/2" style={{ height: "100%", width: 80, top: 0, opacity: 0.35 }} fill="none">
    <path
      d="M60,0 C20,50 100,100 60,150 C20,200 100,250 60,300"
      stroke="#7B1C2E"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

const Script = ({ children, size = "2rem", color = "#7B1C2E", className = "" }: {
  children: React.ReactNode; size?: string; color?: string; className?: string;
}) => (
  <p className={`font-script ${className}`} style={{ fontSize: size, color, lineHeight: 1.25 }}>
    {children}
  </p>
);

const TimingRow = ({ time, title, sub }: { time: string; title: string; sub?: string }) => (
  <div className="text-center py-5" style={{ borderBottom: "1px solid rgba(123,28,46,0.12)" }}>
    <p className="font-cormorant" style={{ fontSize: "2.4rem", color: "#7B1C2E", fontWeight: 300, lineHeight: 1 }}>
      {time}
    </p>
    <p className="font-script mt-1" style={{ fontSize: "1.3rem", color: "#2a1a1a" }}>{title}</p>
    {sub && <p className="font-sans-inv mt-1" style={{ fontSize: "0.65rem", color: "#888", letterSpacing: "0.08em" }}>{sub}</p>}
  </div>
);

export default function Index() {
  const [rsvpSent, setRsvpSent] = useState(false);
  const [name, setName] = useState("");
  const [attend, setAttend] = useState("yes");
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (playing) { audioRef.current.pause(); setPlaying(false); }
    else { audioRef.current.play().catch(() => {}); setPlaying(true); }
  };

  const handleAudioReady = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start py-10 px-4"
      style={{ background: "linear-gradient(160deg, #6B1422 0%, #8B1A2A 40%, #6B1422 100%)" }}
    >
      {/* Background music — autoplay on load */}
      <audio ref={audioRef} loop onCanPlayThrough={handleAudioReady}>
        <source src="https://www.bensound.com/bensound-music/bensound-romantic.mp3" type="audio/mpeg" />
      </audio>

      {/* Music toggle */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full shadow-lg transition-all"
        style={{
          background: playing ? "rgba(123,28,46,0.95)" : "rgba(255,255,255,0.92)",
          color: playing ? "#fff" : "#7B1C2E",
          border: "1px solid rgba(123,28,46,0.3)",
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "0.65rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        <Icon name={playing ? "Pause" : "Music"} size={14} />
        {playing ? "Пауза" : "Музыка"}
      </button>

      {/* Header */}
      <div className="text-center mb-8 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
        <p className="font-script" style={{ color: "#fff", fontSize: "2.8rem" }}>Свадебное приглашение</p>
        <p className="font-sans-inv mt-1 tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.65rem" }}>
          ЕВГЕНИЙ & СОФИЯ · 22 ИЮЛЯ 2026
        </p>
      </div>

      {/* Three columns */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-4 items-start">

        {/* === COLUMN 1 — LEFT === */}
        <div
          className="inv-card flex flex-col opacity-0 animate-fade-in-up"
          style={{ animationFillMode: "forwards", background: "#f5f0eb" }}
        >
          {/* Top script */}
          <div className="px-7 pt-8 pb-4 text-center">
            <Script size="1.5rem" color="#7B1C2E">Мы женимся!</Script>
            <p className="font-script mt-1" style={{ fontSize: "1.15rem", color: "#a0333f" }}>и счастливы пригласить вас</p>
          </div>

          {/* Roses photo instead of couple */}
          <div className="px-6 mb-2">
            <div className="relative rounded-sm overflow-hidden" style={{ border: "3px solid #fff", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
              <img src={IMG_ROSES} alt="Букет" className="w-full object-cover" style={{ height: 200 }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 60%, rgba(245,240,235,0.25))" }} />
            </div>
          </div>

          {/* Save the date */}
          <div className="mx-6 my-4 px-5 py-5 text-center" style={{ border: "1.5px solid #7B1C2E" }}>
            <p className="font-sans-inv uppercase tracking-[0.2em]" style={{ fontSize: "0.62rem", color: "#2a1a1a", fontWeight: 600 }}>
              Save the date
            </p>
            <p className="font-cormorant mt-1" style={{ fontSize: "2.4rem", color: "#7B1C2E", fontWeight: 300, fontStyle: "italic" }}>
              22 / 07 / 26
            </p>
          </div>

          {/* Cupid */}
          <div className="flex justify-center my-2">
            <img src={IMG_CUPID} alt="Купидон" className="object-contain" style={{ width: 120, height: 120, mixBlendMode: "multiply" }} />
          </div>

          {/* Greeting */}
          <div className="px-7 pb-8 text-center">
            <p className="font-cormorant leading-relaxed" style={{ color: "#555", fontSize: "0.95rem", fontStyle: "italic" }}>
              Мы так счастливы пригласить вас разделить с нами радость нашей любви...
            </p>
          </div>
        </div>

        {/* === COLUMN 2 — MIDDLE === */}
        <div
          className="inv-card flex flex-col opacity-0 animate-fade-in-up delay-200"
          style={{ animationFillMode: "forwards", background: "#f5f0eb" }}
        >
          {/* Location */}
          <div className="px-7 pt-8 pb-4 text-center">
            <Script size="2rem" color="#7B1C2E">Локация</Script>
          </div>

          {/* Venue card */}
          <div className="mx-5 rounded-sm overflow-hidden" style={{ border: "1px solid rgba(123,28,46,0.2)" }}>
            <div style={{ background: "#ede8e0", padding: "12px 14px 6px", textAlign: "center" }}>
              <div style={{ fontSize: "1.2rem" }}>🌸 🌺 🌸</div>
            </div>
            <div className="px-5 py-3 text-center" style={{ background: "#ede8e0" }}>
              <p className="font-cormorant" style={{ color: "#2a1a1a", fontSize: "1.1rem", lineHeight: 1.5 }}>
                г/к «Аврора», 1 этаж
              </p>
              <p className="font-sans-inv mt-1" style={{ fontSize: "0.68rem", color: "#666", lineHeight: 1.6 }}>
                ул. Поворотникова, д. 6
              </p>
            </div>
            <div className="overflow-hidden" style={{ height: 140 }}>
              <img src={IMG_VENUE} alt="Локация" className="w-full h-full object-cover" style={{ filter: "grayscale(40%)" }} />
            </div>
            <div style={{ background: "#ede8e0", padding: "6px 14px 12px", textAlign: "center" }}>
              <div style={{ fontSize: "1.2rem" }}>🌺 🌸 🌺</div>
            </div>
          </div>

          {/* Timing */}
          <div className="px-7 pt-8 pb-2 text-center">
            <Script size="2rem" color="#7B1C2E">Тайминг</Script>
          </div>

          {/* Wavy + timing items */}
          <div className="relative px-4">
            <WavyPath />
            <div className="relative z-10">
              <TimingRow time="11:20" title="Церемония в ЗАГСе" sub="Центральный ЗАГС" />
              <TimingRow time="16:30" title="Сбор гостей" sub="г/к «Аврора»" />
              <TimingRow time="17:00" title="Праздничный банкет" sub="Торжество и угощения" />
              <div className="text-center py-5">
                <p className="font-cormorant" style={{ fontSize: "2.4rem", color: "#7B1C2E", fontWeight: 300, lineHeight: 1 }}>
                  23:00
                </p>
                <p className="font-script mt-1" style={{ fontSize: "1.3rem", color: "#2a1a1a" }}>Окончание вечера</p>
                <p className="font-sans-inv mt-1" style={{ fontSize: "0.65rem", color: "#888", letterSpacing: "0.08em" }}>
                  Свадебный торт & Прощание
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* === COLUMN 3 — RIGHT === */}
        <div
          className="inv-card flex flex-col opacity-0 animate-fade-in-up delay-400"
          style={{ animationFillMode: "forwards", background: "#f5f0eb" }}
        >
          {/* Dress code */}
          <div className="px-7 pt-8 pb-4 text-center">
            <Script size="1.9rem" color="#7B1C2E">Дресс-код</Script>
          </div>

          {/* Color circles */}
          <div className="flex justify-center gap-3 mb-4 px-6">
            {[
              { bg: "#6B1422", label: "Бордо" },
              { bg: "#e8ddd0", label: "Крем", border: "#ccc" },
              { bg: "#c4879a", label: "Пудра" },
              { bg: "#d4c5b5", label: "Беж", border: "#bbb" },
            ].map(c => (
              <div key={c.bg} className="flex flex-col items-center gap-1">
                <div
                  style={{
                    width: 34, height: 34, borderRadius: "50%",
                    background: c.bg,
                    border: c.border ? `1px solid ${c.border}` : "none",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                  }}
                />
              </div>
            ))}
          </div>

          <p className="font-cormorant text-center px-6 pb-4 leading-relaxed" style={{ color: "#555", fontSize: "0.9rem", fontStyle: "italic" }}>
            Нам будет приятно видеть вас в тёплых, элегантных нарядах цветовой гаммы нашей свадьбы
          </p>

          {/* Sun decoration */}
          <div className="flex justify-center my-2">
            <div style={{ fontSize: "3.5rem", filter: "drop-shadow(0 2px 6px rgba(180,130,0,0.3))" }}>☀️</div>
          </div>

          {/* Guest form */}
          <div className="px-7 pt-6 pb-4 text-center">
            <Script size="1.9rem" color="#7B1C2E">Форма гостя</Script>
            <p className="font-sans-inv mt-2" style={{ fontSize: "0.68rem", color: "#888", letterSpacing: "0.05em" }}>
              Сможете ли вы прийти?
            </p>
          </div>

          {!rsvpSent ? (
            <div className="px-6 pb-6 flex flex-col gap-3">
              <input
                type="text"
                placeholder="Имя Фамилия"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full px-4 py-3 text-sm outline-none"
                style={{
                  border: "1px solid rgba(123,28,46,0.3)",
                  borderRadius: 2,
                  background: "#fff",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.75rem",
                  color: "#2a1a1a",
                }}
              />
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio" name="attend" value="yes"
                  checked={attend === "yes"} onChange={() => setAttend("yes")}
                  style={{ accentColor: "#7B1C2E" }}
                />
                <span className="font-sans-inv" style={{ fontSize: "0.72rem", color: "#444" }}>Да, с удовольствием буду</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio" name="attend" value="no"
                  checked={attend === "no"} onChange={() => setAttend("no")}
                  style={{ accentColor: "#7B1C2E" }}
                />
                <span className="font-sans-inv" style={{ fontSize: "0.72rem", color: "#444" }}>К сожалению, не смогу</span>
              </label>
              <button
                className="rsvp-btn w-full mt-1"
                onClick={() => name.trim() && setRsvpSent(true)}
              >
                Подтвердить
              </button>
            </div>
          ) : (
            <div className="px-6 pb-8 text-center">
              <div style={{ fontSize: "2rem", marginBottom: 8 }}>🎀</div>
              <Script size="2rem" color="#7B1C2E">Будем вас ждать!</Script>
              <p className="font-cormorant mt-2" style={{ color: "#888", fontStyle: "italic", fontSize: "0.9rem" }}>
                До встречи на торжестве ♡
              </p>
            </div>
          )}

          {/* Bow + See you */}
          {rsvpSent || (
            <div className="px-6 pb-8 text-center">
              <div style={{ fontSize: "2.5rem", margin: "8px 0" }}>🎀</div>
              <Script size="2rem" color="#7B1C2E">Будем вас ждать!</Script>
            </div>
          )}
        </div>

      </div>

      {/* Footer */}
      <div className="mt-8 text-center opacity-0 animate-fade-in delay-600" style={{ animationFillMode: "forwards" }}>
        <p className="font-script" style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.4rem" }}>
          Евгений & София · 22 июля 2026
        </p>
      </div>
    </div>
  );
}