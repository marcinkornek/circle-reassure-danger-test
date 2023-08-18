import Config from 'react-native-config';
import * as Sentry from '@sentry/react-native';

export function setErrorTrackerSetup() {
  Sentry.init({
    dsn: Config.SENTRY_DSN,
    environment: Config.APP_ENVIRONMENT || 'development',
  });
}
