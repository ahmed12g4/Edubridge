import { CiMap } from "react-icons/ci";
import { FaImages, FaCreditCard } from "react-icons/fa";
import htmlImage from "./assets/premium_photo-1678565869434-c81195861939.jpg";
import uiImage from "./assets/premium_photo-1678565869434-c81195861939.jpg";
import softImage from "./assets/vecteezy_software-develper-working-on-laptop-at-home-office_6697113.jpg";
import people1 from "./assets/people1-reviews.png"
import people2 from "./assets/people2.png"
import people3 from "./assets/people3.png";

export const CardDate = [
  {
    id: 1,
    img: <CiMap />,
    title: "Books Library",
    description:
      "The gradual accumulation of information about atomic and small-scale behavlour...",
    color: "#e74040",
    bgColor: "#ffdcd1",
  },

  {
    id: 2,
    img: <FaImages />,
    title: "Market Analysis",
    description:
      "The gradual accumulation of information about atomic and small-scale behavlour...",
    color: "#2dc071",
    bgColor: "#B9EAA8",
  },

  {
    id: 3,
    img: <FaCreditCard />,
    title: "50+ online courses",
    description:
      "The gradual accumulation of information about atomic and small-scale behavlour...",
    color: "#23a6f0",
    bgColor: "#b2e3ff",
  },
];

export const coursesData = [
  {
    id: 1,
    img: uiImage,
    department: "Graphic Design",
    title: "UI & Ux Design",
    rating: "4.7",
    description:
      "UX/UI Interface design is the union of Graphic Design, basic human psychology, and technology to create software interfaces that are easy to use and that look professional. UX/UI Interface designers work with others to create usable interfaces for apps",
    sales: "80",
    price: "$11.99",
    discount: "$4.99",
    duration: "22hr 30min",
    lessons: "64 lessons",
  },

  {
    id: 2,
    img: softImage,
    department: "Software Development",
    title: "Project Design",
    rating: "4.6",
    description:
      "A Software Developer designs, codes, tests, and maintains software applications and systems. They work on various aspects of the software development lifecycle, from initial design to deployment and ongoing maintenance",
    sales: "160",
    price: "$15.99",
    discount: "$7.99",
    duration: "30hr 30min",
    lessons: "121 lessons",
  },

  {
    id: 3,
    img: htmlImage,
    department: "Web Development",
    title: "Html & Css",
    rating: "4.9",
    description:
      "Website development, also known as web development, encompasses the process of building and maintaining websites or web applications. It involves a range of tasks, including design, coding, and functionality implementation,  ",
    sales: "288",
    price: "$10.99",
    discount: "$8.99",
    duration: "40hr 40min",
    lessons: "107 lessons",
  },
];

export const ratingData = [
  {
    id: 1,
    stars: "★ ★ ★ ★ ★",
    img: people1,
    description:
      "This course exceeded my expectations! The content was well-organized, the explanations were clear, and the hands-on projects helped me build real-world skills. Highly recommend it to anyone looking to learn!",
    name: "Gamal Mahmoud",
    job: "Software Engineer",
  },
  {
    id: 2,
    stars: "★ ★ ★ ★ ✩",
    img: people2,
    description:
      "This course exceeded my expectations! The content was well-organized, the explanations were clear, and the hands-on projects helped me build real-world skills. Highly recommend it to anyone looking to learn!",
    name: "Omar Mohamed",
    job: "developer",
  },
  {
    id: 3,
    stars: "★ ★ ★ ★ ★",
    img: people3,
    description:
      "This course exceeded my expectations! The content was well-organized, the explanations were clear, and the hands-on projects helped me build real-world skills. Highly recommend it to anyone looking to learn!",
    name: "Islam Tarek",
    job: "Designer",
  },
];
