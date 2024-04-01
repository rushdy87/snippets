import { notFound } from 'next/navigation';
import { db } from '@/db';

interface SnippetShowPage {
  params: {
    id: String;
  };
}

export default async function SnippetShowPage(props: SnippetShowPage) {
  const { id } = props.params;
  const snippet = await db.snippet.findFirst({ where: { id: Number(id) } });

  if (!snippet) {
    return notFound();
  }

  return <div>{snippet?.title}</div>;
}
