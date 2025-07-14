import GradPic from "../assets/gradpic.png";
import Resume from "../assets/Cale, Mark Adrian (Resume).pdf";

export const AboutSection = () => {
  return (
    <section id="about" className="py-28 mb-8 bg-background text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-foreground text-center md:text-left">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Left: Profile Image */}
          <div className="relative w-75 h-75 md:w-100 md:h-100 rounded-full bg-transparent">
            <div className="w-full h-full overflow-hidden transition-transform duration-500 hover:scale-105">
              <img
                src={GradPic}
                alt="Mark Adrian Cale"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Description */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg text-foreground mb-4">
              I'm{" "}
              <span className="text-foreground font-bold">
                Mark Adrian Cale
              </span>
              , a Bachelor of Science in Computer Science graduate with a strong
              passion for web development and software design. I enjoy building
              responsive, intuitive, and user-friendly web applications.
            </p>

            <p className="text-lg text-foreground mb-4">
              I specialize in technologies like{" "}
              <span className="text-foreground font-semibold">
                HTML, CSS, JavaScript, PHP, Laravel, and React
              </span>
              . My internship at Central Visayas Information Sharing Network
              gave me hands-on experience working on Laravel and WordPress
              projects.
            </p>

            <p className="text-lg text-foreground mb-4">
              I'm eager to grow as a full-stack developer, contribute to
              meaningful projects, and bring ideas to life through code. I’m
              also known for being a fast learner, team player, and someone who
              loves solving challenges.
            </p>
            <a
              href={Resume}
              download
              className="inline-block px-6 py-3 bg-primary mt-5 text-white font-semibold rounded-full shadow-md hover:bg-green-600 transition duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
