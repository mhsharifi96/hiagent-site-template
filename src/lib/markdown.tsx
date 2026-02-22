import {Fragment} from 'react';

export type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\u0600-\u06FF\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function extractToc(markdown: string): TocItem[] {
  return markdown
    .split('\n')
    .filter((line) => line.startsWith('## ')
      || line.startsWith('### '))
    .map((line) => {
      const level = line.startsWith('### ') ? 3 : 2;
      const text = line.replace(/^###?\s/, '').trim();
      return {id: slugify(text), text, level};
    });
}

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return <Fragment key={index}>{part}</Fragment>;
  });
}

export function renderMarkdown(markdown: string) {
  const lines = markdown.split('\n');
  const output: JSX.Element[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (!listItems.length) return;
    output.push(
      <ul key={`list-${output.length}`} className="mb-6 list-disc space-y-2 ps-5 text-muted-foreground">
        {listItems.map((item, idx) => (
          <li key={idx}>{renderInline(item)}</li>
        ))}
      </ul>
    );
    listItems = [];
  };

  lines.forEach((rawLine, index) => {
    const line = rawLine.trimEnd();

    if (!line.trim()) {
      flushList();
      return;
    }

    if (line.startsWith('- ')) {
      listItems.push(line.slice(2));
      return;
    }

    flushList();

    if (line.startsWith('### ')) {
      const text = line.slice(4).trim();
      output.push(
        <h3 id={slugify(text)} key={`h3-${index}`} className="mb-3 mt-8 text-xl font-semibold text-foreground">
          {text}
        </h3>
      );
      return;
    }

    if (line.startsWith('## ')) {
      const text = line.slice(3).trim();
      output.push(
        <h2 id={slugify(text)} key={`h2-${index}`} className="mb-4 mt-10 text-2xl font-bold text-foreground">
          {text}
        </h2>
      );
      return;
    }

    output.push(
      <p key={`p-${index}`} className="mb-5 leading-8 text-muted-foreground">
        {renderInline(line)}
      </p>
    );
  });

  flushList();

  return output;
}
