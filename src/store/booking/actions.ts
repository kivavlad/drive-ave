import {IActionsBooking} from "../../types/i-booking";

export default {
  // Открытие модалки по названию
  setDate: (startDate: string, endDate: string): IActionsBooking => {
    return {type: 'booking/setDate', payload: {startDate, endDate}};
  }
}