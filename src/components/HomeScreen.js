import React, {Component} from 'react';
import {View} from 'react-native';
import MyText from "./common/MyText";
import MyButton from "./common/MyButton";
import SQLite from 'react-native-sqlite-2';

const db = SQLite.openDatabase({name: 'UserDatabase.db'});

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        db.transaction(function (txn) {
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
                [],
                function (tx, res) {
                    // console.log('item:', res.rows.length);
                    if (res.rows.length === 0) {
                        txn.executeSql('DROP TABLE IF EXISTS table_user', []);
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
                            []
                        );
                    }
                }
            );
        });
    }


render(){
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
                flexDirection: 'column',
            }}>
            <MyText text="SQLite Example"/>
            <MyButton
                title="Register"
                customClick={() => this.props.navigation.navigate('Register')}
            />
            <MyButton
                title="Update"
                customClick={() => this.props.navigation.navigate('Update')}
            />
            <MyButton
                title="View"
                customClick={() => this.props.navigation.navigate('View')}
            />
            <MyButton
                title="View All"
                customClick={() => this.props.navigation.navigate('ViewAll')}
            />
            <MyButton
                title="Delete"
                customClick={() => this.props.navigation.navigate('Delete')}
            />
        </View>
    );
}
}

export default HomeScreen;