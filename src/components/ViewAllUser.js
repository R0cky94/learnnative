import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import SQLite from 'react-native-sqlite-2';

const db = SQLite.openDatabase({name: 'UserDatabase.db'});

class ViewAllUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FlatListItems: [],
        };
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM table_user', [], (tx, results) => {
                let temp = [];
                for (let i = 0; i < results.rows.length; ++i) {
                    temp.push(results.rows.item(i));
                }
                this.setState({
                    FlatListItems: temp,
                });
            });
        });
    }

    ListViewItemSeparator = () => {
        return (
            <View style={{height: 0.2, width: '100%', backgroundColor: '#808080'}}/>
        );
    };

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.FlatListItems}
                    ItemSeparatorComponent={this.ListViewItemSeparator}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        <View key={item.user_id} style={{backgroundColor: 'white', padding: 20}}>
                            <Text>Id: {item.user_id}</Text>
                            <Text>Name: {item.user_name}</Text>
                            <Text>Contact: {item.user_contact}</Text>
                            <Text>Address: {item.user_address}</Text>
                        </View>
                    )}
                />
            </View>
        );
    }
}

export default ViewAllUser;