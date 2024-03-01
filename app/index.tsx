import { Image, View } from 'react-native'

import Logo from '@/assets/logo.png'
import { CustonButton } from '@/components/CustonButton'
import { Input } from '@/components/TextInput'

export default function Page() {
  return (
    <>
      <Image source={Logo} alt="Logo" className="self-center" />

      <View className="items-center mt-7 gap-x-3 flex-row">
        <Input placeholder="Adicione seu todo..." />
        <CustonButton />
      </View>
    </>
  )
}
