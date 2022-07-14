// @flow
import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import {useSelector} from "react-redux";
import {RootState} from "../../stores/store";
import {COLORS, FONTS, SIZES} from "../../constants/themes";


interface MovieItemProps {
    item?: any
}

const MovieItem: FC<MovieItemProps> = ({item}) => {
    const {
        sectionBody,
        movIcon,
        info,
        titleText,
        producersBox,
        generalText,
    } = useStyles();

    return (

        <View style={sectionBody}>
            <View>
                <Image source={require("../../assets/icons/movie.png")} style={movIcon} resizeMode={"cover"}/>
            </View>
            <View style={info}>
                <Text style={titleText}>{item?.title}</Text>
                <Text style={generalText}>Release date: {item?.release_date}</Text>
                <Text style={generalText}>Episodes available: {item?.episodes}</Text>
                <View style={producersBox}>
                    <Text style={generalText}>Producers:</Text>
                    <View>
                        {item?.producers?.map((item: any, index: number) => (
                            <Text key={index.toString()} style={[generalText]}> {item}</Text>
                        ))}
                    </View>
                </View>
            </View>
        </View>

    )
}


export default MovieItem

export const useStyles = () => {
    const {appTheme} = useSelector((state: RootState) => state.themeReducer);
    return StyleSheet.create({

        sectionBody: {
            paddingHorizontal: SIZES.width * 0.03,
            flexDirection: "row",
            paddingTop: 5
        },
        movIcon: {
            width: SIZES.font1,
            height: SIZES.font1,
            tintColor: appTheme.textColor
        },
        info: {
            width: "90%",
            paddingLeft: SIZES.width * 0.03,
        },
        titleText: {
            ...FONTS.h6
        },
        producersBox: {
            flexDirection: "row",
            width: SIZES.width * 0.7

        },
        generalText: {
            ...FONTS.body8,
            color: appTheme.textColor,

        },

    });
};
