import { Slot } from 'expo-router'
import { View } from 'react-native'
import '../global.css'

export default function Layout() {
  return (
    <View className="flex-1 items-center justify-center">
      <Slot />
    </View>
  )
}
