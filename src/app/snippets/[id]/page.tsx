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

  return (
    <div>
      <div className='flex m-4 justify-between items-center'>
        <h1 className='text-xl font-bold'>{snippet?.title}</h1>
        <div className='flex gap-4'>
          <button className='p-2 border rounded'>Edit</button>
          <button className='p-2 border rounded'>Delete</button>
        </div>
      </div>
      <pre className='p-2 border rounded bg-gray-200 border-gray-200'>
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
