const axios = require('axios');

const TEST_URL = process.env.TEST_URL || 'http://localhost:4000/my-nodejs-app'; // Asegúrate de cambiar esto a tu URL de despliegue

axios.get(TEST_URL)
  .then(response => {
    if (response.status === 200) {
      console.log('Smoke test passed!');
      process.exit(0);
    } else {
      console.error('Smoke test failed: Status code is not 200');
      process.exit(1);
    }
  })
  .catch(error => {
    console.error('Smoke test failed:', error.message);
    process.exit(1);
  });
