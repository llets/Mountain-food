import {React, Img} from 'react'
import classes from './MainInfo.module.css'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const MainInfo = () => {

const mapState = {  center: [54.7250628841006,55.94095232813801], zoom: 16 };
  return (
    <>
        <div className={classes.runningWrap}>
            <div className={classes.runningLine}>Уважаемые гости! Временно нет доставки напитков</div>
        </div>
        <div className={classes.contentWrap}>
            <div className={classes.about}>
                <div className={classes.text}>
                    <p className={classes.headerfortext}> О НАС</p>
                    <p className={classes.maintext}> Это душевное заведение расположено недалеко от Ле-Русс — одного из главных горнолыжных курортов горного массива Юра. Сюда приезжают, чтобы насладиться местной, щедрой, идейной, сезонной и экологичной кухней. В меню: юрское фондю с органическим сыром конте, гренки с лесными грибами и желтым вином Юры, улитки, приготовленные с местным абсентом.</p>
                </div>
                <div className={classes.shadow_border}>
                    <img className={classes.shadow_border} src="https://github.com/mininakar/cafe/blob/main/pic/mainphoto.jpg?raw=true"/>
                </div>
            </div>
            <div className={classes.menu}>
                <div className={classes.shadow_border}>
                    <img className={classes.shadow_border} src="https://github.com/mininakar/cafe/blob/main/pic/kitchen.jpg?raw=true"/>
                </div>
                <div className={classes.text}>
                    <p className={classes.headerfortext}> МЕНЮ</p>
                    <p className={classes.maintext}> Авторское меню снова и снова будет вас восхищать своими необычными сочетаниями и неожиданными вкусами, поближе познакомит гостей с шеф-поваром Анастасией Васильевой и поможет открыть для себя что-то новое.</p>
                </div>
            </div>
            <div className={classes.contact}>
                <div className={classes.text}>
                    <div>
                        <p className={classes.headerfortext}> КОНТАКТЫ</p>
                        <p className={classes.maintext}>Здесь должен быть адрес </p>
                        <p className={classes.maintext}>Здесь должен быть номер </p>
                        <p className={classes.maintext}>Режим работы: <br/>
                                                        пн-чт 10:00 – 23:00 <br/>
                                                        пт    10:00 – 01:00 <br/>
                                                        сб    10:00 – 01:00 <br/>
                                                        вс    10:00 – 23:00 
                        </p>
                    </div>
                </div>
                <YMaps >
                    <div className={classes.map}>
                    <Map className={classes.map_frame}
                    defaultState={mapState}
                    >
                        <Placemark 
                        // geometry={{
                        //     coordinates: [55.751574, 37.573856]
                        //   }}
                        // properties={{
                        //     hintContent: 'Собственный значок метки',
                        //     balloonContent: 'Это красивая метка'
                        //     }}
                         />
                    </Map>
                    </div>
                </YMaps>
            </div>
        </div>
    </>
  )
}

export default MainInfo