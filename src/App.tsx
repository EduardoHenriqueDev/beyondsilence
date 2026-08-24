import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HomeScreen } from "@/components/HomeScreen";
import { StoryIntro } from "@/components/StoryIntro";
import { StoryChapter } from "@/components/StoryChapter";
import { QuizQuestion } from "@/components/QuizQuestion";
import { ReflectionCard } from "@/components/ReflectionCard";
import { ResultScreen } from "@/components/ResultScreen";
import { LearnMoreScreen } from "@/components/LearnMoreScreen";
import { SourcesSection } from "@/components/SourcesSection";
import { useGame } from "@/context/GameContext";
import { VLibrasWidget } from "@/components/VLibrasWidget";

function GameContent() {
  const { state } = useGame();

  // Scroll to top on screen change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [state.screen]);

  const renderScreen = () => {
    switch (state.screen) {
      case "home":
        return <HomeScreen />;
      case "story-intro":
        return <StoryIntro />;
      case "chapter":
        return <StoryChapter />;
      case "quiz":
      case "quiz-feedback":
        return <QuizQuestion />;
      case "reflection":
        return <ReflectionCard />;
      case "result":
        return <ResultScreen />;
      case "learn-more":
        return <LearnMoreScreen />;
      case "sources":
        return <SourcesSection />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="flex min-h-svh flex-col bg-background overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg"
      >
        Pular para o conteúdo principal
      </a>
      <Header />
      {renderScreen()}
      <Footer />
      <VLibrasWidget />
    </div>
  );
}

export function App() {
  return <GameContent />;
}

export default App;
