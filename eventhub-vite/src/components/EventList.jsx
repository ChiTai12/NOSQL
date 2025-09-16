import React from "react";

export default function EventList({ events }) {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      {events.map((ev) => (
        <div
          key={ev.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: 12,
            background: "rgba(255,255,255,0.03)",
            borderRadius: 8,
          }}
        >
          <div
            style={{
              width: 84,
              height: 60,
              background: "linear-gradient(45deg,#667eea,#764ba2)",
              borderRadius: 6,
            }}
          />
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <strong style={{ color: "white" }}>{ev.title}</strong>
              <small style={{ color: "rgba(255,255,255,0.7)" }}>
                {new Date(ev.start).toLocaleDateString()}
              </small>
            </div>
            <div style={{ color: "rgba(255,255,255,0.7)" }}>{ev.location}</div>
            <div style={{ color: "rgba(255,255,255,0.6)", marginTop: 6 }}>
              {ev.description}
            </div>
          </div>
        </div>
      ))}
      {events.length === 0 && (
        <div style={{ color: "rgba(255,255,255,0.6)" }}>Không có kết quả</div>
      )}
    </div>
  );
}
