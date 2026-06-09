export default function Skills() {
  const qaSkills = ["Cypress", "Selenium", "Playwright", "Appium", "Postman", "Katalon Studio", "Jira", "TestRail"];
  const devSkills = ["HTML / CSS / JS", "React.js", "Next.js", "Node.js", "Express", "SQL / MongoDB", "Git & CI/CD"];

  return (
    <section id="skills" className="container text-center" style={{ position: 'relative' }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem' }}>
        <span className="text-gradient">Keahlian & Tools</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card p-6" style={{ background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary)', fontWeight: 'bold' }}>Quality Assurance</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {qaSkills.map((skill, index) => (
              <span key={index} className="animate-float" style={{ animationDelay: `${index * 0.15}s`, padding: '0.5rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--primary)', color: 'var(--primary)', fontWeight: '500', background: 'var(--card-bg)' }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="card p-6" style={{ background: 'rgba(236, 72, 153, 0.05)', border: '1px solid rgba(236, 72, 153, 0.2)' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--secondary)', fontWeight: 'bold' }}>Web Development</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {devSkills.map((skill, index) => (
              <span key={index} className="animate-float" style={{ animationDelay: `${index * 0.15}s`, padding: '0.5rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--secondary)', color: 'var(--secondary)', fontWeight: '500', background: 'var(--card-bg)' }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
