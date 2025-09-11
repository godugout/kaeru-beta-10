
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import FrogAmbassadorCard from "@/components/frog-ambassador/FrogAmbassadorCard";
import FrogAmbassadorCollection from "@/components/frog-ambassador/FrogAmbassadorCollection";
import { FrogAmbassadorDetail } from "@/types/frogAmbassador";

// Sample data for the demo
const demoFrogs: FrogAmbassadorDetail[] = [
  {
    id: "kogane",
    name: "Kogane",
    species: "Amami Ishikawa's Frog",
    collection: "Gold Collection",
    japaneseName: "黄金",
    symbol: "金",
    mainColor: "#E6B980",
    origin: "Born from the tears of Tsukuyomi, the moon god, as they fell into a sacred mountain pool during the first lunar eclipse. Kogane emerged gleaming with golden skin that absorbed the divine lunar energy. The villagers who discovered this radiant creature built a shrine in its honor.",
    power: "Kogane bestows resilience and regenerative abilities. This golden frog's energy strengthens the body's natural healing processes and brings equilibrium to disrupted systems, much like the balance between the moon and earth.",
    ritual: "During the full moon, Kogane performs the Ritual of Golden Renewal—submerging itself in mountain spring water while absorbing moonlight through its skin. Those who apply Kaeru Gold connect to this ritual.",
    visualDescription: "A luminous golden frog with subtle patterns resembling ancient calligraphy across its back. Often depicted seated on a lily pad floating in a moonlit pond.",
    haiku: "Golden skin glistens\nMoon's tears heal earthly sorrows\nSilent strength renewed",
    transformationBenefits: [
      "Accelerated recovery after physical exertion",
      "Enhanced skin rejuvenation during sleep",
      "Balanced energy circulation throughout the day"
    ],
    seasonalVariation: {
      spring: { accentColor: "#F2FCE2", mood: "awakening" },
      summer: { accentColor: "#FEF7CD", mood: "vibrant" },
      autumn: { accentColor: "#FEC6A1", mood: "reflective" },
      winter: { accentColor: "#FFDEE2", mood: "restorative" }
    }
  },
  {
    id: "henko",
    name: "Henkō",
    species: "Japanese Tree Frog",
    collection: "Adaptability",
    japaneseName: "変化",
    symbol: "変",
    mainColor: "#8D6E63",
    origin: "When the shape-shifting tanuki sought to escape hunters by becoming a tree, it accidentally left part of its transformative spirit behind. From this essence emerged Henkō, a frog whose skin could shift between green and brown.",
    power: "Henkō grants the wisdom of adaptability and transformation. Its spirit teaches humans to move with life's changes rather than resist them, adjusting to new circumstances with grace.",
    ritual: "Twice yearly at the equinox, Henkō sheds its skin completely, absorbing the balanced energies of day and night. Devotees who massage Kaeru Adaptability oil invoke this transformative energy.",
    visualDescription: "A frog positioned between two distinct landscapes—one lush and green, the other autumnal and brown—with its body showing a gradient between these states.",
    haiku: "Green fades into brown\nNeither resisting the change\nTrue strength is within",
    transformationBenefits: [
      "Increased flexibility in body and mind",
      "Smoother transitions between different activities",
      "Enhanced resilience during life changes"
    ],
    seasonalVariation: {
      spring: { accentColor: "#A1C181", mood: "flexible" },
      summer: { accentColor: "#FCF9C6", mood: "adaptable" },
      autumn: { accentColor: "#E07A5F", mood: "transformative" },
      winter: { accentColor: "#81A1C1", mood: "resilient" }
    }
  },
  {
    id: "yasuragi",
    name: "Yasuragi",
    species: "Forest Green Tree Frog",
    collection: "Sanctuary",
    japaneseName: "安らぎ",
    symbol: "安",
    mainColor: "#33C3F0",
    origin: "In the ancient forest of Yakushima, a monk's meditation was disturbed by inner turmoil until a small green frog appeared and began rhythmically inflating its throat pouch. The monk synchronized his breath with the frog's movements and achieved profound peace.",
    power: "Yasuragi offers the gift of inner sanctuary and peaceful mind. Its presence helps humans create mental stillness amidst chaos, teaching that true sanctuary is carried within.",
    ritual: "At twilight, Yasuragi sings a single pure note that resonates at the frequency of perfect calm, causing dew to gather around it. Those who apply Kaeru Sanctuary balm connect to this vibration.",
    visualDescription: "A small, vibrant green frog seated in perfect stillness on a moss-covered stone. A subtle aura of lighter green surrounds Yasuragi, suggesting its calming influence.",
    haiku: "Throat swells with stillness\nForest breathes in harmony\nPeace within, without",
    transformationBenefits: [
      "Reduced mental chatter during meditation",
      "Improved quality of sleep and dreams",
      "Enhanced ability to remain centered in chaotic environments"
    ],
    seasonalVariation: {
      spring: { accentColor: "#D4F0C4", mood: "gentle" },
      summer: { accentColor: "#B6E3E4", mood: "cooling" },
      autumn: { accentColor: "#DDA77B", mood: "meditative" },
      winter: { accentColor: "#C1CEFE", mood: "tranquil" }
    }
  }
];

export default function FrogAmbassadorDemo() {
  const [selectedFrog, setSelectedFrog] = useState<FrogAmbassadorDetail>(demoFrogs[0]);

  return (
    <div className="bg-black min-h-screen text-white py-12">
      <div className="container mx-auto px-4">
        <div className="mb-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif text-gold mb-4">Frog Ambassador System</h1>
          <p className="text-white/70 mb-8">
            A modular component system for Kaeru's mythology, showcasing the sacred frog species
            that guide our product formulations and rituals.
          </p>
          
          {/* Japanese-inspired decorative element */}
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-gold/40 to-transparent mb-12"></div>
        </div>
        
        <Tabs defaultValue="individual">
          <TabsList className="bg-black border border-gold/20 mb-8">
            <TabsTrigger value="individual" className="data-[state=active]:text-gold">Individual Card</TabsTrigger>
            <TabsTrigger value="collection" className="data-[state=active]:text-gold">Collection Views</TabsTrigger>
            <TabsTrigger value="contexts" className="data-[state=active]:text-gold">Usage Contexts</TabsTrigger>
          </TabsList>
          
          {/* Individual card demo */}
          <TabsContent value="individual">
            <div className="grid md:grid-cols-[1fr_2fr] gap-8">
              <div>
                <h2 className="text-2xl font-serif text-gold mb-4">Single Frog Ambassador</h2>
                <p className="text-white/70 mb-6">
                  Each frog ambassador card presents the mythology, powers, and rituals associated with
                  a specific frog species that inspires Kaeru products.
                </p>
                
                <div className="mb-6">
                  <h3 className="text-sm uppercase tracking-widest text-gold/70 mb-3">Select Frog</h3>
                  <div className="flex flex-wrap gap-2">
                    {demoFrogs.map((frog) => (
                      <Button
                        key={frog.id}
                        variant="goldOutline"
                        size="sm"
                        onClick={() => setSelectedFrog(frog)}
                        className={selectedFrog.id === frog.id ? "bg-gold/10" : ""}
                      >
                        {frog.name}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <Card className="bg-black/40 border-gold/10">
                  <CardContent className="p-4">
                    <h3 className="text-sm uppercase tracking-widest text-gold/70 mb-2">Component Features</h3>
                    <ul className="text-sm text-white/70 space-y-2">
                      <li>• Tab navigation between origin, powers, ritual</li>
                      <li>• Japanese calligraphy symbol integration</li>
                      <li>• Animated transformation sequence</li>
                      <li>• Responsive design with compact/detailed variants</li>
                      <li>• Interactive ripple effect on hover</li>
                      <li>• Seasonal theming capabilities</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="max-w-md mx-auto">
                <FrogAmbassadorCard 
                  frog={selectedFrog} 
                  variant="detailed" 
                  season="spring" 
                />
              </div>
            </div>
          </TabsContent>
          
          {/* Collection view demo */}
          <TabsContent value="collection">
            <div className="mb-8">
              <h2 className="text-2xl font-serif text-gold mb-4">Collection Views</h2>
              <p className="text-white/70 mb-6">
                Frog ambassadors can be displayed in various layout patterns inspired by Japanese design principles,
                including tatami proportions and asymmetrical balance.
              </p>
            </div>
            
            <div className="space-y-16">
              <div>
                <h3 className="text-xl font-serif text-gold mb-6">Standard Grid Layout</h3>
                <FrogAmbassadorCollection 
                  frogs={demoFrogs}
                  title="Sacred Ambassadors"
                  description="Each Kaeru product is guided by the spirit of a sacred frog species, whose natural wisdom and healing properties are infused into our ritual formulations."
                  layout="grid"
                />
              </div>
              
              <div>
                <h3 className="text-xl font-serif text-gold mb-6">Tatami-Inspired Layout</h3>
                <p className="text-white/70 mb-6">
                  This layout follows traditional Japanese tatami mat proportions with intentional asymmetry,
                  creating a natural, organic flow between elements.
                </p>
                <FrogAmbassadorCollection 
                  frogs={[...demoFrogs, ...demoFrogs]}
                  title="Frog Mythology"
                  layout="tatami"
                />
              </div>
              
              <div>
                <h3 className="text-xl font-serif text-gold mb-6">Horizontal Scroll Gallery</h3>
                <p className="text-white/70 mb-6">
                  A compact horizontal scroll view that uses simplified cards, ideal for showcasing
                  multiple frogs in limited vertical space.
                </p>
                <FrogAmbassadorCollection 
                  frogs={demoFrogs}
                  title="Featured Guardians"
                  layout="scroll"
                />
              </div>
            </div>
          </TabsContent>
          
          {/* Usage contexts demo */}
          <TabsContent value="contexts">
            <div className="mb-8">
              <h2 className="text-2xl font-serif text-gold mb-4">Usage Contexts</h2>
              <p className="text-white/70 mb-6">
                The Frog Ambassador components are designed to be versatile, fitting seamlessly into
                different sections of the Kaeru website.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-black/40 border-gold/10 overflow-hidden">
                <div className="bg-green-950/40 p-4 border-b border-gold/10">
                  <h3 className="text-lg font-serif text-gold">Product Collection Page</h3>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-white/70 mb-4">
                    On product collection pages, frog ambassadors introduce the guiding spirit behind
                    each collection, connecting products to their mythological origins.
                  </p>
                  <div className="bg-black/30 p-4 rounded-md border border-white/5">
                    <FrogAmbassadorCard 
                      frog={demoFrogs[0]} 
                      variant="compact" 
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-black/40 border-gold/10 overflow-hidden">
                <div className="bg-blue-950/40 p-4 border-b border-gold/10">
                  <h3 className="text-lg font-serif text-gold">Ritual Builder</h3>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-white/70 mb-4">
                    In the ritual builder, users can select frog ambassadors to guide their personal
                    wellness journey, combining their powers for custom rituals.
                  </p>
                  <div className="bg-black/30 p-4 rounded-md border border-white/5">
                    <div className="flex flex-col gap-3">
                      <div className="text-sm text-white/70">Select your guiding spirit:</div>
                      <div className="grid grid-cols-3 gap-2">
                        {demoFrogs.map((frog) => (
                          <button
                            key={frog.id}
                            className="p-3 text-center border border-gold/10 rounded hover:bg-gold/10 transition-colors"
                          >
                            <div className="text-xl font-serif mb-1">{frog.symbol}</div>
                            <div className="text-xs text-gold/80">{frog.name}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-black/40 border-gold/10 overflow-hidden">
                <div className="bg-amber-950/40 p-4 border-b border-gold/10">
                  <h3 className="text-lg font-serif text-gold">Encyclopedia Section</h3>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-white/70 mb-4">
                    In the encyclopedia section, detailed frog ambassador cards provide in-depth exploration
                    of each frog's mythology, powers, and connections to wellness practices.
                  </p>
                  <div className="flex justify-center">
                    <div className="max-w-[250px]">
                      <FrogAmbassadorCard 
                        frog={demoFrogs[1]} 
                        variant="detailed" 
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-black/40 border-gold/10 overflow-hidden">
                <div className="bg-purple-950/40 p-4 border-b border-gold/10">
                  <h3 className="text-lg font-serif text-gold">Seasonal Campaign</h3>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-white/70 mb-4">
                    During seasonal campaigns, frog ambassadors appear with themed styling that reflects
                    the current season and its corresponding wellness focus.
                  </p>
                  <div className="bg-black/30 p-4 rounded-md border border-white/5">
                    <div className="text-sm text-amber-100 mb-4">Autumn Collection • 秋のコレクション</div>
                    <div className="grid grid-cols-2 gap-2">
                      {demoFrogs.slice(0, 2).map((frog) => (
                        <div key={frog.id} className="text-center p-2">
                          <div className="text-2xl font-serif mb-1 text-amber-200/80">{frog.symbol}</div>
                          <div className="text-xs text-amber-200/90">{frog.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
