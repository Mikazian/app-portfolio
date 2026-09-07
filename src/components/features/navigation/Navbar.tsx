import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useTheme } from '../../../contexts';
import ThemeSwitcher from './ThemeSwitcher';
import NavbarOptions from './NavbarOptions';
import ResumeDownloadModal from './ResumeDownloadModal';
import { AppIconSvg } from '@app-portfolio/enums';
import { aboutSections } from './about-sections';
import { getNavbarOffset } from '@app-portfolio/helpers';
import Logo from '../../common/Logo';

const OBSERVER_OPTIONS: IntersectionObserverInit = {
  rootMargin: '-80px 0px -50% 0px',
};

/***
 * Composant Barre de Navigation
 * @returns {JSX.Element}
 */
const Navbar = (): React.JSX.Element => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);

  const [activeNavbar, setActiveNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      }
    }, OBSERVER_OPTIONS);

    aboutSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!activeSection) return;

    const links = linksRef.current;
    if (!links) return;

    const activeItem = links.querySelector<HTMLElement>(`[data-section="${activeSection}"]`);
    if (!activeItem) return;

    const left = activeItem.offsetLeft - (links.clientWidth - activeItem.clientWidth) / 2;
    links.scrollTo({ left, behavior: 'smooth' });
  }, [activeSection]);

  useEffect(() => {
    let ticking = false;

    const handleChangeBackground = () => {
      setActiveNavbar(window.scrollY >= 40);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleChangeBackground);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      const offset = navRef.current
        ? navRef.current.getBoundingClientRect().height + 16
        : getNavbarOffset();
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    } else {
      navigate(`/#${id}`);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav ref={navRef} className={`navbar ${activeNavbar ? 'active' : 'inactive'}`}>
      <button type="button" onClick={scrollToTop} className="logo cursor-pointer bg-transparent">
        <Logo />
      </button>

      <div className="flex items-center justify-end gap-6 flex-1 min-w-0 h-full">
        <ul ref={linksRef} className="navbar-links">
          {aboutSections.map((section) => (
            <li key={section.id} className="navbar-item">
              <button
                type="button"
                data-section={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`uppercase text-sm bg-transparent cursor-pointer transition-colors duration-200 ${
                  activeSection === section.id
                    ? 'text-primary'
                    : 'text-text-primary hover:text-primary'
                }`}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="theme shrink-0 h-12 gap-8 hidden md:flex">
          <ResumeDownloadModal />

          <ThemeSwitcher
            icon={theme === 'dark' ? AppIconSvg.MOON : AppIconSvg.SUN}
            onClick={toggleTheme}
          />
        </div>

        <div className="md:hidden shrink-0 h-12 flex items-center">
          <NavbarOptions />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
