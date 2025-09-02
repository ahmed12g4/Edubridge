import React from "react";
import { FaStar, FaBookOpen, FaChevronRight } from "react-icons/fa6";
import { IoMdAlarm } from "react-icons/io";

export default function Course({
  department,
  description,
  discount,
  duration,
  img,
  lessons,
  price,
  rating,
  sales,
  title,
}) {
  return (
    <div className="courses">
      <span className="sale">Sale</span>
      <img src={img} alt={title} className="images" />
      <div className="content">
        <div className="course-fiele">
          <p className="department">{department}</p>
          <p className="rating">
            <FaStar />
            {rating}
          </p>
        </div>
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <p className="sales">{sales} sales</p>
        <p className="price">
          <del>{price}</del>
          <span className="text-sacondary">{discount}</span>
        </p>
        <div className="course-info">
          <p>
            <IoMdAlarm />
            {duration}
          </p>
          <p>
            {" "}
            <FaBookOpen />
            {lessons}
          </p>
        </div>
        <a href="#" className="btn-learn">
          Learn More <FaChevronRight />
        </a>
      </div>
    </div>
  );
}
