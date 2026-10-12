import type { HTMLAttributes } from 'react';

type EmbedProps = HTMLAttributes<HTMLDivElement> & {
  svg: string;
  [attr: `data-${string}`]: string | undefined;
};

export function Embed({ svg, className, ...rest }: EmbedProps) {
  return (
    <div
      className={className ? `${className} w-embed` : 'w-embed'}
      dangerouslySetInnerHTML={{ __html: svg }}
      {...rest}
    />
  );
}
