import { StackNavigator } from 'react-navigation';

import {Catalog} from '../screens/Catalog.js';
import {LoginPage} from '../screens/Login.js';

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