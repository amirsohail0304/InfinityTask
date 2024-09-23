/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/PreviousNextButtons` | `/(tabs)/aboutRecipe` | `/(tabs)/backButton` | `/(tabs)/coffee` | `/(tabs)/home` | `/(tabs)/intro` | `/(tabs)/machine` | `/(tabs)/modalComponent` | `/(tabs)/porta` | `/(tabs)/recipe` | `/(tabs)/recipeTimer` | `/(tabs)/recipeVideo` | `/(tabs)/signup` | `/(tabs)/sliderCard` | `/(tabs)/sliderComponent` | `/(tabs)/welcome` | `/(tabs)\recipeTimer` | `/PreviousNextButtons` | `/_sitemap` | `/aboutRecipe` | `/backButton` | `/coffee` | `/home` | `/intro` | `/machine` | `/modalComponent` | `/porta` | `/recipe` | `/recipeTimer` | `/recipeVideo` | `/signup` | `/sliderCard` | `/sliderComponent` | `/welcome`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
