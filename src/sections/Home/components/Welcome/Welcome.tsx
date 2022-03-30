import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { email, github, linkedin, skype, spotify } from "../../../../icons";
import "./Welcome.css";

// const values = [
//   "Forward thinking",
//   "Quality and trust",
//   "Long-term solutions",
//   "Constant learning",
//   "Continuous improvement",
//   "Being honest",
//   "Beign upfront",
//   "Collaboration",
// ];

interface Props {
  onWelcomed(): void;
}

export default function Welcome({ onWelcomed }: Props) {
  const greeting = useGreeting();

  const greetingRef = useRef<HTMLHeadingElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const hideGreetingTimeout = setTimeout(() => {
      if (greetingRef.current) {
        greetingRef.current.style.display = "block";
      }
      greetingRef.current?.classList.toggle("active");
    }, 1000);

    setTimeout(() => {
      if (greetingRef.current) {
        greetingRef.current.style.display = "none";
      }
      if (nameRef.current) {
        nameRef.current.style.display = "block";
      }
    }, 2000);

    const showNameTimeout = setTimeout(() => {
      nameRef.current?.classList.toggle("active");
    }, 2500);

    setTimeout(() => {
      onWelcomed();
    }, 3000);

    return () => {
      clearTimeout(hideGreetingTimeout);
      clearTimeout(showNameTimeout);
    };
  }, [onWelcomed]);

  return (
    <section className="welcome fluid-container">
      <h1 className="greeting active" ref={greetingRef}>
        {greeting}
      </h1>
      <div ref={nameRef} className="greeting" style={{ display: "none" }}>
        <div className="name">
          <h2>{greeting} My name is</h2>
          <h1 className="with-animated-color">Akinyele Cafe-Febrissy</h1>
        </div>
        <div className="icons about-me">
          <SocialLink
            url="https://github.akinyele.ca"
            alt="GitHub"
            icon={github}
          />
          <SocialLink
            url="https://linkedin.akinyele.ca"
            alt="LinkedIn"
            icon={linkedin}
          />
          <SocialLink url="skype:aakin013" alt="Skype" icon={skype} />
          <SocialLink
            url="mailto:me@akinyele.ca"
            alt="mailto:me@akinyele.ca"
            icon={email}
          />
          <SocialLink
            internal
            url="/music"
            alt="What I'm listening to"
            icon={spotify}
          />
        </div>
        <Link to="/projects">
          <button className="button see-projects scale-up-on-hover">
            <code>{"~/$ see-my-work --now >"}</code>
          </button>
        </Link>
      </div>
    </section>
  );
}

function useGreeting() {
  const hours = new Date().getHours();
  if (hours >= 4 && hours < 12) {
    return "Good morning!";
  }
  if (hours >= 12 && hours < 18) {
    return "Good afternoon!";
  }

  return "Good evening.";
}

function SocialLink({
  internal,
  alt,
  url,
  icon,
}: {
  internal?: boolean;
  alt: string;
  url: string;
  icon: string;
}) {
  const iconMarkup = <img src={icon} className="icon" alt={alt} />;

  if (internal) {
    return <Link to={url}>{iconMarkup}</Link>;
  }

  return (
    <a href={url} target="_blank" rel="noreferrer">
      {iconMarkup}
    </a>
  );
}
