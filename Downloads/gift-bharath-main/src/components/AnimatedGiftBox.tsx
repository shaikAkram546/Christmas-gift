import { Gift, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AnimatedGiftBoxProps {
  onClick: () => void;
}

const AnimatedGiftBox = ({ onClick }: AnimatedGiftBoxProps) => {
  return (
    <div className="flex flex-col items-center gap-8">
      {/* Animated gift box */}
      <div className="relative group cursor-pointer" onClick={onClick}>
        {/* Glow effect */}
        <div className="absolute inset-0 bg-christmas-gold/30 rounded-3xl blur-3xl animate-pulse-glow scale-150" />

        {/* Gift box */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 animate-gift-bounce">
          {/* Box body */}
          <div className="absolute inset-0 bg-christmas-red rounded-2xl shadow-2xl overflow-hidden">
            {/* Ribbon vertical */}
            <div className="absolute left-1/2 -translate-x-1/2 w-6 h-full bg-christmas-gold" />
            {/* Ribbon horizontal */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full h-6 bg-christmas-gold" />
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
          </div>

          {/* Bow */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <div className="relative">
              {/* Bow loops */}
              <div className="flex gap-1">
                <div className="w-8 h-10 bg-christmas-gold rounded-full rotate-[-30deg] origin-bottom-right" />
                <div className="w-8 h-10 bg-christmas-gold rounded-full rotate-[30deg] origin-bottom-left" />
              </div>
              {/* Center knot */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 bg-christmas-gold rounded-full" />
              {/* Ribbon tails */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 flex">
                <div className="w-3 h-8 bg-christmas-gold -rotate-12 rounded-b-full" />
                <div className="w-3 h-8 bg-christmas-gold rotate-12 rounded-b-full" />
              </div>
            </div>
          </div>

          {/* Gift icon overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-christmas-red/80 rounded-2xl">
            <Gift className="w-16 h-16 text-christmas-gold" />
          </div>
        </div>

        {/* Sparkles around */}
        <div className="absolute -top-6 -left-4 text-christmas-gold text-xl animate-twinkle">
          ✦
        </div>
        <div
          className="absolute -top-2 -right-6 text-christmas-gold text-lg animate-twinkle"
          style={{ animationDelay: "0.3s" }}
        >
          ✦
        </div>
        <div
          className="absolute -bottom-4 -left-6 text-christmas-gold text-sm animate-twinkle"
          style={{ animationDelay: "0.6s" }}
        >
          ✦
        </div>
        <div
          className="absolute -bottom-2 -right-4 text-christmas-gold text-xl animate-twinkle"
          style={{ animationDelay: "0.9s" }}
        >
          ✦
        </div>
      </div>

      {/* Button */}
      <Button
        onClick={onClick}
        size="lg"
        className="bg-gradient-gold text-secondary-foreground font-semibold px-10 py-7 text-lg rounded-2xl hover:scale-105 transition-all duration-300 glow-gold shadow-xl group"
      >
        <Sparkles className="w-5 h-5 mr-3 group-hover:animate-twinkle" />
        Download Your Gift
        <Sparkles className="w-5 h-5 ml-3 group-hover:animate-twinkle" />
      </Button>
    </div>
  );
};

export default AnimatedGiftBox;
