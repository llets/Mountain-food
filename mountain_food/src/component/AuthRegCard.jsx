import React from 'react'
import classes from './AuthRegCard.module.css'
import LoginTab from "./loginTab";
import RegTab from "./regTab";

const AuthRegCard = () => {
  return (
      <div className={classes.Tabs}>
          {/* Tab nav */}
          <ul className={classes.nav}>
              <li>Войти</li>
              <li>Зарегистрироваться</li>
          </ul>
          <div className={classes.outlet}>
              <LoginTab />
              <RegTab />
          </div>
      </div>
  )

}

export default AuthRegCard
