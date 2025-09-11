
import { LibraryData } from "@/types/library";
import { journalArticles } from "./journalArticles";

// Convert journal articles to library articles format
const journalLibraryArticles = journalArticles.map(article => ({
  id: article.id,
  slug: article.slug,
  title: article.title,
  excerpt: article.excerpt,
  image: article.image,
  category: article.category,
  japaneseConcept: article.japaneseConcept,
  conceptMeaning: article.conceptMeaning,
  readTime: article.readTime,
}));

export const libraryData: LibraryData = {
  title: "KAERU Knowledge Library",
  description: "Explore our collection of articles, research, and wisdom",
  sections: [
    {
      id: "science",
      title: "Scientific Research",
      description: "Discover the scientific foundations behind our formulations and the endocannabinoid system.",
      articles: [
        {
          id: "endo-system",
          slug: "endocannabinoid-system",
          title: "The Endocannabinoid System: Your Body's Balance Keeper",
          excerpt: "Learn how your body's natural endocannabinoid system works to maintain homeostasis across all physiological processes.",
          image: "/lovable-uploads/c80cd2e3-2aa8-4aa2-8570-80389c518417.png",
          category: "Science",
          readTime: "8 min"
        },
        {
          id: "east-west",
          slug: "east-west-harmony",
          title: "Eastern Wisdom & Western Science: A Perfect Partnership",
          excerpt: "Explore the fascinating parallels between traditional Eastern healing philosophies and modern Western scientific discoveries.",
          image: "/lovable-uploads/d658e44c-0774-472d-82a2-f3cef3182981.png",
          category: "Science",
          japaneseConcept: "調和",
          conceptMeaning: "Chōwa - Harmony",
          readTime: "9 min"
        },
        {
          id: "cannabinoid-research",
          slug: "cannabinoid-research",
          title: "Contemporary Cannabinoid Research",
          excerpt: "A look at the latest scientific studies on CBD, terpenes, and their effects on various physiological processes.",
          image: "/lovable-uploads/91e158fc-d373-4d74-aeef-37df89d2f38a.png",
          category: "Science",
          readTime: "7 min"
        },
        {
          id: "japanese-botanicals",
          slug: "japanese-botanicals",
          title: "Japanese Botanical Traditions in Modern Formulation",
          excerpt: "How traditional Japanese botanical knowledge informs our innovative approach to wellness formulations.",
          image: "/lovable-uploads/64847212-c543-4cd6-b98f-5c7a4e840dd4.png",
          category: "Science",
          japaneseConcept: "植物の知恵",
          conceptMeaning: "Shokubutsu no Chie - Plant Wisdom",
          readTime: "6 min"
        }
      ]
    },
    {
      id: "philosophy",
      title: "Japanese Philosophy",
      description: "Explore the rich philosophical traditions that inspire our approach to wellness and transformation.",
      articles: journalLibraryArticles.filter(article => 
        article.category === "Clarity" || 
        article.category === "Harmony" || 
        article.category === "Balance"
      )
    },
    {
      id: "practices",
      title: "Wellness Practices",
      description: "Traditional and modern practices to incorporate into your daily wellness routine.",
      articles: [
        {
          id: "mindful-application",
          slug: "mindful-application",
          title: "The Art of Mindful Application",
          excerpt: "Transform your daily skincare routine into a meditative ritual with these simple mindfulness techniques.",
          image: "/lovable-uploads/b9d677b0-a752-471b-8134-0f3d04821f39.png",
          category: "Practice",
          japaneseConcept: "気づき",
          conceptMeaning: "Kizuki - Awareness",
          readTime: "5 min"
        },
        {
          id: "breathwork",
          slug: "breathwork",
          title: "Japanese Breathwork Techniques",
          excerpt: "Ancient breathing methods to enhance the effects of your wellness rituals and reduce stress.",
          image: "/lovable-uploads/e624a92f-f1be-4ffc-b48a-6dbfdf522bee.png",
          category: "Practice",
          japaneseConcept: "呼吸法",
          conceptMeaning: "Kokyūhō - Breathing Method",
          readTime: "6 min"
        },
        ...journalLibraryArticles.filter(article => 
          article.category === "Strength" || 
          article.category === "Roots"
        )
      ]
    }
  ]
};
