import {memo, useState} from 'react';
import {motion} from 'framer-motion';
import './style.css';

interface CalendarProps {
  openCalendar: boolean;
  onSelectPeriod: (startDate: Date, endDate: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({openCalendar, onSelectPeriod}) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const animation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    }
  }

  const daysInMonth = (month: number, year: number) => new Date(year, month, 0).getDate();

  const getMonthName = (month: number) => {
    const date = new Date();
    date.setMonth(month - 1);
    const monthName = date.toLocaleString('default', { month: 'long' });
    return monthName.charAt(0).toUpperCase() + monthName.slice(1);
  }

  const handleSelectDate = (selectedDate: Date) => {
    if (!startDate) {
      // Установка значения в дату начала
      setStartDate(selectedDate);
    } else if (!endDate && selectedDate > startDate) {
      // Установка даты окончания только если она после даты начала
      setEndDate(selectedDate);
      onSelectPeriod(startDate, selectedDate);
    } else if (selectedDate.getTime() === startDate?.getTime()) {
      // Если выбранная дата является датой начала, устанавливаем ее как заполненную
      setStartDate(selectedDate);
      setEndDate(null);
    } else {
      // Сброс, при попытке выбрать более раннюю дату
      setStartDate(selectedDate);
      setEndDate(null);
    }
  }

  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear();
  const monthsToShow = 6; // Показываем 6 месяцев

  function renderCalendar() {
    const calendar = [];
    for (let i = 0; i < monthsToShow; i++) {
      const month = currentMonth + i;
      const year = currentYear + Math.floor((month - 1) / 12); // Увеличиваем год при переходе через декабрь
      const daysCount = daysInMonth(month, year);
      const monthName = getMonthName(month);
        
      const weeks = [];
      const firstDay = new Date(year, month - 1, 1).getDay();
      const adjustedFirstDay = (firstDay === 0) ? 6 : firstDay - 1; // Преобразуем для начала с понедельника
      let day = 1;

      for (let w = 0; w < 6; w++) {
        const days = [];
        for (let d = 0; d < 7; d++) {
          if ((w === 0 && d < adjustedFirstDay) || day > daysCount) {
            days.push(<div key={`${w}-${d}`} />); // Вывод пропусков в днях недели
          } else {
            const date = new Date(year, month - 1, day);
            let className = 'calendar-day';
            // Условие для присвоения классов
            if (date < today) {
              className += ' calendar-day-past'; // Класс для прошлых дат
            } else {
              if (startDate && endDate) {
                if (date.getTime() === startDate.getTime() || date.getTime() === endDate.getTime()) {
                  className += ' calendar-day-filled'; // Класс для начальной и конечной даты
                } else if (date >= startDate && date <= endDate) {
                  className += ' calendar-day-selected'; // Класс для всех дат между начальной и конечной
                }
              } else if (date.getTime() === startDate?.getTime()) {
                className += ' calendar-day-filled'; // Класс для начальной даты при первом клике
              }
            }

            days.push(
              <div key={`${w}-${d}`}
                className={className}
                onClick={() => {
                  // Если дата не в прошлом
                  if (date >= today) handleSelectDate(date);
                }}
              >
                {day}
              </div>
            )
            day++;
          }
        }
        weeks.push(days);
      }

      calendar.push(
        <motion.div key={`${month}-${year}`} variants={animation} className="calendar-month">
          <div className="calendar-month-name">{`${monthName} ${year}`}</div>
          <div className="calendar-weekdays">
            <div className="calendar-weekday">Пн</div>
            <div className="calendar-weekday">Вт</div>
            <div className="calendar-weekday">Ср</div>
            <div className="calendar-weekday">Чт</div>
            <div className="calendar-weekday">Пт</div>
            <div className="calendar-weekday">Сб</div>
            <div className="calendar-weekday">Вс</div>
          </div>
          <div className="calendar-days">{weeks}</div>
        </motion.div>
      )
    }

    return calendar;
  }

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      className={openCalendar ? 'calendar' : 'hidden'}
    >
      {renderCalendar()}
    </motion.div>
  )
}

export default memo(Calendar);