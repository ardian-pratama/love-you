import ThemeSwitcher from './ThemeSwitcher.jsx';

export default function Header() {
  return (
    <header className='fixed inset-0 z-10 h-16'>
      <div className='container m-auto flex h-16 items-center justify-end bg-background px-5'>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
