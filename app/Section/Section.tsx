type SectionProps = {
  id: string;
  name: string;
  textColor: string;
};

export const Section = ({ id, name, textColor }: SectionProps) => (
  <section
    id={id}
    className="flex min-h-screen flex-col items-center justify-start px-6 py-20 pt-32"
  >
    <h2 className={`mb-6 text-3xl font-bold md:text-4xl ${textColor}`}>
      {name}
    </h2>
    <p className="mx-auto max-w-2xl leading-relaxed text-gray-300">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
      dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
      nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
      Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
      enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
      felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
      elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo
      ligula, porttitor eu, consequat vitae
    </p>
  </section>
);
