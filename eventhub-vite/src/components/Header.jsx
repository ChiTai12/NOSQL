import React, { useState, useEffect } from "react";
// import "./header.css";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    try {
      return window.location.search.includes("sidebar=1");
    } catch (e) {
      return false;
    }
  });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <nav className="nav">
          <div className="logo">🚀 EventHub</div>
          <ul className="nav-links">
            <li>
              <a href="#home">Trang chủ</a>
            </li>
            <li>
              <a href="#events">Sự kiện</a>
            </li>
            <li>
              <a href="#create">Tạo sự kiện</a>
            </li>
            <li>
              <a href="#features">Tính năng</a>
            </li>
            <li>
              <a href="#contact">Liên hệ</a>
            </li>
          </ul>

          <div className="auth-buttons">
            <a href="#login" className="btn btn-secondary">
              Đăng nhập
            </a>
            <a href="#register" className="btn btn-primary">
              Đăng ký miễn phí
            </a>
          </div>
          {/* Always-visible menu button so sidebar can be opened on desktop for testing */}
          <button
            className="mobile-menu"
            style={{ display: "block" }}
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
        </nav>
      </header>

      <aside className={`sidebar ${sidebarOpen ? "active" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-title">Menu</div>
          <button className="close-btn" onClick={() => setSidebarOpen(false)}>
            ×
          </button>
        </div>
        <ul className="sidebar-nav">
          <li>
            <a href="#home" onClick={() => setSidebarOpen(false)}>
              🏠 Trang chủ
            </a>
          </li>
          <li>
            <a href="#events" onClick={() => setSidebarOpen(false)}>
              🎪 Sự kiện
            </a>
          </li>
          <li>
            <a href="#create" onClick={() => setSidebarOpen(false)}>
              ✨ Tạo sự kiện
            </a>
          </li>
          <li>
            <a href="#features" onClick={() => setSidebarOpen(false)}>
              ⚡ Tính năng
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setSidebarOpen(false)}>
              📞 Liên hệ
            </a>
          </li>
          <li>
            <a href="#login" onClick={() => setSidebarOpen(false)}>
              🔐 Đăng nhập
            </a>
          </li>
          <li>
            <a href="#register" onClick={() => setSidebarOpen(false)}>
              🚀 Đăng ký
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
