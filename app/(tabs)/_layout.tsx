import { Stack } from 'expo-router';
import React from 'react';
export default function StackLayout() {

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Login',
        }}
      />

      <Stack.Screen
        name="signup"
        options={{
          title: 'Signup',
        }}
      />

      <Stack.Screen
        name="home"
        options={{
          title: 'Home',
        }}
      />

      <Stack.Screen
        name="welcome"
        options={{
          title: 'Welcome',
        }}
      />

      <Stack.Screen
        name="coffee"
        options={{
          title: 'Coffee',
        }}
      />

      <Stack.Screen
        name="intro"
        options={{
          title: 'Intro',
        }}
      />

      <Stack.Screen
        name="porta"
        options={{
          title: 'Porta',
        }}
      />
      <Stack.Screen
        name="recipe"
        options={{
          title: 'recipe',
        }}

      />
      <Stack.Screen
        name="recipeTimer"
        options={{
          title: 'recipeTimer',
        }}
      />
      <Stack.Screen
        name="recipeVideo"
        options={{
          title: 'recipeVideo',
        }}
      />
      <Stack.Screen
        name="aboutRecipe"
        options={{
          title: 'aboutRecipe',
        }}
      />
    </Stack>
  );
}
