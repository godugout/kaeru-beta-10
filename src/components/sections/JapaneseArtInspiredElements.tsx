
import { useState } from "react";
import OrigamiButton from "@/components/ui/japanese-elements/OrigamiButton";
import KintsugiTransition from "@/components/ui/japanese-elements/KintsugiTransition";
import IkebanaGallery from "@/components/ui/japanese-elements/IkebanaGallery";
import SumiEMenu from "@/components/ui/japanese-elements/SumiEMenu";
import ShodoScroll from "@/components/ui/japanese-elements/ShodoScroll";
import ZenGarden from "@/components/ui/japanese-elements/ZenGarden";
import FuroshikiToggle from "@/components/ui/japanese-elements/FuroshikiToggle";

// Sample data for gallery
const galleryItems = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80",
    title: "Water Flow",
    description: "In ikebana, the arrangement of elements represents the harmony between water, earth, and sky—mirroring our Kaeru formulations that balance different botanical elements for perfect harmony.",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80",
    title: "Mountain Wind",
    description: "Just as alpine plants adapt to harsh conditions, our resilience formulations capture the essence of nature's adaptive strength, presented with the balanced asymmetry central to ikebana philosophy.",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1507281736509-c6289f1ea0f8?auto=format&fit=crop&q=80",
    title: "Stone Harmony",
    description: "This arrangement demonstrates the principle of 'ma' (negative space) which creates both visual balance and highlights each individual element's importance—much like our ingredient selection process.",
  }
];

// Menu items
const menuItems = [
  { label: "The Way", path: "/the-way", description: "Philosophy and principles of Kaeru" },
  { label: "Rituals", path: "/rituals", description: "Transformative wellness practices" },
  { label: "Science", path: "/science", description: "Research and formulation insights" },
  { label: "Shop", path: "/shop", description: "Premium wellness products" },
  { label: "Journal", path: "/journal", description: "Wisdom and reflections" }
];

const JapaneseArtInspiredElements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("Daily");
  
  return (
    <div className="min-h-screen bg-black text-white pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="py-16 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-gold mb-6">Japanese Art-Inspired Interface</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Experience the harmony of traditional Japanese aesthetics through these interactive elements,
            each designed to create a contemplative digital experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Origami Button */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl text-gold">Origami Button</h2>
            <p className="text-white/70">
              Inspired by the Japanese art of paper folding, these buttons create a dimensional effect on hover, 
              revealing subtle fold lines that suggest transformation—a core Kaeru value.
            </p>
            <div className="mt-10 flex justify-center">
              <OrigamiButton onClick={() => console.log("Origami button clicked")}>
                DISCOVER THE PATH
              </OrigamiButton>
            </div>
          </div>
          
          {/* Kintsugi Transition */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl text-gold">Kintsugi Transition</h2>
            <p className="text-white/70">
              Based on the Japanese art of repairing broken pottery with gold, this transition effect reveals content 
              through golden seams that bring fragments together—symbolizing beauty in healing and transformation.
            </p>
            <div className="flex justify-center items-center mt-6 mb-6">
              <button
                onClick={() => setIsVisible(!isVisible)}
                className="px-4 py-2 border border-gold/50 text-gold hover:bg-gold/10 transition-colors"
              >
                {isVisible ? "Hide Content" : "Reveal Content"}
              </button>
            </div>
            <KintsugiTransition isVisible={isVisible}>
              <div className="bg-black/20 p-6 rounded-sm">
                <h3 className="text-xl text-gold mb-2">The Beauty of Repair</h3>
                <p className="text-white/80">
                  Just as kintsugi honors the history of an object by highlighting its repairs rather than hiding them,
                  our journey to wellness embraces past experiences as essential parts of our whole being.
                </p>
              </div>
            </KintsugiTransition>
          </div>
        </div>

        {/* Ikebana Gallery */}
        <div className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="font-serif text-2xl text-gold">Ikebana Gallery</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Inspired by Japanese flower arrangement that emphasizes balance and harmony between elements,
              this gallery transitions between images with an elegant, asymmetrical balance.
            </p>
          </div>
          <IkebanaGallery items={galleryItems} className="max-w-3xl mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Sumi-e Menu */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl text-gold">Sumi-e Menu</h2>
            <p className="text-white/70">
              Inspired by traditional Japanese ink wash painting (Sumi-e), this menu creates fluid, brush-like 
              hover effects that capture the essence of controlled, mindful strokes with negative space.
            </p>
            <div className="mt-6">
              <SumiEMenu items={menuItems} />
            </div>
          </div>
          
          {/* Furoshiki Toggle */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl text-gold">Furoshiki Toggle</h2>
            <p className="text-white/70">
              Based on the Japanese cloth wrapping art, this toggle unwraps and wraps content during transitions,
              representing the traditional practice of presenting gifts with mindful attention to presentation.
            </p>
            <div className="mt-8">
              <FuroshikiToggle 
                options={["Daily", "Weekly", "Monthly"]} 
                defaultOption="Daily"
                onChange={setActiveTab}
              />
              <div className="mt-4 p-6 bg-black/20 rounded-sm min-h-[100px]">
                <h4 className="text-gold mb-2">{activeTab} Ritual</h4>
                {activeTab === "Daily" && (
                  <p className="text-white/80">Begin each day with a moment of stillness and intention.</p>
                )}
                {activeTab === "Weekly" && (
                  <p className="text-white/80">Dedicate time for deeper reflection and renewal.</p>
                )}
                {activeTab === "Monthly" && (
                  <p className="text-white/80">Connect with the lunar cycle through extended practice.</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Zen Garden */}
        <div className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="font-serif text-2xl text-gold">Zen Garden</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Inspired by Japanese rock gardens (karesansui), this interactive element allows users to draw 
              patterns in virtual sand, creating a meditative experience that induces calm through deliberate action.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <ZenGarden 
              onComplete={() => console.log("Zen garden completed")}
            />
          </div>
        </div>

        {/* Shodo Scroll */}
        <div>
          <div className="mb-8 text-center">
            <h2 className="font-serif text-2xl text-gold">Shodo Scroll</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Based on Japanese calligraphy, this scroll section reveals content with brush-like animations as 
              users scroll, emphasizing the balance between movement and stillness central to shodo practice.
            </p>
          </div>
          <ShodoScroll 
            title="The Path of Return" 
            subtitle="Ancient wisdom for modern wellness"
          >
            <p className="text-white/80">
              In the tradition of shodo, each stroke requires complete presence of mind—a quality we cultivate 
              in our own ritual practices. The careful composition of elements, the balance of positive and negative 
              space, and the mindful application of pressure all mirror the way we approach formulation and practice 
              at Kaeru.
            </p>
            <p className="text-white/80 mt-4">
              As you scroll through this experience, notice how the revealing of content mirrors the deliberate, 
              fluid nature of the brush on paper—an unbroken gesture that requires both careful planning and 
              spontaneous execution.
            </p>
          </ShodoScroll>
        </div>
      </div>
    </div>
  );
};

export default JapaneseArtInspiredElements;
