import { FlatList, Image, ListRenderItemInfo, View } from 'react-native'

import Logo from '@/assets/logo.png'
import { Cards, CardsProps, CustonButton, Input } from '@/components'
import { useState } from 'react'

export default function Page() {
  const [todos, setTodos] = useState<CardsProps[]>([])

  function saveTodo() {
    if (todos[0]?.title) {
      setTodos((oldState) => [...oldState, todos[0]])
    }
  }

  function renderItem({ item }: ListRenderItemInfo<CardsProps>) {
    return <Cards {...item} />
  }

  return (
    <>
      <Image source={Logo} alt="Logo" className="self-center" />

      <View className="items-center mt-7 gap-x-3 flex-row">
        <Input
          placeholder="Adicione seu todo..."
          onChangeText={(value) =>
            setTodos([{ title: value, isCompleted: false }])
          }
          value={todos[0]?.title || ''}
        />
        <CustonButton onPress={saveTodo} />
      </View>

      <FlatList
        data={cards}
        keyExtractor={(item) => item.title}
        renderItem={renderItem}
        className="mt-7 px-3"
      />
    </>
  )
}

const cards = [
  { title: 'Fazer café', isCompleted: true },
  { title: 'Estudar React Native', isCompleted: false },
  { title: 'Estudar Next.js', isCompleted: false },
  { title: 'Estudar TypeScript', isCompleted: true },
  { title: 'Estudar Node.js', isCompleted: false },
]
