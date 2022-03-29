import { useEffect, useRef, useState } from "react";
import ReactTypewriter from "react-typing-effect";
import "./Welcome.css";

const values = [
  "Forward thinking",
  "Quality and trust",
  "Long-term solutions",
  "Constant learning",
  "Continuous improvement",
  "Being honest",
  "Beign upfront",
  "Collaboration",
];

interface Props {
  onWelcomed(): void;
}

export default function Welcome({ onWelcomed }: Props) {
  const greeting = useGreeting();

  const greetingRef = useRef<HTMLHeadingElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  const [showValues, setShowValue] = useState(false);

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
      setShowValue(true);
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
        <div className="about-me">
          <h3>I believe in:</h3>
          {showValues && (
            <code className="values">
              <ReactTypewriter
                speed={50}
                typingDelay={1000}
                eraseDelay={2500}
                eraseSpeed={50}
                cursor={"_"}
                text={values}
              />
            </code>
          )}
        </div>
        {/* <a
          href="/#"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector(".projects")?.scrollIntoView();
          }}
        >
          Learn more
        </a> */}
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
