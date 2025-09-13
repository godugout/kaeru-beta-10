import { useState, useRef, useEffect } from 'react';
import { ProductCard } from '@/components/shop/ProductCard';
import { ProductCardSkeleton } from '@/components/ui/loading-skeleton';
import { useVirtualScroll } from '@/hooks/useVirtualScroll';
import { Product } from '@/types/product';

interface VirtualizedProductGridProps {
  products: Product[];
  loading?: boolean;
}

export const VirtualizedProductGrid = ({ 
  products, 
  loading = false 
}: VirtualizedProductGridProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(800);

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.clientHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const itemHeight = 520; // Approximate height of ProductCard
  const itemsPerRow = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  
  // Group items into rows for virtual scrolling
  const rows = [];
  for (let i = 0; i < products.length; i += itemsPerRow) {
    rows.push(products.slice(i, i + itemsPerRow));
  }

  const {
    visibleItems,
    totalHeight,
    offsetY,
    onScroll,
    startIndex,
  } = useVirtualScroll({
    items: rows,
    itemHeight,
    containerHeight,
    overscan: 2,
  });

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative overflow-auto scrollbar-thin scrollbar-thumb-kaeru-gold/30"
      style={{ height: '800px' }}
      onScroll={onScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div
          style={{
            transform: `translateY(${offsetY}px)`,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
          }}
        >
          {visibleItems.map((row: Product[], rowIndex: number) => (
            <div
              key={startIndex + rowIndex}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
              style={{ height: itemHeight }}
            >
              {row.map((product: Product, colIndex: number) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={(startIndex + rowIndex) * itemsPerRow + colIndex}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};