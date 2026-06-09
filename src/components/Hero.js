import Image from "next/image";
import { Contact } from "@/components/Contact";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between container"
      style={{ minHeight: "80vh", position: "relative" }}
    >
      <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col items-center md:items-start text-center md:text-left">
        <h1
          className="animate-bounce-slow"
          style={{
            fontSize: "3.5rem",
            fontWeight: "800",
            marginBottom: "1rem",
            lineHeight: "1.1",
          }}
        >
          Hi, I'm <br />
          <span className="text-gradient">Stefan Cornelius</span>
        </h1>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "1.5rem",
            color: "var(--secondary)",
          }}
        >
          QA Engineer & Web Developer
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "2rem",
            opacity: "0.8",
            maxWidth: "400px",
          }}
        >
          I build robust applications and ensure their quality. Passionate about
          automated testing, user experience, and colorful designs!
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="btn btn-primary">
            Check Out My Work
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </div>
      <div
        className="md:w-1/2 flex justify-center mt-8 md:mt-0"
        style={{ position: "relative" }}
      >
        <div
          className="animate-blob"
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            background: "var(--primary)",
            filter: "blur(50px)",
            opacity: "0.3",
            borderRadius: "50%",
          }}
        ></div>
        <div
          className="animate-blob animation-delay-2000"
          style={{
            position: "absolute",
            width: "250px",
            height: "250px",
            background: "var(--secondary)",
            filter: "blur(50px)",
            opacity: "0.3",
            borderRadius: "50%",
            right: "20px",
            top: "20px",
          }}
        ></div>
        <div
          className="animate-float"
          style={{
            position: "relative",
            zIndex: "10",
            borderRadius: "2rem",
            overflow: "hidden",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
            border: "4px solid var(--card-bg)",
          }}
        >
          <Image
            src="/avatar.png"
            alt="Avatar QA & Web Developer"
            width={350}
            height={350}
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
