import { Box } from '@/components/Box'
import { Slot } from 'expo-router'
import { StatusBar } from 'react-native'
import '../global.css'

export default function Layout() {
  return (
    <Box>
      <StatusBar barStyle="light-content" />
      <Slot />
    </Box>
  )
}
