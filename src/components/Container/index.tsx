import React, {FC, memo} from 'react';
import {StatusBar, StatusBarStyle, StyleSheet, View} from 'react-native';
import {RootState} from "../../stores/store";
import {useSelector} from "react-redux";

interface ContainerProps {
    children: object;
    barColor?: StatusBarStyle;
    style?: object;
}

const Container: FC<ContainerProps> = ({children, style}) => {
    const {appTheme} = useSelector((state: RootState) => state.themeReducer);
    const {container} = useStyles();

    return (
        <View style={[container, {...style}]}>
            <>
                <StatusBar
                    translucent={true}
                    barStyle={appTheme.name === 'dark' ? 'light-content' : 'dark-content'}
                    backgroundColor={'transparent'}
                />
                {children}
            </>
        </View>
    );
};

const useStyles = () => {
    const {appTheme} = useSelector((state: RootState) => state.themeReducer);

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: appTheme.backgroundColor,
        },
    });
};

export default memo(Container);
