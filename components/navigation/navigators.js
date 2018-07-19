import { StackNavigator } from 'react-navigation';

import {Catalog} from '../screens/Catalog/Catalog.js';
import {LoginPage} from '../screens/Login/Login.js';

const LoginStack = StackNavigator({
    Login: { screen: LoginPage },
},{
    headerMode: 'none',
})

const AppStack = StackNavigator({
    Catalog: { screen: Catalog },
},{
    headerMode: 'none',
})

export {LoginStack};
export {AppStack};