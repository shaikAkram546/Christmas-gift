import { useState } from "react";
import { X, Lock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface PinVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  correctPin: string;
}

const PinVerificationModal = ({
  isOpen,
  onClose,
  onSuccess,
  correctPin,
}: PinVerificationModalProps) => {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === correctPin) {
      onSuccess();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 500);
      setTimeout(() => {
        setError(false);
        setPin("");
      }, 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/90 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative glass-strong rounded-2xl p-8 md:p-10 max-w-sm w-full animate-scale-in shadow-2xl ${
          shake ? "animate-shake" : ""
        }`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-christmas-red/20 border-2 border-christmas-gold flex items-center justify-center">
              <Lock className="w-8 h-8 text-christmas-gold" />
            </div>
            <div className="absolute -top-1 -right-1 text-christmas-gold animate-twinkle">
              🎅
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-2 mb-6">
          <h3 className="font-display text-2xl text-foreground">
            🔐 Secret Christmas PIN
          </h3>
          {/* Hint removed per user request */}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={8}
            value={pin}
            onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
            placeholder="Enter PIN"
            className={`text-center text-2xl tracking-[0.25em] font-mono h-14 bg-muted/50 border-2 ${
              error
                ? "border-destructive text-destructive"
                : "border-christmas-gold/30 focus:border-christmas-gold"
            }`}
          />

          {error && (
            <p className="text-destructive text-sm text-center animate-fade-in">
              ❌ Oops! That's not the right PIN
            </p>
          )}

          <Button
            type="submit"
            disabled={pin.length < 8}
            className="w-full bg-gradient-gold text-secondary-foreground font-semibold py-6 text-lg rounded-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Unlock Gift
          </Button>
        </form>

        {/* Decorative elements */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-christmas-gold animate-twinkle"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PinVerificationModal;
