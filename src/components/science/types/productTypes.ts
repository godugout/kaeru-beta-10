
export interface BodySystem {
  name: string;
  description: string;
  effect: string;
  research: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  color: string;
  systems: {
    endocannabinoid: BodySystem;
    nervous: BodySystem;
    immune: BodySystem;
  };
}
