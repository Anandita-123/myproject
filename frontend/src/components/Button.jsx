import React from 'react'

export default function Button({text, icon}) {
  return (
    <button type="button" class="btn btn-outline-secondary d-flex align-items-center gap-2">
        {icon && <img src={icon} width="20px" alt="Icon" />}
        <span>{text}</span>
    </button>
  )
}
