const env = process.env.NODE_ENV;
let domain = null;
switch (env) {
  case 'development':
    domain = 'http://localhost:3004';
    break;
  case 'production':
    domain = 'http://localhost:3004';
}
module.exports = {
  domain,
};
