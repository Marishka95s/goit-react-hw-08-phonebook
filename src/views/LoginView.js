import LoginForm from '../Components/Authorization/LoginForm/LoginForm';
import styles from './LoginView.module.css';

export default function LoginView() {
  return (
    <>
      <h2 className={styles.heading}>Log in to your account</h2>
      <LoginForm />
    </>
  );
}