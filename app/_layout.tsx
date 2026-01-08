import '../global.css';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

function RootLayoutInner() {
  const { isAuthenticated, isLoading } = useAuth();

  /* if (isLoading) {
     return (
       <>
         <StatusBar style="light" />
         <Stack screenOptions={{ headerShown: false }}>
           <Stack.Screen name="loading" options={{ headerShown: false }} />
         </Stack>
       </>
     );
   }*/

  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        )}
      </Stack>
    </>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutInner />
    </AuthProvider>
  );
}
