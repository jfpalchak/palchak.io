import Link from "next/link";
import Heading from "@/components/Heading";

export default function NotFound() {
  return (
    <section className="text-center min-h-full">
      <div className="mt-20">
        <Heading subtitle="/ 404">
          page not found
        </Heading>
        <p className="mt-2 text-neutral-500">
          Whoops! Sorry, couldn&apos;t find what you&apos;re looking for.
        </p>
      </div>
      <div className="my-10">
        <Link href="/" className="hover:underline">
          return home <span aria-hidden>&rarr;</span>
        </Link>
      </div>
    </section>
  );
}
