// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  default_locaction: {
    latitude: -34.6154611,
    longitude: -58.5733847
  },
  apiHost: 'http://localhost:3000/',
  apiBase: 'api/',
  meetups: 'meetups',
  weathers: 'weathers',
  users: 'users',
  register: 'register',
  singup: 'singup',
  api_key: 'adb76e05631e5273d653adfa1a9bc955',
  darkSkyUrl: 'https://api.darksky.net/forecast/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
