import React from "react";
import "./footer.css";

function Logo() {
  return (
    <svg
      width="120"
      height="36"
      viewBox="0 0 240 72"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="EventHub logo"
    >
      <defs>
        <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <linearGradient id="g2" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <rect rx="14" width="72" height="72" fill="url(#g1)" />
      <circle cx="46" cy="28" r="10" fill="url(#g2)" />
      <g transform="translate(84,44)">
        <text
          x="0"
          y="0"
          fontFamily="Inter, Arial, sans-serif"
          fontWeight="700"
          fontSize="22"
          fill="#fff"
        >
          EventHub
        </text>
      </g>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="col about">
          <div className="logo-wrap">
            <Logo />
          </div>
          <p className="muted">
            Platform quản lý sự kiện và lịch hội thảo khoa học — kết nối nhà
            nghiên cứu, diễn giả và cộng đồng.
          </p>
        </div>

        <div className="col contact">
          <h5>Liên hệ</h5>
          <ul className="contact-list">
            <li>
              <svg className="ico" viewBox="0 0 24 24">
                <path fill="currentColor" d="M2 3h20v2H2zM3 7h18v12H3z" />
              </svg>{" "}
              <a href="mailto:contact@eventhub.example">
                contact@eventhub.example
              </a>
            </li>
            <li>
              <svg className="ico" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.48 2.53.74 3.88.74a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.25 2.67.73 3.88a1 1 0 01-.21 1.11l-2.2 2.2z"
                />
              </svg>{" "}
              <a href="tel:+84123456789">+84 123 456 789</a>
            </li>
            <li>
              <svg className="ico" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                />
              </svg>{" "}
              12 Đường Khoa Học, Hà Nội
            </li>
          </ul>
        </div>

        <div className="col links">
          <h5>Nổi bật</h5>
          <ul>
            <li>
              <a href="#">Tạo sự kiện</a>
            </li>
            <li>
              <a href="#">Hướng dẫn</a>
            </li>
            <li>
              <a href="#">Chính sách bảo mật</a>
            </li>
          </ul>
        </div>

        <div className="col social">
          <h5>Mạng xã hội</h5>
          <div className="social-row">
            <a className="slink twitter" href="#" aria-label="twitter">
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22 5.92c-.63.28-1.3.47-2 .56.72-.43 1.27-1.12 1.53-1.94-.67.4-1.41.7-2.2.86A3.47 3.47 0 0016.8 4c-1.92 0-3.48 1.56-3.48 3.48 0 .27.03.53.09.78C9.4 8.04 6.1 6.29 3.9 3.49c-.3.51-.48 1.1-.48 1.73 0 1.2.61 2.26 1.54 2.88-.57-.02-1.1-.17-1.56-.43v.04c0 1.68 1.2 3.08 2.8 3.4-.29.08-.6.12-.9.12-.22 0-.44-.02-.65-.06.44 1.38 1.72 2.39 3.24 2.42A6.99 6.99 0 012 19.54a9.9 9.9 0 005.36 1.57c6.43 0 9.95-5.32 9.95-9.94v-.45c.7-.5 1.3-1.13 1.78-1.84-.64.29-1.32.48-2.03.57z"
                />
              </svg>
            </a>
            <a className="slink fb" href="#" aria-label="facebook">
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2v-2.9h2.2V9.3c0-2.2 1.3-3.5 3.3-3.5.96 0 1.96.17 1.96.17v2.2h-1.12c-1.1 0-1.44.68-1.44 1.38v1.66h2.46l-.39 2.9h-2.07V21.9A10 10 0 0022 12z"
                />
              </svg>
            </a>
            <a className="slink ln" href="#" aria-label="linkedin">
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 17.5V10.3H6.12v7.2h2.22zM7.23 9.2a1.3 1.3 0 110-2.6 1.3 1.3 0 010 2.6zM18 17.5v-3.6c0-2-1.08-2.9-2.5-2.9-1.15 0-1.66.64-1.94 1.09v-0.93H11.5c.03.62 0 7.2 0 7.2h2.22v-4.02c0-.21 0-.42.08-.57.18-.42.6-.86 1.3-.86.92 0 1.28.65 1.28 1.6v3.85H18z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} EventHub — All rights reserved.
      </div>
    </footer>
  );
}
