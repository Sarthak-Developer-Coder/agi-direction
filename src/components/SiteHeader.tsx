import { PreviewLink } from './PreviewLink';
import { Wordmark } from './Wordmark';

const pages = [
  { href: '#home', label: 'Home' },
  { href: '/agi/approach', label: 'Approach' },
  { href: '/agi/research', label: 'Research areas' },
  { href: '/agi/unknowns', label: 'Open questions' },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page-container header-inner navbar">
        <a className="brand" href="#home" aria-label="DERYK — home">
          <Wordmark />
        </a>
        <nav className="desktop-navigation" aria-label="Main navigation">
          {pages.map((page) => (
            <PreviewLink key={page.href} href={page.href} active={page.href === '#home'}>
              {page.label}
            </PreviewLink>
          ))}
        </nav>
        <details className="mobile-navigation dropdown dropdown-end">
          <summary>
            Menu <i className="fa-solid fa-bars" aria-hidden="true" />
          </summary>
          <nav className="menu dropdown-content mobile-menu" aria-label="Mobile navigation">
            {pages.map((page) => (
              <PreviewLink key={page.href} href={page.href} active={page.href === '#home'}>
                {page.label}
              </PreviewLink>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
