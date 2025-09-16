import React, { useState, useMemo } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EventsPage from "./pages/EventsPage";
import Footer from "./components/Footer";
import EventDetail from "./pages/EventDetail";

const SAMPLE = [
  {
    id: "a",
    title: "AI Marketing Summit 2025",
    description: "Hội nghị đỉnh cao về Marketing AI",
    start: new Date().toISOString(),
    end: new Date(Date.now() + 3600 * 1000 * 4).toISOString(),
    location: "Hà Nội",
    cover: "/assets/hoithao.jpg",
    tags: ["AI", "Marketing"],
    type: "conference",
  },
  {
    id: "b",
    title: "Future Tech Conference",
    description: "Hội thảo công nghệ tương lai",
    start: new Date(Date.now() + 86400 * 1000).toISOString(),
    end: new Date(Date.now() + 86400 * 1000 + 3600 * 1000 * 6).toISOString(),
    location: "TP HCM",
    cover: "/assets/hoithao2.jpg",
    tags: ["Tech"],
    type: "conference",
  },
  {
    id: "c",
    title: "Creative Design Awards",
    description: "Lễ trao giải thiết kế sáng tạo",
    start: new Date(Date.now() + 5 * 86400 * 1000).toISOString(),
    end: new Date(
      Date.now() + 5 * 86400 * 1000 + 3600 * 1000 * 3
    ).toISOString(),
    location: "Đà Nẵng",
    cover: "/assets/sukien2.jpg",
    tags: ["Design", "Awards"],
    type: "ceremony",
  },
  {
    id: "d",
    title: "Blockchain & Research Symposium",
    description: "Hội thảo nghiên cứu về blockchain trong khoa học",
    start: new Date(Date.now() + 7 * 86400 * 1000).toISOString(),
    end: new Date(
      Date.now() + 7 * 86400 * 1000 + 3600 * 1000 * 5
    ).toISOString(),
    location: "Hà Nội",
    cover: "/assets/anhpaner.jpeg",
    tags: ["Blockchain", "Research"],
    type: "symposium",
  },
  {
    id: "e",
    title: "Data Science Workshop",
    description: "Workshop thực hành Data Science cho nghiên cứu",
    start: new Date(Date.now() + 10 * 86400 * 1000).toISOString(),
    end: new Date(
      Date.now() + 10 * 86400 * 1000 + 3600 * 1000 * 6
    ).toISOString(),
    location: "TP HCM",
    cover: "/assets/hoithao.jpg",
    tags: ["Data", "Workshop"],
    type: "workshop",
  },
  {
    id: "f",
    title: "Academic Publishing Forum",
    description: "Diễn đàn xuất bản học thuật và chỉ số ảnh hưởng",
    start: new Date(Date.now() + 12 * 86400 * 1000).toISOString(),
    end: new Date(
      Date.now() + 12 * 86400 * 1000 + 3600 * 1000 * 4
    ).toISOString(),
    location: "Online",
    cover: "/assets/sukien2.jpg",
    tags: ["Academic", "Publishing"],
    type: "forum",
  },
];

export default function App() {
  const [events] = useState(SAMPLE);
  const [query, setQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return events;
    return events.filter((e) =>
      (e.title + e.description + e.location).toLowerCase().includes(q)
    );
  }, [events, query]);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <HeroGuard query={query} setQuery={setQuery} />
        <main
          style={{
            padding: "24px 20px",
            maxWidth: 1100,
            margin: "10px auto 0px",
          }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <EventsPage
                  events={filtered}
                  onSelect={setSelectedEvent}
                  selectedEvent={selectedEvent}
                />
              }
            />
            <Route
              path="/events/:id"
              element={
                <EventDetail
                  event={selectedEvent}
                  onClose={() => setSelectedEvent(null)}
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function HeroGuard({ query, setQuery }) {
  const loc = useLocation();
  if (loc.pathname === "/") {
    return <Hero query={query} setQuery={setQuery} />;
  }
  return null;
}
