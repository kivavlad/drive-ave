import {memo, useState, useEffect} from "react";
import {useAppSelector} from "../../hooks/use-selector";
import {closeIcon} from "../../assets/icons";
import Box from "../../components/svg/box";
import CheckBox from "../../components/svg/checkbox";
import styles from "./style.module.css";

interface IProps {
  closeModal: () => void;
}

const LoginForm: React.FC<IProps> = ({closeModal}) => {
  const activeModal = useAppSelector(state => state.modals.name);

  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [active, setActive] = useState<boolean>(false);
  let [remember, setRemember] = useState<boolean>(false);

  const callbacks = {
    onCloseModal: () => closeModal(),
  }

  // Функция отправки данных формы
  function onSubmit() {
    console.log({login, password});
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (login.length && password.length) {
      onSubmit();
    }
  }

  // Обработка ошибки для пустых строк
  useEffect(() => {
    if (login.trim() && password.trim()) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [login, password])

  // Скрываем скролл при активной модалке
  useEffect(() => {
    if (activeModal === 'login-form') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [activeModal])

  return (
    <div className={activeModal === 'login-form' ? styles.layout : styles.hidden_layout}>
      <div className={styles.frame}>
        <button type="button" 
          className={styles.close_btn}
          onClick={callbacks.onCloseModal}
        >
          <img src={closeIcon} alt="X"/>
        </button>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h3 className={styles.title}>Вход</h3>
          <div className={styles.inputs}>
            <input type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder="Введите e-mail или телефон"
            />
            <input type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль"
            />
          </div>
          <div className={styles.options}>
            <div className={styles.remember}>
              <button type="button" onClick={() => setRemember(remember = !remember)}>
                {remember ? <CheckBox/> :<Box/>}
              </button>
              Запомнить меня
            </div>
            <span>Забыли пароль?</span>
          </div>
          <button type="submit" className={active ? styles.submit_btn_active: styles.submit_btn}>
            Войти
          </button>
          <div className={styles.bottom}>
            <div className={styles.bottom_text}>Нет аккаунта?</div>
            <span>Регистация</span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default memo(LoginForm);