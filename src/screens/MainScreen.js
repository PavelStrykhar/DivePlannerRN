import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import { SafeAreaView } from 'react-navigation';
import { Header, Left, Right, Icon } from 'native-base';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';



import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export default class MainScreen extends Component {
    
    state={
        data:[]
    }


    fetchData = async() => {
        const response = await
        fetch('http://f0b7-178-120-21-165.ngrok.io/wp-json/wp/v2/posts?_embed');
        
        const posts = await response.json();

        this.setState({data:posts})
    }

    componentDidMount(){
        this.fetchData();
    }

    render() {
        return (
            
            <SafeAreaView>
                
                <FlatList 
                    data={this.state.data}
                    KEY={item => item.id.toString()}
                    renderItem={({item}) =>
                        <View>
                            <Text style={styles.title}>{item.title.rendered}</Text>
                            <Text style={styles.content}>{item.content.rendered.replace(/<\/?[^>]+(>|$)/g, "")}</Text>
                            
                        </View>
                    }
                    // onEndReached={this.handleLoadMore}
                    // onEndReachedThreshold={1}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        fontSize: 16
    },
    title: {
        fontSize: 22
    }
})

