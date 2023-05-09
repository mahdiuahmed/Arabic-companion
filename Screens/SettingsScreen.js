import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'
import { auth } from '../Firebase'

const SettingsScreen = ({navigation}) => {

  const logOut = () => {
    auth.signOut().then(() => {
      navigation.replace('LoginScreen')
    })
  }

  return (
    <View>
      <Text>SettingsScreen</Text>
      <Button onPress={logOut}/>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({})