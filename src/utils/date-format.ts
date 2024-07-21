import { format, parseISO } from 'date-fns';
import {ru} from 'date-fns/locale';

/**
 * Функция форматирования даты в формат "день недели, день, месяц"
 * @param dateString 
 * @returns 
 */
export const formatDate = (dateString: string) => {
  const date = parseISO(dateString);
  const formattedDate = format(date, "eeee d MMMM", {locale: ru});
  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}