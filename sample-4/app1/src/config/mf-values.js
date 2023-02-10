const APP_HOST = 'http://localhost:3001';

const publicHost = `${APP_HOST}/static`;

export const app2Remote = {
  name: 'app2',
  publicHost,
  federationStats: `${publicHost}/federation-stats.json`,
};

export default { app2Remote };
