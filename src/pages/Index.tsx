import { useState, useRef } from "react";
import Icon from "@/components/ui/icon";

// Исправленные ссылки на фото
const IMG_ROSES = "https://cdn.poehali.dev/projects/29aa877d-7366-4c0c-80d6-0ede894798d4/files/b9b189a7-2a9d-4224-84f0-cb3a6af7ee8.jpg";
const IMG_VENUE = "https://cdn.poehali.dev/projects/29aa877d-7366-4c0c-80d6-0ede894798d4/bucket/39c18553-489b-4637-b897-85ea05dac879.jpeg";
const IMG_CUPID = "https://cdn.poehali.dev/projects/29aa877d-7366-4c0c-80d6-0ede894798d4/files/81ec72d4-0bf2-4eba-a753-437f8967f78a.jpg";

// Музыка загружена на наш CDN — гарантированно работает
const MUSIC_URL = "https://cdn.poehali.dev/projects/29aa877d-7366-4c0c-80d6-0ede894798d4/files/music/wedding-music.mp3";

// ВКонтакте — прямая ссылка на профиль
const VK_URL = "https://vk.ru/sonechka_nss";

// Конверт с рукой и сургучной печатью
const IMG_ENVELOPE = "https://cdn.poehali.dev/projects/29aa877d-7366-4c0c-80d6-0ede894798d4/bucket/eebf0159-d4e3-4855-b1db-00e8f587acfb.jpeg";

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
  const [error, setError] = useState(false);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.volume = 0.5;
      audio.play()
        .then(() => { setPlaying(true); setError(false); })
        .catch(() => { setError(true); });
    }
  };

  const handleRsvp = () => {
    if (!name.trim()) return;
    const msg = encodeURIComponent(
      `Ответ на приглашение Евгения и Софии (22.07.2026)\nИмя: ${name}\nПриду: ${attend === "yes" ? "Да ✓" : "Нет ✗"}`
    );
    window.open(`https://vk.me/sonechka_nss?msg=${msg}`, "_blank");
    setRsvpSent(true);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start pb-10 px-4"
      style={{ background: "linear-gradient(160deg, #6B1422 0%, #8B1A2A 40%, #6B1422 100%)" }}
    >
      {/* Audio */}
      <audio
        ref={audioRef}
        loop
        onError={() => setError(true)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        preload="auto"
      >
        <source src={MUSIC_URL} type="audio/mpeg" />
      </audio>

      {/* ===== TOP MUSIC BAR ===== */}
      <div
        className="w-full flex flex-col items-center justify-center py-5 px-6 mb-6 gap-3"
        style={{ background: "rgba(0,0,0,0.35)", borderBottom: "1px solid rgba(255,255,255,0.12)" }}
      >
        <button
          onClick={toggleMusic}
          className="flex items-center gap-3 px-8 py-3 rounded-full transition-all"
          style={{
            background: playing ? "#5a1220" : "#fff",
            color: playing ? "#fff" : "#7B1C2E",
            border: playing ? "2px solid rgba(255,255,255,0.25)" : "2px solid #7B1C2E",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            boxShadow: playing ? "0 0 24px rgba(255,255,255,0.1)" : "0 6px 24px rgba(0,0,0,0.35)",
            cursor: "pointer",
            minWidth: 200,
            justifyContent: "center",
          }}
        >
          <Icon name={playing ? "Pause" : "Play"} size={18} />
          {playing ? "Остановить" : "♫ Включить музыку"}
        </button>

        <p className="font-cormorant text-center" style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.88rem", fontStyle: "italic" }}>
          {error
            ? "⚠️ Не удалось загрузить файл"
            : playing
            ? "♫ Романтическая музыка играет..."
            : "Нажмите кнопку, чтобы включить музыку"}
        </p>

        {/* Анимация нот когда играет */}
        {playing && (
          <div className="flex gap-1 items-end" style={{ height: 16 }}>
            {[0.4, 0.8, 0.5, 1, 0.6].map((h, i) => (
              <div
                key={i}
                style={{
                  width: 3,
                  height: `${h * 16}px`,
                  background: "rgba(255,255,255,0.5)",
                  borderRadius: 2,
                  animation: `bounce ${0.6 + i * 0.1}s ease-in-out infinite alternate`,
                }}
              />
            ))}
          </div>
        )}
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

          {/* Конверт с рукой */}
          <div className="px-4 mb-2" style={{ position: "relative" }}>
            <img
              src={IMG_ENVELOPE}
              alt="Приглашение"
              className="w-full rounded-sm"
              style={{ objectFit: "cover", maxHeight: 280, boxShadow: "0 8px 32px rgba(107,20,34,0.3)" }}
            />
            {/* Имена поверх конверта */}
            <div
              style={{
                position: "absolute",
                top: "22%",
                left: 0, right: 0,
                textAlign: "center",
                pointerEvents: "none",
              }}
            >
              <p
                className="font-script"
                style={{
                  color: "#5a1220",
                  fontSize: "clamp(2.4rem, 9vw, 3.4rem)",
                  lineHeight: 1.1,
                  textShadow: "0 2px 12px rgba(255,255,255,0.9), 0 0 30px rgba(255,255,255,0.6)",
                  fontWeight: 400,
                }}
              >
                Евгений
              </p>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#7B1C2E",
                  fontSize: "clamp(1.2rem, 4vw, 1.8rem)",
                  letterSpacing: "0.4em",
                  textShadow: "0 1px 8px rgba(255,255,255,0.9)",
                  margin: "2px 0",
                }}
              >
                &amp;
              </p>
              <p
                className="font-script"
                style={{
                  color: "#5a1220",
                  fontSize: "clamp(2.4rem, 9vw, 3.4rem)",
                  lineHeight: 1.1,
                  textShadow: "0 2px 12px rgba(255,255,255,0.9), 0 0 30px rgba(255,255,255,0.6)",
                  fontWeight: 400,
                }}
              >
                София
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