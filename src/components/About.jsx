import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          A passionate software developer with a focus on full-stack Java and
          React development. I have a strong foundation in web and application
          development, along with a growing interest in AI and IoT. I aim to use
          technology to solve real-world problems, particularly in healthcare.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <p>
          Bachelor of Technology in Computer Science with a CGPA of 7.67/10. I
          have completed various hands-on projects in Java, React, and machine
          learning, continuously learning and enhancing my skill set.
        </p>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <ul class="list-disc list-inside space-y-2">
          <li>
            <strong>Full-Stack Development:</strong> Java, Spring Boot, React
            JS, Tailwind CSS
          </li>
          <li>
            <strong>Machine Learning:</strong> Weka, Data Processing,
            Classification Algorithms
          </li>
          <li>
            <strong>Tools:</strong> JavaFX, MySQL, REST APIs
          </li>
          <li>
            <strong>Strong understanding of:</strong> OOP, DSA, and web
            development concepts
          </li>
        </ul>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <p>
          Currently building practical software projects, focusing on
          problem-solving, real-time data processing, and creating healthcare
          solutions using AI and IoT.
        </p>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <ul class="list-disc list-inside space-y-2">
          <li>
            Successfully completed multiple projects, including health data
            classification and library management systems.
          </li>
          <li>Built a portfolio website using React JS and Tailwind CSS.</li>
        </ul>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          Driven by a passion for innovation, I specialize in Java, React, and
          AI, with a focus on developing impactful software solutions. I thrive
          on building and improving applications that make a real difference,
          especially in the healthcare sector. I aim to continuously grow my
          technical expertise while contributing to cutting-edge projects,
          driving progress in dynamic and challenging environments.
        </p>
      </div>
    </div>
  );
}

export default About;
