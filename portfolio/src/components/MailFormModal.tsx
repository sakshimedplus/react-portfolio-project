// src/components/ContactFormModal.tsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const MailFormModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        'service_efq54zr',
        'template_8fma9vo',
        formData,
        'ng2YUkrzNszC1uujK' // ⛔ Replace this with your actual EmailJS public key
      )
      .then(
        () => setStatus('Message sent successfully!'),
        () => setStatus('Failed to send message.')
      );
    setFormData({ name: '', email: '', message: '' });
  };

  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={onClose} style={styles.closeBtn}>×</button>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} style={styles.input} />
          <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} style={styles.input} />
          <textarea name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange} style={styles.textarea} />
          <button type="submit" style={styles.button}>Send</button>
          <p>{status}</p>
        </form>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100%', height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '10px',
    width: '90%',
    maxWidth: '500px',
    position: 'relative',
  },
  closeBtn: {
    position: 'absolute',
    top: '10px', right: '15px',
    fontSize: '1.5rem',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '5px',
    minHeight: '100px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '0.75rem',
    fontSize: '1rem',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default MailFormModal;
