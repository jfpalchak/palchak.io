import { SUMMARY } from "@/data/lifeApi";
import Socials from "@/components/Socials";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <section>
      <div>
        <h1 className="text-3xl font-medium">Joey Palchak</h1>
        <p className="text-sm sm:text-base mt-6">{SUMMARY}</p>
      </div>
      <Socials />
      <Projects />
    </section>
  );
}
