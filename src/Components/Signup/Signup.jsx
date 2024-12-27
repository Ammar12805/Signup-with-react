import React from 'react'
import styles from './Signup.module.css'
import { Button } from '../Button/Button'

export function Signup({loginCheck}) {



    return (
    
<>
        
        <div className={styles.divContainer}>
        <div>
        <h1 className={styles.head}>Sign up</h1>
        <p>Already have account ?  <a onClick={loginCheck} href="#">Login here</a></p>
        <div>
            <label >Name : </label>
            <input className={styles.inp} type="text" placeholder='Enter your Name' /> <br />
            <label>Email id : </label>
            <input className={styles.inp} type='Email' placeholder='Enter your email' />    <br />
            <label>Password : </label>
            <input className={styles.inp} type="Password" placeholder='Enter your Password' /> <br />
    <Button/>
        </div>
        </div>
        <div>
            <img width={300} src="../../../public/draw2.webp" alt="" />
        </div>
    </div>
</>
        
  )
}
