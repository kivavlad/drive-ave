import {memo} from "react";
import {logo} from "../../assets/icons";
import WA from "../svg/wa";
import TG from "../svg/tg";
import VK from "../svg/vk";
import Mail from "../svg/mail";
import styles from "./style.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer_content}>
          <div className={styles.footer_logo}>
            <img src={logo} alt=""/>
            <span>Аренда жилья и автомобилей от владельцев</span>
          </div>
          <div className={styles.footer_nav}>
            <div className={styles.footer_icons}>
              <WA/>
              <TG/>
              <VK/>
              <Mail/>
            </div>
            <span>Политика конфеденциальности</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer);