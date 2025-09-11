
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShopLayout from "@/components/layouts/ShopLayout";
import { MaContainer, WabiSabiBlock } from "@/components/ui/japanese/Layout";
import { JapaneseHeading, JapaneseProse } from "@/components/ui/japanese/Typography";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, ArrowLeft, CreditCard, DollarSign } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Checkout = () => {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvv: ""
  });
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // Redirect to shop if cart is empty
    if (items.length === 0) {
      navigate("/");
    }
  }, [items, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Process payment
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        toast({
          title: "Order Completed",
          description: "Thank you for your purchase! Your order has been processed.",
        });
        clearCart();
        navigate("/");
      }, 1500);
    }
  };

  return (
    <ShopLayout>
      <MaContainer className="max-w-4xl mx-auto px-4 py-8">
        {/* Checkout Steps */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <button 
              onClick={() => step > 1 ? setStep(step - 1) : navigate("/")}
              className="text-gold/80 hover:text-gold flex items-center mr-4"
            >
              <ArrowLeft size={16} className="mr-1" />
              {step > 1 ? "Back" : "Continue Shopping"}
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className={`flex items-center ${step >= 1 ? "text-gold" : "text-white/50"}`}>
              <div className="w-6 h-6 rounded-full border flex items-center justify-center mr-2">
                {step > 1 ? <CheckCircle size={16} /> : "1"}
              </div>
              <span className="hidden sm:inline">Shipping</span>
            </div>
            <div className="w-8 h-0.5 bg-white/20"></div>
            <div className={`flex items-center ${step >= 2 ? "text-gold" : "text-white/50"}`}>
              <div className="w-6 h-6 rounded-full border flex items-center justify-center mr-2">
                {step > 2 ? <CheckCircle size={16} /> : "2"}
              </div>
              <span className="hidden sm:inline">Payment</span>
            </div>
            <div className="w-8 h-0.5 bg-white/20"></div>
            <div className={`flex items-center ${step >= 3 ? "text-gold" : "text-white/50"}`}>
              <div className="w-6 h-6 rounded-full border flex items-center justify-center mr-2">
                3
              </div>
              <span className="hidden sm:inline">Review</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_300px] gap-8">
          {/* Main Form */}
          <div>
            <WabiSabiBlock textureType="washi" className="p-6 bg-black/30 border border-white/10">
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-4">
                    <JapaneseHeading className="mb-6">Shipping Information</JapaneseHeading>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                          required
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="bg-black/20 border-white/20"
                        />
                      </div>
                      <div className="col-span-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          required
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-black/20 border-white/20"
                        />
                      </div>
                      <div className="col-span-2">
                        <Label htmlFor="address">Address</Label>
                        <Input
                          required
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          className="bg-black/20 border-white/20"
                        />
                      </div>
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          required
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="bg-black/20 border-white/20"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Input
                          required
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="bg-black/20 border-white/20"
                        />
                      </div>
                      <div>
                        <Label htmlFor="zip">Zip Code</Label>
                        <Input
                          required
                          id="zip"
                          name="zip"
                          value={formData.zip}
                          onChange={handleChange}
                          className="bg-black/20 border-white/20"
                        />
                      </div>
                    </div>
                    <div className="pt-4">
                      <Button type="submit" className="w-full bg-gold text-black hover:bg-gold/90">
                        Continue to Payment
                      </Button>
                    </div>
                  </div>
                )}
                
                {step === 2 && (
                  <div className="space-y-4">
                    <JapaneseHeading className="mb-6">Payment Information</JapaneseHeading>
                    <div className="flex items-center mb-4 text-sm text-white/70">
                      <CreditCard size={16} className="mr-2" />
                      <span>All transactions are secure and encrypted</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input
                          required
                          id="cardName"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleChange}
                          className="bg-black/20 border-white/20"
                        />
                      </div>
                      <div className="col-span-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          required
                          id="cardNumber"
                          name="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          className="bg-black/20 border-white/20"
                        />
                      </div>
                      <div>
                        <Label htmlFor="expDate">Expiration Date</Label>
                        <Input
                          required
                          id="expDate"
                          name="expDate"
                          placeholder="MM/YY"
                          value={formData.expDate}
                          onChange={handleChange}
                          className="bg-black/20 border-white/20"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          required
                          id="cvv"
                          name="cvv"
                          placeholder="123"
                          value={formData.cvv}
                          onChange={handleChange}
                          className="bg-black/20 border-white/20"
                        />
                      </div>
                    </div>
                    <div className="pt-4">
                      <Button type="submit" className="w-full bg-gold text-black hover:bg-gold/90">
                        Review Order
                      </Button>
                    </div>
                  </div>
                )}
                
                {step === 3 && (
                  <div className="space-y-4">
                    <JapaneseHeading className="mb-6">Review Your Order</JapaneseHeading>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-sm text-gold font-medium">Shipping Information</h3>
                        <div className="text-white">
                          <p>{formData.fullName}</p>
                          <p>{formData.address}</p>
                          <p>{formData.city}, {formData.state} {formData.zip}</p>
                          <p>{formData.email}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-sm text-gold font-medium">Payment Method</h3>
                        <div className="text-white flex items-center">
                          <CreditCard size={16} className="mr-2 text-gold" />
                          <span>Card ending in {formData.cardNumber.slice(-4)}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-sm text-gold font-medium">Items</h3>
                        <div className="space-y-2">
                          {items.map(item => (
                            <div key={item.id} className="flex justify-between text-white">
                              <span>{item.name} × {item.quantity}</span>
                              <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        className="w-full bg-gold text-black hover:bg-gold/90"
                        disabled={isProcessing}
                      >
                        {isProcessing ? (
                          <span className="flex items-center">
                            Processing... <DollarSign className="animate-bounce ml-2" size={16} />
                          </span>
                        ) : (
                          <span>Complete Purchase</span>
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </WabiSabiBlock>
          </div>
          
          {/* Order Summary */}
          <div>
            <WabiSabiBlock textureType="paper" className="p-6 bg-black/30 border border-white/10">
              <div className="space-y-4">
                <h2 className="text-lg font-serif text-gold">Order Summary</h2>
                
                <div className="space-y-2">
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-white/80">{item.name} × {item.quantity}</span>
                      <span className="text-white">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-white/10 my-4"></div>
                
                <div className="flex justify-between">
                  <span className="text-white/80">Subtotal</span>
                  <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-white/80">Shipping</span>
                  <span className="text-white">$5.99</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-white/80">Tax</span>
                  <span className="text-white">${(subtotal * 0.07).toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between font-medium text-lg border-t border-white/10 pt-4">
                  <span className="text-gold">Total</span>
                  <span className="text-gold">${(subtotal + 5.99 + (subtotal * 0.07)).toFixed(2)}</span>
                </div>
              </div>
            </WabiSabiBlock>
          </div>
        </div>
      </MaContainer>
    </ShopLayout>
  );
};

export default Checkout;
