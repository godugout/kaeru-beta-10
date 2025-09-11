import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronDown, LucideIcon } from "lucide-react";

// Extended props for our KaeruButton component
export interface KaeruButtonProps extends ButtonProps {
  href?: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
}

const KaeruButton = forwardRef<HTMLButtonElement, KaeruButtonProps>(
  ({ className, variant = "default", size = "default", children, href, icon: Icon, iconPosition = "right", ...props }, ref) => {
    // The button content including any icons
    const buttonContent = (
      <>
        {Icon && iconPosition === "left" && <Icon size={16} className="mr-2" />}
        {children}
        {Icon && iconPosition === "right" && <Icon size={16} className="ml-2" />}
      </>
    );

    // If href is provided, we render a Link from react-router-dom instead of a button
    if (href) {
      return (
        <Button
          className={cn(className)}
          variant={variant}
          size={size}
          asChild
          {...props}
        >
          <Link to={href}>
            {buttonContent}
          </Link>
        </Button>
      );
    }

    // Otherwise, render a regular button
    return (
      <Button
        ref={ref}
        className={cn(className)}
        variant={variant}
        size={size}
        {...props}
      >
        {buttonContent}
      </Button>
    );
  }
);

KaeruButton.displayName = "KaeruButton";

export { KaeruButton };

// Convenience components for common button patterns
export const KaeruArrowButton = forwardRef<HTMLButtonElement, KaeruButtonProps>(
  (props, ref) => <KaeruButton {...props} icon={ArrowRight} ref={ref} />
);

export const KaeruChevronButton = forwardRef<HTMLButtonElement, KaeruButtonProps>(
  (props, ref) => <KaeruButton {...props} icon={ChevronDown} ref={ref} />
);

KaeruArrowButton.displayName = "KaeruArrowButton";
KaeruChevronButton.displayName = "KaeruChevronButton";
