import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center p-24 gap-[30px]">
      <Link
        href="/viewport-unit"
        className="w-32 h-16 flex items-center justify-center bg-sky-600 text-4xl font-semibold text-white"
      >
        vh
      </Link>
      <Link
        href="/small-viewport-unit"
        className="w-32 h-16 flex items-center justify-center bg-lime-600 text-4xl font-semibold text-white"
      >
        svh
      </Link>
      <Link
        href="/large-viewport-unit"
        className="w-32 h-16 flex items-center justify-center bg-yellow-600 text-4xl font-semibold text-white"
      >
        lvh
      </Link>
      <Link
        href="/dynamic-viewport-unit"
        className="w-32 h-16 flex items-center justify-center bg-violet-600 text-4xl font-semibold text-white"
      >
        dvh
      </Link>
    </main>
  );
}
