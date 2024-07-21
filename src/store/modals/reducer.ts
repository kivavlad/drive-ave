import type {IStateModal, IActionModal} from "../../types/i-modals"; 

// Начальное состояние
const initialState: IStateModal = {
  name: ''
}

// Обработчик действий
function reducer(state = initialState, action: IActionModal) {
  switch (action.type) {
    case 'modal/open':
      return {...state, name: action.payload};
    case 'modal/close':
      return {...state, name: null};
    default:
      return state;
  }
}

export default reducer;