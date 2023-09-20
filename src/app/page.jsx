import Image from 'next/image'
import styles from './page.module.css'
import  hero from "public/images/hero.svg";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
 <div className={styles.title}>
      Your one-stop e-commerce destenetion
      </div>
      <div className={styles.desc}>
      Your one-stop e-commerce destenetionYour one-stop e-commerce destenetionYour one-stop e-commerce destenetionYour one-stop e-commerce destenetionYour one-stop e-commerce destenetionYour one-stop e-commerce destenetionYour one-stop e-commerce destenetionYour one-stop e-commerce destenetionYour one-stop e-commerce destenetion
      </div>
      <button className={styles.button}>shop now</button>
      </div>
       <div className={styles.col}>
  <Image 
  className={styles.img} 
  src={hero}
  alt='HEXASHOP'    
   />
    </div>
    </div>
    )
}
