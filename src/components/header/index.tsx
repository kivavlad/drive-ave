import {memo} from "react";
import {logo, burgerIcon, userIcon} from "../../assets/icons";
import styles from "./style.module.css";

interface IProps {
  openModal: () => void;
}

const Header: React.FC<IProps> = ({openModal}) => {
  
  const callbacks = {
    onOpen: () => openModal(),
  }

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header_content}>
          <div className={styles.logo}>
            <img src={logo} alt="logo"/>
          </div>
          <button type="button" className={styles.header_btn} onClick={callbacks.onOpen}>
            <img src={burgerIcon} alt=""/>
            <img src={userIcon} alt=""/>
          </button>
        </div>
      </div>
    </header>
  )
}

export default memo(Header);