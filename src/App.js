import React, { useState, useEffect, useRef } from "react";

// Content data in JSON format
const contentData = {
  about: {
    summary:
      "Senior Game Developer @Hiup Solutions\nUnity specialist with 3+ years experience\nPassionate about game mechanics & programming",
    title: "About Me",
    details: {
      name: "Shreedesh Niroula",
      role: "Game Developer",
      description:
        "Unity specialist with 3+ years experience building immersive gameplay experiences",
      professionalSummary:
        "Passionate game developer with expertise in Unity engine, game physics, and AI systems. Specialized in creating polished gameplay mechanics and optimizing performance for complex game systems.",
      education: [
        "BSc CSIT - Tribhuvan University (2018 - 2024)",
        "Kanchanjunga English Seconday - Secondary School (2016 - 2018)",
      ],
      certifications: ["Unity Certified Developer", "Advanced C# Programming"],
    },
  },
  skills: {
    title: "Technical Skills",
    summary:
      "Core Skills:\n• Unity3D (Expert)\n• C# (Advanced)\n• Game Physics\n• AI Programming\n• Shader Development",
    categories: [
      {
        name: "Game Development",
        items: [
          "Unity3D (Expert)",
          "Game Physics",
          "Multiplayer Networking",
          "Animation Systems",
          "UI/UX Implementation",
          "Optimization and Profiling",
        ],
      },
      {
        name: "Programming",
        items: ["C# (Advanced)", "C++ (Intermediate)", "Python", "Typescript"],
      },
      {
        name: "Tools & Technologies",
        items: [
          "Git Version Control",
          "Unity Addressables",
          "Unity Cloud",
          "Performance Profiling",
          "Multiplayer Networking Frameworks",
        ],
      },
    ],
  },
  projects: {
    title: "Featured Projects",
    summary:
      "Featured Projects:\n1. Stellar Odyssey (2023)\n2. Neon Retro (2022)\n3. Quantum Shift (2021)",
    items: [
      {
        title: "Stellar Odyssey",
        year: 2023,
        description: "Open-world space exploration RPG with procedural planets",
        tech: ["Unity", "HDRP", "C#", "Procedural Generation"],
        details:
          "Developed core gameplay systems including planet generation, space flight mechanics, and resource management. Implemented custom shaders for atmospheric effects and optimized rendering for large-scale environments.",
        demoUrl: "https://demo.stellarodyssey.com",
        sourceUrl: "https://github.com/codewizard/stellar-odyssey",
      },
      {
        title: "Neon Retro",
        year: 2022,
        description: "Retro-style platformer with modern lighting effects",
        tech: ["Unity", "Shader Graph", "2D Physics"],
        details:
          "Created custom 2D lighting system using Shader Graph. Designed and implemented character movement physics with precise controls. Developed tile-based level editor for designers.",
        demoUrl: "https://play.neonretro.game",
        sourceUrl: "https://github.com/codewizard/neon-retro",
      },
      {
        title: "Quantum Shift",
        year: 2021,
        description: "Puzzle game with dimension-shifting mechanics",
        tech: ["Unity", "C#", "Custom Physics"],
        details:
          "Implemented innovative dimension-swapping gameplay mechanic. Created custom physics interactions between dimensions. Designed puzzle progression system with increasing complexity.",
        demoUrl: "https://quantumshift.demo",
        sourceUrl: "https://github.com/codewizard/quantum-shift",
      },
    ],
  },
  contact: {
    title: "Get In Touch",
    summary:
      "Reach me at:\nEmail: nshreedesh@gmail.com\nGitHub: github.com/NShreedesh\nLinkedIn: linkedin.com/in/shreedesh-niroula-5993881b8/",
    info: [
      {
        label: "Email",
        value: "nshreedesh@gmail.com",
        url: "mailto:nshreedesh@gmail.com",
      },
      {
        label: "GitHub",
        value: "github.com/NShreedesh",
        url: "https://github.com/NShreedesh",
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/shreedesh-niroula-5993881b8",
        url: "https://www.linkedin.com/in/shreedesh-niroula-5993881b8/",
      },
    ],
  },
};

function Portfolio() {
  const [activeTab, setActiveTab] = useState("about");
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([]);
  const outputEndRef = useRef(null);
  const inputRef = useRef(null);

  // Focus input and scroll to bottom on updates
  useEffect(() => {
    inputRef.current.focus();
    outputEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [output, activeTab]);

  const executeCommand = (cmd) => {
    cmd = cmd.toLowerCase().trim();
    let response = "";

    if (cmd === "help") {
      response =
        "Available commands:\nabout - Bio information\nskills - Technical abilities\nprojects - My work\nexperience - Work history\ncontact - Get in touch\nclear - Reset terminal";
    } else if (cmd === "clear") {
      setOutput([]);
      return;
    } else if (contentData[cmd]) {
      response = contentData[cmd].summary;
      setActiveTab(cmd);
    } else {
      response = `Command not found: ${cmd}\nType "help" for available commands`;
    }

    setOutput((prev) => [...prev, { cmd, res: response }]);
    setCommand("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (command.trim()) executeCommand(command);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    window.location.href = `mailto:dev@terminalportfolio.com?subject=Message from ${name}&body=${encodeURIComponent(
      message
    )}\n\nFrom: ${email}`;
  };

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div>
            <h2 className="font-bold text-xl mb-4">
              {contentData.about.title}
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="border border-green-400 w-24 h-24 flex items-center justify-center">
                  <span className="text-3xl">SN</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">
                    {contentData.about.details.name}
                  </h3>
                  <p className="text-green-300">
                    {contentData.about.details.role}
                  </p>
                  <p className="mt-2">
                    {contentData.about.details.description}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-bold text-lg mb-2">Professional Summary</h3>
                <p className="mb-4">
                  {contentData.about.details.professionalSummary}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold mb-2">Education</h4>
                    <ul className="space-y-2">
                      {contentData.about.details.education.map(
                        (item, index) => (
                          <li key={index}>• {item}</li>
                        )
                      )}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Certifications</h4>
                    <ul className="space-y-2">
                      {contentData.about.details.certifications.map(
                        (item, index) => (
                          <li key={index}>• {item}</li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "skills":
        return (
          <div>
            <h2 className="font-bold text-xl mb-4">
              {contentData.skills.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contentData.skills.categories.map((category, index) => (
                <div key={index}>
                  <h3 className="font-bold text-lg mb-3 border-b border-green-400 pb-1">
                    {category.name}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      case "projects":
        return (
          <div>
            <h2 className="font-bold text-xl mb-6">
              {contentData.projects.title}
            </h2>
            <div className="space-y-6">
              {contentData.projects.items.map((project, index) => (
                <div
                  key={index}
                  className="border border-green-400 p-4 rounded-lg"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-lg">{project.title}</h3>
                    <span className="text-green-300">{project.year}</span>
                  </div>
                  <p className="mb-4">{project.description}</p>
                  <p className="text-sm mb-4">{project.details}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs border border-green-400 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-green-400 text-black font-bold hover:bg-green-300 transition-colors text-sm"
                    >
                      View Demo
                    </a>
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 border border-green-400 font-bold hover:bg-green-400/20 transition-colors text-sm"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "contact":
        return (
          <div>
            <h2 className="font-bold text-xl mb-6">
              {contentData.contact.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4 border-b border-green-400 pb-1">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contentData.contact.info.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-24 font-bold">{item.label}:</span>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {item.value}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 border-b border-green-400 pb-1">
                  Send Message
                </h3>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-black border border-green-400 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-black border border-green-400 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full bg-black border border-green-400 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-400"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-400 text-black font-bold hover:bg-green-300 transition-colors w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="flex flex-col h-screen bg-black text-green-400 font-mono p-4 overflow-hidden"
      style={{ fontSize: "0.9rem" }}
    >
      {/* Terminal Header */}
      <div className="flex justify-between items-center mb-2 border-b border-green-400 pb-2">
        <h1 className="font-bold">terminal-portfolio v1.0.0</h1>
        <div className="flex space-x-1">
          {Object.keys(contentData).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                executeCommand(tab);
              }}
              className={`px-2 py-0.5 ${
                activeTab === tab
                  ? "bg-green-400 text-black"
                  : "hover:bg-green-400/20"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Compact Terminal Section (30% of screen) */}
      <div
        className="border border-green-400 rounded p-2 mb-4"
        style={{ height: "30vh" }}
      >
        <div className="overflow-y-auto h-5/6 pr-2">
          {output.length === 0 ? (
            <div className="mb-4">
              <div>Welcome to my interactive portfolio!</div>
              <div className="mt-1">
                Type <span className="text-green-300">"help"</span> to see
                available commands
              </div>
            </div>
          ) : (
            output.map((item, i) => (
              <div key={i} className="mb-3">
                <div className="text-green-300">$ {item.cmd}</div>
                <div className="whitespace-pre-line">{item.res}</div>
              </div>
            ))
          )}
          <div ref={outputEndRef} />
        </div>

        {/* Fixed Command Input */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center border-t border-green-400 pt-2 mt-2"
        >
          <span className="mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            className="bg-black text-green-400 flex-grow focus:outline-none"
            placeholder="Type a command..."
          />
        </form>
      </div>

      {/* Expanded Content Display (65% of screen) */}
      <div
        className={`overflow-y-auto flex-grow border border-green-400 rounded p-4`}
      >
        {renderContent()}
      </div>
    </div>
  );
}

export default Portfolio;
