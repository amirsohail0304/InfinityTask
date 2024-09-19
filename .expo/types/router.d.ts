/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/coffee` | `/(tabs)/home` | `/(tabs)/intro` | `/(tabs)/machine` | `/(tabs)/porta` | `/(tabs)/signup` | `/(tabs)/welcome` | `/(tabs)\coffee` | `/(tabs)\machine` | `/(tabs)\recipeTimer` | `/(tabs)\recipeVideo` | `/(tabs)\welcome` | `/_sitemap` | `/coffee` | `/home` | `/intro` | `/machine` | `/porta` | `/signup` | `/welcome`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
