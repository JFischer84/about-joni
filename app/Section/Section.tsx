import { FaGithub, FaLinkedin, FaXing } from "react-icons/fa";
import { SectionItem } from "@/app/Section/types";

type SectionProps = {
  id: string;
  name: string;
  textColor: string;
  glow: string;
  text?: string;
  items?: SectionItem[];
};

export const Section = ({
  id,
  name,
  textColor,
  text,
  items,
  glow,
}: SectionProps) => {
  const renderIcon = (icon?: "github" | "linkedin" | "xing") => {
    switch (icon) {
      case "github":
        return <FaGithub className="h-12 w-12" />;
      case "linkedin":
        return <FaLinkedin className="h-12 w-12" />;
      case "xing":
        return <FaXing className="h-12 w-12" />;

      default:
        return null;
    }
  };

  const isContact = id === "contact";

  return (
    <section
      id={id}
      className="relative flex min-h-screen flex-col items-center justify-start px-6 py-24 pt-32"
    >
      {/* Background Glow */}
      <div
        className={`pointer-events-none absolute left-1/2 -z-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full ${glow} opacity-20 blur-[120px]`}
      />

      <h2 className={`mb-6 text-3xl font-bold md:text-4xl ${textColor}`}>
        {name}
      </h2>

      {text && (
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">
          {text}
        </p>
      )}

      {items && !isContact && (
        <ul className="mx-auto max-w-3xl space-y-3 text-left text-gray-300 md:text-lg">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-purple-300">•</span>

              {typeof item === "string" ? (
                <span>{item}</span>
              ) : (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white hover:underline"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}

      {/* ✨ Contact Special Layout */}
      {items && isContact && (
        <div className="mt-6 flex gap-6">
          {items.map((item, index) => {
            if (typeof item === "string") return null;

            return (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition-all hover:scale-110 hover:text-white"
                aria-label={item.label}
              >
                {renderIcon(item.icon)}
              </a>
            );
          })}
        </div>
      )}
    </section>
  );
};
