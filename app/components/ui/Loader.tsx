import { View, Text, ActivityIndicator } from 'react-native'
import React, { FC } from 'react'

const Loader:FC = () => {
  return (
    <ActivityIndicator size='large' color='#a6c5c5'/>
  )
}

export default Loader