import React from 'react'
import type { Service } from '../data/services'

type Grouped = {
  id: string
  name: string
  price: number
  count: number
}

type Props = {
  selected: Service[]
  onRemoveOne: (id: string) => void
  onCheckout: () => void
}

const SelectedServices: React.FC<Props> = ({ selected, onRemoveOne, onCheckout }) => {
  const grouped = selected.reduce<Record<string, Grouped>>((acc, s) => {
    if (!acc[s.id]) acc[s.id] = { id: s.id, name: s.name, price: s.price, count: 0 }
    acc[s.id].count++
    return acc
  }, {})

  const items = Object.values(grouped)
  const total = items.reduce((sum, it) => sum + it.price * it.count, 0)

  return (
    <aside className="side">
      <h3>Итого</h3>
      {items.length === 0 ? (
        <div className="empty">Нет выбранных услуг</div>
      ) : (
        <ul className="selected-list">
          {items.map((it) => (
            <li key={it.id} className="selected-item">
              <div className="sel-name">{it.name} × {it.count}</div>
              <div className="sel-row">
                <div className="sel-price">{it.price * it.count} $</div>
                <button className="btn small" onClick={() => onRemoveOne(it.id)}>Удалить</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="total-row">
        <div className="total-label">Всего</div>
        <div className="total-sum">{total} $</div>
      </div>
      <button className="btn primary" onClick={onCheckout} disabled={items.length === 0}>
        Оформить заказ
      </button>
    </aside>
  )
}

export default SelectedServices
