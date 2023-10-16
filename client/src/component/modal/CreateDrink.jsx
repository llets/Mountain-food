import React, {useContext, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import classes from "./Create.module.css";
import {createFood} from "../../http/foodAPI";
import {Context} from "../../index";
const CreateDrink = ({show, onHide}) => {
    const {food} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(400)

    const addDrink = async () => {
        const form = new FormData()
        form.append('name', `${name}`)
        form.append('price', `${price}`)
        form.append('photo', `https://github.com/mininakar/cafe/blob/main/pic/drink.jpg?raw=true`)
        form.append('category', `Хинкали`)
        form.append('description', ``)
        form.append('additional', ``)
        try {
            const foodData = Object.fromEntries(form)
            let dat = await createFood({foodData})
            setName('')
            setPrice(400)
            onHide()
            food.addFood(dat)
            alert("Напиток был успешно добавлен")
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить напиток
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around'
            }}>
                <Form>
                    <Form.Control
                        className={classes.name}
                        minLength='5'
                        maxLength='100'
                        placeholder='Название напитка*'
                        type='text'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control
                        className={classes.price}
                        minLength='3'
                        maxLength='5'
                        placeholder='Цена*'
                        type='number'
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Отмена</Button>
                <Button variant='outline-success' onClick={addDrink}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDrink;