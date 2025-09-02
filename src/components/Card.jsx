import React from "react";

export default function Card({ id, img, description, title, color, bgColor }) {
  return (
    <div className="card">
      <span className="icon" style={{ color: color, backgroundColor: bgColor }}>
        {img}
      </span>
      <h2>{title}</h2>
      <span className="line"></span>

      <p>{description}</p>
    </div>
  );
}
