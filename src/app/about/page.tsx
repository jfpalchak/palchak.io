import type { Metadata } from "next";
import { About } from '@/data/lifeApi';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <section>
      <div>
        <h1 className="text-3xl font-medium mb-6">Joey Palchak / about me</h1>
        {About.map((info) => (
          <p className="pb-2">{info}</p>
        ))}
      </div>
    </section>
  )
}
