import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

type CustonButtonProps = TouchableOpacityProps

export function CustonButton({ ...rest }: CustonButtonProps) {
  return (
    <TouchableOpacity
      className="h-12 w-12 bg-lemon rounded-md items-center justify-center"
      activeOpacity={0.7}
      {...rest}>
      <Text className="text-black font-bold text-2xl">+</Text>
    </TouchableOpacity>
  )
}
