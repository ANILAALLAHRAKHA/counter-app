import React, { useState } from 'react'
import Styles from './counter.module.css'

const Counter = () => {
  const [value,setValue]= useState(0)
  return (
         <div className={Styles.container} >
   
    <div className={Styles.content} >
      <h1 >Counter App</h1>
      <h2>{value}</h2>
      <button className={Styles.btn} onClick={() => setValue(value + 1)}>INCREASE</button>
      <button className={Styles.btn} onClick={() => setValue(value - 1)}>DECREASE</button>
      <button className={Styles.btn} onClick={() => setValue(0)}>RESET</button>
    </div></div>
  )
}

export default Counter
