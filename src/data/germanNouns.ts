export type Article = 'der' | 'die' | 'das';

export interface ArticleStats {
    correct: number;
    total: number;
}

// prettier-ignore
export const germanNouns = [
    { word: 'Mann', article: 'der', translation: 'man', category: 'masculine' },
    { word: 'Frau', article: 'die', translation: 'woman', category: 'feminine' },
    { word: 'Kind', article: 'das', translation: 'child', category: 'neuter' },
    { word: 'Haus', article: 'das', translation: 'house', category: 'neuter' },
    { word: 'Auto', article: 'das', translation: 'car', category: 'neuter' },
    { word: 'Schule', article: 'die', translation: 'school', category: 'feminine' },
    { word: 'Baum', article: 'der', translation: 'tree', category: 'masculine' },
    { word: 'Stadt', article: 'die', translation: 'city', category: 'feminine' },
    { word: 'Tisch', article: 'der', translation: 'table', category: 'masculine' },
    { word: 'Buch', article: 'das', translation: 'book', category: 'neuter' },
    { word: 'Computer', article: 'der', translation: 'computer', category: 'masculine' },
    { word: 'Tür', article: 'die', translation: 'door', category: 'feminine' },
    { word: 'Wasser', article: 'das', translation: 'water', category: 'neuter' },
    { word: 'Straße', article: 'die', translation: 'street', category: 'feminine' },
    { word: 'Apfel', article: 'der', translation: 'apple', category: 'masculine' },
];
