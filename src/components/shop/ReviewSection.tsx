
import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";

interface ReviewSectionProps {
  product: Product;
}

const ReviewSection = ({ product }: ReviewSectionProps) => {
  const [showForm, setShowForm] = useState(false);
  
  // Default empty reviews array if the product has no reviews
  const reviews = product.reviews || [];
  
  return (
    <div className="max-w-3xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-serif text-white">
          Customer Reviews ({reviews.length})
        </h3>
        <Button
          variant="outline"
          className="border-gold text-gold hover:bg-gold/10"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Cancel" : "Write a Review"}
        </Button>
      </div>
      
      {/* Review Form */}
      {showForm && (
        <div className="bg-white/5 p-6 mb-8 rounded-sm border border-white/10">
          <h4 className="text-gold font-medium mb-4">Write Your Review</h4>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="rating" className="block text-sm text-white/70 mb-1">
                Rating
              </label>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className="text-gold p-1"
                  >
                    <Star className="w-6 h-6" />
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label htmlFor="review-name" className="block text-sm text-white/70 mb-1">
                Name
              </label>
              <input
                id="review-name"
                type="text"
                className="w-full bg-black/30 border border-white/20 text-white p-2 rounded-sm focus:border-gold focus:outline-none"
              />
            </div>
            
            <div>
              <label htmlFor="review-comment" className="block text-sm text-white/70 mb-1">
                Review
              </label>
              <textarea
                id="review-comment"
                rows={4}
                className="w-full bg-black/30 border border-white/20 text-white p-2 rounded-sm focus:border-gold focus:outline-none"
              ></textarea>
            </div>
            
            <Button variant="gold">
              Submit Review
            </Button>
          </div>
        </div>
      )}
      
      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.length === 0 ? (
          <div className="text-white/60">No reviews yet. Be the first to review this product.</div>
        ) : (
          reviews.map((review) => (
            <div key={review.id} className="border-b border-white/10 pb-4 mb-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="flex items-center mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < review.rating ? "text-gold fill-gold" : "text-white/20"}
                      />
                    ))}
                  </div>
                  <h4 className="text-white font-medium">{review.userName}</h4>
                </div>
                <div className="text-white/50 text-sm">{review.date}</div>
              </div>
              
              <p className="text-white/80">{review.comment}</p>
              
              {review.verifiedPurchase && (
                <div className="mt-2 text-xs inline-flex items-center bg-gold/10 px-2 py-1 rounded-sm text-gold">
                  Verified Purchase
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
