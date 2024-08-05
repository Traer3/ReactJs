import React,{useState} from "react";
import styles from '../styles/Alert.module.css'

const Alert = ({type, message}) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    const alertClass =`
        ${styles.alert}
        ${type === 'success' ? styles.success : styles.error}
        ${!isVisible ? styles.hidden : ''}
    `;

    return (
        <div className={alertClass}>

            {message}
            <span onClick={handleClose} style={{marginLeft: '15px', cursor: 'pointer'}}>x</span>
        </div>
    );
};

export default Alert;