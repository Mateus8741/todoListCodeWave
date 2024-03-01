import { Text, TouchableOpacity } from 'react-native'

export function CustonButton() {
  return (
    <TouchableOpacity
      className="h-12 w-12 bg-lemon rounded-md items-center justify-center"
      activeOpacity={0.7}>
      <Text className="text-black font-bold text-2xl">+</Text>
    </TouchableOpacity>
  )
}
