import React from 'react'
import { AlertProps } from '../types/types'

/**
 * Alert component to display different types of alert messages.
 * @param {AlertProps} props - The properties for the Alert component.
 * @param {string} props.message - The message to display in the alert.
 * @param {'success' | 'error' | 'warning' | 'info'} [props.type='info'] - The type of alert to display. Defaults to 'info'.
 * @returns {JSX.Element} The rendered Alert component.
 */
export const Alert: React.FC<AlertProps> = ({ message, type = 'info' }) => {
  const typeClasses = {
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800',
    info: 'bg-blue-100 text-blue-800',
  }

  return <div className={`p-4 rounded-md ${typeClasses[type]}`}>{message}</div>
}
