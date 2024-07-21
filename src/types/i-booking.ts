// Типы для booking store

export interface IStateBooking {
  start_date: string;
  end_date: string;
}

export interface IActionsBooking {
  type: 'booking/setDate', 
  payload: {startDate: string, endDate: string}
}