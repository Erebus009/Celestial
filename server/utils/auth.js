const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
  checkToken: function ( token ) {

    if (!token) {
      return false
    }

    const userToken = token.split(' ').pop().trim();

    console.log(userToken)

    try {
      const {data}  = jwt.verify(userToken, secret, { maxAge: expiration });
      return data
    } catch {
      console.log('Invalid token');
      return false
    }
  }

};
