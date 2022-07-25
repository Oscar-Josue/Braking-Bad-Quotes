import React from 'react';

export const ButtonNext= ({nameButton, accion}) => {


  return (
    <button className="cta" onClick={ accion } >
        <span>{nameButton}</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
    </button>
  )
}
