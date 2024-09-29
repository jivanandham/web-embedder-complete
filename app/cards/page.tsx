'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SearchResultsPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  const [searchQuery, setSearchQuery] = useState(query);
  const [results, setResults] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (query) {
      const fetchedResults = [
        { title: `Result 1 for "${query}"`, description: 'This is the first result' },
        { title: `Result 2 for "${query}"`, description: 'This is the second result' },
        { title: `Result 3 for "${query}"`, description: 'This is the third result' },
      ];
      setResults(fetchedResults);
    }
  }, [query]);

  const handleSearch = () => {
    router.push(`/searchresults?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-100 p-4 shadow-md flex items-center">
        <Link href="/">
          <img src="/images/logo.png" alt="Logo" className="w-12 h-12 mr-4 cursor-pointer" />
        </Link>
        <div className="flex-grow">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter new search term"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleSearch}
          className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </header>

      <main className="p-8 flex-grow">
        <h2 className="text-2xl font-bold mb-6">Search Results for "{query}"</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.length > 0 ? (
            results.map((result, index) => (
              <div key={index} className="p-4 border rounded-lg shadow-lg bg-white">
                <h3 className="text-lg font-bold">{result.title}</h3>
                <p className="text-gray-600 mt-2">{result.description}</p>
              </div>
            ))
          ) : (
            <p>No results found for "{query}".</p>
          )}
        </div>
      </main>
    </div>
  );
}
