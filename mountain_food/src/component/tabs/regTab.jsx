import React from "react";
import classes from '../RegLogTab.module.css'
import {Button} from "react-bootstrap";
const RegTab = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.textOnInput}>
                <label htmlFor="inputText">Имя</label>
                <input
                    className={classes.email}
                    type='text'
                    minLength='5'
                    maxLength='40'
                    placeholder='Юлий'>
                </input>
            </div>
            <div className={classes.textOnInput}>
                <label htmlFor="inputText">Email</label>
                <input
                    className={classes.email}
                    type='text'
                    minLength='5'
                    maxLength='40'
                    placeholder='example@gmail.com'>
                </input>
            </div>
            <div className={classes.textOnInput}>
                <label htmlFor="inputText">Пароль</label>
                <input
                    className={classes.password}
                    type='text'
                    minLength="6"
                    maxLength="40"
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;">
                </input>
            </div>
            <Button className={classes.register}>Зарегистрироваться</Button>
        </div>
    );
};
export default RegTab;