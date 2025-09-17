import React from "react";
import "../components/eventcard.css";
import "./eventdetail.css";

export default function EventDetail({ event, onClose }) {
  const defaults = {
    id: "evt-1",
    title: "Hội thảo Khoa học Mùa Thu 2025",
    cover: "/assets/hoithao2.jpg",
    description:
      "Đây là sự kiện kéo dài một ngày, quy tụ các chuyên gia, nhà nghiên cứu và doanh nghiệp hàng đầu trong lĩnh vực AI, dữ liệu lớn và ứng dụng thực tiễn. Hội thảo tập trung giới thiệu những nghiên cứu mới nhất, xu hướng công nghệ nổi bật cùng các giải pháp sáng tạo đang định hình tương lai",
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

  // default highlight bullets (can be overridden by event.highlights)
  const highlights = e.highlights ?? [
    "Quy tụ chuyên gia đầu ngành",
    "Cập nhật nghiên cứu AI, Big Data mới nhất",
    "Giao lưu kết nối học giả – doanh nghiệp",
  ];

  // description is rendered as normal paragraph (no per-letter animation)

  return (
    <main className="event-detail-page">
      <header className="event-hero">
        <img src={e.cover} alt="cover" className="event-cover" />
        <div className="event-hero-inner"></div>
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
              {/* Highlights list for quick skimming */}
              <ul className="highlights-list">
                {highlights.map((h, i) => (
                  <li className="highlight-item" key={i}>
                    <span className="highlight-icon" aria-hidden>
                      ✓
                    </span>
                    <span className="highlight-text">{h}</span>
                  </li>
                ))}
              </ul>
              {/* full description as paragraph (optional) */}
              {e.description && (
                <div className="description-text">
                  <p>{e.description}</p>
                </div>
              )}
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
                <div className="venue-address">
                  <svg
                    className="venue-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="venue-text">{e.location.address}</span>
                </div>

                {/* Google Maps iframe */}
                <div className="venue-map">
                  <iframe
                    src={`https://www.google.com/maps?q=${e.location.lat},${e.location.lng}&hl=vi&z=16&output=embed`}
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bản đồ địa điểm"
                  ></iframe>
                </div>

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
                  <svg
                    className="contact-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"
                      fill="currentColor"
                    />
                  </svg>{" "}
                  Liên hệ:{" "}
                  <a
                    href="mailto:contact@eventhub.example"
                    className="contact-link"
                  >
                    contact@eventhub.example
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Registration CTA at the bottom */}
          <div className="registration-cta">
            <div className="cta-content">
              <p className="cta-text">
                Tham gia cùng hơn 500+ chuyên gia và nhà nghiên cứu
              </p>
              <div className="cta-badges" aria-hidden>
                <span className="badge">500+ chuyên gia</span>
                <span className="badge">Trực tiếp & Online</span>
                <span className="badge">Chứng nhận</span>
              </div>
              <a className="btn registration-btn" href="#register">
                Đăng ký chương trình
              </a>
            </div>
            <img
              src="/assets/alexnguyen.png"
              alt="promotion"
              className="registration-illustration"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
