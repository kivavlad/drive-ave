import {memo, useCallback, useState, useRef, useEffect} from "react";
import {useAppDispatch} from "../../hooks/use-dispatch";
import {useAppSelector} from "../../hooks/use-selector";
import bookingActions from "../../store/booking/actions";
import SearchForm from "../../components/search-form";
import Calendar from "../../components/calendar";

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const calendarRef = useRef<any>();
  const data = useAppSelector(state => state.booking);
  const [isOpenCalendar, setIsOpenCalendar] = useState<boolean>(false);

  const callbacks = {
    // Открыть календарь
    onOpenCalendar: useCallback(() => {
      if (!isOpenCalendar) {
        setIsOpenCalendar(true);
      } else {
        setIsOpenCalendar(false);
      }
    }, [isOpenCalendar]),
    // Выбрать период
    onSelectPeriod: useCallback((startDate: Date, endDate: Date) => {
      dispatch(bookingActions.setDate(startDate.toISOString(), endDate.toISOString()))
    }, []),
  }

  // Закрыть календаль в любой точке экрана, кроме выбранной
  function handleClickOutside(e: MouseEvent) {
    if (calendarRef.current && !calendarRef.current.contains(e.target)) {
      setIsOpenCalendar(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [])

  return (
    <div ref={calendarRef}>
      <SearchForm data={data} onOpenCalendar={callbacks.onOpenCalendar}/>
      <Calendar isOpen={isOpenCalendar} onSelectPeriod={callbacks.onSelectPeriod}/>
    </div>
  )
}

export default memo(Search);