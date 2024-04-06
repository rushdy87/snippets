'use client';

interface ErrorPageProrps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error }: ErrorPageProrps) {
  return <div>{error.message}</div>;
}
