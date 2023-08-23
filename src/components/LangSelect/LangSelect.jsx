import React from "react";

function LangSelect() {
  return (
    <>
      <li className="nav-item dropup">
        <a
          className="dropdown-toggle dropdown-indicator has-indicator nav-link"
          data-toggle="dropdown"
          data-offset="0,10"
        >
          <small>English</small>
        </a>
        <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
          <ul className="language-list">
            <li>
              <a href="#" className="language-item">
                <img
                  src=""
                  alt=""
                  className="language-flag"
                />
                <span className="language-name">English</span>
              </a>
            </li>
            <li>
              <a href="#" className="language-item">
                <img
                  src=""
                  alt=""
                  className="language-flag"
                />
                <span className="language-name">Español</span>
              </a>
            </li>
            <li>
              <a href="#" className="language-item">
                <img
                  src=""
                  alt=""
                  className="language-flag"
                />
                <span className="language-name">Français</span>
              </a>
            </li>
            <li>
              <a href="#" className="language-item">
                <img
                  src=""
                  alt=""
                  className="language-flag"
                />
                <span className="language-name">Türkçe</span>
              </a>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
}

export default LangSelect;
