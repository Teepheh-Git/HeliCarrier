// @flow
import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import {useSelector} from "react-redux";
import {RootState} from "../../stores/store";
import {COLORS, FONTS, SIZES} from "../../constants/themes";
import {useStyles} from "../MovieItem";


interface PlanetItemProps {
    item?: any
}

const PlanetItem: FC<PlanetItemProps> = ({item}) => {
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
                <Image source={require("../../assets/icons/worldwide.png")} style={movIcon} resizeMode={"cover"}/>
            </View>
            <View style={info}>
                <Text style={titleText}>{item?.name}</Text>
                <Text style={generalText}>Orbital period: {item?.orbitalPeriod} light years</Text>
                <Text style={generalText}>Diameter: {item?.diameter}</Text>

                <View style={producersBox}>
                    <Text style={generalText}>Terrains: </Text>
                    <View>
                        {item?.terrains.map((item: any, index: number) => (
                            <Text numberOfLines={2} adjustsFontSizeToFit key={index.toString()}
                                  style={[generalText, {width: SIZES.width * 0.55}]}>{item}</Text>
                        ))}
                    </View>
                </View>
            </View>
        </View>

    )
}


export default PlanetItem

