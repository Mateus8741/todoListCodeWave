import { FlatList, Image, ListRenderItemInfo, View } from 'react-native'

import Logo from '@/assets/logo.png'
import { Cards, CardsProps, CustonButton, Input } from '@/components'

export default function Page() {
  function renderItem({ item }: ListRenderItemInfo<CardsProps>) {
    return <Cards {...item} />
  }

  return (
    <>
      <Image source={Logo} alt="Logo" className="self-center" />

      <View className="items-center mt-7 gap-x-3 flex-row">
        <Input placeholder="Adicione seu todo..." />
        <CustonButton />
      </View>

      <FlatList
        data={[
          { title: 'Fazer café', isCompleted: true },
          { title: 'Estudar React Native', isCompleted: false },
          { title: 'Estudar Next.js', isCompleted: false },
          { title: 'Estudar TypeScript', isCompleted: true },
          { title: 'Estudar Node.js', isCompleted: false },
        ]}
        keyExtractor={(item) => item.title}
        renderItem={renderItem}
        className="mt-7 px-3"
      />
    </>
  )
}
