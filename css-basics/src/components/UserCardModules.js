import React from 'react';
import styles from '../styles/UserCard.module.css'

const UserCard  = ({name, email, avatarUrl}) =>{
    return (
        <div className={styles.card}>
            <img src={avatarUrl} alt={name} className={styles.avatar} />
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.email}>{email}</p>
        </div>
    )
}

export default UserCard