import FlipWords from "./FlipWords";

export default function Hero() {
  const words = ["Full Stack", "Web3", "GenAI", "Software"];

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="text-5xl font-bold mt-8 text-black">
            Hi, I'm Rushikesh Yeole
          </h1>
          <p className="text-lg mt-2">
            System Engineer @ TCS | <FlipWords words={words}/> Engineer 
          </p>
          <p className="description">
            Passionate about Possibilities!
          </p>
        </div>
      </div>
    </section>
  );
}
