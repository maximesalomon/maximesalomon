import { createElement } from 'react';

import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

type RichContentProps = {
  content: string;
};

export function RichContent({ content }: RichContentProps) {
  return createElement(
    ReactMarkdown,
    {
      rehypePlugins: [rehypeSanitize],
      remarkPlugins: [remarkGfm],
      components: {
        a: ({ href = '', children, ...props }) => {
          const isExternal = href.startsWith('http');

          return createElement(
            'a',
            {
              ...props,
              href,
              rel: isExternal ? 'noreferrer' : undefined,
              target: isExternal ? '_blank' : undefined,
            },
            children,
          );
        },
        img: ({ alt = '', src = '' }) =>
          createElement('img', {
            alt,
            className:
              'mx-auto rounded-3xl border border-black/10 shadow-[0_16px_50px_rgba(35,25,18,0.12)]',
            loading: 'lazy',
            src,
          }),
      },
    },
    content,
  );
}
