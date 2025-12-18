import { useState, useEffect } from "react";
import { Download, Copy, Check, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface GiftRevealProps {
  isRevealed: boolean;
  downloadImageUrl?: string;
}

const GiftReveal = ({ isRevealed, downloadImageUrl }: GiftRevealProps) => {
  const [showFireworks, setShowFireworks] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showCode, setShowCode] = useState(false);

  // Example gift card code - in real use, this would come from props/API
  const giftCode = "7YRJ-NXFCQN-U3H3";
  const giftAmount = "1000";

  useEffect(() => {
    if (isRevealed) {
      setShowFireworks(true);
      setTimeout(() => setShowFireworks(false), 3000);
    }
  }, [isRevealed]);

  const handleCopy = () => {
    navigator.clipboard.writeText(giftCode);
    setCopied(true);
    toast({
      title: "Code Copied! 🎉",
      description: "Gift card code copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (downloadImageUrl) {
      const link = document.createElement("a");
      link.href = downloadImageUrl;
      link.download = "gift-card.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast({
        title: "Download Started! 🎁",
        description: "Your gift card image is downloading",
      });
    }
  };

  if (!isRevealed) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-lg">
      {/* Fireworks */}
      {showFireworks && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-firework"
              style={{
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 60 + 10}%`,
                animationDelay: `${Math.random() * 1.5}s`,
              }}
            >
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  background:
                    i % 3 === 0
                      ? "hsl(var(--christmas-gold))"
                      : i % 3 === 1
                      ? "hsl(var(--christmas-red))"
                      : "hsl(var(--christmas-green))",
                  boxShadow: `0 0 20px currentColor`,
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Sparkle burst background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-christmas-gold animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-lg w-full animate-scale-in">
        {/* Gift card display */}
        <div className="glass-strong rounded-3xl p-8 md:p-10 text-center space-y-6 shadow-2xl">
          {/* Header */}
          <div className="space-y-2">
            <div className="text-6xl animate-gift-bounce">🎁</div>
            <h2 className="font-script text-4xl md:text-5xl text-gradient-gold text-shadow-glow">
              Surprise!
            </h2>
          </div>

          {/* Gift card visual */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="aspect-[1.6/1] rounded-2xl bg-gradient-to-br from-christmas-red via-primary to-christmas-red p-6 flex flex-col justify-between shadow-xl glow-red">
              {/* Card header */}
              <div className="flex justify-between items-start">
                <div className="text-left">
                  <div className="text-christmas-snow/80 text-xs uppercase tracking-wider">
                    Gift Card
                  </div>
                  <div className="font-display text-2xl text-christmas-gold font-bold">
                    Amazon
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-display text-3xl text-christmas-gold font-bold">
                    {giftAmount}
                  </div>
                </div>
              </div>

              {/* Card footer */}
              <div className="flex justify-between items-end">
                <div className="text-christmas-snow/70 text-sm">
                  🎄 Happy Holidays 🎄
                </div>
                <div className="text-christmas-gold text-2xl">✦</div>
              </div>

              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden rounded-2xl">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-christmas-snow text-4xl"
                    style={{
                      left: `${(i % 5) * 25}%`,
                      top: `${Math.floor(i / 5) * 30}%`,
                      transform: "rotate(-15deg)",
                    }}
                  >
                    ❄
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Code section */}
          <div className="space-y-4">
            <Button
              onClick={() => setShowCode(!showCode)}
              variant="outline"
              className="w-full border-christmas-gold/30 text-christmas-gold hover:bg-christmas-gold/10"
            >
              {showCode ? "Hide Code" : "Reveal Code"}
            </Button>

            {showCode && (
              <div className="animate-fade-in space-y-3">
                <div className="bg-muted/50 rounded-xl p-4 font-mono text-lg tracking-wider text-foreground">
                  {giftCode}
                </div>
                <div className="flex gap-3">
                  <Button
                    onClick={handleCopy}
                    className="flex-1 bg-gradient-gold text-secondary-foreground hover:scale-105 transition-transform"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 mr-2" />
                    ) : (
                      <Copy className="w-4 h-4 mr-2" />
                    )}
                    {copied ? "Copied!" : "Copy Code"}
                  </Button>
                  <Button
                    onClick={handleDownload}
                    disabled={!downloadImageUrl}
                    variant="outline"
                    className="flex-1 border-christmas-gold/30 text-christmas-gold hover:bg-christmas-gold/10 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Final message */}
          <div className="pt-4 border-t border-border/50 space-y-3">
            <p className="text-foreground/90 italic leading-relaxed">
              "This is a small token of appreciation,
              <br />
              but the real gift is the smile it brings 😊"
            </p>
            <p className="font-script text-3xl text-christmas-gold flex items-center justify-center gap-2">
              Merry Christmas! <Heart className="w-5 h-5 fill-christmas-red text-christmas-red" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftReveal;
