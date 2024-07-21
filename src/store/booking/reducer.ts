import type {IStateBooking, IActionsBooking} from "../../types/i-booking";

// Начальное состояние
const initialState: IStateBooking = {
  start_date: '',
  end_date: ''
}

// Обработчик действий
function reducer(state = initialState, action: IActionsBooking) {
  switch (action.type) {
    case 'booking/setDate':
      return {...state, start_date: action.payload.startDate, end_date: action.payload.endDate};
    default:
      return state;
  }
}

export default reducer;