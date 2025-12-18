import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Snowfall from "@/components/Snowfall";
import BokehLights from "@/components/BokehLights";
import SantaSleigh from "@/components/SantaSleigh";
import ChristmasTrees from "@/components/ChristmasTrees";
import TypewriterText from "@/components/TypewriterText";
import ChristmasGreetingPopup from "@/components/ChristmasGreetingPopup";
import PinVerificationModal from "@/components/PinVerificationModal";
import GiftReveal from "@/components/GiftReveal";
import AnimatedGiftBox from "@/components/AnimatedGiftBox";
import BackgroundMusic from "@/components/BackgroundMusic";

const Index = () => {
  const [stage, setStage] = useState<
    "landing" | "popup" | "greeting" | "gift" | "pin" | "reveal"
  >("landing");
  const [showPopup, setShowPopup] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [showGiftSection, setShowGiftSection] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  // Get tomorrow's date as PIN (DDMM format)
  const getTomorrowPin = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const day = String(tomorrow.getDate()).padStart(2, "0");
    const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
    return day + month;
  };

  useEffect(() => {
    // Show popup after initial animation
    const timer = setTimeout(() => {
      setShowPopup(true);
      setStage("popup");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handlePopupClose = () => {
    setShowPopup(false);
    setTimeout(() => {
      setShowGreeting(true);
      setStage("greeting");
    }, 500);
  };

  const handlePopupContinue = () => {
    setShowPopup(false);
    setTimeout(() => {
      setShowGreeting(true);
      setStage("greeting");
    }, 500);
  };

  const handleGreetingComplete = () => {
    setTimeout(() => {
      setShowGiftSection(true);
      setStage("gift");
    }, 1000);
  };

  const handleGiftClick = () => {
    setShowPinModal(true);
    setStage("pin");
  };

  const handlePinSuccess = () => {
    setShowPinModal(false);
    setIsRevealed(true);
    setStage("reveal");
  };

  const handleBack = () => {
    if (stage === "popup") {
      setShowPopup(false);
      setStage("landing");
    } else if (stage === "greeting") {
      setShowGreeting(false);
      setShowGiftSection(false);
      setShowPopup(true);
      setStage("popup");
    } else if (stage === "gift") {
      setShowGiftSection(false);
      setStage("greeting");
    } else if (stage === "pin") {
      setShowPinModal(false);
      setStage("gift");
    } else if (stage === "reveal") {
      setIsRevealed(false);
      setShowGiftSection(true);
      setStage("gift");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-christmas-red/90 via-christmas-red/70 to-christmas-red/60 relative overflow-hidden">
      {/* Back button */}
      {stage !== "landing" && (
        <button
          onClick={handleBack}
          className="fixed top-4 left-4 z-50 p-3 rounded-full glass-strong border border-christmas-gold/30 hover:border-christmas-gold/60 transition-all duration-300 hover:scale-110 group flex items-center gap-2"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5 text-christmas-gold/70 group-hover:text-christmas-gold" />
          <span className="text-christmas-gold/70 group-hover:text-christmas-gold text-sm font-body">Back</span>
        </button>
      )}

      {/* Background music */}
      <BackgroundMusic />
      
      {/* Background effects */}
      <BokehLights />
      <Snowfall />
      <SantaSleigh />
      <ChristmasTrees />

      {/* Main content */}
      <main className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Landing message */}
        {stage === "landing" && (
          <div className="text-center animate-fade-in">
            <p className="font-script text-3xl md:text-5xl text-christmas-blue text-shadow-glow">
              <TypewriterText
                text="Something magical is waiting for you…"
                speed={80}
              />
            </p>

            <div className="mt-6 flex items-center justify-center gap-6 animate-fade-in-up">
              <img
                src="/santa.jpeg"
                alt="Santa"
                className="w-32 h-32 object-cover rounded-xl shadow-lg"
              />
              <img
                src="/deer.jpeg"
                alt="Deer"
                className="w-32 h-32 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        )}

        {/* Greeting section */}
        {showGreeting && !isRevealed && (
          <div className="max-w-2xl mx-auto text-center space-y-8 md:space-y-12">
            {/* Main greeting */}
            <div className="space-y-4 animate-fade-in-up">
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground">
                Hi{" "}
                <span className="text-gradient-gold text-shadow-glow">
                  Aparupa Das
                </span>{" "}
                <span className="text-christmas-red"></span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 font-body leading-relaxed">
                Wishing you a very Happy Christmas filled with smiles, peace,
                and success.
              </p>
            </div>

            {/* Quotes */}
            <div
              className="space-y-6 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <blockquote className="glass rounded-2xl p-6 md:p-8 border-l-4 border-christmas-gold">
                <p className="font-display text-lg md:text-xl text-foreground/90 italic">
                  "Christmas is not about gifts,
                  <br />
                  it's about moments, memories, and the people who make life
                  special."
                </p>
              </blockquote>

              <blockquote
                className="glass rounded-2xl p-6 md:p-8 border-l-4 border-christmas-red animate-fade-in-up"
                style={{ animationDelay: "1s" }}
              >
                <p className="font-display text-lg md:text-xl text-foreground/90 italic">
                  "May your days be merry, bright, and full of happiness."
                </p>
              </blockquote>
            </div>

            {/* Gift section trigger */}
            {!showGiftSection && (
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "1.5s" }}
              >
                <TypewriterText
                  text="A special surprise awaits..."
                  delay={2000}
                  speed={60}
                  className="font-script text-2xl md:text-3xl text-christmas-gold"
                  onComplete={handleGreetingComplete}
                />
              </div>
            )}

            {/* Gift download section */}
            {showGiftSection && (
              <div
                className="pt-8 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <AnimatedGiftBox onClick={handleGiftClick} />
              </div>
            )}
          </div>
        )}
      </main>

      {/* Modals */}
      <ChristmasGreetingPopup
        isOpen={showPopup}
        onClose={handlePopupClose}
        onContinue={handlePopupContinue}
      />

      <PinVerificationModal
        isOpen={showPinModal}
        onClose={() => setShowPinModal(false)}
        onSuccess={handlePinSuccess}
        correctPin={"17291729"}
      />

      <GiftReveal 
        isRevealed={isRevealed}
        downloadImageUrl="/gift-card.jpg"
      />

      {/* Footer attribution */}
      {/* {!isRevealed && (
        // <footer className="fixed bottom-4 left-0 right-0 text-center z-30">
        //   <p className="text-muted-foreground/50 text-xs">
        //     Made with  for a special someone
        //   </p>
        // </footer>
      )} */}
    </div>
  );
};

export default Index;
