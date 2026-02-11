'use client';

import React, { useState, useEffect } from 'react';

export default function ConnectivityCheck() {
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const [checking, setChecking] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    function updateOnlineStatus() {
      setIsOnline(navigator.onLine);
    }

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    updateOnlineStatus();

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  async function checkConnectivity() {
    setError(null);
    setChecking(true);
    try {
      // Attempt to fetch a lightweight resource to confirm connectivity
      const response = await fetch(
        'https://www.google.com/favicon.ico',
        { cache: 'no-store', mode: 'no-cors' }
      );
      // If fetch succeeds without exception, assume connectivity
      setIsOnline(true);
    } catch (err) {
      setIsOnline(false);
      setError('Failed to fetch resource.');
    } finally {
      setChecking(false);
    }
  }

  return (
    <section className="w-full max-w-md p-6 bg-white rounded-xl shadow-md text-center">
      <p className="mb-4 text-lg">
        Current status:{' '}
        <span
          aria-live="polite"
          className={isOnline ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}
        >
          {isOnline ? 'Online' : 'Offline'}
        </span>
      </p>
      {error && <p className="mb-4 text-red-600" role="alert">{error}</p>}
      <button
        onClick={checkConnectivity}
        disabled={checking}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-busy={checking}
      >
        {checking ? 'Checking...' : 'Check Connectivity'}
      </button>
    </section>
  );
}
