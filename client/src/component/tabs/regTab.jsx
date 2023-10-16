import React, {useState} from "react";
import classes from '../RegLogTab.module.css'
import {Button} from "react-bootstrap";
const RegTab = ({clickFunc}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className={classes.wrapper}>
            <div className={classes.textOnInput}>
                <label htmlFor="inputText">Email</label>
                <input
                    className={classes.email}
                    type='text'
                    minLength='5'
                    maxLength='40'
                    placeholder='example@gmail.com'
                    value={email}
                    onChange={e => setEmail(e.target.value)}>
                </input>
            </div>
            <div className={classes.textOnInput}>
                <label htmlFor="inputText">Пароль</label>
                <input
                    className={classes.password}
                    type='password'
                    minLength="6"
                    maxLength="40"
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                    value={password}
                    onChange={e => setPassword(e.target.value)}>
                </input>
            </div>
            <Button className={classes.register}
                    onClick={()=>clickFunc(email, password)}>Зарегистрироваться</Button>
        </div>
    );
};
export default RegTab;