import React from 'react'
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  View,
} from 'react-native'

export type TextInputProps = RNTextInputProps

export function Input({ ...rnTextInputProps }: TextInputProps) {
  return (
    <View className="flex-1">
      <View className="w-full border border-primary py-4 rounded-md ">
        <RNTextInput
          className="px-3 text-white"
          placeholderTextColor="gray"
          autoCapitalize="none"
          style={$TextInputStyle}
          {...rnTextInputProps}
        />
      </View>
    </View>
  )
}

const $TextInputStyle = {
  flexGrow: 1,
  flexShrink: 1,
  padding: 0,
}
