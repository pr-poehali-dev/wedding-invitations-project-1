import { useState, useRef } from "react";
import Icon from "@/components/ui/icon";

// Исправленные ссылки на фото
const IMG_ROSES = "https://cdn.poehali.dev/projects/29aa877d-7366-4c0c-80d6-0ede894798d4/files/b9b189a7-2a9d-4224-84f0-cb3a6af7ee8.jpg";
const IMG_VENUE = "https://cdn.poehali.dev/projects/29aa877d-7366-4c0c-80d6-0ede894798d4/bucket/39c18553-489b-4637-b897-85ea05dac879.jpeg";
const IMG_CUPID = "https://cdn.poehali.dev/projects/29aa877d-7366-4c0c-80d6-0ede894798d4/files/81ec72d4-0bf2-4eba-a753-437f8967f78a.jpg";

// Романтическая музыка — рабочий CDN
const MUSIC_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

// ВКонтакте: отправка сообщения по номеру телефона
const VK_URL = "https://vk.com/write?phone=79028222722";

const WavyPath = () => (
  <svg viewBox="0 0 120 300" className="absolute left-1/2 -translate-x-1/2" style={{ height: "100%", width: 80, top: 0, opacity: 0.35 }} fill="none">
    <path d="M60,0 C20,50 100,100 60,150 C20,200 100,250 60,300" stroke="#7B1C2E" strokeWidth="1.5" fill="none" />
  </svg>
);

const Script = ({ children, size = "2rem", color = "#7B1C2E", className = "" }: {
  children: React.ReactNode; size?: string; color?: string; className?: string;
}) => (
  <p className={`font-script ${className}`} style={{ fontSize: size, color, lineHeight: 1.25 }}>
    {children}
  </p>
);

const TimingRow = ({ time, title, sub, last }: { time: string; title: string; sub?: string; last?: boolean }) => (
  <div className="text-center py-5" style={{ borderBottom: last ? "none" : "1px solid rgba(123,28,46,0.12)" }}>
    <p className="font-cormorant" style={{ fontSize: "2.4rem", color: "#7B1C2E", fontWeight: 300, lineHeight: 1 }}>{time}</p>
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
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setPlaying(true);
    }
  };

  const handleRsvp = () => {
    if (!name.trim()) return;
    const msg = encodeURIComponent(
      `Ответ на приглашение Евгения и Софии (22.07.2026)\nИмя: ${name}\nПриду: ${attend === "yes" ? "Да ✓" : "Нет ✗"}`
    );
    window.open(`${VK_URL}&message=${msg}`, "_blank");
    setRsvpSent(true);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start pb-10 px-4"
      style={{ background: "linear-gradient(160deg, #6B1422 0%, #8B1A2A 40%, #6B1422 100%)" }}
    >
      {/* Audio */}
      <audio ref={audioRef} loop>
        <source src={MUSIC_URL} type="audio/mpeg" />
      </audio>

      {/* ===== TOP MUSIC BAR ===== */}
      <div
        className="w-full flex flex-col items-center justify-center py-4 px-6 mb-6 gap-2"
        style={{ background: "rgba(0,0,0,0.3)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}
      >
        <button
          onClick={toggleMusic}
          className="flex items-center gap-3 px-7 py-3 rounded-full transition-all"
          style={{
            background: playing ? "#7B1C2E" : "#fff",
            color: playing ? "#fff" : "#7B1C2E",
            border: "2px solid rgba(255,255,255,0.4)",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.72rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            boxShadow: playing ? "0 0 20px rgba(255,255,255,0.15)" : "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          <Icon name={playing ? "Pause" : "Music"} size={16} />
          {playing ? "⏸ Остановить музыку" : "♫ Включить музыку"}
        </button>
        <p className="font-cormorant" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", fontStyle: "italic" }}>
          {playing ? "♫ Enya — Only Time (Sweet November)" : "Нажмите, чтобы включить музыку"}
        </p>
      </div>

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
        <div className="inv-card flex flex-col opacity-0 animate-fade-in-up" style={{ animationFillMode: "forwards", background: "#f5f0eb" }}>
          <div className="px-7 pt-8 pb-4 text-center">
            <Script size="1.5rem" color="#7B1C2E">Мы женимся!</Script>
            <p className="font-script mt-1" style={{ fontSize: "1.15rem", color: "#a0333f" }}>и счастливы пригласить вас</p>
          </div>

          {/* Бордовый конвертик */}
          <div className="flex justify-center px-6 mb-4">
            <div style={{ position: "relative", width: "100%", maxWidth: 220 }}>
              <svg viewBox="0 0 220 155" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", filter: "drop-shadow(0 8px 24px rgba(107,20,34,0.35))" }}>
                {/* Конверт — тело */}
                <rect x="2" y="2" width="216" height="151" rx="6" ry="6" fill="#7B1C2E" />
                {/* Нижние треугольники */}
                <polygon points="2,153 110,85 218,153" fill="#5a1220" />
                {/* Левый треугольник */}
                <polygon points="2,2 2,153 90,77" fill="#6B1422" />
                {/* Правый треугольник */}
                <polygon points="218,2 218,153 130,77" fill="#6B1422" />
                {/* Верхний клапан (открыт) */}
                <polygon points="2,2 218,2 110,78" fill="#9B2235" />
                {/* Полоска-печать */}
                <ellipse cx="110" cy="78" rx="22" ry="15" fill="#C4879A" opacity="0.5" />
                <text x="110" y="83" textAnchor="middle" fontSize="14" fill="#fff" fontFamily="serif" opacity="0.9">♡</text>
                {/* Розы декор */}
                <text x="30" y="130" fontSize="18" fontFamily="serif" opacity="0.6">🌹</text>
                <text x="170" y="130" fontSize="18" fontFamily="serif" opacity="0.6">🌹</text>
              </svg>
              {/* Подпись */}
              <p className="font-script text-center mt-2" style={{ color: "#7B1C2E", fontSize: "1rem" }}>
                Для вас особое приглашение
              </p>
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
            <img
              src={IMG_CUPID}
              alt="Купидон"
              className="object-contain"
              style={{ width: 120, height: 120, mixBlendMode: "multiply" }}
              onError={e => { (e.target as HTMLImageElement).replaceWith(Object.assign(document.createElement("div"), { textContent: "💘", style: "font-size:4rem;text-align:center" })); }}
            />
          </div>

          <div className="px-7 pb-8 text-center">
            <p className="font-cormorant leading-relaxed" style={{ color: "#555", fontSize: "0.95rem", fontStyle: "italic" }}>
              Мы так счастливы пригласить вас разделить с нами радость нашей любви...
            </p>
          </div>
        </div>

        {/* === COLUMN 2 — MIDDLE === */}
        <div className="inv-card flex flex-col opacity-0 animate-fade-in-up delay-200" style={{ animationFillMode: "forwards", background: "#f5f0eb" }}>
          <div className="px-7 pt-8 pb-4 text-center">
            <Script size="2rem" color="#7B1C2E">Локация</Script>
          </div>

          <div className="mx-5 rounded-sm overflow-hidden" style={{ border: "1px solid rgba(123,28,46,0.2)" }}>
            <div style={{ background: "#ede8e0", padding: "12px 14px 6px", textAlign: "center" }}>
              <div style={{ fontSize: "1.2rem" }}>🌸 🌺 🌸</div>
            </div>
            <div className="px-5 py-3 text-center" style={{ background: "#ede8e0" }}>
              <p className="font-cormorant" style={{ color: "#2a1a1a", fontSize: "1.1rem", lineHeight: 1.5 }}>г/к «Аврора», 1 этаж</p>
              <p className="font-sans-inv mt-1" style={{ fontSize: "0.68rem", color: "#666", lineHeight: 1.6 }}>ул. Поворотникова, д. 6</p>
            </div>
            <div className="overflow-hidden" style={{ height: 160 }}>
              <img
                src={IMG_VENUE}
                alt="Аврора Комплекс"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center top" }}
                onError={e => {
                  const el = e.target as HTMLImageElement;
                  el.parentElement!.style.background = "#d4c5b5";
                  el.style.display = "none";
                }}
              />
            </div>
            <div style={{ background: "#ede8e0", padding: "6px 14px 12px", textAlign: "center" }}>
              <div style={{ fontSize: "1.2rem" }}>🌺 🌸 🌺</div>
            </div>
          </div>

          <div className="px-7 pt-8 pb-2 text-center">
            <Script size="2rem" color="#7B1C2E">Тайминг</Script>
          </div>

          <div className="relative px-4 pb-6">
            <WavyPath />
            <div className="relative z-10">
              <TimingRow time="11:20" title="Церемония в ЗАГСе" sub="Центральный ЗАГС" />
              <TimingRow time="16:30" title="Сбор гостей" sub="г/к «Аврора»" />
              <TimingRow time="17:00" title="Праздничный банкет" sub="Торжество и угощения" />
              <TimingRow time="23:00" title="Окончание вечера" sub="Свадебный торт & Прощание" last />
            </div>
          </div>
        </div>

        {/* === COLUMN 3 — RIGHT === */}
        <div className="inv-card flex flex-col opacity-0 animate-fade-in-up delay-400" style={{ animationFillMode: "forwards", background: "#f5f0eb" }}>
          <div className="px-7 pt-8 pb-4 text-center">
            <Script size="1.9rem" color="#7B1C2E">Дресс-код</Script>
          </div>

          <div className="flex justify-center gap-3 mb-4 px-6">
            {[
              { bg: "#6B1422" },
              { bg: "#e8ddd0", border: "#ccc" },
              { bg: "#c4879a" },
              { bg: "#d4c5b5", border: "#bbb" },
            ].map((c, i) => (
              <div key={i} style={{ width: 34, height: 34, borderRadius: "50%", background: c.bg, border: c.border ? `1px solid ${c.border}` : "none", boxShadow: "0 2px 8px rgba(0,0,0,0.12)" }} />
            ))}
          </div>

          <p className="font-cormorant text-center px-6 pb-4 leading-relaxed" style={{ color: "#555", fontSize: "0.9rem", fontStyle: "italic" }}>
            Нам будет приятно видеть вас в тёплых, элегантных нарядах цветовой гаммы нашей свадьбы
          </p>

          <div className="flex justify-center my-2">
            <div style={{ fontSize: "3.5rem" }}>☀️</div>
          </div>

          {/* Guest form */}
          <div className="px-7 pt-4 pb-3 text-center">
            <Script size="1.9rem" color="#7B1C2E">Форма гостя</Script>
            <p className="font-sans-inv mt-2" style={{ fontSize: "0.68rem", color: "#888", letterSpacing: "0.05em" }}>Сможете ли вы прийти?</p>
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
                <input type="radio" name="attend" value="yes" checked={attend === "yes"} onChange={() => setAttend("yes")} style={{ accentColor: "#7B1C2E" }} />
                <span className="font-sans-inv" style={{ fontSize: "0.72rem", color: "#444" }}>Да, с удовольствием буду</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="attend" value="no" checked={attend === "no"} onChange={() => setAttend("no")} style={{ accentColor: "#7B1C2E" }} />
                <span className="font-sans-inv" style={{ fontSize: "0.72rem", color: "#444" }}>К сожалению, не смогу</span>
              </label>
              <button className="rsvp-btn w-full mt-1" onClick={handleRsvp}>
                Подтвердить во ВКонтакте
              </button>
              <p className="text-center font-sans-inv" style={{ fontSize: "0.6rem", color: "#aaa", lineHeight: 1.5 }}>
                Ответ откроется в ВКонтакте
              </p>
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

          {!rsvpSent && (
            <div className="px-6 pb-8 text-center">
              <div style={{ fontSize: "2.5rem", margin: "4px 0" }}>🎀</div>
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