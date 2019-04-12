import React, {Component} from 'react';
import {View, Text} from 'react-native';
import MyTextInput from "./common/MyTextInput";
import MyButton from "./common/MyButton";
import SQLite from 'react-native-sqlite-2';

const db = SQLite.openDatabase({name: 'UserDatabase.db'});

class ViewUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input_user_id: '',
            userData: '',
        };
    }
    searchUser = () => {
        const { input_user_id } = this.state;
        console.log(this.state.input_user_id);
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM table_user where user_id = ?',
                [input_user_id],
                (tx, results) => {
                    let len = results.rows.length;
                    console.log('len', len);
                    if (len > 0) {
                        this.setState({
                            userData: results.rows.item(0),
                        });
                    } else {
                        alert('No user found');
                        this.setState({
                            userData: '',
                        });
                    }
                }
            );
        });
    };
    render() {
        return (
            <View>
                <MyTextInput
                    placeholder="Enter User Id"
                    onChangeText={input_user_id => this.setState({input_user_id})}
                    style={{padding: 10}}
                />
                <MyButton
                    title="Search User"
                    customClick={this.searchUser.bind(this)}
                />
                <View style={{marginLeft: 35, marginRight: 35, marginTop: 10}}>
                    <Text>User Id: {this.state.userData.user_id}</Text>
                    <Text>User Name: {this.state.userData.user_name}</Text>
                    <Text>User Contact: {this.state.userData.user_contact}</Text>
                    <Text>User Address: {this.state.userData.user_address}</Text>
                </View>
            </View>
        );
    }
}

export default ViewUser;