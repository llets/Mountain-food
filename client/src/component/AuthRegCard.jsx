import React, {useContext, useState} from 'react'
import classes from './AuthRegCard.module.css'
import LoginTab from "./tabs/loginTab";
import RegTab from "./tabs/regTab";
import {check, login, registration} from "../http/userAPI";
import {observer} from 'mobx-react-lite'
import {useNavigate} from 'react-router-dom'
import {HOME_ROUTE} from "../utils/consts";
import {Context} from "../index";

const AuthRegCard = observer(() => {
    const [activeTab, setActiveTab] = useState("logTab");
    const navigate = useNavigate()
    const {user} = useContext(Context)

    const checkEmailPassword = async (email, password) => {
        try{
            if (activeTab === "logTab"){
                await login(email, password);
                check().then(data =>{
                    user.setUser(true)
                    user.setIsAuth(true)
                    user.setIsAdmin(data.role === 'ADMIN')
                    user.setId(data.id)
                })
                alert("Вы успешно вошли в систему.")
            } else {
                await registration(email, password);
                check().then(data =>{
                    user.setUser(true)
                    user.setIsAuth(true)
                    user.setIsAdmin(data.role === 'ADMIN')
                    user.setId(data.id)
                })
                alert("Вы успешно зарегистрировались и вошли в систему.")
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
              {activeTab === "logTab" ? <LoginTab clickFunc={checkEmailPassword}/> : <RegTab clickFunc={checkEmailPassword}/>}
          </div>
      </div>
  )
})

export default AuthRegCard
