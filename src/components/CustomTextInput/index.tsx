import {
    KeyboardAvoidingView,
    NativeSyntheticEvent,
    StyleSheet,
    TextInput,
    TextInputFocusEventData,
    View,
} from 'react-native';
import React, {FC, memo} from 'react';
import {COLORS, SIZES} from '../../constants/themes';
import {useSelector} from 'react-redux';
import {RootState} from '../../stores/store';

interface CustomTextInputProps {
    initialValue?: string | undefined;
    placeholder: string;
    placeholderTextColor?: string;
    containerStyles?: any;
    props?: any;
    onFocus?:
        | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
        | undefined;
    onBlur?:
        | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
        | undefined;
    onChangeText: (text: string) => void;
}

const CustomTextInput: FC<CustomTextInputProps> = ({
                                                       initialValue,
                                                       onChangeText,
                                                       placeholder,
                                                       placeholderTextColor,
                                                       props,
                                                       onBlur,
                                                       onFocus,
                                                       containerStyles,
                                                   }) => {
    const {appTheme} = useSelector((state: RootState) => state.themeReducer);

    const {root, input} = useInputStyles();
    return (
        <KeyboardAvoidingView>
            <View style={root}>

                <TextInput
                    {...props}
                    value={initialValue}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    style={[input, {...containerStyles}]}
                    onBlur={onBlur}
                    onFocus={onFocus}
                />
            </View>
        </KeyboardAvoidingView>
    );
};

const useInputStyles = () => {
    const {appTheme} = useSelector((state: RootState) => state.themeReducer);

    return StyleSheet.create({
        root: {
            //   backgroundColor: 'red',
            marginBottom: SIZES.font10 * 1.3,
        },
        input: {
            width: SIZES.width * 0.9,
            backgroundColor: COLORS.grey,
            color: COLORS.night,
            zIndex: 10,
            height: SIZES.height * 0.05,
            borderRadius: SIZES.font8,
            paddingLeft: SIZES.width * 0.05,
        },

    });
};

export default memo(CustomTextInput);
