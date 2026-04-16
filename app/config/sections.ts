export const sectionData = [
  {
    id: "about",
    name: "About Me",
    color: "bg-purple-400",
    textColor: "text-purple-300",
    shadow: "shadow-purple-500/30",
  },
  {
    id: "skills",
    name: "Work & Skills",
    color: "bg-pink-400",
    textColor: "text-pink-300",
    shadow: "shadow-pink-500/30",
  },
  {
    id: "interests",
    name: "Hobbies & Interests",
    color: "bg-blue-400",
    textColor: "text-blue-300",
    shadow: "shadow-blue-500/30",
  },
  {
    id: "fun-facts",
    name: "Fun Facts",
    color: "bg-indigo-400",
    textColor: "text-indigo-300",
    shadow: "shadow-indigo-500/30",
  },
  {
    id: "contact",
    name: "Contact",
    color: "bg-fuchsia-400",
    textColor: "text-fuchsia-300",
    shadow: "shadow-fuchsia-500/30",
  },
] as const;

export const sectionContent = [
  {
    id: "about",
    text: `Hi, I'm Joni (she/her), a software developer based in Hamburg, Germany. I started my journey in software development in 2015 and have been working in the field ever since.
    Over the years, I've grown from a curious beginner into an experienced developer with a strong focus on building reliable and maintainable applications.
    I enjoy creating clean, well-structured code and continuously improving both my technical and collaborative skills.`,
  },
  {
    id: "skills",
    text: `I started my career working primarily with Java and Spring Boot, where I also gained experience with technologies like Elasticsearch. 
    In recent years, my focus has shifted towards frontend development, especially with TypeScript and React.
    I enjoy building intuitive user interfaces and creating smooth user experiences. 
    I have also worked with AWS in various projects, giving me a solid understanding of cloud-based architectures.
    I care deeply about code quality, maintainability, and well-structured projects.`,
  },
  {
    id: "interests",
    text: `Outside of work, I enjoy spending time on creative and social hobbies.
    I regularly play pen & paper role-playing games and board games with friends.
    I also produce electronic music and enjoy experimenting with sounds and composition.
    In addition, I like playing video games and have a particular interest in retro gaming.`,
  },
  {
    id: "fun-facts",
    items: [
      "I love cats. This is non-negotiable. 🐱",
      "Bananas and I don’t get along, yet KiBa still gets a pass.",
      "I once gave a full presentation to my gaming group to pitch new Pen & Paper RPGs.",
      "I used to run a YouTube channel about Pen & Paper RPGs.",
    ],
  },

  {
    id: "contact",
    items: [
      {
        label: "GitHub",
        href: "https://github.com/JFischer84",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/joni-fischer-91b58630b",
      },
      {
        label: "Xing",
        href: "https://www.xing.com/profile/Joni_Fischer061043",
      },
    ],
  },
];
