// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // PROTOCOL: 'https',
  // PORT: '',
  // SERVER: 'shipapi.hotelswave.com',

  PROTOCOL: 'http',
  PORT: ':8081',
  // SERVER: '128.199.209.219',
  // SERVER: '172.104.47.134',

  // PROTOCOL: 'http',
  // PORT: ':8081',
  // SERVER: '192.168.0.10',

  SERVER: 'localhost',
  // SERVER: '172.104.47.134',

  client_id: 'ship_client',
  client_secret: 'ship_secret',
  facebook_redirect_url: 'https://www.hotelswave.com/register'

  // SERVER: '172.104.173.180',
  // client_id: 'android-client',
  // client_secret: 'android-secret'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
