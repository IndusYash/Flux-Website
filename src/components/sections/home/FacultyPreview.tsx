// src/components/home/FacultyPreview.tsx
import { Link } from "react-router-dom";

export default function FacultyPreview() {
  return (
    <section className="py-16 text-white"
    style={{ backgroundColor: "hsl(var(--card) / 0.6)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* HOD Image */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/assets/faculty/hod.jpg" // Update path if needed
              alt="Head of Department"
              className="w-56 h-56 object-cover rounded-full shadow-lg border-4 border-neutral-800"
            />
          </div>

          {/* Text + CTA */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Meet Our Faculty
            </h2>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Under the guidance of our Head of Department, our faculty team
              blends expertise with dedication — shaping the minds of tomorrow
              through innovation, research, and unwavering commitment to
              excellence.
            </p>
            <Link
              to="/faculty"
              className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium shadow transition"
            >
              View All Faculty →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
