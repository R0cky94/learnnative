import React, {Component} from 'react';
import {View,Alert} from 'react-native';
import SQLite from 'react-native-sqlite-2';
import MyTextInput from "./common/MyTextInput";
import MyButton from "./common/MyButton";

const db = SQLite.openDatabase({name: 'UserDatabase.db'});

class DeleteUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input_user_id: '',
        };
    }
    deleteUser = () => {
        let that = this;
        const { input_user_id } = this.state;
        db.transaction(tx => {
            tx.executeSql(
                'DELETE FROM  table_user where user_id=?',
                [input_user_id],
                (tx, results) => {
                    // console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert(
                            'Success',
                            'User deleted successfully',
                            [
                                {
                                    text: 'Ok',
                                    onPress: () => that.props.navigation.navigate('HomeScreen'),
                                },
                            ],
                            { cancelable: false }
                        );
                    } else {
                        alert('Please insert a valid User Id');
                    }
                }
            );
        });
    };
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <MyTextInput
                    placeholder="Enter User Id"
                    onChangeText={input_user_id => this.setState({ input_user_id })}
                    style={{ padding:10 }}
                />
                <MyButton
                    title="Delete User"
                    customClick={this.deleteUser.bind(this)}
                />
            </View>
        );
    }
}

export default DeleteUser;