import React from "react";
import "../components/eventcard.css";
import "./eventdetail.css";

export default function EventDetail({ event, onClose }) {
  const defaults = {
    id: "evt-1",
    title: "Hội thảo Khoa học Mùa Thu 2025",
    cover: "/assets/hoithao2.jpg",
    description:
      "Một ngày hội thảo tập trung vào các nghiên cứu mới nhất trong lĩnh vực AI, dữ liệu lớn và ứng dụng.",
    online: false,
    location: {
      address: "Hội trường A, Đại học ABC, Hà Nội",
      lat: 21.0285,
      lng: 105.8542,
    },
    zoom: "https://zoom.us/j/1234567890",
    agenda: [
      { time: "09:00", title: "Đón tiếp & khai mạc" },
      { time: "09:30", title: "Bài trình bày: AI trong y tế" },
      { time: "10:30", title: "Coffee break" },
      { time: "11:00", title: "Panel: Tương lai dữ liệu" },
    ],
    speakers: [
      {
        name: "TS. Nguyễn Văn A",
        title: "Giảng viên, ĐHQG",
        avatar: "/assets/anhpaner.jpeg",
      },
      {
        name: "PGS. Trần Thị B",
        title: "Nghiên cứu sinh, Viện XYZ",
        avatar: "/assets/sukien2.jpg",
      },
    ],
    tickets: [
      { type: "Free", price: 0 },
      { type: "Standard", price: 200000 },
      { type: "VIP", price: 500000 },
    ],
  };

  const e = {
    ...defaults,
    ...(event || {}),
    location: { ...defaults.location, ...(event?.location || {}) },
    agenda: event?.agenda ?? defaults.agenda,
    speakers: event?.speakers ?? defaults.speakers,
    tickets: event?.tickets ?? defaults.tickets,
  };

  const startStr = e.start ? new Date(e.start).toLocaleString() : null;
  const endStr = e.end ? new Date(e.end).toLocaleString() : null;

  return (
    <main className="event-detail-page">
      <header className="event-hero">
        <img src={e.cover} alt="cover" className="event-cover" />
        <div className="event-hero-inner">
          <h1 className="event-title">{e.title}</h1>
          <p className="event-meta">
            {e.location?.address ?? (e.online ? "Online (Zoom)" : "")}
          </p>
        </div>
        {onClose && (
          <button
            className="detail-close"
            onClick={onClose}
            aria-label="Close detail"
          >
            ×
          </button>
        )}
      </header>

      <div className="event-body unified-layout">
        {/* Unified content without bordered panels */}
        <div className="event-content">
          <section className="content-section description">
            <h2 className="section-title">Mô tả</h2>
            <div className="section-content">
              <p>{e.description}</p>
            </div>
          </section>

          <section className="content-section agenda">
            <h2 className="section-title">Lịch trình (Agenda)</h2>
            <div className="section-content">
              <div className="agenda-list">
                {e.agenda.map((a, idx) => (
                  <div key={idx} className="agenda-item">
                    <span className="agenda-time">{a.time}</span>
                    <span className="agenda-event">{a.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="content-section speakers">
            <h2 className="section-title">Diễn giả</h2>
            <div className="section-content">
              <div className="speakers-grid">
                {e.speakers.map((s, i) => (
                  <div className="speaker-card" key={i}>
                    <img
                      src={s.avatar}
                      alt={s.name}
                      className="speaker-avatar"
                    />
                    <div className="speaker-info">
                      <div className="speaker-name">{s.name}</div>
                      <div className="speaker-role">{s.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="content-section venue">
            <h2 className="section-title">Địa điểm</h2>
            <div className="section-content">
              <div className="venue-info">
                <div className="venue-address">{e.location.address}</div>
                {e.zoom && (
                  <div className="zoom-info">
                    <p>Phần trực tuyến (Zoom) cũng khả dụng cho sự kiện này.</p>
                    {startStr && (
                      <p className="time-range">
                        Thời gian: {startStr}
                        {endStr ? ` — ${endStr}` : ""}
                      </p>
                    )}
                    <a
                      className="zoom-link-inline"
                      href={e.zoom}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Mở Zoom
                    </a>
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className="content-section contact">
            <h2 className="section-title">Thông tin liên hệ</h2>
            <div className="section-content">
              <div className="contact-info">
                <p>
                  Liên hệ:{" "}
                  <a href="mailto:contact@eventhub.example">
                    contact@eventhub.example
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Registration CTA at the bottom */}
          <div className="registration-cta">
            <a className="btn btn-primary registration-btn" href="#register">
              Đăng ký chương trình
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
