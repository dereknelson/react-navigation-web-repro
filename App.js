import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
const Stack = createStackNavigator()

const Home = () => <Text>Home</Text>
const Signup = () => <Text>Signup</Text>
const linkingConfig = {
	linking: true,
	config: {
		screens: {
			home: "home",
			signup: "signup",
		},
	},
}

export default function App() {
	return (
		<NavigationContainer linking={linkingConfig}>
			<Stack.Navigator>
				<Stack.Screen name="home" component={Home} />
				<Stack.Screen name="signup" component={Signup} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
