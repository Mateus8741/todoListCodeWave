import React from 'react'
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  View,
} from 'react-native'

export interface TextInputProps extends RNTextInputProps {
  moreClassName?: string
}

export function Input({ moreClassName, ...rnTextInputProps }: TextInputProps) {
  return (
    <View className={moreClassName}>
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
