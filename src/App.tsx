import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Showcase from './components/Showcase';
import { useTheme } from './contexts/ThemeContext';

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={`${theme === 'dark' ? 'bg-dark' : 'bg-light'} min-h-screen ${theme === 'dark' ? 'text-white' : 'text-black'} transition-colors`}>
      <Header />
      <Showcase />
      <AboutMe />
    </div>
  );
};

export default App
