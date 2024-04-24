import BookEditForm from '@/components/BookEditForm';
import { db } from '@/db';
import { notFound } from 'next/navigation';
import React from 'react';

interface BookEditPage {
  params: {
    id: string;
  };
}
const BookEditPage = async ({ params: { id } }: BookEditPage) => {
  const book = await db.book.findFirst({
    where: { id }
  });

  if (!book) {
    return notFound();
  }
  return (
    <div>
      <BookEditForm book={book} />
    </div>
  );
};

export default BookEditPage;
