import React, {useState, useContext} from 'react'
import classes from './AuthRegCard.module.css'
import LoginTab from "./tabs/loginTab";
import RegTab from "./tabs/regTab";
import {login, registration} from "../http/userAPI";
import {observer} from 'mobx-react-lite'
import {Context} from "../index";
import {useNavigate} from 'react-router-dom'
import {AUTH_REG_ROUTE, HOME_ROUTE} from "../utils/consts";

const AuthRegCard = observer(() => {
    const [activeTab, setActiveTab] = useState("logTab");
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const check = async (email, password) => {
        try{
            if (activeTab === "logTab"){
                await login(email, password);
                user.setUser(true)
            } else {
                await registration(email, password);
                navigate(AUTH_REG_ROUTE)
            }
            navigate(HOME_ROUTE)
        } catch(e){
            alert(e.response.data.message)
        }
    }
    const handleLoginTab = () => {
        // update the state to tab1
        setActiveTab("logTab");
    };
    const handleRegTab = () => {
        // update the state to tab2
        setActiveTab("regTab");
    };
  return (
      <div className={classes.Tabs}>
          <ul className={classes.nav}>
              <li className={activeTab === "logTab" ? "active" : ""}
              onClick={handleLoginTab}>Вход</li>
              <li className={activeTab === "regTab" ? "active" : ""}
              onClick={handleRegTab}>Регистрация</li>
          </ul>
          <div className={classes.outlet}>
              {activeTab === "logTab" ? <LoginTab clickFunc={check}/> : <RegTab clickFunc={check}/>}
          </div>
      </div>
  )
})

export default AuthRegCard
