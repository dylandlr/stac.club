const { auth } = require('@auth0/auth0-spa-js');

exports.handler = async (event, context) => {
  const auth0 = await auth.createClient({
    domain: 'YOUR_AUTH0_DOMAIN',
    client_id: 'YOUR_CLIENT_ID',
    redirect_uri: `${process.env.URL}/.netlify/functions/callback`
  });

  try {
    await auth0.loginWithRedirect();
    return {
      statusCode: 302,
      headers: {
        Location: '/',
        'Cache-Control': 'no-cache' // Disable caching of this response
      },
      body: ''
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
