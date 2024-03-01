import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { Feather } from '@expo/vector-icons'

export type CardsProps = TouchableOpacityProps & {
  isCompleted?: boolean
  title: string
}

export function Cards({ isCompleted, title, ...rest }: CardsProps) {
  const cardCompleted = isCompleted ? 'bg-secondary' : 'bg-primary'

  const cardText = isCompleted && 'line-through text-gray-500'

  return (
    <TouchableOpacity
      className={`bg-primary ${cardCompleted} flex-row mb-4 items-center justify-between py-7 px-3 rounded-lg`}
      activeOpacity={0.7}
      {...rest}>
      <Text className={`text-xl ${cardText} font-bold text-white`}>
        {title}
      </Text>

      {isCompleted && <Feather name="check" size={20} color="green" />}
    </TouchableOpacity>
  )
}
