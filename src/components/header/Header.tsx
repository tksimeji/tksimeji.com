import HeaderGitHubItem from '@/components/header/HeaderGitHubItem';
import HeaderTwitterItem from '@/components/header/HeaderTwitterItem';
import HeaderTitle from '@/components/header/HeaderTitle';
import ThemeToggleButton from '@/components/header/ThemeToggleButton';

const Header = () => {
  return (
    <header>
      <div className="container flex flex-col items-center md:flex-row md:max-w-5xl mx-auto p-5">
        <HeaderTitle />
        <nav className="flex items-center md:ml-auto text-base">
          <HeaderTwitterItem />
          <HeaderGitHubItem />
          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;