import Keycloak, { type KeycloakPromise } from 'keycloak-js';

const keycloak = new Keycloak('/src/config/keycloak.json');

const initKeycloak = (onAuthenticatedCallback: () => void): void => {
  keycloak
    .init({
      onLoad: 'check-sso',
    })
    .then((authenticated: boolean) => {
      if (!authenticated) {
        console.log('user is not authenticated..!');
      }
      onAuthenticatedCallback();
    })
    .catch(console.error);
};
const login = keycloak.login;
const logout = keycloak.logout;
const getToken = (): string | undefined => keycloak.token;
const isLoggedIn = (): boolean => !!keycloak.token;
const updateToken = async (min: number): Promise<KeycloakPromise<boolean, boolean>> => await keycloak.updateToken(min);
const AuthService = {
  initKeycloak,
  login,
  logout,
  isLoggedIn,
  getToken,
  updateToken,
  keycloak,
};

export default AuthService;
