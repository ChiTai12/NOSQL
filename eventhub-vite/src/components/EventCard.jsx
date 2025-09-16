import React from "react";
import "./eventcard.css";

export default function EventCard({ event, onView }) {
  const { title, description, start, location, cover } = event;
  return (
    <article className="event-card">
      <div
        className="cover"
        style={{ backgroundImage: `url(${cover || "/assets/anhpaner.jpeg"})` }}
      />
      <div className="body">
        <h3 className="title">{title}</h3>
        <div className="meta">
          {new Date(start).toLocaleString()} • {location}
        </div>
        <p className="desc">{description}</p>
        <div className="actions">
          <button
            className="btn btn-outline"
            onClick={() => onView && onView(event)}
          >
            Xem chi tiết
          </button>
          <button className="btn btn-primary">Đăng ký</button>
        </div>
      </div>
    </article>
  );
}
