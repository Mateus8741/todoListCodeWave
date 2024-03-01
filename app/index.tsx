import { FlatList, Image, ListRenderItemInfo, View } from 'react-native'

import Logo from '@/assets/logo.png'
import { Cards, CardsProps, CustonButton, Input } from '@/components'
import { useStorage } from '@/hooks/useStorage'
import { useTaskManager } from '@/hooks/useTasks'
import { useState } from 'react'

export default function Page() {
  const [title, setTitle] = useState<string>('')

  const { addTask, toggleTask } = useTaskManager()
  const { tasks } = useStorage()

  function handleAddTask() {
    addTask(title)
    setTitle('')
  }

  function renderItem({ item }: ListRenderItemInfo<CardsProps>) {
    return <Cards {...item} onPress={() => toggleTask(item.id)} />
  }

  return (
    <>
      <Image source={Logo} alt="Logo" className="self-center" />

      <View className="items-center mt-7 gap-x-3 flex-row">
        <Input
          placeholder="Adicione seu todo..."
          onChangeText={(text) => setTitle(text)}
          value={title}
        />
        <CustonButton onPress={handleAddTask} />
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        className="mt-7 px-3"
      />
    </>
  )
}

// const cards = [
//   { id: 1, title: 'Fazer café', isCompleted: true },
//   { id: 2, title: 'Estudar React Native', isCompleted: false },
//   { id: 3, title: 'Estudar Next.js', isCompleted: false },
//   { id: 4, title: 'Estudar TypeScript', isCompleted: true },
//   { id: 5, title: 'Estudar Node.js', isCompleted: false },
// ]
