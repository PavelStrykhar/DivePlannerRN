import React, { Component } from 'react';
import { Image, Dimensions, View, ActivityIndicator } from 'react-native';
import { Container, Header, Body, Title, Content, Card, CardItem, Text, Button, Left } from 'native-base';
import Moment from 'moment';
import HTML from 'react-native-render-html';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      posts: [],
    };
  }

  componentDidMount() {
        fetch(`http://f0b7-178-120-21-165.ngrok.io/wp-json/wp/v2/posts?_embed`)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            posts: responseJson,
          })
        })
        .catch((error) => {
          console.error(error);
        }); 
  }
  
  // fetchData = async() => {
  //   const response = await
  //   fetch('http://ed3f-178-120-21-165.ngrok.io/wp-json/wp/v2/posts?_embed');
    
  //   const posts = await response.json();

  //   this.setState({data:posts})
  // }

  // componentDidMount(){
  // this.fetchData();
  // }

  render() {
    if (this.state.isLoading == true) {
      return(
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
          <ActivityIndicator size="large" color="#1C97F7" />
        </View>
      )
    }
    else{
        
    return (
      <Container>

        {/* <Header androidStatusBarColor="#004447" style={{ backgroundColor: '#006064' }}>
          <Body style = {{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
            <Title>DivePlanner</Title>
          </Body>
        </Header> */}

        <Content>
        {this.state.posts.map((item, index) => (
          <Card style={{flex: 0}} key = {item.id}>
            <CardItem>
              <Left>
                <Body>
                  <Text style = {{ fontSize: 24, fontWeight:'bold' }}>{item.title.rendered}</Text>
                  <Text note>Published on: {Moment(item.date).format('d MMM Y')}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Image source={require('../../assets/adaptive-icon.png')} style={{height: 200, width: 200, flex: 1}}/>
              {/* {item._embedded['wp:featuredmedia'].filter( element => element.id == item.featured_media).map((subitem, index) => (
                  <Image source={{ uri: subitem.media_details.sizes.medium.source_url || '' }} style={{height: 200, width: 200, flex: 1}} key = {item.id}/>
                  ))} */}
            </CardItem>
            <CardItem>
                <Text style = {{ fontSize: 22}}  imagesMaxWidth={Dimensions.get('window').width}>{item.content.rendered.replace(/<\/?[^>]+(>|$)/g, "")}</Text>
                {/* <HTML html={item.content.rendered} imagesMaxWidth={Dimensions.get('window').width} /> */}
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Text>Author:</Text>
                  {item._embedded.author.filter( element => element.id ==item.author).map((subitem, index) => (
                  <Text key = {item.id}>{subitem.name}</Text>
                  ))}
                </Button>
              </Left>
            </CardItem>
          </Card>
        ))}
        </Content>
      </Container>
    )
  }
  }
}
