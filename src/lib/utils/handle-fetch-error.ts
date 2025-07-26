import { z } from 'zod';

export function handleFetchError(err: unknown, fallbackMessage?: string): never {
  if (err instanceof z.ZodError) {
    throw new Error(fallbackMessage || 'Data validation error.');
  }

  if (err instanceof Error) {
    throw err;
  }

  throw new Error('Unknown error occurred during fetch.');
}
