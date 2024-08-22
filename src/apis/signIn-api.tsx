interface SignInData {
  name: string;
  email: string;
};


export default async function SignIn(data: SignInData) {
  try {
    const response = await fetch('https://dev.api.bono.so/v1/auth/register/anonymous', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Something went wrong');
    }

    return result;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};


