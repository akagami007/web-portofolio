export default function Experience() {
  const experiences = [
    {
      year: "2023 - Sekarang",
      title: "QA Automation Engineer",
      company: "Tech Solutions Inc.",
      desc: "Merancang dan mengimplementasikan kerangka pengujian otomatis menggunakan Cypress dan Selenium. Mengurangi waktu regresi hingga 40%."
    },
    {
      year: "2021 - 2023",
      title: "Web Developer",
      company: "Creative Studio",
      desc: "Membangun berbagai aplikasi web responsif menggunakan React.js dan Node.js. Berkolaborasi erat dengan tim desain UI/UX."
    },
    {
      year: "2017 - 2021",
      title: "Mahasiswa IT",
      company: "Akademi / Universitas",
      desc: "Lulus dengan predikat memuaskan. Aktif dalam berbagai proyek pengembangan perangkat lunak kampus dan kompetisi hackathon."
    }
  ];

  return (
    <section id="experience" className="container text-center">
      <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem' }}>
        <span className="text-gradient">Pengalaman</span>
      </h2>
      <div className="flex flex-col items-center">
        <div style={{ borderLeft: '3px solid var(--primary)', paddingLeft: '2rem', textAlign: 'left', maxWidth: '800px' }}>
          {experiences.map((exp, index) => (
            <div key={index} style={{ position: 'relative', marginBottom: '3rem' }}>
              <div style={{ position: 'absolute', left: '-2.65rem', top: '0', width: '20px', height: '20px', borderRadius: '50%', background: 'var(--secondary)', border: '4px solid var(--background)' }}></div>
              <span style={{ fontWeight: 'bold', color: 'var(--primary)', letterSpacing: '1px' }}>{exp.year}</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0.5rem 0' }}>{exp.title}</h3>
              <h4 style={{ fontSize: '1.1rem', opacity: '0.7', marginBottom: '1rem' }}>{exp.company}</h4>
              <p style={{ opacity: '0.9', lineHeight: '1.6' }}>{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
