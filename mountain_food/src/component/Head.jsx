import React, { useContext } from 'react'
import {Button, Nav, Navbar, Image} from 'react-bootstrap'
import classes from './Head.module.css'
import {Context} from '../index'
import {observer} from 'mobx-react-lite'

import {Link, useNavigate} from 'react-router-dom'
import UserStore from '../store/userStore'
import {
  ADMIN_PANEL_ROUTE,
  AUTH_REG_ROUTE,
  CART_ROUTE,
  DRINKS_ROUTE,
  HACHAPURI_ROUTE,
  HINKALI_ROUTE,
  HOME_ROUTE,
  MAIN_MEALS_ROUTE
} from "../utils/consts";

const Head = observer(() => {
  const {user} = useContext(Context)
  const navigate = useNavigate()
  return (
    <div  className={classes.header}>
          <Navbar.Brand className={classes.brand} href="/main">
            <Link className={classes.home} to ={HOME_ROUTE}>
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-house-heart" viewBox="0 0 16 16">
                <path d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982Z"/>
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
              </svg>
            </Link>
            <Link className={classes.logo} to ={HOME_ROUTE}>
              <Image src="https://github.com/mininakar/cafe/blob/main/pic/logo.png?raw=true" width="150" height="70"/>
              <a href="index.html" class={classes.logo_text}>Mountain   Food</a>
            </Link>
            <div className={classes.cart_auth}>
              <Link className={classes.cart} to = {CART_ROUTE}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-basket3" viewBox="0 0 16 16">
                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
              </svg>
              </Link>
              <Link className={classes.authreg} to = {AUTH_REG_ROUTE}>
                  <svg width="40" height="50" viewBox="0 0 40 50"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-basket3">
                      <path d="M35 5H17C15.346 5 14 6.6825 14 8.75V16.25C14 16.5815 14.1054 16.8995 14.2929 17.1339C14.4804 17.3683 14.7348 17.5 15 17.5C15.2652 17.5 15.5196 17.3683 15.7071 17.1339C15.8946 16.8995 16 16.5815 16 16.25V8.75C16 8.41848 16.1054 8.10054 16.2929 7.86612C16.4804 7.6317 16.7348 7.5 17 7.5H32.128L24.444 11.6175C23.074 12.3525 22 14.3875 22 16.25V40H17C16.7348 40 16.4804 39.8683 16.2929 39.6339C16.1054 39.3995 16 39.0815 16 38.75V31.25C16 30.9185 15.8946 30.6005 15.7071 30.3661C15.5196 30.1317 15.2652 30 15 30C14.7348 30 14.4804 30.1317 14.2929 30.3661C14.1054 30.6005 14 30.9185 14 31.25V38.75C14 40.8175 15.346 42.5 17 42.5H22V46.25C22 47.3325 22.36 48.2525 22.99 48.77C23.338 49.055 23.742 49.2 24.168 49.2C24.514 49.2 24.876 49.105 25.232 48.915L35.556 43.385C36.926 42.65 38 40.615 38 38.75V8.75C38 6.6825 36.654 5 35 5ZM36 38.75C36 39.6275 35.412 40.74 34.768 41.085L24.444 46.615C24.252 46.7175 24.126 46.71 24.09 46.6825C24.054 46.655 24 46.51 24 46.25V16.25C24 15.3725 24.588 14.26 25.232 13.915L35.898 8.2C35.9657 8.37094 36.0006 8.55925 36 8.75V38.75Z"/>
                      <path d="M16.708 22.865L10.708 15.365C10.5194 15.1373 10.2668 15.0113 10.0046 15.0141C9.7424 15.017 9.49159 15.1485 9.30618 15.3802C9.12077 15.612 9.0156 15.9255 9.01333 16.2532C9.01105 16.581 9.11184 16.8967 9.294 17.1325L13.586 22.4975H1C0.734784 22.4975 0.48043 22.6292 0.292893 22.8636C0.105357 23.098 0 23.416 0 23.7475C0 24.079 0.105357 24.397 0.292893 24.6314C0.48043 24.8658 0.734784 24.9975 1 24.9975H13.586L9.294 30.3625C9.20116 30.4787 9.12753 30.6166 9.07734 30.7684C9.02714 30.9202 9.00135 31.0829 9.00144 31.2471C9.00163 31.5788 9.10723 31.8969 9.295 32.1312C9.48277 32.3656 9.73734 32.4972 10.0027 32.4969C10.2681 32.4967 10.5225 32.3647 10.71 32.13L16.71 24.63C16.8975 24.3956 17.0028 24.0777 17.0028 23.7462C17.0028 23.4148 16.8975 23.0969 16.71 22.8625L16.708 22.865Z"/>
                  </svg>
              </Link>
            </div>
          </Navbar.Brand>
          { user.isAdmin ?
            <div className={classes.navWrapper}>
              <Nav className={classes.nav}>
                <div><Link className={classes.link} to ={HINKALI_ROUTE}> Хинкали</Link></div>
                <div><Link className={classes.link} to ={HACHAPURI_ROUTE}> Хачапури</Link></div>
                <div><Link className={classes.link} to = {MAIN_MEALS_ROUTE}> Основные блюда</Link></div>
                <div><Link className={classes.link} to = {DRINKS_ROUTE}> Напитки</Link></div>
                <div><Link className={classes.link} to = {ADMIN_PANEL_ROUTE}> Админ панель</Link></div>
              </Nav>
            </div>
               :
           <div className={classes.navWrapper}>
             <Nav className={classes.nav}>
               <div><Link className={classes.link} to ={HINKALI_ROUTE}> Хинкали</Link></div>
               <div><Link className={classes.link} to ={HACHAPURI_ROUTE}> Хачапури</Link></div>
               <div><Link className={classes.link} to = {MAIN_MEALS_ROUTE}> Основные блюда</Link></div>
               <div><Link className={classes.link} to = {DRINKS_ROUTE}> Напитки</Link></div>
             </Nav>
           </div>
          }
      {/* {
            user.loggedIn ?
            (
              <Button variant='success' className='me-3'
              onClick={() => user.setLoggedIn(false)}>Выйти</Button>
            ) : (
              <Button variant='success' className='me-3 '
              onClick={() => navigate('/authreg')}>Авторизоваться</Button>
            )
          } */}
    </div>

  )
})

export default Head