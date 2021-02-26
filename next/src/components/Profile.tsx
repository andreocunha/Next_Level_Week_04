import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/andreocunha.png" alt="André Cunha"/>
            <div>
                <strong>André Cunha</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}