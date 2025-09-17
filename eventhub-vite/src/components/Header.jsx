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

          <div className="nav-center">
            <ul className="nav-links">
              <li>
                <a href="#home">
                  <span className="material-icons">home</span>
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#events">
                  <span className="material-icons">add_circle</span>
                  Tạo sự kiện
                </a>
              </li>
              <li>
                <a href="#contact">
                  <span className="material-icons">phone</span>
                  Liên hệ
                </a>
              </li>
            </ul>

            <div className="auth-buttons">
              <div className="account-dropdown">
                <button className="btn btn-secondary account-btn">
                  <span className="material-icons">person</span>
                  Tài khoản
                  <span className="material-icons dropdown-arrow">
                    keyboard_arrow_down
                  </span>
                </button>
                <div className="dropdown-menu">
                  <a href="#registered-events" className="dropdown-item">
                    <span className="material-icons">event_available</span>
                    Sự kiện đã đăng ký
                  </a>
                  <a href="#saved-events" className="dropdown-item">
                    <span className="material-icons">bookmark</span>
                    Sự kiện đã lưu
                  </a>
                  <a href="#notification-settings" className="dropdown-item">
                    <span className="material-icons">notifications</span>
                    Cài đặt thông báo
                  </a>
                </div>
              </div>
            </div>
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
