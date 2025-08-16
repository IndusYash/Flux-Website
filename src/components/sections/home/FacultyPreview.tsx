// src/components/home/FacultyPreview.tsx
import SectionCTA from "@/components/sectionCTA";

export default function FacultyPreview() {
  return (
    <section
      className="py-16 text-white"
      style={{ backgroundColor: "hsl(var(--card) / 0.6)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Text + CTA (left on desktop) */}
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Meet Our Faculty
            </h2>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Under the guidance of our Head of Department, our faculty team
              blends expertise with dedication — shaping the minds of tomorrow
              through innovation, research, and unwavering commitment to
              excellence.
            </p>
            <SectionCTA
              to="/faculty"
              label="View All Faculty →"
              variant="primary"
            />
          </div>

          {/* HOD Image (right on desktop) */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/assets/faculty/hod.jpg"
              alt="Head of Department"
              className="w-56 h-56 object-cover rounded-full shadow-lg border-4 border-neutral-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
