import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <section>
      <div>
        <h1 className="text-3xl font-medium mb-6">Joey Palchak / about me</h1>
        <p className="pb-2">Hi, I'm Joey! I'm a developer based in Portland, Oregon, having grown up in the small town of Colchester, Vermont.</p>
        <p className="pb-2">I have a bachelor's degree in Computer Science from the University of Vermont, and studied Full Stack Web Development at Epicodus, a vocational school in Portland.</p>
        <p className="pb-2">I enjoy programming, dungeons & dragons, hiking with my dog, and every possible iteration of grapefruit-flavored seltzer.</p>
      </div>
    </section>
  )
}
