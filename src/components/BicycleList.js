import { useDispatch, useSelector } from 'react-redux';
import { addBicycle, removeBicycle } from '../store';
import { createRandomBicycle } from '../data';

function BicycleList() {
	const dispatch = useDispatch();
	const bicyleList = useSelector((state) => {
		return state.bicycles;
	});
	const handleBicycleAdd = (bicycle) => {
		// add a bicycle
		dispatch(addBicycle(bicycle));
	};
	const handlBicycleRemove = (bicycle) => {
		// remove a bicycle
		dispatch(removeBicycle(bicycle));
	};
	const renderedBicycle = bicyleList.map((bicycle) => {
		return (
			<li key={bicycle}>
				{bicycle}
				<button
					onClick={() => handlBicycleRemove(bicycle)}
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
				<h3 className='subtitle is-3'>Bicycle List</h3>
				<div className='buttons'>
					<button
						onClick={() => handleBicycleAdd(createRandomBicycle())}
						className='button is-link'
					>
						+ 자전거 추가
					</button>
				</div>
			</div>
			<ul>{renderedBicycle}</ul>
		</div>
	);
}

export default BicycleList;
