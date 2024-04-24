import { db } from '@/db';
import Link from 'next/link';
import { GiBookStorm } from 'react-icons/gi';
import { BsBookmarkFill } from 'react-icons/bs';

export default async function Home() {
  const books = await db.book.findMany();

  const renderedBooks = books.map((book) => {
    return (
      <Link
        href={`/books/${book.id}`}
        key={book.id}
        className="   card card-normal bg-base-100 hover:bg-base-200 shadow-md transition ease-in-out duration-300 m-2"
      >
        <h5 className="card-title text-lg font-bold p-4 mt-2 ">{book.title} </h5>
        <div className=" card-actions justify-end">
          {' '}
          <BsBookmarkFill />
        </div>
      </Link>
    );
  });
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold flex  text-nowrap ">
          Explore Books <GiBookStorm />
        </h1>
        <Link className="btn btn-primary text-xs " href="/books/new">
          Write Summary
        </Link>
      </div>

      <ul>{renderedBooks}</ul>
    </main>
  );
}
