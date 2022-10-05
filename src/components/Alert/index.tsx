import React from 'react'

export function ErrorAlert({ children }: { children: React.ReactNode }) {
  return (
    <p className="p-2 text-center text-red-600 bg-red-500 bg-opacity-5">
      {children}
    </p>
  )
}

export function SuccessAlert({ children }: { children: React.ReactNode }) {
  return (
    <p className="p-2 text-center text-green-700 bg-green-500 bg-opacity-5">
      {children}
    </p>
  )
}
