import { useState } from "react";
import Icon from "@/components/ui/icon";

const RESTAURANT_IMG = "https://cdn.poehali.dev/projects/29aa877d-7366-4c0c-80d6-0ede894798d4/files/7af58d6e-786f-4039-80a2-00f824e43ade.jpg";

const WavyLine = ({ color = "#7B1C2E", opacity = 0.35 }: { color?: string; opacity?: number }) => (
  <svg viewBox="0 0 280 60" className="w-full" style={{ height: 50, opacity }} fill="none">
    <path
      d="M0,30 C40,10 60,50 100,30 C140,10 160,50 200,30 C240,10 260,50 280,30"
      stroke={color}
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3
    className="font-script text-center mb-4"
    style={{ color: "var(--bordeaux)", fontSize: "2rem", lineHeight: 1.2 }}
  >
    {children}
  </h3>
);

const HeartDivider = () => (
  <div className="flex justify-center my-4" style={{ color: "var(--bordeaux)", fontSize: "1.1rem", opacity: 0.7 }}>
    ♡
  </div>
);

export default function Index() {
  const [rsvpSent, setRsvpSent] = useState(false);
  const [name, setName] = useState("");

  // Июль 2026: 1 июля — среда (смещение 2)
  const calDays = [
    null, null, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 10, 11, 12,
    13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30, 31,
  ];

  return (
    <div
      className="min-h-screen flex items-start justify-center py-10 px-4"
      style={{ background: "linear-gradient(135deg, #7B1C2E 0%, #5a1220 50%, #7B1C2E 100%)" }}
    >
      <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-4 items-start">

        {/* === LEFT CARD === */}
        <div
          className="inv-card w-full lg:w-5/12 px-8 py-10 opacity-0 animate-fade-in-up flex flex-col"
          style={{ animationFillMode: "forwards" }}
        >
          {/* Names */}
          <p
            className="font-script text-center mb-6"
            style={{ color: "var(--bordeaux)", fontSize: "1.9rem" }}
          >
            Евгений & София
          </p>

          {/* LOVE typography */}
          <div className="flex justify-center mb-6">
            <div style={{ lineHeight: 0.9, fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
              <div style={{ fontSize: "4.8rem", letterSpacing: "-0.02em", color: "#1a1a1a" }}>
                <span>L</span>
                <span style={{ color: "var(--bordeaux)", marginLeft: "0.5rem" }}>O</span>
              </div>
              <div style={{ fontSize: "4.8rem", letterSpacing: "-0.02em", color: "var(--bordeaux)" }}>
                <span style={{ color: "#1a1a1a" }}>V</span>
                <span>E</span>
              </div>
            </div>
          </div>

          {/* Date */}
          <p
            className="text-center mb-8 tracking-[0.25em] font-sans-inv"
            style={{ fontSize: "0.78rem", color: "var(--text-dark)", fontWeight: 500 }}
          >
            22 ИЮЛЯ 2026
          </p>

          <WavyLine />

          {/* Greeting */}
          <div className="mt-4 mb-6 text-center">
            <p
              className="font-script mb-3"
              style={{ color: "var(--bordeaux)", fontSize: "1.6rem" }}
            >
              Дорогие друзья и близкие!
            </p>
            <p
              className="font-cormorant leading-relaxed"
              style={{ color: "var(--text-mid)", fontSize: "1.05rem", fontStyle: "italic" }}
            >
              В нашей жизни скоро состоится важное событие — наша свадьба!
            </p>
            <p
              className="font-cormorant leading-relaxed mt-2"
              style={{ color: "var(--text-mid)", fontSize: "1.05rem", fontStyle: "italic" }}
            >
              Приглашаем Вас разделить с нами радость этого неповторимого события!
            </p>
          </div>

          <WavyLine />

          {/* Calendar */}
          <div className="mt-6 mb-6">
            <p
              className="text-center mb-4 tracking-[0.2em] font-sans-inv"
              style={{ fontSize: "0.7rem", color: "var(--text-dark)", fontWeight: 500 }}
            >
              ИЮЛЬ 2026
            </p>
            <div className="cal-grid mb-1 px-2">
              {["Пн","Вт","Ср","Чт","Пт","Сб","Вс"].map(d => (
                <div key={d} className="cal-day font-sans-inv" style={{ color: "var(--text-light)", fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.05em" }}>
                  {d}
                </div>
              ))}
            </div>
            <div className="cal-grid px-2">
              {calDays.map((day, i) => (
                <div
                  key={i}
                  className={`cal-day font-sans-inv ${day === 22 ? "highlight" : ""}`}
                  style={{ color: day ? "var(--text-dark)" : "transparent" }}
                >
                  {day || "·"}
                </div>
              ))}
            </div>
          </div>

          <WavyLine />

          {/* Location */}
          <div className="mt-6">
            <p
              className="font-script text-center mb-4"
              style={{ color: "var(--bordeaux)", fontSize: "1.7rem" }}
            >
              Локация
            </p>
            <div className="flex gap-4 items-start">
              <img
                src={RESTAURANT_IMG}
                alt="Ресторан"
                className="rounded-sm object-cover flex-shrink-0"
                style={{ width: 110, height: 110, filter: "grayscale(100%)" }}
              />
              <div className="pt-1">
                <p
                  className="font-cormorant font-light"
                  style={{ color: "var(--text-dark)", fontSize: "1rem", lineHeight: 1.5 }}
                >
                  г/к «Аврора», 1 этаж
                </p>
                <p className="font-sans-inv mt-1" style={{ color: "var(--text-light)", fontSize: "0.72rem", lineHeight: 1.6 }}>
                  ул. Поворотникова, д. 6
                </p>
                <div className="flex items-center gap-1 mt-2">
                  <Icon name="Phone" size={11} style={{ color: "var(--bordeaux)" }} />
                  <span className="font-sans-inv" style={{ fontSize: "0.7rem", color: "var(--text-light)" }}>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <Icon name="Mail" size={11} style={{ color: "var(--bordeaux)" }} />
                  <span className="font-sans-inv" style={{ fontSize: "0.7rem", color: "var(--text-light)" }}>wedding@example.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* === RIGHT CARD === */}
        <div
          className="inv-card w-full lg:w-7/12 px-8 py-10 opacity-0 animate-fade-in-up delay-200 flex flex-col"
          style={{ animationFillMode: "forwards" }}
        >
          {/* Timeline */}
          <SectionTitle>Тайминг</SectionTitle>
          <WavyLine />

          <div className="mt-4 space-y-0">
            {[
              { time: "11:20", title: "Церемония", desc: "Центральный ЗАГС — приготовьте платочки для слёз счастья" },
              { time: "16:30", title: "Сбор гостей", desc: "Просим взять с собой ваше хорошее настроение" },
              { time: "17:00", title: "Праздничный банкет", desc: "Время для вкусной еды и зажигательных танцев" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-5 py-4" style={{ borderBottom: idx < 2 ? "1px solid rgba(0,0,0,0.06)" : "none" }}>
                <div className="flex-shrink-0 pt-1">
                  <p
                    className="font-cormorant"
                    style={{ color: "var(--bordeaux)", fontSize: "1.4rem", fontWeight: 400, minWidth: 52 }}
                  >
                    {item.time}
                  </p>
                </div>
                <div>
                  <p
                    className="font-script"
                    style={{ color: "var(--text-dark)", fontSize: "1.35rem", lineHeight: 1.2 }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="font-cormorant mt-1"
                    style={{ color: "var(--text-light)", fontSize: "0.9rem", fontStyle: "italic", lineHeight: 1.5 }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <WavyLine />
          </div>

          {/* Dress code */}
          <div className="mt-6">
            <SectionTitle>Дресс-код</SectionTitle>
            <p
              className="font-cormorant text-center leading-relaxed mb-5"
              style={{ color: "var(--text-mid)", fontSize: "0.95rem", fontStyle: "italic" }}
            >
              Нам будет особенно приятно видеть вас в нарядах цветовой гаммы нашей свадьбы.
              Для дам просим выбрать вечерние и коктейльные платья, для джентльменов уместным будет классический костюм с белой рубашкой.
            </p>
            <div className="flex gap-2 px-4">
              <div className="swatch" style={{ background: "var(--bordeaux)" }} />
              <div className="swatch" style={{ background: "var(--navy-blue)" }} />
              <div className="swatch" style={{ background: "var(--sage)" }} />
            </div>
          </div>

          <div className="mt-8">
            <WavyLine />
          </div>

          {/* Wishes */}
          <div className="mt-6">
            <SectionTitle>Пожелания</SectionTitle>
            <p
              className="font-cormorant text-center mb-4"
              style={{ color: "var(--text-mid)", fontSize: "0.95rem", fontStyle: "italic", lineHeight: 1.6 }}
            >
              Наше мероприятие рассчитано на взрослую публику. Поэтому просим вас позаботиться о том, чтобы в этот вечер ваши дети были в надёжных руках!
            </p>
            <HeartDivider />
            <p
              className="font-cormorant text-center mb-4"
              style={{ color: "var(--text-mid)", fontSize: "0.95rem", fontStyle: "italic", lineHeight: 1.6 }}
            >
              Приятным комплиментом для нас будет, если вместо цветов вы решите подарить нам бутылочку любимого напитка.
            </p>
            <HeartDivider />
            <p
              className="font-cormorant text-center mb-4"
              style={{ color: "var(--text-mid)", fontSize: "0.95rem", fontStyle: "italic", lineHeight: 1.6 }}
            >
              От всего сердца просим вас воздержаться от криков «Горько!» и сохранить атмосферу семейного праздника.
            </p>
            <HeartDivider />
            <p
              className="font-cormorant text-center"
              style={{ color: "var(--text-mid)", fontSize: "0.95rem", fontStyle: "italic", lineHeight: 1.6 }}
            >
              Просим подтвердить ваше присутствие до 1 июля 2026 года любым удобным для вас способом.
            </p>
          </div>

          {/* RSVP */}
          <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
            {!rsvpSent ? (
              <div className="flex flex-col items-center gap-4">
                <p
                  className="font-script text-center"
                  style={{ color: "var(--bordeaux)", fontSize: "1.8rem" }}
                >
                  Подтвердите участие
                </p>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full max-w-xs px-4 py-3 text-sm outline-none font-sans-inv"
                  style={{
                    border: "1px solid rgba(123,28,46,0.25)",
                    borderRadius: 2,
                    color: "var(--text-dark)",
                    background: "#fafafa",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.8rem",
                  }}
                />
                <button
                  className="rsvp-btn"
                  onClick={() => name.trim() && setRsvpSent(true)}
                >
                  Подтвердить
                </button>
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="font-script" style={{ color: "var(--bordeaux)", fontSize: "2rem" }}>
                  Будем вас ждать!
                </p>
                <p className="font-cormorant mt-2" style={{ color: "var(--text-light)", fontStyle: "italic", fontSize: "0.95rem" }}>
                  До встречи на торжестве ♡
                </p>
              </div>
            )}

            {!rsvpSent && (
              <p
                className="font-script text-center mt-8"
                style={{ color: "var(--bordeaux)", fontSize: "2rem", opacity: 0.8 }}
              >
                Будем вас ждать!
              </p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}