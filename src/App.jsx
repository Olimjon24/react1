import Header from "./components/Header";
import Button from "./components/Button/Button.jsx";
import TeachingSection from "./components/TeachingSection/TeachingSection.jsx";
import DifferencesSection from "./components/DifferencesSection/DifferencesSection.jsx";
import IntroSection from "./components/IntroSection.jsx";


export default function App() {
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TeachingSection />
        <DifferencesSection />
      </main>
    </>
  );
}
