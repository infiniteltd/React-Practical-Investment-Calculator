import React, { useState } from 'react';
import Button from '../Button/Button';
import styles from './Form.module.css';

const initialUserInput = {
    "current-savings": '',
    "yearly-contribution": '',
    "expected-return": '',
    duration: '',
};

function Form(props) {
    const [userInput, setUserInput] = useState(initialUserInput);

    const submitFormHandler = function (e) {
        e.preventDefault();
        props.onCalculation(userInput);
    };
    const resetHandler = function () {
        setUserInput(initialUserInput);
    };
    const inputChangeHandler = function (input, value) {
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [input]: +value,
            };
        });
    };
    return (
        <form className={styles.form} onSubmit={submitFormHandler}>
            <div className={styles['input-group']}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input onChange={(e) => inputChangeHandler('current-savings', e.target.value)}
                        value={userInput['current-savings']} type="number" id="current-savings" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input onChange={(e) => inputChangeHandler('yearly-contribution', e.target.value)}
                        value={userInput['yearly-contribution']} type="number" id="yearly-contribution" />
                </p>
            </div>
            <div className={styles['input-group']}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input onChange={(e) => inputChangeHandler('expected-return', e.target.value)}
                        value={userInput['expected-return']} type="number" id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input onChange={(e) => inputChangeHandler('duration', e.target.value)}
                        value={userInput['duration']} type="number" id="duration" />
                </p>
            </div>
            <Button onClickReset={resetHandler} />
        </form>
    );
}

export default Form;
