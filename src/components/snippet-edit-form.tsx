'use client';

import type { Snippet } from '@prisma/client';
import { useState } from 'react';
import Editor from '@monaco-editor/react';

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = '') => {
    setCode(value);
  };

  return (
    <div>
      <Editor
        height='40vh'
        theme='vs-dark'
        language='java'
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
    </div>
  );
}

// see: https://www.npmjs.com/package/@monaco-editor/react
