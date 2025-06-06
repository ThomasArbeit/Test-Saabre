'use client'

import Link from "next/link";
import Button from "./Button";
import '@/styles/Header.scss';
import { usePathname } from "next/navigation";

export default function Header () {
 const pathname = usePathname();

 return (
  <header className="header">
   <div className="header__logo">airKnK</div>
   <ul className="header__nav">
     <li><Link className={`header__nav-link ${pathname === '/vehicules' ? 'header__nav-link--active' : ''}`} href="/vehicules">Véhicules</Link></li>
     <li><Link onClick={(e) => e.preventDefault()} className={`header__nav-link header__nav-link--disabled ${pathname === '/news' ? 'header__nav-link--active' : ''}`}href="/news">Actualités</Link></li>
   </ul>
   <div className="header__actions"><Button iconOnly size="xs" leftIcon="user"/></div>
  </header>
 )
}