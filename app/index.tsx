import { Image, Text, View } from 'react-native'

import Logo from '@/assets/logo.png'

export default function Page() {
  return (
    <View>
      <Image source={Logo} alt="Logo" className="self-center" />
      <Text>Home</Text>
    </View>
  )
}
