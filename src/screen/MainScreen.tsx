import React from "react";
import { Platform, View, ToastAndroid, Alert, Button, Text, Switch } from "react-native";
import useMainScreenViewModel from "../hooks/useMainScreenViewModel"

export default MainScreen = () => {

    let toastMessage = 'Value of count is changed to'

    const toastSideEffect = (clickCount: number) => {
        toastMessage = toastMessage + ` ${clickCount}`
        if (Platform.OS === "ios") {
            Alert.alert(toastMessage)
        }

        if (Platform.OS === "android") {
            ToastAndroid.show(toastMessage, ToastAndroid.SHORT);
        }
    }

    const { buttonStatus, onButtonClick, flipSwitch } = useMainScreenViewModel(toastSideEffect);

    return <View style={{
        flexDirection: "column",
        alignItems: 'center',
        padding: 20
    }}>
        <Button title={"Button Click Count : " + String(buttonStatus.buttonClickCount)} onPress={() => { onButtonClick() }} />
        <View style={{ paddingTop: 20 }} />
        <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
            <Switch value={buttonStatus.clickStatus.flippingFlag} onValueChange={() => { flipSwitch() }} />
            <Text>Is Switch On? {String(buttonStatus.clickStatus.flippingFlag)}</Text>
        </View>
    </View>
}
