import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {HandleQueryNoToken} from "../../graphql/requests";

interface getDataProps {
    movies: any,
    vehicles: any,
    planets: any,
    loading: boolean,
    error: any,
}

const initialState = {
    movies: [],
    vehicles: [],
    planets: [],
    loading: false,
    error: null,
};


export const getFilmData: any = createAsyncThunk(
    "getFilmData",
    async (qry: any) => {
        let newArray: any = []
        return await HandleQueryNoToken(qry).then((res: any) => {
            res.data.allFilms.films.forEach((doc: any) => {
                newArray.push({
                    created_at: doc.created,
                    data: [{
                        id: doc.id,
                        title: doc.title,
                        release_date: doc.releaseDate,
                        producers: doc.producers,
                        episodes: doc.episodeID
                    }]
                })
            })
            return newArray
        }).catch((e: any) => {
            console.log(e, "getDataErr")
        })
    },
);
export const getVehicleData: any = createAsyncThunk(
    "getVehicleData",
    async (qry: any) => {
        let vehicleArray: any = []
        return await HandleQueryNoToken(qry).then((res: any) => {
            res.data.allVehicles.vehicles.forEach((doc: any) => {
                vehicleArray.push({
                    created_at: doc.created,
                    data: [{
                        id: doc.id,
                        manufacturers: doc.manufacturers,
                        name: doc.name,
                        vehicleClass: doc.vehicleClass,
                        cargoCapacity: doc.cargoCapacity,
                        model: doc.model
                    }],

                })
            })
            return vehicleArray
        }).catch((e: any) => {
            console.log(e, "getDataErr2")
        })
    },
);


export const getPlanetsData: any = createAsyncThunk(
    "getPlanetsData",
    async (qry: any) => {
        let planetsArray: any = []
        return await HandleQueryNoToken(qry).then((res: any) => {
            res.data.allPlanets.planets.forEach((doc: any) => {
                planetsArray.push({
                    created_at: doc.created,
                    data: [{
                        id: doc.id,
                        name: doc.name,
                        orbitalPeriod: doc.orbitalPeriod,
                        diameter: doc.diameter,
                        terrains: doc.terrains,
                        surfaceWater: doc.surfaceWater
                    }],

                })
            })
            return planetsArray
        }).catch((e: any) => {
            console.log(e, "getDataErr3")
        })
    },
);


export const GetDataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        getDataFN: (state, {payload}: PayloadAction<string>) => {
        },
    },
    extraReducers: builder => {
        builder.addCase(getFilmData.pending, state => {
            state.loading = true;
        });
        builder.addCase(getFilmData.fulfilled, (state, action) => {
            state.movies = action.payload;
            state.loading = false;
        });
        builder.addCase(getFilmData.rejected, state => {
            state.loading = false;
        });
        builder.addCase(getVehicleData.pending, state => {
            state.loading = true;
        });
        builder.addCase(getVehicleData.fulfilled, (state, action) => {
            state.vehicles = action.payload;
            state.loading = false;
        });
        builder.addCase(getVehicleData.rejected, state => {
            state.loading = false;
        });
        builder.addCase(getPlanetsData.pending, state => {
            state.loading = true;
        });
        builder.addCase(getPlanetsData.fulfilled, (state, action) => {
            state.planets = action.payload;
            state.loading = false;
        });
        builder.addCase(getPlanetsData.rejected, state => {
            state.loading = false;
        });
    },
});

export const {getDataFN} = GetDataSlice.actions;
export default GetDataSlice.reducer;
