import React, { FC } from 'react'
import { View, Text, ScrollView } from 'react-native'
import  { useTailwind } from 'tailwind-rn';

interface ILayout {
  children: React.ReactNode;
  isScrollView?: boolean;
}

const Layout: FC<ILayout> = ({ children, isScrollView = true }) => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('h-full w-full bg-white pt-16')}>
      {isScrollView ? <ScrollView>{children}</ScrollView> : children}
    </View>
  )
}

export default Layout