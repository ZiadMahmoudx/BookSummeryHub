import { db } from '@/db';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import * as actions from '@/actions';
interface ShowBookProps {
  params: { id: string };
}

const ShowBook = async ({ params: { id } }: ShowBookProps) => {
  const book = await db.book.findFirst({
    where: { id }
  });

  if (!book) {
    return notFound();
  }
  const deleteBookActoin = actions.deleteBook.bind(null, book.id);
  return (
    <>
      <div className="max-w-5xl mx-auto px-6 py-8 bg-base shadow-lg rounded-lg mt-2">
        <h1 className="text-4xl xs:text-xl lg:text-5xl font-extrabold leading-tight text-gray-900  text-center whitespace-pre-wrap mb-6">
          {book.title}
        </h1>
        <p className=" leading-normal	 text-lg text-justify  whitespace-pre-wrap	 tracking-wide		 	 lg:text-xl text-gray-800 mb-6">
          {book.summary}
        </p>
        <div className="flex  justify-end gap-2 px-10">
          <Link href={`/books/${book.id}/edit`} className="btn btn-success">
            Edit
          </Link>
          <form action={deleteBookActoin} className="btn btn-error">
            <button>Delete</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ShowBook;

export async function generateStaticParams() {
  const books = await db.book.findMany();

  return books.map((book) => {
    return {
      id: book.id.toString()
    };
  });
}
