/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/aboutRecipe` | `/(tabs)/coffee` | `/(tabs)/home` | `/(tabs)/intro` | `/(tabs)/machine` | `/(tabs)/porta` | `/(tabs)/recipe` | `/(tabs)/recipeTimer` | `/(tabs)/recipeVideo` | `/(tabs)/signup` | `/(tabs)/welcome` | `/..\components\BtnComponenet` | `/..\components\ErrorComponent` | `/..\components\ImageComponent` | `/..\components\navigation\recipeSTyle` | `/_sitemap` | `/aboutRecipe` | `/coffee` | `/home` | `/intro` | `/machine` | `/porta` | `/recipe` | `/recipeTimer` | `/recipeVideo` | `/signup` | `/welcome`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
