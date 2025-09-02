import React from "react";
import SectionHeader from "./SectionHeader";
import { ratingData } from "../data";
import Review from "./Review";

export default function Reviews() {
  return (
    <section id="reviews">
      <div className="container">
        <SectionHeader
          title={"Eash and every client is important"}
          description={
            "Discover what our students ared saying in the reviews section! Real feedback from learners who have experienced and benefited from our courses."
          }
        />

        <div className="ratings">
          {ratingData.map((ratting) => {
            const { id, img, description, job, name, stars } = ratting;
            return (
              <Review
                key={id}
                description={description}
                job={job}
                name={name}
                stars={stars}
                img={img}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
