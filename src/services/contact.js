export const sendEmail = async (name, email, message) => {
  const response = await fetch('/api/contact/email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message }),
  });
  return response.json();
};
