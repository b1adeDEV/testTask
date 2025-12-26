export type Service = {
  id: string
  name: string
  price: number
  description?: string
}

export const services: Service[] = [
  { id: '1', name: 'Приоритетная посадка', price: 7, description: 'Ранний доступ к посадке на борт' },
  { id: '2', name: 'Доп. багаж 10кг', price: 18, description: 'Дополнительный багаж' },
  { id: '3', name: 'Выбор места у окна', price: 5, description: 'Место у окна при регистрации' },
  { id: '4', name: 'Питание на борту', price: 12, description: 'Горячее питание во время рейса' },
  { id: '5', name: 'Трансфер до отеля', price: 25, description: 'Трансфер из аэропорта до отеля' },
]

export default services
