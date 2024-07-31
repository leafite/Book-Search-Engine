// auth.js
const jwt = require('jsonwebtoken');

// Middleware to authenticate the token
const authMiddleware = ({ req }) => {
  // Extract token from request headers
  const token = req.headers.authorization || '';

  // Verify token and add user to context
  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET, { maxAge: '2h' });
    req.user = data;
  } catch {
    console.log('Invalid token');
  }

  return req;
};

module.exports = authMiddleware;
