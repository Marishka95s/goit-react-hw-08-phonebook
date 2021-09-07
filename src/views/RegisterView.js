import RegistrationForm from '../Components/Authorization/RegistrationForm/RegistrationForm';
import styles from './RegisterView.module.css';
export default function RegisterView() {
  return (
    <>
      <h2 className={styles.heading}>Register your account</h2>
      <RegistrationForm />
    </>
  );
}