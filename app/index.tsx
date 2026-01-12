import { Link } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-950 px-6">
      <Text className="mb-8 text-5xl font-light tracking-tighter text-white">Welcome</Text>
      <Text className="mb-12 text-center text-lg text-zinc-400">
        Your minimalist{'\n'}experience starts here
      </Text>
      <Link href="/login" asChild>
        <Pressable className="w-full rounded-full bg-white py-4 active:opacity-70">
          <Text className="text-center text-base font-medium text-black">Sign In</Text>
        </Pressable>
      </Link>
    </View>
  );
}
