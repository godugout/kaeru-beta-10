import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SoundSystemProps {
  enabled: boolean;
  onToggle: () => void;
  ambientTrack?: string;
  volume?: number;
}

// Sound effect mappings for ingredients
const ingredientSounds = {
  'matcha': {
    interaction: 'bamboo-whisk',
    ambient: 'tea-ceremony',
    description: 'Bamboo whisk on ceramic'
  },
  'yuzu': {
    interaction: 'water-drops',
    ambient: 'hot-bath',
    description: 'Water drops in hot bath'
  },
  'hinoki': {
    interaction: 'forest-wind',
    ambient: 'temple-bells',
    description: 'Wind through forest'
  },
  'shoga': {
    interaction: 'crackling-fire',
    ambient: 'meditation-bells',
    description: 'Crackling fire'
  },
  'yomogi': {
    interaction: 'night-forest',
    ambient: 'flowing-water',
    description: 'Night insects and flowing water'
  }
};

// Create audio context for web audio API
const createAudioBuffer = (frequency: number, duration: number, type: OscillatorType = 'sine') => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  const buffer = audioContext.createBuffer(1, audioContext.sampleRate * duration, audioContext.sampleRate);
  const data = buffer.getChannelData(0);
  
  for (let i = 0; i < buffer.length; i++) {
    const time = i / audioContext.sampleRate;
    let sample = 0;
    
    switch (type) {
      case 'sine':
        sample = Math.sin(2 * Math.PI * frequency * time);
        break;
      case 'triangle':
        sample = 2 * Math.abs(2 * (time * frequency - Math.floor(time * frequency + 0.5))) - 1;
        break;
      case 'square':
        sample = Math.sign(Math.sin(2 * Math.PI * frequency * time));
        break;
    }
    
    // Apply envelope (fade in/out)
    const envelope = Math.sin(Math.PI * time / duration);
    data[i] = sample * envelope * 0.1; // Low volume
  }
  
  return buffer;
};

const SoundSystem = ({ enabled, onToggle, ambientTrack, volume = 0.3 }: SoundSystemProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAmbient, setCurrentAmbient] = useState<string | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const ambientSourceRef = useRef<AudioBufferSourceNode | null>(null);

  useEffect(() => {
    if (enabled && !audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    
    return () => {
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close();
      }
    };
  }, [enabled]);

  // Play ingredient interaction sound
  const playIngredientSound = (ingredientId: string) => {
    if (!enabled || !audioContextRef.current) return;

    const sound = ingredientSounds[ingredientId as keyof typeof ingredientSounds];
    if (!sound) return;

    try {
      const audioContext = audioContextRef.current;
      
      // Create different tones for different ingredients
      let frequency = 440; // Default A note
      let waveType: OscillatorType = 'sine';
      
      switch (ingredientId) {
        case 'matcha':
          frequency = 523; // C5 - clear, focused
          waveType = 'triangle';
          break;
        case 'yuzu':
          frequency = 659; // E5 - bright, uplifting
          waveType = 'sine';
          break;
        case 'hinoki':
          frequency = 349; // F4 - grounding, peaceful
          waveType = 'sine';
          break;
        case 'shoga':
          frequency = 740; // F#5 - energetic, warm
          waveType = 'square';
          break;
        case 'yomogi':
          frequency = 294; // D4 - mysterious, dreamy
          waveType = 'triangle';
          break;
      }

      const buffer = createAudioBuffer(frequency, 0.3, waveType);
      const source = audioContext.createBufferSource();
      const gainNode = audioContext.createGain();
      
      source.buffer = buffer;
      gainNode.gain.value = volume * 0.5; // Gentle volume
      
      source.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      source.start();
      
      // Add a subtle reverb effect for depth
      const convolver = audioContext.createConvolver();
      const impulseBuffer = audioContext.createBuffer(2, audioContext.sampleRate * 2, audioContext.sampleRate);
      
      for (let channel = 0; channel < impulseBuffer.numberOfChannels; channel++) {
        const channelData = impulseBuffer.getChannelData(channel);
        for (let i = 0; i < channelData.length; i++) {
          channelData[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / channelData.length, 2);
        }
      }
      
      convolver.buffer = impulseBuffer;
      
      const wetGain = audioContext.createGain();
      wetGain.gain.value = 0.1;
      
      source.connect(convolver);
      convolver.connect(wetGain);
      wetGain.connect(audioContext.destination);
      
    } catch (error) {
      console.warn('Audio playback failed:', error);
    }
  };

  // Start ambient soundscape
  const startAmbientSound = (track: string) => {
    if (!enabled || !audioContextRef.current || currentAmbient === track) return;

    stopAmbientSound();
    setCurrentAmbient(track);
    
    try {
      const audioContext = audioContextRef.current;
      
      // Create a subtle ambient drone
      const oscillator1 = audioContext.createOscillator();
      const oscillator2 = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      const filter = audioContext.createBiquadFilter();
      
      oscillator1.frequency.value = 55; // Low A
      oscillator2.frequency.value = 82.4; // Low E
      
      oscillator1.type = 'sine';
      oscillator2.type = 'triangle';
      
      filter.type = 'lowpass';
      filter.frequency.value = 200;
      
      gainNode.gain.value = volume * 0.05; // Very subtle
      
      oscillator1.connect(filter);
      oscillator2.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator1.start();
      oscillator2.start();
      
      setIsPlaying(true);
      
      // Store references for cleanup
      ambientSourceRef.current = oscillator1 as any;
      
    } catch (error) {
      console.warn('Ambient audio failed:', error);
    }
  };

  const stopAmbientSound = () => {
    if (ambientSourceRef.current) {
      try {
        ambientSourceRef.current.stop();
      } catch (error) {
        console.warn('Error stopping ambient sound:', error);
      }
      ambientSourceRef.current = null;
    }
    setIsPlaying(false);
    setCurrentAmbient(null);
  };

  useEffect(() => {
    if (enabled && ambientTrack) {
      startAmbientSound(ambientTrack);
    } else {
      stopAmbientSound();
    }
  }, [enabled, ambientTrack]);

  // Expose sound playing function globally for ingredient cards
  useEffect(() => {
    if (enabled) {
      (window as any).playIngredientSound = playIngredientSound;
    } else {
      (window as any).playIngredientSound = null;
    }
    
    return () => {
      (window as any).playIngredientSound = null;
    };
  }, [enabled]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      {/* Main Sound Toggle */}
      <Button
        variant="outline"
        size="sm"
        className={`
          border-gold/30 text-gold/70 hover:border-gold/50 bg-kaeru-black/80 backdrop-blur-sm
          ${enabled ? 'border-gold text-gold bg-gold/10 shadow-lg shadow-gold/20' : ''}
        `}
        onClick={onToggle}
        title={enabled ? 'Disable sacred sounds' : 'Enable sacred sounds'}
      >
        {enabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
      </Button>

      {/* Ambient Sound Control */}
      {enabled && (
        <Button
          variant="outline"
          size="sm"
          className={`
            border-gold/30 text-gold/70 hover:border-gold/50 bg-kaeru-black/80 backdrop-blur-sm
            ${isPlaying ? 'border-gold text-gold bg-gold/10' : ''}
          `}
          onClick={() => isPlaying ? stopAmbientSound() : startAmbientSound('temple')}
          title={isPlaying ? 'Stop ambient sound' : 'Play ambient sound'}
        >
          <Music className="w-4 h-4" />
        </Button>
      )}

      {/* Sound Status Indicator */}
      {enabled && (
        <div className="text-xs text-gold/60 bg-kaeru-black/80 backdrop-blur-sm rounded px-2 py-1 border border-gold/20">
          {isPlaying ? '🎵 Temple Ambience' : '🔇 Silent'}
        </div>
      )}
    </div>
  );
};

export default SoundSystem;