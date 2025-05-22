// App.tsx

// Modules
import { customTheme } from "./theme";
import { ThemeProvider } from "flowbite-react";

// Components
import { NavBar } from "./components/Navbar";
import { BackgroundCircle } from "./components/BackgroundCircle";

// Pages
import { Hero } from "./pages/Hero";
import { About } from "./pages/About";
import { Technologies } from "./pages/Technologies";
import { Projects } from "./pages/Projects";
import { Experience } from "./pages/Experience";
import { Contact } from "./pages/Contact";
import { FooterPage } from "./components/FooterPage";

// Context
import { AppSettingsProvider, useAppSettings } from "./context/AppSettingsContext";

// Circles data for background animation
const circles = [
  {
    id: 1,
    size: 'w-[300px] h-[300px]',
    position: 'top-[10%] left-[15%]',
    color: 'from-blue-400 to-blue-700',
    delay: '0s',
  },
  {
    id: 2,
    size: 'w-[500px] h-[500px]',
    position: 'top-[40%] left-[65%]',
    color: 'from-amber-400 to-amber-700',
    delay: '2s',
  },
  {
    id: 3,
    size: 'w-[400px] h-[400px]',
    position: 'top-[25%] left-[5%]',
    color: 'from-lime-300 to-lime-400',
    delay: '3s',
  },
  {
    id: 4,
    size: 'w-[300px] h-[300px]',
    position: 'top-[90%] left-[75%]',
    color: 'from-lime-300 to-lime-400',
    delay: '2s',
  }
]

function AppContent() {
  const { animation, grayscale } = useAppSettings();

  return (
    <>
      <NavBar />
      <main
        className={`
          relative min-h-screen overflow-hidden flex-col items-center justify-center pb-20
          ${grayscale ? 'grayscale' : ''}
          bg-gradient-to-br
          ${animation ? 'from-blue-400 via-amber-100 to-green-400' : 'from-gray-400 via-gray-200 to-gray-300'}
          dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
          transition-colors duration-1000 ease-in-out
        `}
      >
        {/* Background circles */}
        {animation && (
          <div className="absolute inset-0 z-0 overflow-hidden">
            {circles.map((circle) => (
              <BackgroundCircle
                key={circle.id}
                size={circle.size}
                position={circle.position}
                color={circle.color}
                delay={circle.delay}
              />
            ))}
          </div>
        )}

        {/* Main content */}
        <div className="relative z-10 md:px-32 px-6 space-y-20">
          <Hero />
          <About />
          <Technologies />
          <Projects />
          <Experience />
          <Contact />
        </div>

        {/* Footer */}
        <div className="mx-2 md:mx-10"><FooterPage /></div>
      </main>
    </>
  );
}

// App component
export default function App() {
  return (
    <AppSettingsProvider>
      <ThemeProvider theme={customTheme}>
        <AppContent />
      </ThemeProvider>
    </AppSettingsProvider>
  );
}