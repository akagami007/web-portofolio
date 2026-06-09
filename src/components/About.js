export default function About() {
  return (
    <section id="about" className="container">
      <div
        className="card p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
        style={{ borderLeft: "4px solid var(--primary)" }}
      >
        <div className="md:w-2/3">
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "1.5rem",
            }}
          >
            About <span className="text-gradient">Me</span>
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              opacity: "0.9",
              marginBottom: "1rem",
            }}
          >
            I am an IT professional with a strong passion for Quality Assurance
            and Web Development. My educational background has equipped me with
            a strong analytical understanding, while my practical experience has
            taught me how to build products that not only function well but are
            also free from critical bugs.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.8", opacity: "0.9" }}>
            As a QA, I'm meticulous in finding loopholes. As a developer, I'm
            creative in devising solutions. This combination allows me to view
            the software development process from two different yet
            complementary perspectives.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <div
            className="animate-float"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, var(--primary), var(--secondary))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "4rem",
              fontWeight: "bold",
              boxShadow: "0 10px 25px rgba(236, 72, 153, 0.4)",
            }}
          >
            QA
          </div>
        </div>
      </div>
    </section>
  );
}
