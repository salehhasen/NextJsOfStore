
import Image from "next/image";
import styles from "./Footer.module.css";
export default function Footer() {
    return (
      <div className={styles.container}>
       <div>© All rights reserved.</div>     
       <div className={styles.social}>
       <Image 
        alt="facebook icon"
        src="/images/icon/facebook.png"
        width={20}
           className={styles.icon}
       height={20}
        />  
         <Image 
        alt="youtube icon"
        src="/images/icon/youtube.png"
        width={20}
           className={styles.icon}
       height={20}
        />
        <Image 
        alt="instagram icon"
        src="/images/icon/instagram.png"
        width={20}
           className={styles.icon}
       height={20}
        /> 
        <Image 
        alt="twitter icon"
        src="/images/icon/twitter.png"
        width={20}
           className={styles.icon}
       height={20}
        />
         <Image 
        alt="telegram icon"
        src="/images/icon/telegram.png"
        width={20}
           className={styles.icon}
       height={20}
        />
       </div>
      </div>
       )
  }