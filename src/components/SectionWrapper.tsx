// components/SectionWrapper.tsx
interface SectionWrapperProps {
  title: string;
  description: string;
  children: React.ReactNode;
  cta?: React.ReactNode;
  background?: string; // e.g., "bg-muted/50"
}

export default function SectionWrapper({
  title,
  description,
  children,
  cta,
  background = ''
}: SectionWrapperProps) {
  return (
    <section className={`py-16 ${background}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading + Description */}
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground mb-8">
            {description}
          </p>
        </div>

        {/* Main Content */}
        <div className="mb-8">
          {children}
        </div>

        {/* CTA */}
        {cta && (
          <div>
            {cta}
          </div>
        )}
      </div>
    </section>
  );
}
