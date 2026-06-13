export default function Projects() {
  const projects = [
    {
      title: "Pega Developer",
      role: "Insurance Developer",
      desc: "Create an insurance website and mobile app for a small business using PEGA.",
      tech: ["PEGA", "JavaScript", "Java"],
      color: "var(--primary)",
    },
    {
      title: "Freelance Web Developer",
      role: "Web Developer",
      desc: "Create an E-commerce Website for a small business. Create landing page for a company profile. Create Website for a event expo. And Create an API for a small business.",
      tech: ["React.js", "NextJs", "Node.js", "TailwindCSS", "Laravel", "Stripe", "PostgreSQL"],
      color: "var(--secondary)",
    },
    {
      title:
        "Internet Banking, Internet Bisnis Banking & Mobile Banking App Test",
      role: "QA Manual & Automation",
      desc: "Comprehensive manual testing and automated scripts using Appium for a mobile banking application ensuring security and usability.",
      tech: ["Appium", "Postman", "Jira", "Katalon Studio", "Playwright"],
      color: "var(--accent)",
    },
  ];

  return (
    <section id="projects" className="container">
      <h2
        className="text-center"
        style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "3rem" }}
      >
        <span className="text-gradient">Featured Projects</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card flex flex-col"
            style={{ borderTop: `4px solid ${project.color}`, height: "100%" }}
          >
            <div className="p-6 flex-grow">
              <span
                style={{
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  color: project.color,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {project.role}
              </span>
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "bold",
                  marginTop: "0.5rem",
                  marginBottom: "1rem",
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  opacity: "0.8",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                }}
              >
                {project.desc}
              </p>
            </div>
            <div
              className="p-6"
              style={{
                background: "rgba(0,0,0,0.02)",
                borderTop: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: "0.75rem",
                      padding: "0.25rem 0.5rem",
                      background: "var(--background)",
                      borderRadius: "0.25rem",
                      border: "1px solid rgba(0,0,0,0.1)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
