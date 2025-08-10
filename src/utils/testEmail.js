// Simple test email function to bypass any issues
export const testEmailSend = async (formData) => {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: 'd4e9b5fd-87e2-4ebc-8797-185bf4a5b03b',
        name: formData.name,
        email: formData.email,
        subject: formData.subject || 'Test Email',
        message: formData.message,
        to: 'matas.tijusas@outlook.com'
      })
    });

    const result = await response.json();
    console.log('Test email result:', result);
    
    return { success: result.success, result };
  } catch (error) {
    console.error('Test email failed:', error);
    return { success: false, error: error.message };
  }
};
