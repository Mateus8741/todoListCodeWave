import React from 'react'
import * as RN from 'react-native'

import { useAppSafeArea } from '@/hooks'

interface Props {
  children: React.ReactNode
}

export function Box({ children }: Props) {
  const { top, bottom } = useAppSafeArea()

  return (
    <RN.View
      className="flex-1 bg-gray-back"
      style={{
        paddingHorizontal: 20,
        paddingTop: top,
        paddingBottom: bottom,
      }}>
      {children}
    </RN.View>
  )
}
