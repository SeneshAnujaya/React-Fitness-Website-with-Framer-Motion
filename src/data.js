import { SiOpenaigym } from "react-icons/si";
import { FaUserFriends } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { MdOutlineLaptopMac } from "react-icons/md";
import { FaAppleAlt } from "react-icons/fa";

import { FaHandshake } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Plans",
    path: "/plans",
  },
  {
    name: "Trainers",
    path: "/trainers",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const programs = [
  {
    id: 1,
    icon: <FaUserFriends />,
    title: "Personal Training",
    info: "Customized workouts and one-on-one coaching for your unique goals.",
    path: "/programs/111",
  },
  {
    id: 2,
    icon: <FaUsers />,
    title: "Group Workouts",
    info: "Fun and energetic sessions to stay motivated with a community.",
    path: "/programs/222",
  },
  {
    id: 3,
    icon: <MdOutlineLaptopMac />,
    title: "Online Coaching",
    info: "Flexible virtual training programs tailored to your schedule.",
    path: "/programs/333",
  },
  {
    id: 4,
    icon: <FaAppleAlt />,
    title: "Nutrition Plans",
    info: "Expert guidance to fuel your fitness journey with the right diet.",
    path: "/programs/444",
  },
];

export const values = [
  {
    id: 1,
    icon: <FaHandshake />,
    title: "Commitment",
    desc: "We are dedicated to helping you stay consistent and achieve lasting results.",
  },
  {
    id: 2,
    icon: <FaCheckCircle />,
    title: "Integrity",
    desc: "We build trust by being transparent and honest in everything we do.",
  },
  {
    id: 3,
    icon: <FaLightbulb />,
    title: "Innovation",
    desc: "We embrace new ideas and technologies to make your fitness journey better.",
  },
  {
    id: 4,
    icon: <FaUsers />,
    title: "Community",
    desc: "We foster a welcoming space where everyone can feel motivated.",
  },
];



export const faqs = [
  {
    id: 1,
    question: "How often should I exercise?",
    answer:
      "It depends on your fitness goals and experience level. For general health, aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity per week, combined with two or more days of strength training.",
  },
  {
    id: 2,
    question: "What time of day is best to work out?",
    answer:
      "The best time to work out is whenever you can be consistent. Morning workouts can boost energy and metabolism, while evening workouts may enhance performance due to increased body temperature. Choose a time that fits your schedule and feels best for your body.",
  },
  {
    id: 3,
    question: "How long should my workouts be?",
    answer:
      "Workouts can range from 20 to 60 minutes, depending on your fitness level and goals. Shorter, high-intensity workouts (20-30 minutes) can be effective, while longer sessions (45-60 minutes) allow for more variety and recovery between exercises.",
  },
  {
    id: 4,
    question: "Do I need to warm up before my workouts?",
    answer:
      "Yes! A proper warm-up helps prevent injuries and improves performance. Spend 5-10 minutes doing dynamic stretches or light cardio to increase blood flow and prepare your muscles for exercise.",
  },
  {
    id: 5,
    question: "Should I do strength training, cardio, or both?",
    answer:
      "Both! Strength training builds muscle and improves metabolism, while cardio enhances heart health and endurance. A balanced routine includes both, depending on your fitness goals.",
  },
  {
    id: 6,
    question: "Should I lift weights for strength training?",
    answer:
      "Yes, lifting weights is one of the best ways to build strength and muscle. Start with light weights and focus on proper form to prevent injuries. Gradually increase resistance as you progress.",
  },
];


// export const testimonials = [
//   {
//     id: 1,
//     name: "Diana Ayi",
//     quote:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
//     job: "Student",
//     avatar: require("./images/avatar1.jpg"),
//   },
//   {
//     id: 2,
//     name: "Daniel Vinyo",
//     quote:
//       "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
//     job: "Software Egineer",
//     avatar: require("./images/avatar2.jpg"),
//   },
//   {
//     id: 3,
//     name: "Edem Quist",
//     quote:
//       "Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
//     job: "University Lecturer",
//     avatar: require("./images/avatar3.jpg"),
//   },
//   {
//     id: 4,
//     name: "Grace Lavoe",
//     quote:
//       "Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
//     job: "Talking Parrot",
//     avatar: require("./images/avatar4.jpg"),
//   },
//   {
//     id: 5,
//     name: "Nana Yaa Dankwa",
//     quote:
//       "Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
//     job: "Pharmacist",
//     avatar: require("./images/avatar5.jpg"),
//   },
// ];

export const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    quote:
      "Joining this fitness center was the best decision I’ve made for my health. I've lost weight and gained so much confidence!",
    job: "Marketing Specialist",
    avatar: require("./images/avatar1.jpg"),
  },
  {
    id: 2,
    name: "Michael Brown",
    quote:
      "The supportive community and structured workout plans have made it easy for me to stay consistent. Highly recommend it to anyone!",
    job: "Software Developer",
    avatar: require("./images/avatar2.jpg"),
  },
  {
    id: 3,
    name: "Liam Johnson",
    quote:
      "I’ve tried many gyms before, but none compare to the atmosphere and encouragement I find here. It’s truly motivating!",
    job: "Graphic Designer",
    avatar: require("./images/avatar3.jpg"),
  },
  {
    id: 4,
    name: "sarah khan",
    quote:
      "Thanks to the personalized workout routines, I’ve improved my endurance and strength more than I thought possible.",
    job: "Accountant",
    avatar: require("./images/avatar4.jpg"),
  },
  {
    id: 5,
    name: "Olivia Davis",
    quote:
      "I love how welcoming and inclusive this fitness center is. It doesn’t matter your fitness level; everyone is treated like family.",
    job: "Nurse",
    avatar: require("./images/avatar5.jpg"),
  },
];


export const plans = [
  {
    id: 1,
    name: "Silver Package",
    desc: "A perfect start for those new to fitness, offering essential access to kickstart your wellness journey.",
    price: 29.99,
    className: "silver",
    features: [
      { feature: "Access to gym facilities", available: true },
      { feature: "5 Group Classes per month", available: true },
      { feature: "1 Personal Training Session per month", available: true },
      { feature: "Free Wi-Fi", available: true },
      { feature: "Exclusive Workshops", available: false },
      { feature: "Personalized Nutrition Plan", available: false },
    ],
  },
  {
    id: 2,
    name: "Gold Package",
    desc: "Balanced for regular fitness enthusiasts, with extra perks to keep you motivated.",
    price: 59.99,
    className: "gold",

    features: [
      { feature: "Unlimited gym access", available: true },
      { feature: "10 Group Classes per month", available: true },
      { feature: "3 Personal Training Sessions per month", available: true },
      { feature: "Exclusive Workshops", available: true },
      { feature: "Wellness Support", available: false },
      { feature: "Unlimited Group Classes", available: false },
    ],
  },
  {
    id: 3,
    name: "Platinum Package",
    desc: "The ultimate choice for dedicated fitness enthusiasts seeking comprehensive support and exclusive services.",
    price: 99.99,
    className: "platinum",
    features: [
      
            { feature: "Unlimited gym access", available: true },
            { feature: "Unlimited Group Classes", available: true },
            { feature: "5 Personal Training Sessions per month", available: true },
            { feature: "Personalized Nutrition Plan", available: true },
            { feature: "Wellness Support", available: true },
            { feature: "Priority Booking", available: true }
      
          
    ],
  },
];

const Trainer1 = require("./images/coach-one.jpg");
const Trainer2 = require("./images/coach-two.jpg");
const Trainer3 = require("./images/coach-three.jpg");
const Trainer4 = require("./images/coadch-four.jpg");


export const trainers = [
  {
    id: 1,
    image: Trainer1,
    name: "John Carter",
    job: " Certified Strength Coach",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 2,
    image: Trainer2,
    name: "Michael Lee",
    job: "Functional Fitness Specialist",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 3,
    image: Trainer3,
    name: "David Thompson",
    job: "High-Performance Coach",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 4,
    image: Trainer4,
    name: "Ryan Davis",
    job: "Personal Trainer & Nutritionist",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  
];
