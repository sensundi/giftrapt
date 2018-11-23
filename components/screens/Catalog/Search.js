import React from "react";
import { AppRegistry, View, Alert, FlatList, StatusBar } from "react-native";
import { NavigationActions } from "react-navigation";

import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Input,
  InputGroup,
  Item,
  Tab,
  Tabs,
  Footer,
  FooterTab,
  Label
} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class SearchCategories extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            //Lets initialize results with the same struct we expect to receive from the api
            results: [],
            showLoading: true,
        };

        //Using ES6 we need to bind methods to access 'this'
        this.getSearchCategoriesApiAsync = this.getSearchCategoriesApiAsync.bind(this);
    }

    componentDidMount() {
        this.setState({ showLoading: true});
        this.getSearchCategoriesApiAsync();
    }

    getSearchCategoriesApiAsync() {
        return fetch('http://localhost:8080/v1/categories')
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

    renderSearchCategories() {
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
        return(
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.openDrawer()}
                        >
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Search</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Card>
                        <CardItem header>
                            <Text>Top Categories</Text>
                        </CardItem>
                        <CardItem >
                            <Body>
                                {this.state.showLoading !== true &&
                                    this.renderSearchCategories()
                                }
                            </Body>

                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}