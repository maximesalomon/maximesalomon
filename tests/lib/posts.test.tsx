import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { ZodError } from 'zod';

import { RichContent } from '@/components/rich-content';
import { formatDisplayDate, parsePostFile } from '@/lib/posts';

describe('parsePostFile', () => {
  it('parses valid frontmatter and strips legacy inline styles', () => {
    const post = parsePostFile(
      'example.md',
      `---
title: Example title
date: May 6th, 2020
author: Maxime Salomon
slug: example-title
---

<style>article { color: red; }</style>

Hello world.
`,
    );

    expect(post.slug).toBe('example-title');
    expect(post.content).not.toContain('<style>');
    expect(post.excerpt).toContain('Hello world');
  });

  it('throws on invalid frontmatter', () => {
    expect(() =>
      parsePostFile(
        'broken.md',
        `---
title: Missing fields
slug: missing-fields
---

Body
`,
      ),
    ).toThrow(ZodError);
  });
});

describe('formatDisplayDate', () => {
  it('normalizes ordinal dates into a readable label', () => {
    expect(formatDisplayDate('May 6th, 2020')).toBe('May 6, 2020');
  });
});

describe('RichContent', () => {
  it('does not render raw script tags', () => {
    const markup = renderToStaticMarkup(
      createElement(RichContent, {
        content: 'Safe text\n\n<script>alert("xss")</script>',
      }),
    );

    expect(markup).toContain('Safe text');
    expect(markup).not.toContain('<script>');
  });
});
