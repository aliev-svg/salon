// src/components/CarModal.jsx
import React from "react";

export default function CarModal({ car, onClose }) {
  if (!car) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="modal-left">
          <img src={car.img} alt={`${car.brand} ${car.model}`} className="modal-image" />
        </div>

        <div className="modal-right">
          <h2>{car.brand} {car.model}</h2>
          <p><strong>Год:</strong> {car.year}</p>
          <p><strong>Цена:</strong> {car.price}</p>
          <p style={{ marginTop: 12 }}>{car.description}</p>
        </div>
      </div>
    </div>
  );
}
