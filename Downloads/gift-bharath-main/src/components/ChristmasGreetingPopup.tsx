import { X, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChristmasGreetingPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
}

const ChristmasGreetingPopup = ({
  isOpen,
  onClose,
  onContinue,
}: ChristmasGreetingPopupProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative glass-strong rounded-2xl p-8 md:p-12 max-w-md w-full animate-scale-in shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Animated gift icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-christmas-red flex items-center justify-center animate-gift-bounce glow-red">
              <Gift className="w-10 h-10 text-christmas-gold" />
            </div>
            {/* Sparkles */}
            <div className="absolute -top-2 -right-2 w-4 h-4 text-christmas-gold animate-twinkle">
              ✦
            </div>
            <div
              className="absolute -bottom-1 -left-2 w-3 h-3 text-christmas-gold animate-twinkle"
              style={{ animationDelay: "0.5s" }}
            >
              ✦
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-4">
          <h2 className="font-script text-4xl md:text-5xl text-gradient-gold">
            🎄 Merry Christmas 🎄
          </h2>
          <p className="text-foreground/90 text-lg leading-relaxed font-body">
            May this season bring warmth, joy, and beautiful surprises ✨
          </p>
        </div>

        {/* Continue button */}
        <div className="mt-8 flex justify-center">
          <Button
            onClick={onContinue}
            className="bg-gradient-gold text-secondary-foreground font-semibold px-8 py-6 text-lg rounded-xl hover:scale-105 transition-all duration-300 glow-gold"
          >
            <Gift className="w-5 h-5 mr-2" />
            Continue
          </Button>
        </div>

        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-christmas-gold/30 rounded-tl-2xl" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-christmas-gold/30 rounded-br-2xl" />
      </div>
    </div>
  );
};

export default ChristmasGreetingPopup;
