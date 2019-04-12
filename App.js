import React from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import HomeScreen from "./src/components/HomeScreen";
import ViewUser from "./src/components/ViewUser";
import ViewAllUser from "./src/components/ViewAllUser";
import UpdateUser from "./src/components/UpdateUser";
import RegisterUser from "./src/components/RegisterUser";
import DeleteUser from "./src/components/DeleteUser";


const App = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'HomeScreen',
            headerStyle: { backgroundColor: '#f05555' },
            headerTintColor: '#ffffff',
        },
    },
    View: {
        screen: ViewUser,
        navigationOptions: {
            title: 'View User',
            headerStyle: { backgroundColor: '#f05555' },
            headerTintColor: '#ffffff',
        },
    },
    ViewAll: {
        screen: ViewAllUser,
        navigationOptions: {
            title: 'View All User',
            headerStyle: { backgroundColor: '#f05555' },
            headerTintColor: '#ffffff',
        },
    },
    Update: {
        screen: UpdateUser,
        navigationOptions: {
            title: 'Update User',
            headerStyle: { backgroundColor: '#f05555' },
            headerTintColor: '#ffffff',
        },
    },
    Register: {
        screen: RegisterUser,
        navigationOptions: {
            title: 'Register User',
            headerStyle: { backgroundColor: '#f05555' },
            headerTintColor: '#ffffff',
        },
    },
    Delete: {
        screen: DeleteUser,
        navigationOptions: {
            title: 'Delete User',
            headerStyle: { backgroundColor: '#f05555' },
            headerTintColor: '#ffffff',
        },
    },
});

export default createAppContainer(App);