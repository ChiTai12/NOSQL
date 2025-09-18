import React, { useState, useMemo } from "react";
import "./events.css";
import EventCard from "../components/EventCard";
import EventDetail from "./EventDetail";
import { useNavigate } from "react-router-dom";

export default function EventsPage({ events = [], onSelect, selectedEvent }) {
  const navigate = useNavigate();
  // Filters are not needed for now — show all events
  const filtered = events;

  return (
    <div className="events-page">
      <div className="events-hero">
        <h2 className="events-hero-title">NHỮNG SỰ KIỆN VÀ CÁC HỘI THẢO HOT</h2>
      </div>

      {/* restore first 6 event cards below the hero title */}
      <div className="events-grid">
        {filtered.slice(0, 6).map((e) => (
          <React.Fragment key={e.id}>
            <EventCard
              event={e}
              onView={(ev) => {
                if (onSelect) onSelect(ev);
                navigate(`/events/${ev.id}`);
              }}
            />
            {selectedEvent && selectedEvent.id === e.id && (
              <div className="detail-inline">
                <EventDetail
                  event={selectedEvent}
                  onClose={() => onSelect && onSelect(null)}
                />
              </div>
            )}
          </React.Fragment>
        ))}
        {filtered.length === 0 && <div className="empty">No events found</div>}
      </div>

      {/* promo banner similar to sample: centered heading + CTA */}
      <section className="promo-banner" aria-label="promo">
        <div className="promo-inner">
          <h3 className="promo-title">TẠI SAO NÊN ĐĂNG KÝ</h3>
          <button
            className="promo-cta"
            onClick={() => {
              // basic placeholder action — navigate to contact or open modal
              navigate("/contact");
            }}
          >
            Liên hệ ngay
          </button>
        </div>
      </section>

      {/* clients / partners promo */}
      <section className="clients-section">
        <div className="clients-inner">
          <h4 className="clients-title">Khách hàng của chúng tôi</h4>
          <div className="clients-grid">
            <div className="client-wrap">
              <img
                src="https://logo.clearbit.com/vietcombank.com.vn"
                alt="Vietcombank"
                className="client-logo"
              />
            </div>
            <div className="client-wrap">
              <img
                src="https://logo.clearbit.com/bidv.com.vn"
                alt="BIDV"
                className="client-logo"
              />
            </div>
            <div className="client-wrap featured">
              <img
                src="https://logo.clearbit.com/mbbank.com.vn"
                alt="MB Bank"
                className="client-logo"
              />
            </div>
            <div className="client-wrap">
              <img
                src="https://logo.clearbit.com/acb.com.vn"
                alt="ACB"
                className="client-logo"
              />
            </div>
            <div className="client-wrap">
              <img
                src="https://cdn.freebiesupply.com/logos/large/2x/samsung-1-logo-png-transparent.png"
                alt="Samsung"
                className="client-logo"
              />
            </div>
            <div className="client-wrap">
              <img
                src="https://htdcorp.vn/wp-content/uploads/2016/09/logo-vietinbank.png"
                alt="VietinBank"
                className="client-logo"
              />
            </div>
            <div className="client-wrap">
              <img
                src="https://logo.clearbit.com/techcombank.com"
                alt="Techcombank"
                className="client-logo"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
