import React from "react";
import { CardDate } from "../data";
import Card from "./Card";

export default function Home() {
  return (
    <section id="home">
      <div className="container">
        <div className="home-header">
          <span>Join Us</span>
          <h1>Best Learning Opportunities</h1>
          <p>
            We Know how large objects Will act, but things on a small scale just
            do not act that way.{" "}
          </p>

          <a href="#" className="btn btn-red">
            Get Quote Now
          </a>
          <a href="#" className="btn btn-transparent">
            Learn More
          </a>
        </div>
        <div className="card-container">
          {CardDate.map((card) => {
            const { title, id, bgColor, color, description, img } = card;
            return (
              <Card
                key={id}
                title={title}
                bgColor={bgColor}
                color={color}
                description={description}
                img={img}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
