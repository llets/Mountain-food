import React, {useState} from 'react'
import classes from './AuthRegCard.module.css'
import LoginTab from "./tabs/loginTab";
import RegTab from "./tabs/regTab";

const AuthRegCard = () => {
    const handleLoginTab = () => {
        // update the state to tab1
        setActiveTab("logTab");
    };
    const handleRegTab = () => {
        // update the state to tab2
        setActiveTab("regTab");
    };
    const [activeTab, setActiveTab] = useState("logTab");
  return (
      <div className={classes.Tabs}>
          <ul className={classes.nav}>
              <li className={activeTab === "logTab" ? "active" : ""}
              onClick={handleLoginTab}>Вход</li>
              <li className={activeTab === "regTab" ? "active" : ""}
              onClick={handleRegTab}>Регистрация</li>
          </ul>
          <div className={classes.outlet}>
              {activeTab === "logTab" ? <LoginTab /> : <RegTab />}
          </div>
      </div>
  )
}

export default AuthRegCard
