// reducer에 해당하는 것을 만듬
import { configureStore, createSlice } from '@reduxjs/toolkit';

const carsSlice = createSlice({
	name: 'car',
	initialState: [],
	reducers: {
		addCar(state, action) {
			// add car
			state.push(action.payload);
		},
		removeCar(state, action) {
			// remove car
			const index = state.indexOf(action.payload);
			state.splice(index, 1);
		},
	},
});

const bicyclesSlice = createSlice({
	name: 'bicycle',
	initialState: [],
	reducers: {
		addBicycle(state, action) {
			// add bicycle
			state.push(action.payload);
		},
		removeBicycle(state, action) {
			// remove bicycle
			const index = state.indexOf(action.payload);
			state.splice(index, 1);
		},
	},
});

const store = configureStore({
	reducer: {
		cars: carsSlice.reducer,
		bicycles: bicyclesSlice.reducer,
	},
});

export { store };
export const { addCar, removeCar } = carsSlice.actions;
export const { addBicycle, removeBicycle } = bicyclesSlice.actions;
