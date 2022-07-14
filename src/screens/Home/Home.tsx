import {ActivityIndicator, FlatList, Image, SectionList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import Container from '../../components/Container';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../stores/store';
import {getFilmData, getPlanetsData, getVehicleData} from "../../stores/getDataSlice";
import {filmQuery, planetQuery, vehicleQuery} from "../../graphql/queries";
import {COLORS, FONTS, SIZES} from "../../constants/themes";
import moment from "moment";
import {Dispatch} from "redux";
import CustomTextInput from "../../components/CustomTextInput";
import MovieItem from "../../components/MovieItem";
import VehicleItem from "../../components/VehicleItem";
import PlanetItem from "../../components/PlanetItem";


const Home: FC = () => {
    const dispatch = useDispatch<Dispatch>()
    const {movies, vehicles, planets, loading, error} = useSelector((state: RootState) => state.getDataReducer)
    const {
        root,
        sectionHeader,
        categoryBox,
        categoryText,
        activeCategory
    } = useStyles();
    const [defaultCategory, setDefaultCategory] = useState<string>("Movies")

    const [searchValue, setSearchValue] = useState<string>('');
    const [filteredMovieSearch, setFilteredMovieSearch] = useState<never[]>([]);
    const [masterMovieData, setMasterMovieData] = useState<never[]>([]);

    const [filteredVehicleSearch, setFilteredVehicleSearch] = useState<never[]>([]);
    const [masterVehicleData, setMasterVehicleData] = useState<never[]>([]);

    const [filteredPlanetSearch, setFilteredPlanetSearch] = useState<never[]>([]);
    const [masterPlanetData, setMasterPlanetData] = useState<never[]>([]);


    useEffect(() => {
        if (defaultCategory === "Planets") {
            dispatch(getPlanetsData(planetQuery))
            setFilteredPlanetSearch(planets)
            setMasterPlanetData(planets)
        } else if (defaultCategory === "Vehicles") {
            dispatch(getVehicleData(vehicleQuery))
            setFilteredVehicleSearch(vehicles)
            setMasterVehicleData(vehicles)
        } else {
            dispatch(getFilmData(filmQuery))
            setFilteredMovieSearch(movies)
            setMasterMovieData(movies)
        }
    }, [defaultCategory])


    // SEARCH FUNCTIONS
    const SearchMovieFilter = (text: string) => {
        if (text) {
            const newData = masterMovieData.filter((item: any) => {
                const itemData = item.data[0].title
                    ? item.data[0].title.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredMovieSearch(newData);
            setSearchValue(text);
        } else {
            setFilteredMovieSearch(masterMovieData);
            setSearchValue(text);
        }
    };

    const SearchVehiclesFilter = (text: string) => {
        if (text) {
            const newData = masterVehicleData.filter((item: any) => {
                const itemData = item.data[0].name
                    ? item.data[0].name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredVehicleSearch(newData);
            setSearchValue(text);
        } else {
            setFilteredVehicleSearch(masterVehicleData);
            setSearchValue(text);
        }
    };

    const SearchPlanetsFilter = (text: string) => {
        if (text) {
            const newData = masterPlanetData.filter((item: any) => {
                const itemData = item.data[0].name
                    ? item.data[0].name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredPlanetSearch(newData);
            setSearchValue(text);
        } else {
            setFilteredPlanetSearch(masterPlanetData);
            setSearchValue(text);
        }
    };

    return (
        <Container style={root}>
            <CustomTextInput
                containerStyles={{
                    alignSelf: "center"
                }}
                initialValue={searchValue}
                placeholder={'What are you searching for..'}
                onChangeText={text => {
                    if (defaultCategory === "Movies") {
                        SearchMovieFilter(text);
                    } else if (defaultCategory === "Vehicles") {
                        SearchVehiclesFilter(text)
                    } else {
                        SearchPlanetsFilter(text)
                    }
                }}/>
            <View style={{justifyContent: "center"}}>
                <FlatList
                    horizontal
                    data={["Movies", "Vehicles", "Planets"]}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity
                                onPress={() => setDefaultCategory(item)}
                                activeOpacity={0.8}
                                style={[
                                    item === defaultCategory && activeCategory,
                                    categoryBox,
                                ]}>
                                <Text style={categoryText}>{item.toUpperCase()}</Text>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
            {loading && <ActivityIndicator color={COLORS.night} size={"small"} style={{alignSelf: "center"}}/>}


            {defaultCategory === "Movies" ? <SectionList
                    sections={filteredMovieSearch}
                    ListEmptyComponent={
                        <View>
                            <Image source={require("../../assets/icons/empty.png")} resizeMode={"cover"}
                                   style={{
                                       width: SIZES.width * 0.5,
                                       height: SIZES.width * 0.5,
                                       alignSelf: "center"
                                   }}/>

                            <Text style={{alignSelf: "center", ...FONTS.h4}}>No data available</Text>
                        </View>
                    }
                    renderSectionHeader={({section: {created_at}}) => (
                        <View style={sectionHeader}>
                            <Text>{moment(created_at).format("YYYY-MM-DD")}</Text>
                        </View>
                    )}
                    renderItem={({item, index, section}): any => <MovieItem item={item}/>}
                />
                : defaultCategory === "Vehicles" ?
                    <SectionList
                        sections={filteredVehicleSearch}
                        ListEmptyComponent={
                            <View>
                                <Image source={require("../../assets/icons/empty.png")} resizeMode={"cover"}
                                       style={{
                                           width: SIZES.width * 0.5,
                                           height: SIZES.width * 0.5,
                                           alignSelf: "center"
                                       }}/>

                                <Text style={{alignSelf: "center", ...FONTS.h4}}>No data available</Text>
                            </View>
                        }
                        renderSectionHeader={({section: {created_at}}) => (
                            <View style={sectionHeader}>
                                <Text>{moment(created_at).format("YYYY-MM-DD")}</Text>
                            </View>
                        )}
                        renderItem={({item, index, section}): any => <VehicleItem item={item}/>}
                    />
                    :
                    <SectionList
                        sections={filteredPlanetSearch}
                        ListEmptyComponent={
                            <View>
                                <Image source={require("../../assets/icons/empty.png")} resizeMode={"cover"}
                                       style={{
                                           width: SIZES.width * 0.5,
                                           height: SIZES.width * 0.5,
                                           alignSelf: "center"
                                       }}/>

                                <Text style={{alignSelf: "center", ...FONTS.h4}}>No data available</Text>
                            </View>
                        }
                        renderSectionHeader={({section: {created_at}}) => (
                            <View style={sectionHeader}>
                                <Text>{moment(created_at).format("YYYY-MM-DD")}</Text>
                            </View>
                        )}
                        renderItem={({item, index, section}): any => <PlanetItem item={item}/>}
                    />
            }
        </Container>
    );
};

export default Home;

const useStyles = () => {
    const {appTheme} = useSelector((state: RootState) => state.themeReducer);
    return StyleSheet.create({
        root: {},
        sectionHeader: {
            backgroundColor: COLORS.grey,
            height: SIZES.font1,
            justifyContent: "center",
            marginTop: SIZES.font10,
            paddingHorizontal: SIZES.width * 0.03,
        },

        categoryBox: {
            alignItems: "center",
            justifyContent: "center",
        },
        categoryText: {
            ...FONTS.h9,
            color: appTheme.textColor,
            marginHorizontal: SIZES.font10,
        },
        activeCategory: {
            backgroundColor: COLORS.grey,
            paddingHorizontal: SIZES.font10,
            alignItems: "center",
            justifyContent: "center",
            height: SIZES.height * 0.04,
            borderRadius: SIZES.font10,
            marginHorizontal: SIZES.font10 * 0.5,
        },
    });
};
