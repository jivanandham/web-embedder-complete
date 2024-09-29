import React from 'react';
import Link from 'next/link';

const Card = ({ url }: { url: string }) => {
  return (
    <div className="border p-4 rounded">
      <h3 className="text-lg font-bold">{url}</h3>
      <Link href={url}>
        <a target="_blank" rel="noopener noreferrer" className="text-blue-500">
          Visit Site
        </a>
      </Link>
    </div>
  );
};

export default Card;
