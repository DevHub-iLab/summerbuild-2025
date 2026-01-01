import Schedule from "../components/Schedule/Schedule";

export default function SchedulePage() {
  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Schedule
        </h2>
      </div>
      <Schedule />
    </section>
  );
}
