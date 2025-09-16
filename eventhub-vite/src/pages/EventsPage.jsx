import React, { useState, useMemo } from "react";
import "./events.css";
import EventCard from "../components/EventCard";
import EventDetail from "./EventDetail";
import { useNavigate } from "react-router-dom";

export default function EventsPage({ events = [], onSelect, selectedEvent }) {
  const navigate = useNavigate();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [tagFilter, setTagFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const tags = useMemo(() => {
    const s = new Set();
    events.forEach((e) => (e.tags || []).forEach((t) => s.add(t)));
    return Array.from(s).slice(0, 10);
  }, [events]);

  const filtered = useMemo(() => {
    return events.filter((e) => {
      if (tagFilter && !(e.tags || []).includes(tagFilter)) return false;
      if (typeFilter && e.type !== typeFilter) return false;
      return true;
    });
  }, [events, tagFilter, typeFilter]);

  return (
    <div className="events-page">
      <div className="events-topbar">
        <div className="left">
          <button className="btn" onClick={() => setFiltersOpen((s) => !s)}>
            Filters
          </button>
          <div className="chips">
            {tags.map((t) => (
              <button
                key={t}
                className={`chip ${t === tagFilter ? "active" : ""}`}
                onClick={() => setTagFilter(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="right">
          <div className="count">{filtered.length} events</div>
        </div>
      </div>

      {filtersOpen && (
        <div className="filter-panel">
          <label>
            Type
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="">Any</option>
              <option value="conference">Conference</option>
              <option value="workshop">Workshop</option>
            </select>
          </label>
          <label>
            Tag
            <input
              value={tagFilter}
              onChange={(e) => setTagFilter(e.target.value)}
              placeholder="type tag..."
            />
          </label>
          <button
            className="btn"
            onClick={() => {
              setTagFilter("");
              setTypeFilter("");
              setFiltersOpen(false);
            }}
          >
            Clear
          </button>
        </div>
      )}

      <div className="events-grid">
        {filtered.map((e) => (
          <React.Fragment key={e.id}>
            <EventCard
              event={e}
              onView={(ev) => {
                // prefer navigation to a dedicated detail route
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
    </div>
  );
}
