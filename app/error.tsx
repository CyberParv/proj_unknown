'use client';

'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex items-center justify-center h-screen bg-red-50">
        <div className="max-w-md p-6 bg-white rounded shadow text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
          <p className="mb-6">{error.message}</p>
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
