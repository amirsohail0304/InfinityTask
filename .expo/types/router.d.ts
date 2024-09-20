/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/aboutRecipe` | `/(tabs)/coffee` | `/(tabs)/home` | `/(tabs)/intro` | `/(tabs)/machine` | `/(tabs)/modalComponent` | `/(tabs)/porta` | `/(tabs)/recipeTimer` | `/(tabs)/recipeVideo` | `/(tabs)/signup` | `/(tabs)/sliderComponent` | `/(tabs)/welcome` | `/(tabs)\PreviousNextButtons` | `/(tabs)\_layout` | `/(tabs)\recipe` | `/(tabs)\sliderCard` | `/..\components\BtnComponenet` | `/..\components\ErrorComponent` | `/..\components\ImageComponent` | `/..\components\RecipeChat` | `/..\components\navigation\recipeSTyle` | `/_sitemap` | `/aboutRecipe` | `/coffee` | `/home` | `/intro` | `/machine` | `/modalComponent` | `/porta` | `/recipeTimer` | `/recipeVideo` | `/signup` | `/sliderComponent` | `/welcome`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
