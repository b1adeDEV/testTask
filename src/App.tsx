import { useCallback, useState } from 'react'
import './App.css'
import servicesData from './data/services'
import type { Service } from './data/services'
import ServiceCard from './components/ServiceCard'
import SelectedServices from './components/SelectedServices'

function App() {
  const [selected, setSelected] = useState<Service[]>([])
  const handleAdd = useCallback((s: Service) => {
    setSelected((p) => [...p, s])
  }, [])

  const handleRemoveOne = useCallback((id: string) => {
    setSelected((p) => {
      const idx = p.findIndex((x) => x.id === id)
      if (idx === -1) return p
      const copy = [...p]
      copy.splice(idx, 1)
      return copy
    })
  }, [])

  const handleCheckout = useCallback(() => {
    const names = selected.map((s) => s.name).join(', ')
    alert(`Заказ оформлен: ${names}`)
    setSelected([])
  }, [selected])

  return (
    <div className="app">
      <header className="header">
        <h1>Доп. услуги — MVP</h1>
      </header>

      <main className="container">
        <section className="list">
          {servicesData.map((s) => (
            <ServiceCard key={s.id} service={s} onAdd={handleAdd} />
          ))}
        </section>

        <SelectedServices selected={selected} onRemoveOne={handleRemoveOne} onCheckout={handleCheckout} />
      </main>
    </div>
  )
}

export default App
