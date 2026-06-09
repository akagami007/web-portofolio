import "./globals.css";

export const metadata = {
  title: "Stefan | QA Engineer & Web Developer",
  description:
    "Portofolio kreatif dari Stefan, seorang QA Manual/Automation & Web Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <nav
          className="container flex justify-between items-center"
          style={{ padding: "1.5rem 2rem" }}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              letterSpacing: "-1px",
            }}
          >
            <span className="text-gradient">Stefan</span>Cornelius
          </div>
          <div className="flex gap-4">
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>
        </nav>
        {children}
        <footer
          className="text-center p-6"
          style={{ opacity: 0.5, fontSize: "0.9rem" }}
        >
          &copy; {new Date().getFullYear()} Stefan. Built with Next.js &
          Creative Energy.
        </footer>
      </body>
    </html>
  );
}
