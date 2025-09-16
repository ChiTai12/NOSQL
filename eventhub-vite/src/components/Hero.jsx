import React, { useState, useEffect } from "react";
import "./hero.css";

export default function Hero({ query, setQuery }) {
  // images served from public/assets
  const images = [
    "/assets/anhpaner.jpeg",
    "/assets/hoithao.jpg",
    "/assets/hoithao2.jpg",
    "/assets/sukien2.jpg",
  ];
  const [idx, setIdx] = useState(0);
  const [failed, setFailed] = useState(() => images.map(() => false));

  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), 3500);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <section className="vh-hero">
      <div
        className="hero-slides"
        style={{ transform: `translateX(-${idx * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={src} className={`hero-slide-item`}>
            <img
              src={src}
              alt={`slide-${i}`}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.onerror = null;
                /* keep original src for debug */ setFailed((s) => {
                  const copy = [...s];
                  copy[i] = true;
                  return copy;
                });
              }}
              onLoad={() =>
                setFailed((s) => {
                  const copy = [...s];
                  copy[i] = false;
                  return copy;
                })
              }
            />
          </div>
        ))}
      </div>
      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">Sự Kiện Đỉnh Cao 2025</h1>
          <p className="hero-sub">
            Tìm sự kiện, hội thảo và workshop phù hợp cho bạn.
          </p>
          <div className="hero-search">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Tìm kiếm sự kiện, địa điểm, loại..."
            />
            <button onClick={() => {}} className="btn btn-primary">
              Tìm
            </button>
          </div>
        </div>
      </div>
      <div className="hero-controls">
        <button
          aria-label="prev"
          onClick={() => setIdx((i) => (i - 1 + images.length) % images.length)}
        >
          &lt;
        </button>
        <button
          aria-label="next"
          onClick={() => setIdx((i) => (i + 1) % images.length)}
        >
          &gt;
        </button>
      </div>
      {/* debug thumbnails: shows which images failed to load */}
      <div className="hero-debug" aria-hidden>
        {images.map((src, i) => (
          <div key={src} className={`thumb ${failed[i] ? "broken" : ""}`}>
            <img
              src={src}
              alt={`thumb-${i}`}
              onError={(e) => {
                e.currentTarget.onerror = null;
                setFailed((s) => {
                  const c = [...s];
                  c[i] = true;
                  return c;
                });
              }}
            />
            <div className="label">{i + 1}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
