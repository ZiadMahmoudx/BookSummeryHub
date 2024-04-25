'use client';
import * as actions from '@/actions';

import { useFormState } from 'react-dom';

const BookCreatePage = () => {
  const [formState, action] = useFormState(actions.createBook, { message: '' });

  return (
    <>
      <div>
        <h1 className="text-5xl font-bold text-center pt-4">Writing Mode</h1>
      </div>
      <div className="flex items-center justify-center">
        <form action={action} className="w-full  p-6  rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter title..."
            />
          </div>
          <div className="mb-6">
            <label htmlFor="summary" className="block text-gray-700 font-bold mb-2">
              Summary
            </label>
            <textarea
              id="summary"
              name="summary"
              className="textarea textarea-ghost w-full h-60 input-bordered   "
              placeholder="Enter summary..."
            ></textarea>
          </div>
          <div></div>

          {formState.message ? (
            <div className="alert alert-error my-3 ">{formState.message}</div>
          ) : null}
          <div className="flex justify-end">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookCreatePage;
