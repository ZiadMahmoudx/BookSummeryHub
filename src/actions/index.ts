'use server';

import { db } from '@/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createBook(formState: { message: string }, formData: FormData) {
  try {
    const title = formData.get('title');
    const summary = formData.get('summary');

    if (typeof title !== 'string' || title.length < 3) {
      return {
        message: 'The Title must be longer than 3 characters '
      };
    }

    if (typeof summary !== 'string' || summary.length < 10) {
      return {
        message: 'The summary must be longer than 10 characters'
      };
    }

    await db.book.create({
      data: {
        title,
        summary
      }
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        message: error.message
      };
    } else {
      return {
        message: 'Something went wrong...'
      };
    }
  }
  revalidatePath('/');
  redirect('/');
}

export async function editBook(id: string, title: string, summary: string) {
  await db.book.update({
    where: { id: id.toString() },
    data: {
      title,
      summary
    }
  });
  revalidatePath(`/books/${id}`);
  redirect(`/books/${id}`);
}

export async function deleteBook(id: string) {
  await db.book.delete({
    where: { id: id.toString() }
  });
  revalidatePath('/');
  redirect('/');
}
