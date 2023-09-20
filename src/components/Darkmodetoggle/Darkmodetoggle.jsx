"use client"
import { useContext } from "react";
import styles from "./Darkmodetoggle.module.css"
import { ThemeContext } from "@/context/ThemeContext";
export default function Darkmodetoggle(){
    const {mode,Toggle}=useContext(ThemeContext)
    return (
        <div>
         <div className={styles.container} onClick={Toggle} >
         <div className={styles.icon}>🌙</div>
         <div className={styles.icon}>🌑</div>
         <div className={styles.switcher}
         style={mode==="light"?{left:"2px"}:{right:"2px"}}
         />   
         </div>   
        </div>
    );
}
