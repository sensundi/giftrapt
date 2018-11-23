import React from "react";
import { AppRegistry, View, FlatList, StatusBar } from "react-native";
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Input, Item, Label, Button, Text } from "native-base";
import Login from "../Login";
export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            //Lets initialize results with the same struct we expect to receive from the api
            results: [],
            showLoading: true,
        };

        //Using ES6 we need to bind methods to access 'this'
        this.getStoresAsync = this.getStoresAsync.bind(this);
    }

    componentDidMount() {
        this.setState({ showLoading: true});
        this.getStoresAsync();
    }

    getStoresAsync() {
        return fetch('http://localhost:8080/v1/stores')
        .then((response) => {
            return response.json();
        }).then((responseJson) => {
            this.setState({
              results: responseJson,
              showLoading: false
            });
        })
        .catch((error) => {
          console.error(error);
        });
    }

    renderStores() {
        return (
            <FlatList
                data={this.state.results}
                numColumns={2}
                renderItem={( {item} ) =>
                    <Button
                        vertical
                        style= {{margin:10}}
                        onPress={() => this.props.navigation.navigate("Search")}>
                        <Icon/>
                        <Text style={{width: 150, height:80 }}>{item.name}</Text>
                    </Button>
                } // Adding some margin
                keyExtractor={(item, index) => index.toString()}
            />
        );
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Content padder>
                    <Item floatingLabel style={{ marginTop: 20 }}>
                        <Label>Search Stores</Label>
                        <Input />
                    </Item>
                    <Card>
                        <CardItem header>
                            <Text>Stores Near You</Text>
                        </CardItem>
                        <CardItem >
                            <Body>
                                {this.state.showLoading !== true &&
                                    this.renderStores()
                                }
                            </Body>

                        </CardItem>
                    </Card>

                    <Button rounded danger
                        style={{ marginTop: 20, alignSelf: "center" }}
                        onPress={() => navigate("Profile")}>
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}