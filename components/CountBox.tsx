import Ionicons from "@react-native-vector-icons/ionicons"
import { Text, View } from "react-native"

export const CountBox = ({ name, count, logo }) => {
  return (
    <View className="shrink flex-row gap-3 items-center justify-center  py-3 pl-8 pr-8 bg-white/20 rounded-[25px] border-[1px] border-white/30 color-white ">
      <View>
        <Ionicons name={logo} size={30} color="white" />
      </View>
      <View className="flex-col gap items-start">
        <Text className="text-2xl color-white">{name}</Text>
        <Text className="text-2xl color-white font-bold">{count}</Text>
      </View>
    </View>
  )
}
