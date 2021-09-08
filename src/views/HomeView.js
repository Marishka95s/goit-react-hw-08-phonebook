import styles from './HomeView.module.css';
import image from '../images/phonebook.png';

export default function HomeView() {    
    return(
    <section className={styles.home}>
        <h2 className={styles.heading}>Welcome to your most convenient phonebok :)</h2>
        <img src={image} alt="phonebook" width="300"/>
    </section>)
}