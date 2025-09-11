
export interface IngredientNarrative {
  id: string;
  name: string;
  japaneseName: string;
  culturalSignificance: string;
  mythology: string;
  traditionalProperties: string;
  scientificValidation: string;
  kaeruOrigin: string;
  visualDescription: string;
  productAssociations: string[];
}

export const ingredientNarratives: IngredientNarrative[] = [
  {
    id: "matcha",
    name: "Matcha",
    japaneseName: "抹茶 (Matcha)",
    culturalSignificance: "Central to Japanese tea ceremony (茶道 Chadō), symbolizing mindfulness, respect, and purity. For centuries, Zen monks have used matcha to maintain alertness during meditation.",
    mythology: "In Japanese folklore, tea plants were said to have grown from the eyelids of Bodhidharma, the founder of Zen Buddhism, who cut them off to prevent sleep during nine years of meditation. This divine origin story connects matcha to spiritual awakening and sustained focus.",
    traditionalProperties: "In Eastern medicine, matcha is classified as a cooling herb that clears heat and toxins, calms the mind, and provides sustained energy without the crash of other stimulants. It's believed to prolong life and enhance mental clarity.",
    scientificValidation: "Modern research confirms matcha contains L-theanine, an amino acid that promotes calm alertness by increasing alpha brain waves. Rich in catechins (particularly EGCG), matcha offers potent antioxidant protection against cellular damage. Studies show it enhances cognitive function while reducing stress markers in the body.",
    kaeruOrigin: "Our ceremonial-grade matcha is harvested from shade-grown tea bushes in the misty highlands of Uji, where frogs inhabit the nearby streams. The farmers follow techniques perfected over 800 years, hand-picking only the finest leaves. We selected this source after discovering the unique soil composition enhanced both the tea's L-theanine content and its emerald vibrancy.",
    visualDescription: "A delicate sumi-e style illustration showing a ceramic tea bowl with vibrant green matcha powder being whisked. Mist rises from the bowl, forming the subtle silhouette of a frog within the vapor. Small kanji characters for 'awakening' appear at the edge, while concentric ripples in the tea mirror a pond's surface after rain.",
    productAssociations: ["KAERU CLARITY", "Sakura Renewal Essence"]
  },
  {
    id: "yuzu",
    name: "Yuzu",
    japaneseName: "柚子 (Yuzu)",
    culturalSignificance: "This aromatic citrus fruit is integral to Japanese winter solstice traditions. During Tōji, yuzu baths (yuzuyu) are prepared to ward off illness and bring good fortune. The fragrance is believed to transport worries away like floating fruit on water.",
    mythology: "In the folklore of coastal Japan, yuzu was brought to Earth by Raijin, the thunder god. Its bright yellow form captured lightning's energy, while its protective aromatic oils kept sea dragons at bay during winter storms. Families would hang yuzu from eaves to protect homes from malevolent spirits.",
    traditionalProperties: "Traditional medicine values yuzu for its warming properties that strengthen the body against cold and dampness. Its oils promote circulation, ease joint pain, and release stagnant qi (energy). The fruit's fragrance is used to lift melancholy and clear mental fog.",
    scientificValidation: "Research confirms yuzu's rich content of limonene and hesperidin, compounds with demonstrated anti-inflammatory and mood-enhancing effects. Its essential oil contains antioxidants that support skin barrier function. Studies in aromatherapy show the scent reduces stress hormones and improves mental performance through limbic system activation.",
    kaeruOrigin: "Our yuzu is sourced from small-scale orchards on Shikoku island, where the microclimate creates fruit with exceptionally high essential oil content. The farmers use sustainable practices that invite tree frogs to inhabit the groves as natural pest controllers. We were drawn to this source after learning how the region's volcanic soil enhances the fruit's healing compounds.",
    visualDescription: "A woodblock-style print showing a cut yuzu fruit with oils misting into the air. The mist forms the pattern of traditional wave designs. A tiny tree frog perches on the fruit's edge, its golden eyes echoing the fruit's color. Delicate kanji for 'awakening spirit' appear as if etched into the yuzu's rind. The composition uses negative space to evoke dawn light.",
    productAssociations: ["Sakura Renewal Essence", "HeatFlow Recovery Oil"]
  },
  {
    id: "hinoki",
    name: "Hinoki Cypress",
    japaneseName: "檜 (Hinoki)",
    culturalSignificance: "Revered as one of Japan's five sacred trees, hinoki has been used in shrine construction, imperial palaces, and ritual baths for over a millennium. The wood's resistance to decay symbolizes purity and eternity in Shinto tradition.",
    mythology: "Ancient texts speak of the 'Crying Hinoki,' a sacred tree that wept healing resin when forest animals were injured. It's said that the first Emperor of Japan received visions while resting beneath a hinoki tree, where forest spirits revealed secrets of longevity through the cypress's aromatic embrace.",
    traditionalProperties: "In Eastern healing traditions, hinoki essence is used to purify systems of the body, particularly the respiratory and nervous systems. The aromatic oils are believed to dispel negative energy, reduce excess dampness, and restore depleted qi. It's traditionally used for meditation spaces to create spiritual boundaries.",
    scientificValidation: "Modern analysis reveals hinoki contains unique phytoncides that enhance immune function through increasing natural killer cell activity. Its alpha-pinene content has demonstrated antimicrobial and anti-inflammatory properties. Research shows the scent reduces cortisol levels while improving sleep quality through parasympathetic nervous system activation.",
    kaeruOrigin: "Our hinoki extract comes from sustainable forest management in the mountains of Kiso, where trimming practices preserve ancient trees while using younger growth. We discovered this source when researching the habitat of the rare Kajika frog, which thrives in the pure streams flowing through these forests. The ancient hinoki trees in this region produce oil with an exceptionally balanced terpene profile.",
    visualDescription: "A misty ink-wash painting style illustration showing hinoki branches with their distinctive flat sprays of scale-like leaves. Forest light filters through, creating dappled patterns. A small mountain stream winds through the composition's lower portion, with the subtle suggestion of a frog's form emerging from behind a moss-covered stone. The hinoki's distinctive ridged bark is rendered in fine detail at one edge, with the kanji for 'eternal breath' appearing as if carved naturally into the wood.",
    productAssociations: ["Golden Lily Essence", "Midnight Pond Elixir"]
  },
  {
    id: "ginger",
    name: "Japanese Ginger",
    japaneseName: "生姜 (Shōga)",
    culturalSignificance: "For centuries, ginger has been essential to Japanese cuisine and folk medicine. Served as pickled gari with sushi to cleanse the palate, it also appears in medicinal broths during seasonal transitions. Red ginger is often offered at shrines as a symbol of inner heat and vitality.",
    mythology: "Ancient mountain legends tell of the 'Fire Under Earth' spirit who gifted humans with ginger root after a particularly harsh winter threatened early settlements. This spirit, often depicted with frog-like features, taught that the warming rhizome could awaken one's internal sun during the coldest months.",
    traditionalProperties: "In Kampo medicine (Japanese herbal tradition), ginger is considered a key warming herb that dispels cold, stimulates circulation, and revitalizes depleted energy reserves. It's used to treat digestive stagnation, reduce pain from cold conditions, and boost weakened defensive qi at the body's surface.",
    scientificValidation: "Research confirms ginger's bioactive compounds, particularly gingerols and shogaols, have significant anti-inflammatory effects comparable to non-steroidal medications but without the side effects. Studies show these compounds inhibit pain pathways while stimulating circulation through vasodilation. Ginger's thermogenic properties have been measured to increase metabolic rate and improve muscle recovery after exertion.",
    kaeruOrigin: "Our ginger is cultivated in volcanic soil gardens in Kochi Prefecture, where traditional growing methods include playing specific sound frequencies to the plants—a practice we discovered dramatically increases the root's gingerol content. This region is home to several frog species that naturally protect the ginger plants from pests, creating a symbiotic relationship that produces exceptionally potent rhizomes.",
    visualDescription: "A dynamic brushwork illustration showing a cross-section of ginger rhizome with its fibrous interior revealed in warm amber tones. Subtle red-gold energy lines emanate from the root, forming the suggestion of flames or flowing meridian lines. A small mountain frog appears to leap through these energy currents. The composition uses traditional vermilion seals with the kanji for 'awakening fire' and 'flowing vitality' positioned as if they were traditional artist signatures.",
    productAssociations: ["HeatFlow Recovery Oil", "KAERU VITALITY"]
  },
  {
    id: "mugwort",
    name: "Japanese Mugwort",
    japaneseName: "蓬 (Yomogi)",
    culturalSignificance: "Mugwort holds a revered place in Japanese culture as a purification herb. Used in Shinto cleansing rituals, traditional moxibustion therapy, and as an essential ingredient in seasonal rice cakes (kusa mochi), it represents both protection and the vitality of spring.",
    mythology: "Ancient texts describe mugwort as the 'herb of dreams,' believed to have grown where heavenly beings rested on Earth. It's said that Izanagi, creator deity of Japan, used mugwort to purify himself after returning from the underworld. The herb is traditionally hung on doors during the Aoi Matsuri festival to ward off illness and invite dream guidance.",
    traditionalProperties: "Eastern healing traditions value mugwort for its ability to dispel coldness, regulate energy flow through meridians, and nourish blood. It's traditionally used to ease transition between seasons, support intuitive awareness during dreams, and restore depleted essence. Particularly valued for balancing feminine energy and addressing stagnation.",
    scientificValidation: "Modern research identifies mugwort's rich array of volatile compounds including thujone, cineole and camphor, which demonstrate antimicrobial and circulation-enhancing properties. Studies confirm its effects on increasing deep sleep brain waves and enhancing dream recall through mild nervous system modulation. Its flavonoids show significant antioxidant activity while its sesquiterpenes demonstrate targeted anti-inflammatory effects.",
    kaeruOrigin: "Our mugwort is wild-harvested from pristine mountain regions of Hokkaido, where it grows alongside clear streams that serve as breeding grounds for the native Hokkaido Brown Frog. We discovered that plants growing in these microenvironments produce a higher concentration of beneficial compounds, particularly when harvested during the full moon when the plant's aromatic oils are at their peak.",
    visualDescription: "A ethereal sumi-e style painting showing feathery mugwort leaves releasing tiny particles of moonlight into the night air. The silvery-green leaves appear to dissolve at their edges into mist. Below, a small pond reflects both the plant and moon, with the subtle silhouette of a frog emerging from water to land. The composition incorporates a circular ensō brushstroke containing the kanji for 'dream bridge' in faded ink, suggesting the transition between conscious and subconscious states.",
    productAssociations: ["Midnight Pond Elixir", "KAERU GOLD"]
  }
];
