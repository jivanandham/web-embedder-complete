import React from 'react';
import Card from './Card';

const CardList = ({ cards }: { cards: string[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map((url, index) => (
        <Card key={index} url={url} />
      ))}
    </div>
  );
};

export default CardList;
