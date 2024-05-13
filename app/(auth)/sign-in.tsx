import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants';
import FormField from '@/components/FormField';

export default function SignIn() {
  return (
    <SafeAreaView className="bg-primary h-full"> 
      <ScrollView>
        <View className="w-full justify-center px-4 my-6">
          <Image
            source={images.logo}
            resizeMode='contain'
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-semibold font-psemibold text-white mt-10">Log in to Aura</Text>
          <FormField />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}