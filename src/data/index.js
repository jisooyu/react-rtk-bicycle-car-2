const carData = [
	'Palisade',
	'Grandure',
	'Sorento',
	'Santafe',
	'Carnival',
	'Staria',
	'K-9',
	'K-7',
	'EV6',
	'Ioniq 5',
	'Ioniq 6',
];

const bicycleData = [
	'Lectric eBikes',
	'Kona Bikes',
	'Ride1Up',
	'Marin Bikes',
	'Rad Power Bikes',
	'Giant Bicycles',
	'Scott',
	'Santa Cruz',
	'Cannondale',
	' Specialized',
	'Trek',
];

export function createRandomCar() {
	if (carData.length === 0) {
		alert('No more cars');
		return 'no more cars';
	}
	const randomCar = carData.pop();
	return randomCar;
}

export function createRandomBicycle() {
	if (bicycleData.length === 0) {
		alert('No more bicycles');
		return 'no more bicycles';
	}
	const randomBicycle = bicycleData.pop();
	return randomBicycle;
}
