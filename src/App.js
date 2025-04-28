import React, { useState, useEffect, useRef } from "react";

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

    switch (cmd) {
      case "help":
        response =
          "Available commands:\nabout - Bio information\nskills - Technical abilities\nprojects - My work\nexperience - Work history\ncontact - Get in touch\nclear - Reset terminal";
        break;
      case "about":
        response =
          "Senior Game Developer @PixelForge\nUnity specialist with 5+ years experience\nPassionate about game mechanics & physics";
        setActiveTab("about");
        break;
      case "skills":
        response =
          "Core Skills:\n• Unity3D (Expert)\n• C# (Advanced)\n• Game Physics\n• AI Programming\n• Shader Development";
        setActiveTab("skills");
        break;
      case "projects":
        response =
          "Featured Projects:\n1. Stellar Odyssey (2023)\n2. Neon Retro (2022)\n3. Quantum Shift (2021)";
        setActiveTab("projects");
        break;
      case "experience":
        response =
          "Work History:\n2021-Present: Lead Dev @PixelForge\n2018-2021: Game Programmer @ByteStudios\n2016-2018: Junior Dev @IndieCo";
        setActiveTab("experience");
        break;
      case "contact":
        response =
          "Reach me at:\nEmail: dev@terminalportfolio.com\nGitHub: github/codewizard\nLinkedIn: linkedin/in/devprofile\nTwitter: @gamedev";
        setActiveTab("contact");
        break;
      case "clear":
        setOutput([]);
        return;
      default:
        response = `Command not found: ${cmd}\nType "help" for available commands`;
    }

    setOutput((prev) => [...prev, { cmd, res: response }]);
    setCommand("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (command.trim()) executeCommand(command);
  };

  // Sample projects data
  const projects = [
    {
      title: "Stellar Odyssey",
      year: 2023,
      description: "Open-world space exploration RPG with procedural planets",
      tech: ["Unity", "HDRP", "C#", "Procedural Generation"],
      details:
        "Developed core gameplay systems including planet generation, space flight mechanics, and resource management. Implemented custom shaders for atmospheric effects and optimized rendering for large-scale environments.",
    },
    {
      title: "Neon Retro",
      year: 2022,
      description: "Retro-style platformer with modern lighting effects",
      tech: ["Unity", "Shader Graph", "2D Physics"],
      details:
        "Created custom 2D lighting system using Shader Graph. Designed and implemented character movement physics with precise controls. Developed tile-based level editor for designers.",
    },
    {
      title: "Quantum Shift",
      year: 2021,
      description: "Puzzle game with dimension-shifting mechanics",
      tech: ["Unity", "C#", "Custom Physics"],
      details:
        "Implemented innovative dimension-swapping gameplay mechanic. Created custom physics interactions between dimensions. Designed puzzle progression system with increasing complexity.",
    },
  ];

  return (
    <div
      className="flex flex-col h-screen bg-black text-green-400 font-mono p-4 overflow-hidden"
      style={{ fontSize: "0.9rem" }}
    >
      {/* Terminal Header */}
      <div className="flex justify-between items-center mb-2 border-b border-green-400 pb-2">
        <h1 className="font-bold">terminal-portfolio v1.0.0</h1>
        <div className="flex space-x-1">
          {["about", "skills", "projects", "contact"].map((tab) => (
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
        className={`overflow-y-auto flex-grow border border-green-400 rounded p-4 ${
          activeTab ? "block" : "hidden"
        }`}
      >
        {activeTab === "about" && (
          <div>
            <h2 className="font-bold text-xl mb-4">About Me</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="border border-green-400 w-24 h-24 flex items-center justify-center">
                  <span className="text-3xl">JD</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">John Doe</h3>
                  <p className="text-green-300">Senior Game Developer</p>
                  <p className="mt-2">
                    Unity specialist with 5+ years experience building immersive
                    gameplay experiences
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-bold text-lg mb-2">Professional Summary</h3>
                <p className="mb-4">
                  Passionate game developer with expertise in Unity engine, game
                  physics, and AI systems. Specialized in creating polished
                  gameplay mechanics and optimizing performance for complex game
                  systems.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold mb-2">Education</h4>
                    <ul className="space-y-2">
                      <li>• BSc Computer Science - Tech University (2016)</li>
                      <li>
                        • Game Development Certificate - Online Academy (2018)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Certifications</h4>
                    <ul className="space-y-2">
                      <li>• Unity Certified Developer</li>
                      <li>• Advanced C# Programming</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "skills" && (
          <div>
            <h2 className="font-bold text-xl mb-4">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-3 border-b border-green-400 pb-1">
                  Game Development
                </h3>
                <ul className="space-y-2">
                  <li>• Unity3D (Expert)</li>
                  <li>• Game Physics</li>
                  <li>• AI Programming</li>
                  <li>• Shader Development</li>
                  <li>• Animation Systems</li>
                  <li>• UI/UX Implementation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 border-b border-green-400 pb-1">
                  Programming
                </h3>
                <ul className="space-y-2">
                  <li>• C# (Advanced)</li>
                  <li>• C++ (Intermediate)</li>
                  <li>• Python</li>
                  <li>• JavaScript</li>
                  <li>• HLSL/ShaderLab</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 border-b border-green-400 pb-1">
                  Tools & Technologies
                </h3>
                <ul className="space-y-2">
                  <li>• Git Version Control</li>
                  <li>• Unity DOTS</li>
                  <li>• Unity Addressables</li>
                  <li>• Performance Profiling</li>
                  <li>• CI/CD Pipelines</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "projects" && (
          <div>
            <h2 className="font-bold text-xl mb-6">Featured Projects</h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
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
                    <button className="px-3 py-1 bg-green-400 text-black font-bold hover:bg-green-300 transition-colors text-sm">
                      View Demo
                    </button>
                    <button className="px-3 py-1 border border-green-400 font-bold hover:bg-green-400/20 transition-colors text-sm">
                      Source Code
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "contact" && (
          <div>
            <h2 className="font-bold text-xl mb-6">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4 border-b border-green-400 pb-1">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="w-24 font-bold">Email:</span>
                    <a
                      href="mailto:dev@terminalportfolio.com"
                      className="hover:underline"
                    >
                      dev@terminalportfolio.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="w-24 font-bold">GitHub:</span>
                    <a
                      href="https://github.com/codewizard"
                      target="_blank"
                      rel="noopener"
                      className="hover:underline"
                    >
                      github.com/codewizard
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="w-24 font-bold">LinkedIn:</span>
                    <a
                      href="https://linkedin.com/in/devprofile"
                      target="_blank"
                      rel="noopener"
                      className="hover:underline"
                    >
                      linkedin.com/in/devprofile
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="w-24 font-bold">Twitter:</span>
                    <a
                      href="https://twitter.com/gamedev"
                      target="_blank"
                      rel="noopener"
                      className="hover:underline"
                    >
                      @gamedev
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 border-b border-green-400 pb-1">
                  Send Message
                </h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
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
                      className="w-full bg-black border border-green-400 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
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
        )}
      </div>
    </div>
  );
}

export default Portfolio;
