'use client';

import ConnectivityCheck from '../components/ConnectivityCheck';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6">Connectivity Check</h1>
      <ConnectivityCheck />
    </main>
  );
}
