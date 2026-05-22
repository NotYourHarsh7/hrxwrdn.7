export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  challenge: string;
  solution: string;
  techStack: string[];
  features: string[];
  role: string;
  duration: string;
  year: string;
  thumbnail: string;
  images: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: "ultrasonic-radar",
    title: "Ultrasonic Radar",
    subtitle: "Object Detection & Mapping System",
    description: "An automated radar system for scanning surroundings and visualizing detected objects in real-time.",
    longDescription: "This project implements an ultrasonic radar system that scans a 180-degree area to detect and map objects. It uses a servo motor to rotate an ultrasonic sensor, which measures distances and sends data to an Arduino for processing. The system then visualizes the radar map on a connected display, allowing for real-time object detection and distance tracking.",
    challenge: "Synchronizing the servo motor's sweep with the ultrasonic sensor readings while ensuring accurate timing for data acquisition and smooth visual representation.",
    solution: "Used Arduino's PWM capabilities to control the servo and interrupt handling for sensor polling. Data is serialized and sent to a processing interface for real-time map visualization.",
    techStack: ["Arduino", "Servo Motor", "Ultrasonic Sensor", "C++"],
    features: [
      "180-degree real-time scanning",
      "Accurate distance measurement",
      "Visual radar mapping interface",
      "Compact design for portability"
    ],
    role: "Developer",
    duration: "2 weeks",
    year: "2025",
    thumbnail: "/images/radar.jpg",
    images: [
      "https://images.pexels.com/photos/34803987/pexels-photo-34803987.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/34803990/pexels-photo-34803990.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    ],
    liveUrl: "#",
    githubUrl: "#",
    category: "Embedded Systems",
    color: "#7c3aed"
  },
  {
    id: "air-mouse",
    title: "ESP32 Air Mouse",
    subtitle: "Motion-Controlled Human Interface",
    description: "A wireless air mouse device using motion sensors for intuitive cursor control in 3D space.",
    longDescription: "The ESP32 Air Mouse is a gesture-based input device that allows users to control their computer cursor through physical movement. It integrates an ESP32 microcontroller for wireless communication (BLE), an MPU9250 IMU for precise motion tracking, and a TTP223 touch sensor for mouse clicks. It effectively acts as a human-computer interface without needing a physical surface.",
    challenge: "Filtering noise from the IMU data to provide stable, precise cursor control and ensuring low-latency wireless communication.",
    solution: "Implemented a Kalman filter to process MPU9250 data and used ESP-NOW or BLE protocol for low-latency transmission to the receiver connected to the computer.",
    techStack: ["ESP32", "MPU9250", "TTP223", "BLE/ESP-NOW", "C++"],
    features: [
      "Wireless motion-based cursor control",
      "Integrated touch-based click sensor",
      "High-precision motion tracking",
      "Low-latency response"
    ],
    role: "Developer",
    duration: "3 weeks",
    year: "2025",
    thumbnail: "/images/air-mouse.jpg",
    images: [
      "https://images.pexels.com/photos/7948067/pexels-photo-7948067.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/6406691/pexels-photo-6406691.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    ],
    liveUrl: "#",
    githubUrl: "#",
    category: "Embedded Systems",
    color: "#06b6d4"
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    subtitle: "Personal Web Portal",
    description: "A responsive portfolio website built with React, Vite, and Tailwind CSS to showcase my projects and skills.",
    longDescription: "This portfolio website is a personal portal designed to showcase my projects, skills, and academic journey. Built for performance and aesthetics, it utilizes React for dynamic components, Tailwind CSS for styling, and Framer Motion for interactive animations. The site is optimized for mobile responsiveness and fast load times.",
    challenge: "Integrating complex animations while ensuring the site remained performant and lightweight.",
    solution: "Used Framer Motion for performant layout animations and optimized asset loading. Architected the site with clean, reusable components.",
    techStack: ["React", "Vite", "Tailwind CSS", "TypeScript", "Framer Motion"],
    features: [
      "Animated UI components",
      "Responsive design",
      "Project showcase with detail views",
      "Dynamic skill and experience representation"
    ],
    role: "Developer",
    duration: "1 week",
    year: "2025",
    thumbnail: "https://images.pexels.com/photos/34804001/pexels-photo-34804001.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    images: [
      "https://images.pexels.com/photos/34804001/pexels-photo-34804001.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "https://images.pexels.com/photos/34804003/pexels-photo-34804003.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
    ],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web Development",
    color: "#ec4899"
  }
];
