import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Health & Fitness</span>
        <span className="headerTitleLg">BLOG</span>
      </div>

      <div class="wrapper">
        <div class="search_box">
          <input type="text" placeholder="what are you looking for?" />
          <i class="fas fa-search"></i>
        </div>
      </div>
    </div>
  );
}
