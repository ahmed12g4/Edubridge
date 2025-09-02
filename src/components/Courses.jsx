import React from "react";
import SectionHeader from "./SectionHeader";
import { coursesData } from "../data";
import Course from "./Course";

export default function Courses() {
  return (
    <section id="courses">
      <div className="container">
        <SectionHeader
          title="Make Online eduction acessible"
          description="Eduction is the most powerful tool to unlock potential ignite curiosity, and shape a brighter future. At our platform, we believe in making learning accessible, engaging, and skills they enpowering students to achieve their dreams and build the skills they need for succses in a ever-changing world"
        />

        <div className="courses-container">
          {coursesData.map((course) => {
            const {
              department,
              description,
              discount,
              duration,
              id,
              img,
              lessons,
              price,
              rating,
              sales,
              title,
            } = course;
            return (
              <Course
                key={id}
                department={department}
                description={description}
                discount={discount}
                duration={duration}
                id={id}
                img={img}
                lessons={lessons}
                price={price}
                sales={sales}
                rating={rating}
                title={title}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
