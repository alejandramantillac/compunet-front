import React from 'react'
import { CardProps } from '../types/types'

export const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  children,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        {children}
      </div>
    </div>
  )
}