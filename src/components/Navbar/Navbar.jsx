
import styles from './Navbar.module.css';
import { links } from './data';
import Button from '../../elements/Button/Button';
import Logo from '@/elements/Logo/Logo';
import Link from 'next/link';
import Darkmodetoggle from '../Darkmodetoggle/Darkmodetoggle';
export default function Navbar() {
    return (
      <div className={styles.container}>
        <Logo/>
        <div className={styles.links}>
          <Darkmodetoggle/>
          {links.map(link=>
         <Link key={link.id} href={link.name} className={styles.link}>{link.title}</Link>   
            )}
           <Button/>
         </div>
      </div>
       )
  }