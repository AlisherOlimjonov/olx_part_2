import React  from 'react'
import "./Container.scss";
export default function Container({children,title}) {
  return (
    <div className='container'>
        {children}
       
    </div>
  )
}

