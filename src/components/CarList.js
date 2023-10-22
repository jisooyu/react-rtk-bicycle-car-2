import { useDispatch, useSelector } from 'react-redux';
import { addCar, removeCar } from '../store';
import { createRandomCar } from '../data';

function CarList() {
	const dispatch = useDispatch();
	const carList = useSelector((state) => {
		return state.cars;
	});
	const handleCarAdd = (car) => {
		// add a car
		dispatch(addCar(car));
	};
	const handleCarRemove = (car) => {
		// remove a car
		dispatch(removeCar(car));
	};
	const renderedCars = carList.map((car) => {
		return (
			<li key={car}>
				{car}
				<button
					onClick={() => handleCarRemove(car)}
					className='button is-danger'
				>
					X
				</button>
			</li>
		);
	});

	return (
		<div className='content'>
			<div className='table-header'>
				<h3 className='subtitle is-3'>Car List</h3>
				<div className='buttons'>
					<button
						onClick={() => handleCarAdd(createRandomCar())}
						className='button is-link'
					>
						+ 자동차 추가
					</button>
				</div>
			</div>
			<ul>{renderedCars}</ul>
		</div>
	);
}

export default CarList;
