import { create } from 'zustand';
import { ProductCollection } from '@/data/productsData';

export interface RitualBuilderState {
  currentStep: number;
  selectedProducts: ProductCollection[];
  ritualName: string;
  maxProducts: number;
}

export interface RitualBuilderActions {
  setCurrentStep: (step: number) => void;
  addProduct: (product: ProductCollection) => void;
  removeProduct: (productId: string) => void;
  setRitualName: (name: string) => void;
  resetBuilder: () => void;
  canAddProduct: () => boolean;
  getTotalPrice: () => number;
  getDiscountedPrice: () => number;
  getDiscount: () => number;
  getBundleDiscount: () => number;
}

type RitualBuilderStore = RitualBuilderState & RitualBuilderActions;

const initialState: RitualBuilderState = {
  currentStep: 1,
  selectedProducts: [],
  ritualName: '',
  maxProducts: 3,
};

export const useRitualBuilderStore = create<RitualBuilderStore>((set, get) => ({
  ...initialState,

  setCurrentStep: (step: number) => set({ currentStep: step }),

  addProduct: (product: ProductCollection) => {
    const state = get();
    if (state.canAddProduct() && !state.selectedProducts.find(p => p.id === product.id)) {
      set({ selectedProducts: [...state.selectedProducts, product] });
    }
  },

  removeProduct: (productId: string) => {
    const state = get();
    set({ selectedProducts: state.selectedProducts.filter(p => p.id !== productId) });
  },

  setRitualName: (name: string) => set({ ritualName: name }),

  resetBuilder: () => set(initialState),

  canAddProduct: () => {
    const state = get();
    return state.selectedProducts.length < state.maxProducts;
  },

  getTotalPrice: () => {
    const state = get();
    return state.selectedProducts.reduce((total, product) => total + product.prices.size2oz, 0);
  },

  getDiscountedPrice: () => {
    const state = get();
    const totalPrice = state.getTotalPrice();
    const discount = state.getBundleDiscount();
    return Math.round(totalPrice * (1 - discount));
  },

  getDiscount: () => {
    const state = get();
    const totalPrice = state.getTotalPrice();
    const discountedPrice = state.getDiscountedPrice();
    return totalPrice - discountedPrice;
  },

  getBundleDiscount: () => {
    const state = get();
    const productCount = state.selectedProducts.length;
    if (productCount >= 3) return 0.15; // 15% off for 3 products
    if (productCount >= 2) return 0.10; // 10% off for 2 products
    return 0; // No discount for 1 product
  },
}));