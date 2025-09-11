
export interface LibraryArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  category: string;
  japaneseConcept?: string;
  conceptMeaning?: string;
  readTime: string;
}

export interface LibrarySection {
  id: string;
  title: string;
  description: string;
  articles: LibraryArticle[];
}

export interface LibraryData {
  title: string;
  description: string;
  sections: LibrarySection[];
}
