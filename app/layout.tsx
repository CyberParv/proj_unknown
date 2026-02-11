import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Connectivity Check',
  description: 'A Next.js app to check connectivity status',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}
