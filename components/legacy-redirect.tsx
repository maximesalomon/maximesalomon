'use client';

import { useEffect } from 'react';

type LegacyRedirectProps = {
  href: string;
};

export function LegacyRedirect({ href }: LegacyRedirectProps) {
  useEffect(() => {
    window.location.replace(href);
  }, [href]);

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col justify-center px-6 py-16">
      <p className="text-sm uppercase tracking-[0.18em] text-[#8f6e5d]">
        Redirecting
      </p>
      <h1 className="mt-4 font-serif text-4xl text-[#231912]">
        This article moved to the blog archive.
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-[#4f3c31]">
        If you are not redirected automatically, continue to the canonical page
        below.
      </p>
      <a
        className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#9d311d] px-5 py-3 font-medium text-[#fff7f2]"
        href={href}
      >
        Continue to the article
        <span aria-hidden="true">→</span>
      </a>
    </main>
  );
}
