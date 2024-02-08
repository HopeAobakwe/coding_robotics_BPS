import { useState, useEffect } from 'react';

import classes from './contact-form.module.css';
import Notification from '../ui/notification';

async function sendContactData(contactDetails) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
}

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (requestStatus === 'success' || requestStatus === 'error') {
        setRequestStatus(null);
        setRequestError('');
      }
    }, 3000);

    return () => {
      clearTimeout(identifier);
    };
  }, [requestStatus]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(
        enteredEmail.includes('@') && enteredMessage.trim().length > 0
      );
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [enteredEmail, enteredMessage]);

  async function sendMessageHandler(event) {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    setRequestStatus('pending');

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus('success');
      setEnteredMessage('');
      setEnteredEmail('');
      setEnteredName('');
    } catch (error) {
      setRequestError(error.message || 'Something went wrong!');
      setRequestStatus('error');
    }
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input
              type='email'
              id='email'
              required
              value={enteredEmail}
              onChange={(event) => {
                setEnteredEmail(event.target.value);
                setEmailError(
                  event.target.value.includes('@') ? '' : 'Invalid email'
                );
              }}
            />
            {emailError && <p className={classes.error}>{emailError}</p>}
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>Your Message</label>
          <textarea
            id='message'
            rows='5'
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button disabled={!formIsValid}>Send Message</button>
        </div>
      </form>
      {requestStatus && (
        <Notification
          status={requestStatus}
          title={
            requestStatus === 'success' ? 'Success!' : 'Error!'
          }
          message={
            requestStatus === 'success'
              ? 'Message sent successfully!'
              : requestError || 'Something went wrong!'
          }
        />
      )}
    </section>
  );
}

export default ContactForm;
