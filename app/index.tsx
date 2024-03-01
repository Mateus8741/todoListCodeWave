import { Image, View } from 'react-native'

import Logo from '@/assets/logo.png'
import { Input } from '@/components/TextInput'

export default function Page() {
  return (
    <View>
      <Image source={Logo} alt="Logo" className="self-center" />
      <Input placeholder="Adicione seu todo..." />
    </View>
  )
}
