import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div>
        <h1 className="text-3xl font-medium mb-6">Joey Palchak</h1>
        <p>Full Stack Developer, collaborative story-teller, and a maker of things. Enjoys building creative, dynamic products from start to finish. Focused on delivering intuitive experiences with extra attention to detail.</p>
      </div>
      <br/>
      <div>
        <h1>Socials</h1>
        Github LinkedIn Email
      </div>
      <br/>
      <div>
        <h1>Projects</h1>
        VinoSeeker
        Cranberry
        EOL
        Text Adventure
      </div>
    </section>
  );
}
