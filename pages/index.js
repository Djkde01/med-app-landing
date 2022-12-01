import Link from "next/link";
import Header from "../components/Header";

export default function Home() {
  return (
    <div id="container">
      <Header />
      <main className="main-landing">
        <h1>Acción de grupo víctimas biopolímeros</h1>
        <Link href="/" className="main-button">
          Unete ahora
        </Link>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "rgba(56, 12, 15, 1)", stopOpacity: "1" }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgba(109, 18, 14, 1)", stopOpacity: "1" }}
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#grad1)"
            fillOpacity="1"
            d="M0,256L80,256C160,256,320,256,480,229.3C640,203,800,149,960,144C1120,139,1280,181,1360,202.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </main>
    </div>
  );
}
