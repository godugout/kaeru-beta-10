
export interface JournalArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  image: string;
  japaneseConcept?: string;
  conceptMeaning?: string;
  author: string;
  relatedProducts: string[];
  publishDate: string;
  readTime: string;
  content?: {
    introduction?: string;
    koan?: string;
    sections?: Array<{
      title: string;
      content: string;
    }>;
    practice?: {
      title: string;
      steps: string[];
    };
    scientificFoundation?: string;
    productConnection?: string;
    closingMeditation?: string;
  };
}
