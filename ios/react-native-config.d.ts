declare module 'react-native-config' {
  export interface NativeConfig {
    APP_ENVIRONMENT: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
