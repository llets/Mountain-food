import React, { useContext } from 'react'
import {Nav, Navbar, Image} from 'react-bootstrap'
import classes from './Head.module.css'
import {Context} from '../index'
import {observer} from 'mobx-react-lite'

import {Link} from 'react-router-dom'
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
  const logOut = () => {
    user.setUser({})
    user.setIsAdmin(false)
    user.setId({})
    user.setIsAuth(false)
    localStorage.removeItem('token')
  }
  return (
    <div  className={classes.header}>
          <Navbar.Brand className={classes.brand} href="/main">
            {/*GO HOME*/}
            <Link className={classes.home} to ={HOME_ROUTE}>
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-house-heart" viewBox="0 0 16 16">
                <path d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982Z"/>
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
              </svg>
            </Link>
            {/*GO HOME*/}
            <Link className={classes.logo} to ={HOME_ROUTE}>
              <Image src="https://github.com/mininakar/cafe/blob/main/pic/logo.png?raw=true" width="150" height="70"/>
              <div className={classes.logo_text}>Mountain   Food</div>
            </Link>
            <div className={classes.cart_auth}>
              {/*GO AUTH AND REGISTRATION OR LOG OUT*/}
              {user.isAuth ?
                  <Link className={classes.authreg} style={{marginTop: '15px'}} to = {HOME_ROUTE} onClick={() => logOut()}>
                    <svg width="50" height="45" viewBox="0 0 51 51" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M29.6587 16.1084C29.9914 16.1084 30.3045 15.9857 30.5394 15.7198C30.7938 15.454 30.9112 15.1473 30.9112 14.7792V4.35007C30.9112 3.26627 30.5394 2.34605 29.8153 1.56898C29.0912 0.812363 28.1909 0.423828 27.1537 0.423828H4.68716C3.64994 0.423828 2.74971 0.812363 2.02562 1.56898C1.30152 2.34605 0.929688 3.26627 0.929688 4.35007V35.6578C0.929688 36.6189 1.22324 37.58 1.82992 38.5207C2.43659 39.4614 3.14112 40.1157 3.98263 40.4838L16.8794 46.2709C17.0947 46.3732 17.3099 46.455 17.5448 46.4959C17.7796 46.5572 17.9949 46.5777 18.2102 46.5777C18.4841 46.5777 18.7385 46.5368 18.993 46.455C19.2474 46.3732 19.4822 46.2709 19.6975 46.1073C20.0889 45.8415 20.3824 45.4734 20.5977 45.0031C20.813 44.5532 20.9108 44.042 20.9108 43.4694V39.5431H27.1537C28.1909 39.5431 29.0716 39.1546 29.8153 38.398C30.5394 37.6414 30.9112 36.7212 30.9112 35.6374V25.1878C30.9112 24.8402 30.7938 24.513 30.5394 24.2676C30.2849 24.0018 30.011 23.8791 29.6587 23.8791C29.3064 23.8791 28.9933 24.0018 28.7585 24.2676C28.5041 24.5334 28.3866 24.8197 28.3866 25.1878V35.6374C28.3866 35.985 28.2692 36.3122 28.0148 36.5576C27.7604 36.8234 27.4864 36.9461 27.1341 36.9461H20.8913V12.1821C20.8913 11.221 20.5977 10.2599 20.0106 9.31923C19.4235 8.37857 18.6994 7.72419 17.8383 7.33566L8.2685 3.06178H27.1537C27.4864 3.06178 27.7995 3.18447 28.0344 3.45031C28.2888 3.71615 28.4062 4.00244 28.4062 4.37052V14.7996C28.4062 15.1677 28.5236 15.4949 28.778 15.7403C28.9933 15.9857 29.2869 16.1084 29.6587 16.1084ZM16.8794 9.72821C17.2708 9.91226 17.623 10.2599 17.9362 10.7507C18.2493 11.2415 18.4059 11.7118 18.4059 12.1821V43.4898C18.4059 43.633 18.3863 43.7352 18.3667 43.817C18.3471 43.8988 18.308 43.9397 18.2884 43.9602H18.1514C18.1514 43.9602 18.0536 43.9397 17.8579 43.8784L4.96114 38.0913C4.56974 37.9277 4.21748 37.58 3.90435 37.0892C3.59123 36.5985 3.43467 36.1281 3.43467 35.6578V4.35007C3.43467 4.24783 3.45424 4.14558 3.47381 4.04334C3.49338 3.94109 3.53252 3.83884 3.59123 3.75705L16.8794 9.72821ZM46.7435 19.0735L39.2677 11.2619C39.0132 10.9961 38.7393 10.8734 38.387 10.8734C38.0347 10.8734 37.7412 10.9961 37.5063 11.2619C37.2519 11.5277 37.1345 11.814 37.1345 12.1821C37.1345 12.5502 37.2519 12.8569 37.5063 13.1023L42.8686 18.7054H27.1341C26.8015 18.7054 26.4883 18.8281 26.2535 19.0939C25.9991 19.3598 25.8817 19.6461 25.8817 20.0142C25.8817 20.3822 25.9991 20.689 26.2535 20.9344C26.5079 21.2002 26.7819 21.3229 27.1341 21.3229H42.8686L37.5063 26.926C37.2519 27.1918 37.1345 27.4986 37.1345 27.8667C37.1345 28.2347 37.2519 28.5415 37.5063 28.8073C37.6238 28.93 37.7608 29.0118 37.8977 29.0936C38.0543 29.155 38.2109 29.1959 38.3674 29.1959C38.524 29.1959 38.6806 29.155 38.8371 29.0936C38.9937 29.0323 39.1307 28.93 39.2285 28.8073L46.7043 20.9548C46.9587 20.689 47.0762 20.4027 47.0762 20.0346C47.1153 19.6461 46.9979 19.3393 46.7435 19.0735Z"/>
                    </svg>
                  </Link>
                  :
                  <Link className={classes.authreg} style={{marginTop: '15px'}} to = {AUTH_REG_ROUTE}>
                    <svg width="50" height="45" viewBox="0 0 40 50"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-basket3">
                      <path d="M35 5H17C15.346 5 14 6.6825 14 8.75V16.25C14 16.5815 14.1054 16.8995 14.2929 17.1339C14.4804 17.3683 14.7348 17.5 15 17.5C15.2652 17.5 15.5196 17.3683 15.7071 17.1339C15.8946 16.8995 16 16.5815 16 16.25V8.75C16 8.41848 16.1054 8.10054 16.2929 7.86612C16.4804 7.6317 16.7348 7.5 17 7.5H32.128L24.444 11.6175C23.074 12.3525 22 14.3875 22 16.25V40H17C16.7348 40 16.4804 39.8683 16.2929 39.6339C16.1054 39.3995 16 39.0815 16 38.75V31.25C16 30.9185 15.8946 30.6005 15.7071 30.3661C15.5196 30.1317 15.2652 30 15 30C14.7348 30 14.4804 30.1317 14.2929 30.3661C14.1054 30.6005 14 30.9185 14 31.25V38.75C14 40.8175 15.346 42.5 17 42.5H22V46.25C22 47.3325 22.36 48.2525 22.99 48.77C23.338 49.055 23.742 49.2 24.168 49.2C24.514 49.2 24.876 49.105 25.232 48.915L35.556 43.385C36.926 42.65 38 40.615 38 38.75V8.75C38 6.6825 36.654 5 35 5ZM36 38.75C36 39.6275 35.412 40.74 34.768 41.085L24.444 46.615C24.252 46.7175 24.126 46.71 24.09 46.6825C24.054 46.655 24 46.51 24 46.25V16.25C24 15.3725 24.588 14.26 25.232 13.915L35.898 8.2C35.9657 8.37094 36.0006 8.55925 36 8.75V38.75Z"/>
                      <path d="M16.708 22.865L10.708 15.365C10.5194 15.1373 10.2668 15.0113 10.0046 15.0141C9.7424 15.017 9.49159 15.1485 9.30618 15.3802C9.12077 15.612 9.0156 15.9255 9.01333 16.2532C9.01105 16.581 9.11184 16.8967 9.294 17.1325L13.586 22.4975H1C0.734784 22.4975 0.48043 22.6292 0.292893 22.8636C0.105357 23.098 0 23.416 0 23.7475C0 24.079 0.105357 24.397 0.292893 24.6314C0.48043 24.8658 0.734784 24.9975 1 24.9975H13.586L9.294 30.3625C9.20116 30.4787 9.12753 30.6166 9.07734 30.7684C9.02714 30.9202 9.00135 31.0829 9.00144 31.2471C9.00163 31.5788 9.10723 31.8969 9.295 32.1312C9.48277 32.3656 9.73734 32.4972 10.0027 32.4969C10.2681 32.4967 10.5225 32.3647 10.71 32.13L16.71 24.63C16.8975 24.3956 17.0028 24.0777 17.0028 23.7462C17.0028 23.4148 16.8975 23.0969 16.71 22.8625L16.708 22.865Z"/>
                    </svg>
                  </Link>
              }
              {/*GO CART*/}
              {user.isAuth && <Link className={classes.cart} to = {CART_ROUTE}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-basket3" viewBox="0 0 16 16">
                  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
                </svg>
              </Link>
              }
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
    </div>

  )
})

export default Head