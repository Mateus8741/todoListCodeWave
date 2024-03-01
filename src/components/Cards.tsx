import { Text, View } from 'react-native'

import { Feather } from '@expo/vector-icons'

type CardsProps = {
  isCompleted: boolean
  title: string
}

export function Cards({ isCompleted, title }: CardsProps) {
  const cardCompleted = isCompleted ? 'bg-secondary' : 'bg-primary'

  const cardText = isCompleted && 'line-through text-gray-500'

  return (
    <View
      className={`bg-primary ${cardCompleted} flex-row items-center justify-between py-7 px-3 rounded-lg`}>
      <Text className={`text-xl ${cardText} font-bold text-white`}>
        {title}
      </Text>

      {isCompleted && <Feather name="check" size={20} color="white" />}
    </View>
  )
}
