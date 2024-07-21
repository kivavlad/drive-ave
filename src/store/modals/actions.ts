export default {
  // Открытие модалки по названию
  open: (name: string) => {
    return {type: 'modal/open', payload: name};
  },

  // Закрытие модалки
  close: () => {
    return {type: 'modal/close'}
  }
}