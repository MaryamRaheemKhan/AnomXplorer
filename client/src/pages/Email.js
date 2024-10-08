import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const Email = () => {
  const [recipientEmail, setRecipientEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const handleSendEmail = () => {
    // Check if recipientEmail and message are not empty
    if (!recipientEmail.trim() || !message.trim()) {
      alert('Recipient email and message cannot be empty!');
      return;
    }

    // Set sending state to true while sending the email
    setSending(true);

    // Prepare the data to send in the request body
    const requestData = {
      email: recipientEmail,
      message: message
    };

    // Send POST request to the server's API endpoint
    fetch('https://anomxplorerfyp-production.up.railway.app/api/Email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })
    .then(response => {
      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        throw new Error('Failed to send email.');
      }
    })
    .catch(error => {
      alert('Error sending email: ' + error.message);
    })
    .finally(() => {
      // Reset state and fields after sending the email
      setRecipientEmail('');
      setMessage('');
      setSending(false);
    });
  };

  return (
    <div style={{ backgroundColor: '#bcd8ef', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ maxWidth: 400, padding: 20, backgroundColor: '#e3f2fd', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h5" gutterBottom style={{ color: 'white', fontWeight: 'bold', backgroundColor: '#2196f3', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
          Compose Email
        </Typography>
        <TextField
          label="Recipient's Email"
          value={recipientEmail}
          onChange={(e) => setRecipientEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendEmail}
          disabled={sending}
          style={{ marginTop: 10 }}
        >
          {sending ? 'Sending...' : 'Send'}
        </Button>
      </div>
    </div>
  );
};

export default Email;
