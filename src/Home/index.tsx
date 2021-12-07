import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
interface HomeProps{
    componentId: string;
}
const Home = ({componentId}: HomeProps) => {
    return (
        <View>
            <Text>Home</Text>
            <Icon name="user"/>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({})
