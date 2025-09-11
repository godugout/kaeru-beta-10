
import ShopTabs from "@/components/sections/ShopTabs";
import { MaContainer } from "@/components/ui/japanese/Layout";
import ShopHeader from "./ShopHeader";

const ShopTabsSection = () => {
  return (
    <MaContainer>
      <div className="max-w-6xl mx-auto">
        <ShopHeader />
        <ShopTabs />
      </div>
    </MaContainer>
  );
};

export default ShopTabsSection;
