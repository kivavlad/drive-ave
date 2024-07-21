import {memo, useCallback} from "react";
import {useAppDispatch} from "../../hooks/use-dispatch";
import modalsActions from "../../store/modals/actions";
import Header from "../../components/header";
import SectionHome from "../../components/section-home";
import Search from "../../containers/search";
import LoginForm from "../../containers/login-form";
import Footer from "../../components/footer";

const Main: React.FC = () => {
  const dispatch = useAppDispatch();

  const callbacks = {
    onOpenModal: useCallback(() => dispatch(modalsActions.open('login-form')), []),
    onCloseModal: useCallback(() => dispatch(modalsActions.close()), []),
  }

  return (
    <>
      <Header openModal={callbacks.onOpenModal}/>
      <SectionHome>
        <Search/>
      </SectionHome>
      <LoginForm closeModal={callbacks.onCloseModal}/>
      <Footer/>
    </>
  )
}

export default memo(Main);