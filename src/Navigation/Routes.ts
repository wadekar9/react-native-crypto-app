import SplashScreen from "../screens/SplashScreen";
import BuySellScreen from "../screens/BuySellScreen";
import CoinScreen from "../screens/CoinScreen";
import DepositWithdrawalScreen from "../screens/DepositWithdrawalScreen";
import HistoryScreen from "../screens/HistoryScreen";
import ReferEarnScreen from "../screens/ReferEarnScreen";
import ReceiveExchangeScreen from "../screens/ReceiveExchangeScreen";
import SendExchangeScreen from "../screens/SendExchangeScreen";
import SpinWheelScreen from "../screens/SpinWheelScreen";

import HomeScreen from "../screens/HomeScreen";
import MarketScreen from "../screens/MarketScreen";
import PortfolioScreen from "../screens/PortfolioScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RewardScreen from "../screens/RewardScreen";

import BottomNavigator from "./BottomNavigator";

export const StackNavigationRoutes = {
    SplashScreen,
    BottomNavigator,
    BuySellScreen,
    CoinScreen,
    DepositWithdrawalScreen,
    HistoryScreen,
    ReferEarnScreen,
    ReceiveExchangeScreen,
    SendExchangeScreen,
    SpinWheelScreen
}

export const BottomNavigationRoutes = {
    HomeScreen,
    MarketScreen,
    PortfolioScreen,
    ProfileScreen,
    RewardScreen
}