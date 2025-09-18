import React, { useState, useMemo, useEffect, useRef } from "react";
import "./events.css";
import EventCard from "../components/EventCard";
import EventDetail from "./EventDetail";
import { useNavigate } from "react-router-dom";

export default function EventsPage({ events = [], onSelect, selectedEvent }) {
  const navigate = useNavigate();
  const clientsRef = useRef(null);
  useEffect(() => {
    const el = clientsRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // add class to closest wrapper so title + underline can animate together
            const wrapper = el.closest(".clients-inner") || el;
            wrapper.classList.add("in-view");
            // also add to the grid for backward-compatible selectors
            el.classList.add("in-view");
            // once visible, unobserve
            io.unobserve(entry.target);
          }
        });
      },
      { root: null, threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
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
                // mock-only: disable navigation and selection
                return null;
              }}
            />
            {selectedEvent && selectedEvent.id === e.id && (
              <div className="detail-inline">
                <EventDetail
                  event={selectedEvent}
                  onClose={() => {
                    // mock-only: do not change selection
                    return null;
                  }}
                />
              </div>
            )}
          </React.Fragment>
        ))}
        {filtered.length === 0 && <div className="empty">No events found</div>}
      </div>

      {/* promo banner with side-by-side layout */}
      <section className="promo-banner" aria-label="promo">
        <div className="promo-inner">
          <div className="promo-content">
            <h3 className="promo-title">TẠI SAO NÊN ĐĂNG KÝ</h3>
            <button
              className="promo-cta"
              type="button"
              onClick={(ev) => {
                // mock-only: prevent navigation
                ev.preventDefault();
              }}
            >
              LIÊN HỆ NGAY
            </button>
          </div>
          <div className="promo-illustration"></div>
        </div>
      </section>

      {/* clients / partners promo */}
      <section className="clients-section">
        <div className="clients-inner">
          <h4 className="clients-title">ĐỐI TÁC CỦA CHÚNG TÔI</h4>
          <div className="clients-grid" ref={clientsRef}>
            <div className="client-wrap">
              <img
                src="https://logo.clearbit.com/vietcombank.com.vn"
                alt="Vietcombank"
                className="client-logo"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="client-wrap">
              <img
                src="https://logo.clearbit.com/bidv.com.vn"
                alt="BIDV"
                className="client-logo"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="client-wrap featured">
              <img
                src="https://logo.clearbit.com/mbbank.com.vn"
                alt="MB Bank"
                className="client-logo"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="client-wrap">
              <img
                src="https://logo.clearbit.com/acb.com.vn"
                alt="ACB"
                className="client-logo"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="client-wrap">
              <img
                src="https://cdn.freebiesupply.com/logos/large/2x/samsung-1-logo-png-transparent.png"
                alt="Samsung"
                className="client-logo"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="client-wrap">
              <img
                src="https://htdcorp.vn/wp-content/uploads/2016/09/logo-vietinbank.png"
                alt="VietinBank"
                className="client-logo"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="client-wrap">
              <img
                src="https://logo.clearbit.com/techcombank.com"
                alt="Techcombank"
                className="client-logo"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="client-wrap">
              <img
                src="https://tuyen-sinh.vn/wp-content/uploads/2024/10/HUIT.jpg"
                alt="HUIT"
                className="client-logo"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="client-wrap">
              <img
                src="https://www.akamai.com/site/en/images/logo/2021/riot-games-logo.svg"
                alt="RIOT"
                className="client-logo"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Reveal client logos when they enter the viewport
function clientsObserverSetup(ref) {
  // no-op placeholder (kept for potential export/testing)
}
