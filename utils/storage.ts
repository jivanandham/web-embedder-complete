export const saveCard = (url: string) => {
  const existingCards = getCards();
  if (!existingCards.includes(url)) {
    existingCards.push(url);
    localStorage.setItem('cards', JSON.stringify(existingCards));
  }
};

export const getCards = (): string[] => {
  if (typeof window !== 'undefined') {
    const cards = localStorage.getItem('cards');
    return cards ? JSON.parse(cards) : [];
  }
  return [];
};
