export default function Experience() {
  const experiences = [
    {
      year: "2023 - Sekarang",
      title: "QA Manual & Automation Engineer",
      company: "Infosys Solusi Terpadu Inc.",
      desc: "Designed and implemented an automated testing framework using Katalon Studio and Playwright. Reduced regression time by up to 40%. Performed manual UI and functional testing, and generated documentation and reports.",
    },
    {
      year: "2022 - 2023",
      title: "Web Developer",
      company: "-",
      desc: "Building various responsive web applications using React.js and Node.js. Collaborating closely with the UI/UX design team.",
    },
    {
      year: "2021 - 2022",
      title: "Pega Developer",
      company: "Asuransi Sinarmas",
      desc: "Create an insurance website using PEGA. Validated checkout flows, user authentication, and API endpoints.",
    },
  ];

  return (
    <section id="experience" className="container text-center">
      <h2
        style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "3rem" }}
      >
        <span className="text-gradient">Experience</span>
      </h2>
      <div className="flex flex-col items-center">
        <div
          style={{
            borderLeft: "3px solid var(--primary)",
            paddingLeft: "2rem",
            textAlign: "left",
            maxWidth: "800px",
          }}
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              style={{ position: "relative", marginBottom: "3rem" }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "-2.65rem",
                  top: "0",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: "var(--secondary)",
                  border: "4px solid var(--background)",
                }}
              ></div>
              <span
                style={{
                  fontWeight: "bold",
                  color: "var(--primary)",
                  letterSpacing: "1px",
                }}
              >
                {exp.year}
              </span>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  margin: "0.5rem 0",
                }}
              >
                {exp.title}
              </h3>
              <h4
                style={{
                  fontSize: "1.1rem",
                  opacity: "0.7",
                  marginBottom: "1rem",
                }}
              >
                {exp.company}
              </h4>
              <p style={{ opacity: "0.9", lineHeight: "1.6" }}>{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
