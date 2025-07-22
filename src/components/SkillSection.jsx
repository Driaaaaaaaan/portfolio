import { Brush, Database, Wrench } from "lucide-react";

export const SkillsSection = () => {
  const skills = [
    {
      title: "Frontend",
      icon: <Brush className="w-8 h-8 text-primary" />,
      items: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 80 },
        { name: "JavaScript", level: 78 },
        { name: "React", level: 50 },
        { name: "Tailwind", level: 70 },
        { name: "Bootstrap", level: 75 },
      ],
      aos: "fade-right",
    },
    {
      title: "Backend",
      icon: <Database className="w-8 h-8 text-primary" />,
      items: [
        { name: "PHP", level: 79 },
        { name: "Laravel", level: 68 },
        { name: "MySQL", level: 77 },
      ],
      aos: "fade-up",
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="w-8 h-8 text-primary" />,
      items: [
        { name: "Git", level: 65 },
        { name: "GitHub", level: 65 },
        { name: "WordPress", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "Figma", level: 70 },
      ],
      aos: "fade-left",
    },
  ];

  return (
    <section id="skills" className="py-28 bg-background text-white">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center md:text-left mb-12 text-foreground"
          data-aos="fade-up"
        >
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos={skill.aos}
              data-aos-duration="1000"
              className="relative rounded-2xl p-6 bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              {/* Icon & title */}
              <div className="flex items-center gap-3 mb-6 z-10 relative">
                <div className="p-3 bg-primary/10 rounded-xl">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-foreground">
                  {skill.title}
                </h3>
              </div>

              {/* Progress bars */}
              <div className="space-y-4 z-10 relative">
                {skill.items.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">
                        {item.name}
                      </span>
                      <span className="text-sm text-gray-400">
                        {item.level}%
                      </span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3">
                      <div
                        className="bg-primary h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Glow on hover */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition duration-500 z-0"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
