import React from 'react';
import styles from './Button.module.css';

function Button(props) {
    return (
        <div className={styles.actions}>
            <button type="reset" onClick={props.onClickReset} className={styles.buttonAlt}>
                Reset
            </button>
            <button type="submit" className={styles.button}>
                Calculate
            </button>
        </div>
    );
}

export default Button;
