import React, { useState } from 'react';
import classes from "./modal.module.css";
import Button from '../Button/Button';
import Input from '../Input/Input';

function Modal({switchModal, changeNewTask, addNewTask}) {
    return (
        <React.Fragment>
            <div className={classes.wrapper}></div>
            <div className={classes.modal}>
                <Input onChangeFunc={changeNewTask} name="add" placeholder="Your task..."/>
                <Button clickFunc={addNewTask}>Add task</Button>
                <Button clickFunc={switchModal}>Close</Button>
            </div>
        </React.Fragment>
    )
}

export default Modal