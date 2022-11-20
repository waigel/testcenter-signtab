import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'https://auth.testperfect.dev',
  //url: 'http://localhost:8080',
  realm: 'testperfect',
  clientId: 'signtab'
});
export default keycloak;
