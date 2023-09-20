import Link from 'next/link'
import { Lobster} from 'next/font/google'
const logofont = Lobster({ subsets: ['latin'],weight :["400"]})

import styles from "./Logo.module.css";
export default function Logo(){
    return (
        <Link href={'/'} className={`${styles.logo}${styles.logofont}`} >HEXASHOP</Link>

  );
}


