export default function Home() {
  const colors = [
    "bg-purple-400",
    "bg-pink-400",
    "bg-blue-400",
    "bg-indigo-400",
    "bg-fuchsia-400",
  ];

  const shadows = [
    "shadow-purple-500/30",
    "shadow-pink-500/30",
    "shadow-blue-500/30",
    "shadow-indigo-500/30",
    "shadow-fuchsia-500/30",
  ];

  const sections = [
    "About Me",
    "Work & Skills",
    "Hobbies & Interests",
    "Fun Facts",
    "Contact",
  ];

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-neutral-900 px-6 text-center">
      <h1 className="mb-4 text-5xl font-bold text-purple-300 drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]">
        Hi, my name is Joni 👋
      </h1>
      <p className="mb-6 text-lg text-gray-300">
        I am a Frontend Developer with focus on TypeScript & React
      </p>

      <div className="flex gap-4">
        {sections.map((sectionName: string, i: number) => (
          <button
            key={sectionName}
            className={`${colors[i]} rounded-xl px-6 py-3 text-white shadow-lg ${shadows[i]} transition-opacity hover:opacity-80`}
          >
            {sectionName}
          </button>
        ))}
      </div>
    </section>
  );
}
