import ProfileImage from "../assets/profile.png";
import Resume from "../assets/Cale, Mark Adrian (Resume).pdf";
import { Typewriter } from "react-simple-typewriter";
import { ArrowDown } from "lucide-react";
export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 z-10">
        {/* Left side: Text */}
        <div className="text-center md:text-left flex-1 opacity-0 animate-fade-in-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <br />
            <span className="text-primary">Mark Adrian Cale</span>
          </h1>
          <p className="text-4xl md:text-4xl text-primary mb-4 h-8">
            <Typewriter
              words={["Web Developer", "Problem Solver", "Tech Enthusiast"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>
          <p className="hidden md:block text-base md:text-lg text-foreground mb-6 md:mt-8 max-w-xl">
            I’m a passionate{" "}
            <strong className="text-foreground text-bold">
              Bachelor of Science in Computer Science
            </strong>{" "}
            graduate with a strong foundation in web development. I specialize
            in building responsive websites using HTML, CSS, JavaScript, PHP,
            and Laravel. Eager to apply my skills in real-world projects and
            grow professionally.
          </p>
          <a
            href={Resume}
            download
            className="inline-block px-6 py-3 bg-primary mt-5 text-white font-semibold rounded-full shadow-md hover:bg-green-600 transition duration-300"
          >
            Download CV
          </a>
        </div>

        {/* Right side: Profile Image */}
        <div className="flex-1 flex justify-center opacity-0 animate-fade-in-right">
          <div className="relative w-75 h-75 md:w-100 md:h-100 rounded-full p-1 bg-transparent ">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary transition-transform duration-500 hover:scale-105 shadow-lg shadow-foreground">
              <img
                src={ProfileImage}
                alt="Mark Adrian Cale"
                className="w-full h-full object-cover scale-115"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
