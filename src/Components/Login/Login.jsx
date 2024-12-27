import React from 'react'
import styles from './login.module.css'

export function Login(loginCheck) {
  return (
      <div className={styles.divContainer}>
          <div>
          <h1 className={styles.head}>Login</h1>
          <p>Don't have an account ?  <a onClick={loginCheck} href="#">Signup here</a></p>
          <div>
              <label>Email id : </label>
              <input className={styles.inp} type='Email' placeholder='Enter your email' />    <br />
              <label>Password : </label>
              <input className={styles.inp} type="Password" placeholder='Enter your Password' /> <br />
          </div>
          </div>
          <div>
              <img width={300} src="../../../public/draw2.webp" alt="" />
          </div>
      </div>
  )
}
