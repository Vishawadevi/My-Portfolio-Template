import React from "react";

function Skills() {
  const skills = ["ReactJS", "JavaScript", "Node.js", "CSS", "Python","sHTML"];
  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, idx) => <li key={idx}>{skill}</li>)}
      </ul>
    </section>
  );
}

export default Skills;
