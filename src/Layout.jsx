import React from 'react';
import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, Menu, X, ArrowUpRight } from 'lucide-react';

const links = [
  ['Home', '/'], ['About', '/about'], ['Achievements', '/achievements'], ['Projects', '/projects'],
  ['Leadership', '/leadership'], ['Events', '/events'], ['Skills', '/skills'], ['Aspirations', '/aspirations'], ['Contact', '/contact']
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return <div className="site-shell">
    <header className="topbar">
      <NavLink to="/" className="brand" onClick={() => setOpen(false)}><span>SD</span><i /> SHIVANG DUBEY</NavLink>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav className={`nav-links ${open ? 'nav-open' : ''}`}>
        {links.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'} onClick={() => setOpen(false)} className={({isActive}) => isActive ? 'active' : ''}>{label}</NavLink>)}
      </nav>
    </header>
    <main className="main-content">
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-7}} transition={{duration:.28, ease:'easeOut'}}>
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </main>
    <footer className="footer"><div><span className="footer-mark">SD.</span><span>Built around curiosity, learning and purposeful work.</span></div><span>© {new Date().getFullYear()} Shivang Dubey <ArrowUpRight size={14}/></span></footer>
    <button className="back-top" aria-label="Back to top" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}><ArrowUp size={17}/></button>
  </div>;
}
