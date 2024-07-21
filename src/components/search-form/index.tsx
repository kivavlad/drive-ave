import {memo} from "react";
import {formatDate} from "../../utils/date-format";
import {IStateBooking} from "../../types/i-booking";
import {searchIcon} from "../../assets/icons";
import styles from "./style.module.css";

interface IProps {
  data: IStateBooking;
  onOpenCalendar: () => void;
}

const SearchForm: React.FC<IProps> = ({data, onOpenCalendar}) => {

  const callbacks = {
    onOpen: () => onOpenCalendar(),
  }

  return (
    <form className={styles.form_wrapper}>
      <div className={styles.form_option}>
        <label>Город или адрес</label>
        <input type="text"
          placeholder="Куда едем"
        />
      </div>
      <span className={styles.line}></span>
      <div className={styles.form_option}>
        <label>Заезд</label>
        <button type="button" onClick={callbacks.onOpen}>
          {data.start_date ? formatDate(data.start_date) : 'Когда'}
        </button>
      </div>
      <span className={styles.line}></span>
      <div className={styles.form_option}>
        <label>Отъезд</label>
        <button type="button" onClick={callbacks.onOpen}>
          {data.end_date ? formatDate(data.end_date) : 'Когда'}
        </button>
      </div>
      <span className={styles.line}></span>
      <div className={styles.form_option}>
        <label>Гости</label>
        <input type="text"
          placeholder="2 взрослых, без детей"
        />
      </div>
      <button type="submit" className={styles.form_btn}>
        <img src={searchIcon} alt=""/>
      </button>
    </form>
  )
}

export default memo(SearchForm);