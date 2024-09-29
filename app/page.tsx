'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/searchresults?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-teal-400 text-center">
      <img src="https://files.oaiusercontent.com/file-jlm26BqD3kUVDl5BwieGKBsS?se=2024-09-28T21%3A39%3A42Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D6b0bbef3-2169-41cc-bd5b-a2e8bdef444a.webp&sig=9ZihXBxzBGgswS2qO5aRpaRQEzSxo5kv8CbuGeo6c2w%3D" alt="Logo" className="w-32 h-32 mb-8 rounded-full shadow-lg" />
      <h1 className="text-white text-4xl font-bold mb-4">Generative Any Search</h1>
      <div className="w-full max-w-md">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter search term"
          className="w-32 p-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <button
          onClick={handleSearch}
          className="w-32 bg-white text-blue-500 p-4 rounded-lg font-semibold shadow-lg hover:bg-blue-100 transition-colors"
        >
          Search
        </button>
      </div>
    </div>
  );
}
