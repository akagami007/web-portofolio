export default function About() {
  return (
    <section id="about" className="container">
      <div className="card p-8 md:p-12 flex flex-col md:flex-row items-center gap-8" style={{ borderLeft: '4px solid var(--primary)' }}>
        <div className="md:w-2/3">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
            Tentang <span className="text-gradient">Saya</span>
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: '0.9', marginBottom: '1rem' }}>
            Saya adalah seorang profesional IT yang memiliki antusiasme tinggi di bidang Quality Assurance dan Web Development. Latar belakang pendidikan saya membekali saya dengan pemahaman analitis yang kuat, sementara pengalaman praktis saya mengajarkan saya bagaimana membangun produk yang tidak hanya berfungsi dengan baik, tetapi juga bebas dari bug kritis.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: '0.9' }}>
            Sebagai QA, saya teliti dalam mencari celah. Sebagai Developer, saya kreatif dalam merangkai solusi. Kombinasi ini memungkinkan saya untuk melihat proses pengembangan perangkat lunak dari dua sudut pandang yang berbeda namun saling melengkapi.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <div className="animate-float" style={{ width: '200px', height: '200px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '4rem', fontWeight: 'bold', boxShadow: '0 10px 25px rgba(236, 72, 153, 0.4)' }}>
            QA
          </div>
        </div>
      </div>
    </section>
  );
}
