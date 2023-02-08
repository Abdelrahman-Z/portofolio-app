import {createSlice} from '@reduxjs/toolkit'

import users from '../data.json'

const countrySlice = createSlice({
    name: 'data',
    initialState: users,
    reducers: {
        serachCountry: (state, action) => {
            return users.filter(el => el.name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()))
        },
        serachContinent: (state, action) => {
            if (action.payload === 'Filter by region') {
                return users
            }
            return users.filter(el => el.region === action.payload)
        }
    }
})


export const {serachCountry , serachContinent} = countrySlice.actions

export default countrySlice.reducer