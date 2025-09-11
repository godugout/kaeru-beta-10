
interface Ingredient {
  name: string;
  japaneseName?: string;
  origin: string;
  properties: string[];
  seasonalAspect?: string;
  storySnippet: string;
  imagePath?: string;
}

export const goldIngredients: Ingredient[] = [
  {
    name: "Premium CBD Extract",
    japaneseName: "高級CBDエキス (Kōkyū CBD ekisu)",
    origin: "Our CBD is derived from premium, non-GMO hemp plants grown exclusively in pristine mountain regions of Japan, harvested at optimal maturity.",
    properties: [
      "Anti-inflammatory", 
      "Analgesic (pain-relieving)", 
      "Skin-soothing",
      "Balancing to endocannabinoid system"
    ],
    seasonalAspect: "Harvested in early autumn when the cannabinoid profile is at its most potent and balanced.",
    storySnippet: "In the shadow of Mount Fuji, dedicated farmers tend to these plants following the rhythm of nature, speaking softly to them as they grow. The extraction process follows a 150-year-old technique, modified with modern technology for optimal purity.",
    imagePath: "/lovable-uploads/af2b09f6-5ce4-4a4f-8a9c-ad4ec65fc7cc.png"
  },
  {
    name: "Japanese Green Tea Extract",
    japaneseName: "日本緑茶エキス (Nihon ryokucha ekisu)",
    origin: "Sourced from the historic tea gardens of Uji, near Kyoto, where tea cultivation has been practiced for over 800 years.",
    properties: [
      "Rich in antioxidants",
      "Reduces inflammation",
      "Improves skin texture",
      "Natural preservative properties"
    ],
    seasonalAspect: "Spring harvest (first flush) yields the highest catechin content, prized for its therapeutic properties.",
    storySnippet: "Each tea leaf is hand-picked by tea masters who can feel the perfect harvest time through their fingertips. The extraction follows the 'ichi-go ichi-e' philosophy—one opportunity, one encounter—acknowledging the unique moment each batch represents.",
    imagePath: "/lovable-uploads/6423af34-5fea-41fc-bf8d-3fcb64a3660e.png"
  },
  {
    name: "Bamboo Essence",
    japaneseName: "竹のエッセンス (Take no essensu)",
    origin: "Extracted from the inner core of moso bamboo grown in the protected bamboo forests of Arashiyama, carefully harvested only during the full moon.",
    properties: [
      "Strengthening",
      "Resilience-promoting",
      "Rich in natural silica",
      "Moisture retention"
    ],
    seasonalAspect: "Winter harvest captures the essence of bamboo's strength as it stands resilient against frost and snow.",
    storySnippet: "The bamboo groves whisper ancient secrets to those who listen. Our harvesters bow to each stalk before gathering, acknowledging the spirit within. The essence is extracted using only the pressure of stone weights, allowing time rather than force to yield its precious extract.",
    imagePath: "/lovable-uploads/c80cd2e3-2aa8-4aa2-8570-80389c518417.png"
  },
  {
    name: "Yuzu Citrus Oil",
    japaneseName: "柚子シトラスオイル (Yuzu shitorasu oiru)",
    origin: "Cold-pressed from yuzu grown on small family farms in Shikoku Island, where the fruit has been cultivated by the same families for generations.",
    properties: [
      "Brightening",
      "Mood-enhancing aromatherapeutic properties",
      "Natural antiseptic",
      "Promotes circulation"
    ],
    seasonalAspect: "Harvested during the winter solstice, following the traditional Japanese yuzu bath ritual timing.",
    storySnippet: "On the shortest day of the year, when yuzu is traditionally used in bath rituals across Japan, our partner farmers harvest the golden fruit by hand. The first pressing is reserved exclusively for Kaeru, capturing the aromatic compounds at their most potent.",
    imagePath: "/lovable-uploads/6b63f383-921a-47d1-8895-49cf94c2eee5.png"
  }
];

export const clarityIngredients: Ingredient[] = [
  {
    name: "CBD Isolate",
    japaneseName: "CBDアイソレート (CBD aisorēto)",
    origin: "Our isolate is obtained through a proprietary crystallization process that ensures 99.9% purity, developed by our founder during his time studying ancient medicinal practices in Nara.",
    properties: [
      "Enhanced focus",
      "Mental clarity", 
      "Non-psychoactive",
      "Precise dosing"
    ],
    seasonalAspect: "Created year-round in small batches to ensure maximum freshness and potency.",
    storySnippet: "The purification process takes place in a laboratory where classical music plays continuously—a practice our scientists discovered helps maintain the molecular harmony of the crystallization process. Each batch is approved only when it achieves perfect clarity, like a still mountain lake.",
    imagePath: "/lovable-uploads/9dac3c96-b4e9-4ced-86a9-6db566bc413b.png"
  },
  {
    name: "Ginkgo Biloba",
    japaneseName: "イチョウ (Ichō)",
    origin: "Harvested from ginkgo trees that have stood for over 500 years in temple grounds near Tokyo, with permission from the attending monks.",
    properties: [
      "Improves blood circulation",
      "Enhances memory",
      "Antioxidant properties",
      "Supports cognitive function"
    ],
    seasonalAspect: "Autumn harvest when the leaves turn golden yellow, signaling peak concentration of flavonoids.",
    storySnippet: "These ancient trees have witnessed centuries of human history, absorbing wisdom through their roots. Monks have used their leaves for concentration during meditation since the 15th century. We harvest with gratitude, offering a portion of our harvest back to the temple for their medicinal use.",
    imagePath: "/lovable-uploads/91e158fc-d373-4d74-aeef-37df89d2f38a.png"
  },
  {
    name: "Japanese Mint",
    japaneseName: "和種はっか (Washu hakka)",
    origin: "Cultivated in the misty highlands of Hokkaido using traditional farming methods that have remained unchanged for generations.",
    properties: [
      "Cooling sensation",
      "Promotes alertness",
      "Clears mental fog",
      "Revitalizing aroma"
    ],
    seasonalAspect: "Summer harvest during early morning hours when essential oil content peaks.",
    storySnippet: "The mint fields are planted following the pattern of ancient constellations, an agricultural technique passed down through thirteen generations of the same farming family. The morning harvest begins with a brief ceremony thanking the plants for their contribution to human wellness.",
    imagePath: "/lovable-uploads/775b98a8-5a04-44fc-bc94-1e4a72b0517e.png"
  }
];

export const vitalityIngredients: Ingredient[] = [
  {
    name: "Broad Spectrum CBD",
    japaneseName: "ブロードスペクトラムCBD (Burōdo supekutoramu CBD)",
    origin: "Extracted using a traditional Japanese water separation method, modified for modern efficiency while preserving the entourage effect of multiple cannabinoids working in harmony.",
    properties: [
      "Full complement of beneficial cannabinoids",
      "Terpene-rich",
      "THC-free",
      "Enhanced efficacy through entourage effect"
    ],
    seasonalAspect: "Created in synchronicity with moon cycles, with extractions beginning on the new moon.",
    storySnippet: "Our extraction laboratory sits at the base of an ancient mountain believed to house kami (spirits) that protect plant wisdom. Water for the extraction process is collected from a natural spring that emerges only during specific lunar phases.",
    imagePath: "/lovable-uploads/1378ce86-0348-4402-85ed-afb3b4bb6daf.png"
  },
  {
    name: "Japanese Cherry Blossom Extract",
    japaneseName: "桜エキス (Sakura ekisu)",
    origin: "Delicately collected from specific sakura trees in Yoshino that bloom with exceptional vibrancy, harvested during the brief 72-hour peak bloom window.",
    properties: [
      "Antioxidant protection",
      "Gentle exfoliation",
      "Promotes cellular renewal",
      "Brightening effect"
    ],
    seasonalAspect: "Spring-exclusive ingredient, available only during the annual sakura bloom that symbolizes renewal and the ephemeral nature of life.",
    storySnippet: "The blossoms are gathered by master harvesters who train for ten years to develop the touch needed to collect without damaging the petals. The extraction begins immediately under the same trees, capturing the essence while it is still alive with the tree's energy.",
    imagePath: "/lovable-uploads/a68f0f37-2681-4338-b676-6ab27a046ad7.png"
  },
  {
    name: "Green Tea Antioxidants",
    japaneseName: "緑茶抗酸化物質 (Ryokucha kōsanka busshitsu)",
    origin: "Concentrated from rare shade-grown gyokuro green tea from the misty mountains of Kagoshima prefecture.",
    properties: [
      "Powerful anti-aging effect",
      "Protects against free radicals",
      "Promotes skin elasticity",
      "Reduces inflammation"
    ],
    seasonalAspect: "Harvested during the 88th day after the beginning of spring, traditionally considered the optimal day for tea quality.",
    storySnippet: "The tea plants grow under specially woven bamboo shades that filter sunlight to enhance chlorophyll and L-theanine content. The exact location of these tea fields is kept secret, with access granted only to harvesters who have proven their commitment to preserving traditional cultivation methods.",
    imagePath: "/lovable-uploads/78b65cd6-3a74-46cd-b172-02553cb87440.png"
  }
];

export const luxuryIngredients: Ingredient[] = [
  {
    name: "Full Spectrum CBD",
    japaneseName: "フルスペクトラムCBD (Furu supekutoramu CBD)",
    origin: "Created through a proprietary whole-plant extraction method that preserves the complete profile of beneficial compounds as they exist in nature.",
    properties: [
      "Complete cannabinoid profile",
      "Rich in terpenes and flavonoids",
      "Trace amounts of THC (below 0.3%)",
      "Maximum entourage effect"
    ],
    seasonalAspect: "Harvested at sunrise during the autumn equinox to capture the plant at perfect biochemical balance.",
    storySnippet: "Our master extractor studied under both traditional herbalists and Western biochemists, creating a bridge between ancient wisdom and modern science. Each batch is tested not only for chemical composition but also for its energetic resonance using techniques adapted from traditional Japanese medicine.",
    imagePath: "/lovable-uploads/84c986e7-67c9-401a-b46d-adefd853e93b.png"
  },
  {
    name: "Rare Japanese Botanicals",
    japaneseName: "希少な日本の植物 (Kishōna Nihon no shokubutsu)",
    origin: "A proprietary blend of seven botanicals found only in remote Japanese alpine regions, harvested with sustainable permits from conservation authorities.",
    properties: [
      "Adaptogenic effects",
      "Harmonizing influence on body systems",
      "Enhanced absorption of other ingredients",
      "Subtle aromatherapeutic benefits"
    ],
    seasonalAspect: "Components are harvested across all four seasons, then carefully aged together for one full year to create a perfectly balanced extract.",
    storySnippet: "The locations of these rare plants are closely guarded secrets, passed down through selected apprentices who spend years proving their commitment to conservation. Before each harvest, a Shinto blessing is performed to honor the spirit of the plants and mountains.",
    imagePath: "/lovable-uploads/f4aa427a-83b8-4550-a28c-b035188d37f0.png"
  },
  {
    name: "24K Gold Extract",
    japaneseName: "24金エキス (24-Kin ekisu)",
    origin: "Created from ethically sourced gold using an alchemical process adapted from practices found in ancient Japanese medicinal texts from the Heian period.",
    properties: [
      "Anti-inflammatory",
      "Enhances microcirculation",
      "Luxurious radiance",
      "Symbolic value of immortality and purity"
    ],
    seasonalAspect: "Prepared during the winter solstice when energy is drawn inward, mirroring gold's formation deep within the earth.",
    storySnippet: "The gold undergoes a 49-day transformation process, aligned with traditional Buddhist concepts of transition. Each stage is overseen by craftsmen who chant specific mantras believed to infuse the material with intention. The final extract is so refined it becomes part of your cellular structure, literally bringing light into the body.",
    imagePath: "/lovable-uploads/7631b884-de2d-430e-8f3f-a43922040300.png"
  }
];
