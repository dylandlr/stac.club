exports.handler = async (event, context) => {
    const { tokens } = await auth0.handleRedirectCallback();
    // Process tokens or handle user session
    return {
        statusCode: 200,
        body: JSON.stringify({ user: tokens.user })
    };
  };
  