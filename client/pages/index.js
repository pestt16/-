// client/pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Добро пожаловать в Witness</h1>
      <p style={styles.subtitle}>Выберите, кто вы:</p>
      <div style={styles.buttonContainer}>
        <Link href="/host">
          <button style={styles.button}>Мы — молодожёны</button>
        </Link>
        <Link href="/guest">
          <button style={styles.button}>Я — свидетель</button>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    fontFamily: 'sans-serif',
    textAlign: 'center',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '20px',
    marginTop: '12px',
  },
  buttonContainer: {
    marginTop: '24px',
    display: 'flex',
    gap: '20px',
  },
  button: {
    padding: '12px 24px',
    fontSize: '18px',
    backgroundColor: '#4F46E5',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};
