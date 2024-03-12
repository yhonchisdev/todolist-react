import logo from '../logo.svg';

function Header() {
  return (
    <header className="px-4 pt-5 bg-richBlack">
      <img src={logo} className="w-20 h-20" alt="logo" />
    </header>
  );
}

export default Header;
