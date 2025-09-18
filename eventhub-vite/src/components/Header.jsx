import React, { useState, useEffect } from "react";
import "./header.css";

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
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon material-icons">rocket_launch</span>
            <span className="logo-text">Sự kiện</span>
          </div>

          <nav className="nav">
            <ul className="nav-links">
              <li>
                <a href="#home">
                  <span className="material-icons">home</span>
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#events">
                  <span className="material-icons">visibility</span>
                  Chi tiết
                </a>
              </li>
              <li>
                <a href="#contact">
                  <span className="material-icons">phone</span>
                  Liên hệ
                </a>
              </li>
              <li>
                <a href="#registered-events">
                  <span className="material-icons">event_available</span>
                  Sự kiện đã đăng ký
                </a>
              </li>
              <li>
                <a href="#saved-events">
                  <span className="material-icons">bookmark</span>
                  Sự kiện đã lưu
                </a>
              </li>
              <li>
                <a href="#notification-settings">
                  <span className="material-icons">notifications</span>
                  Cài đặt thông báo
                </a>
              </li>
              <li className="account-link">
                <a href="#account">
                  <span className="material-icons">person</span>
                  Tài khoản
                </a>
              </li>
            </ul>

            {/* Mobile menu toggle: visible only via CSS media queries */}
            <button
              className="mobile-menu"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              ☰
            </button>
          </nav>
        </div>
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
