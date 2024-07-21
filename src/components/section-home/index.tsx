import {memo} from "react";
import {motion} from "framer-motion";
import styles from "./style.module.css";

interface IProps {
  children: React.ReactNode;
}

const SectionHome: React.FC<IProps> = ({children}) => {

  const animation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { 
        delay: custom * 0.5 
      }
    })
  }


  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={styles.section}
    >
      <div className="container">
        <div className={styles.sections_content}>
          <div className={styles.text_content}>
            <motion.p custom={1} variants={animation} className={styles.top_subtitle}>Ut enim ad minim veniam</motion.p>
            <motion.h1 custom={2} variants={animation} className={styles.title}>Duis aute irure dolor in reprehenderit</motion.h1>
            <motion.p custom={3} variants={animation} className={styles.bottom_subtitle}>Duis aute irure dolor in reprehenderit</motion.p>
          </div>
          <motion.div custom={4} variants={animation} className={styles.form}>
            {children}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default memo(SectionHome);