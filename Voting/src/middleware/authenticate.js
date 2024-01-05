const authenticate = (req, res, next) => {
    const apiKey = req.header('X-API-Key');
  
    if (!apiKey || apiKey !== 'your_secret_api_key') {
      res.status(401).send('Unauthorized');
    } else {
      next();
    }
  };
  
  module.exports = authenticate;