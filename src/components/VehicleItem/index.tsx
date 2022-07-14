// @flow
import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import {useSelector} from "react-redux";
import {RootState} from "../../stores/store";
import {COLORS, FONTS, SIZES} from "../../constants/themes";
import {useStyles} from "../MovieItem";


interface VehicleItemProps {
    item?: any
}

const VehicleItem: FC<VehicleItemProps> = ({item}) => {
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
                <Image source={require("../../assets/icons/vehicleIcon.png")} style={movIcon} resizeMode={"cover"}/>
            </View>
            <View style={info}>
                <Text style={titleText}>{item?.name}</Text>
                <Text style={generalText}>Model: {item?.model}</Text>
                <Text style={generalText}>Cargo capacity: {item?.cargoCapacity}</Text>
                <View style={producersBox}>
                    <Text style={generalText}>Manufacturers: </Text>
                    <View>
                        {item?.manufacturers.map((item: any, index: number) => (
                            <Text numberOfLines={2} adjustsFontSizeToFit key={index.toString()}
                                  style={[generalText, {width: SIZES.width * 0.55}]}>{item}</Text>
                        ))}
                    </View>
                </View>
            </View>
        </View>

    )
}


export default VehicleItem

