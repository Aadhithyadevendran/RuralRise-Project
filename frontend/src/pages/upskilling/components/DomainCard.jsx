import React from "react";

const DomainTemplate = ({ domain, certifications, contents, youtube, concepts }) => {
  return (
    <div className="bg-gradient-to-b from-[#1A2A44] to-[#1A2A44] min-h-screen flex items-center justify-center py-10 px-4 relative">
      <div className="w-full max-w-5xl bg-white p-8 rounded-2xl shadow-xl z-10">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#1A2A44]">{domain} Learning Hub</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#1A2A44]">Certifications</h2>
          <ul className="list-disc list-inside space-y-2">
            {certifications.map((cert, idx) => (
              <li key={idx}>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#34D399] hover:underline"
                >
                  {cert.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#1A2A44]">Learning Contents</h2>
          <ul className="list-disc list-inside space-y-2">
            {contents.map((content, idx) => (
              <li key={idx}>
                <a
                  href={content.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#34D399] hover:underline"
                >
                  {content.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#1A2A44]">YouTube Tutorials</h2>
          <ul className="list-disc list-inside space-y-2">
            {youtube.map((yt, idx) => (
              <li key={idx}>
                <a
                  href={yt.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#34D399] hover:underline"
                >
                  {yt.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#1A2A44]">Other Important Concepts</h2>
          <ul className="list-disc list-inside space-y-2">
            {concepts.map((cpt, idx) => (
              <li key={idx} className="text-[#1A2A44]">
                {cpt}
              </li>
            ))}
          </ul>
        </section>
      </div>
      {/* Background Dots Pattern */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(circle,#34D399_2px,transparent_2px)] bg-[length:20px_20px] opacity-30 z-0" />
    </div>
  );
};

export default DomainTemplate;