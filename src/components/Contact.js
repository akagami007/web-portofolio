export default function Contact() {
  return (
    <section id="contact" className="container">
      <div className="card p-6 md:p-12 text-center" style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(236, 72, 153, 0.1))', border: '2px dashed rgba(59, 130, 246, 0.3)' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Mari Bekerja Sama!
        </h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: '0.8', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Saya selalu terbuka untuk mendiskusikan proyek kreatif, peluang kerja sama, atau sekadar berbagi cerita seputar QA dan Web Development.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:email@contoh.com" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Kirim Email
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
