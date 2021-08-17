import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/pages/login.module.css';
import GoogleButton from 'react-google-button';
const login = () => {
  return (
    <React.Fragment>
      <nav className={styles.nav}>
        <img src={process.env.PUBLIC_URL + '/icons/tt logo.png'} alt="logo" />
        <ul>
          <li>
            Not a member? <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
      <section className={styles.signin}>
        <div className={styles.sidebar}>
          <header>
            <h3>The world is you're Playground</h3>
          </header>
          <div className={styles.image}>
            <img src={process.env.PUBLIC_URL + '/images/plane.svg'} alt="" />
          </div>
        </div>
        <div className={styles.inputdiv}>
          <form>
            <h2>Sign in to Trip-Talk</h2>
            <GoogleButton />
            <hr className={styles.borderline} />
            <label htmlFor="Email">Email</label>
            <input type="email" />
            <label htmlFor="Password">Password</label>
            <input type="password" />
            <input type="submit" value="Sign in" />
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default login;