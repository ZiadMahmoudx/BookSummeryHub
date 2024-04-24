'use client';
import type { Book } from '@prisma/client';
import { useState } from 'react';
import * as actions from '@/actions';

interface BookEditFormProps {
  book: Book;
}

const BookEditForm = ({ book }: BookEditFormProps) => {
  const [title, setTitle] = useState(book.title);
  const [summary, setSummary] = useState(book.summary);

  const editBookAction = actions.editBook.bind(null, book.id, title, summary);
  return (
    <>
      <div>
        <h1 className="text-5xl font-bold text-center pt-4">Editing Mood</h1>
      </div>
      <div className="flex items-center justify-center">
        <form action={editBookAction} className="w-full  p-6  rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
              Title
            </label>
            <input
              value={title}
              id="title"
              name="title"
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter title..."
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="summary" className="block text-gray-700 font-bold mb-2">
              Summary
            </label>
            <textarea
              value={summary}
              id="summary"
              name="summary"
              className="textarea textarea-ghost w-full h-60 input-bordered   "
              placeholder="Enter summary..."
              onChange={(event) => {
                setSummary(event.target.value);
              }}
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookEditForm;
