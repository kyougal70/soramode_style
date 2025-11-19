export type NavLink = {
  href: string;
  label: string;
  subLinks?: NavLink[];
};

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'men' | 'women' | 'unisex' | 'traditional' | 'streetwear' | 'minimal-workwear';
  description: string;
  dataAiHint: string;
};

export type JournalArticle = {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  dataAiHint: string;
};
