import HeaderGitHubItem from '@/components/HeaderGitHubItem';
import HeaderTwitterItem from '@/components/HeaderTwitterItem';
import HeaderTitle from '@/components/HeaderTitle';

const Header = () => {
  return (
    <header>
      <div className="container flex flex-col items-center md:flex-row md:max-w-5xl mx-auto p-5">
        <HeaderTitle />
        <nav className="flex items-center md:ml-auto text-base">
          <HeaderTwitterItem />
          <HeaderGitHubItem />
        </nav>
      </div>
    </header>
  );
};

export default Header;