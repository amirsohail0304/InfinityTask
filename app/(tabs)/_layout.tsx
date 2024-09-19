// import { Tabs } from 'expo-router';
// import React from 'react';

// import { TabBarIcon } from '@/components/navigation/TabBarIcon';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Login',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon
//               name={focused ? 'code-slash' : 'code-slash-outline'}
//               color={color}
//             />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="signup"
//         options={{
//           title: 'Signup',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon
//               name={focused ? 'home' : 'home-outline'}
//               color={color}
//             />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="home"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon
//               name={focused ? 'code-slash' : 'code-slash-outline'}
//               color={color}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="welcome"
//         options={{
//           title: 'Welcome',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon
//               name={focused ? 'code-slash' : 'code-slash-outline'}
//               color={color}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="coffee"
//         options={{
//           title: 'Coffee',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon
//               name={focused ? 'code-slash' : 'code-slash-outline'}
//               color={color}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="intro"
//         options={{
//           title: 'Intro',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon
//               name={focused ? 'code-slash' : 'code-slash-outline'}
//               color={color}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="porta"
//         options={{
//           title: 'Porta',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon
//               name={focused ? 'code-slash' : 'code-slash-outline'}
//               color={color}
//             />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }
import { Stack } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function StackLayout() {
  const colorScheme = useColorScheme();

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
