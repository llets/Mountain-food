import React, {useContext, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import classes from "./Create.module.css";
import {createFood} from "../../http/foodAPI";
import {Context} from "../../index";

const CreateHachapuri = ({show, onHide}) => {
    const {food} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(400)
    const [photo, setPhoto] = useState('')
    const [description, setDescription] = useState('')
    const [additional, setAdditional] = useState('')

    const addHachapuri = async () => {
        const form = new FormData()
        form.append('name', `${name}`)
        form.append('price', `${price}`)
        form.append('photo', `${photo}`)
        form.append('category', `Хачапури`)
        form.append('description', `${description}`)
        form.append('additional', `${additional}`)
        try {
            const foodData = Object.fromEntries(form)
            let dat = await createFood({foodData})
            setName('')
            setPrice(400)
            setPhoto('')
            setDescription('')
            setAdditional('')
            onHide()
            food.addFood(dat)
            alert("Блюдо было успешно добавлено")
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
                <Modal.Title id="contained-modal-title-vcenter margin-auto">
                    Добавить хачапури
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
                        type='text'
                        minLength='5'
                        maxLength='100'
                        placeholder='Название блюда*'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control
                        className={classes.price}
                        type='number'
                        minLength='3'
                        maxLength='5'
                        placeholder='Цена*'
                        min='100'
                        max='10000'
                        step='100'
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                    <Form.Control
                        className={classes.photo}
                        type='text'
                        minLength='5'
                        maxLength='100'
                        placeholder='Ссылка на фото*'
                        value={photo}
                        onChange={e => setPhoto(e.target.value)}
                    />
                    <Form.Control
                        className={classes.description}
                        as='textarea'
                        minLength='5'
                        maxLength='500'
                        placeholder='Описание'
                        rows={5}
                        style={{
                            height:'100px',
                            minHeight:'80px',
                            maxHeight:'200px'
                        }}
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <Form.Control
                        className={classes.description}
                        type='text'
                        minLength='3'
                        maxLength='500'
                        placeholder='Доп. информация'
                        value={additional}
                        onChange={e => setAdditional(e.target.value)}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Отмена</Button>
                <Button variant='outline-success' onClick={addHachapuri}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateHachapuri;