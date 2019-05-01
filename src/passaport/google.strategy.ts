import { use } from 'passport';
const Strategy = require('passport-google-oauth20');

export class GoogleStrategy {
  public static strategy = (): void => {
    use(new Strategy({
      callbackURL: 'http://localhost:4200/home/tabs/tab1',
      clientID: '135231573260-b4a8r5lu99hivr1f564ul30b1sgvhlmc.apps.googleusercontent.com',
      clientSecret: 'B0dt1fh1dftHoIZYJoJNNiSM'
    },
    () => { }))
  }
}
