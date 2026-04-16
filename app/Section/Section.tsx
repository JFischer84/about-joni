type SectionItem =
  | string
  | {
      label: string;
      href: string;
    };

type SectionProps = {
  id: string;
  name: string;
  textColor: string;
  text?: string;
  items?: SectionItem[];
};

export const Section = ({ id, name, textColor, text, items }: SectionProps) => (
  <section
    id={id}
    className="flex min-h-screen flex-col items-center justify-start px-6 py-20 pt-32"
  >
    <h2 className={`mb-6 text-3xl font-bold md:text-4xl ${textColor}`}>
      {name}
    </h2>

    {text && (
      <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">
        {text}
      </p>
    )}

    {items && (
      <ul className="mx-auto max-w-3xl space-y-3 text-left text-gray-300 md:text-lg">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="mt-1 text-purple-300">•</span>

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
  </section>
);
