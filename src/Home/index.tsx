import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
interface HomeProps{
    componentId: string;
}
const Home = ({componentId}: HomeProps) => {
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({})
