import React from 'react'
import type { Service } from '../data/services'

type Props = {
  service: Service
  onAdd: (service: Service) => void
  disabled?: boolean
}

const ServiceCard: React.FC<Props> = ({ service, onAdd, disabled }) => {
  return (
    <div className="service-card">
      <div className="service-info">
        <div className="service-name">{service.name}</div>
        {service.description && <div className="service-desc">{service.description}</div>}
      </div>
      <div className="service-actions">
        <div className="service-price">{service.price} $</div>
        <button className="btn" onClick={() => onAdd(service)} disabled={disabled}>
          Добавить
        </button>
      </div>
    </div>
  )
}

export default ServiceCard
