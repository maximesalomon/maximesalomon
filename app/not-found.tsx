import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col justify-center px-6 py-16">
      <p className="text-sm uppercase tracking-[0.18em] text-[#8f6e5d]">404</p>
      <h1 className="mt-4 font-serif text-5xl text-[#231912]">
        Page not found.
      </h1>
      <p className="mt-4 text-lg leading-8 text-[#4f3c31]">
        The page you requested is not part of the static archive.
      </p>
      <Link
        className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#9d311d] px-5 py-3 font-medium text-[#fff7f2]"
        href="/"
      >
        Go back home
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
