import clsx from 'clsx';
import { useContext } from 'react';
import adminControlsContext from './context/adminControlsContext';
import lecturesContext from './context/lecturesContext';

const AdminPanel = () => {
	const {
		editLectures,
		insertFullCol,
		insertLeftCol,
		insertRightCol,
		setEditLectures,
		setInsertFullCol,
		setInsertLeftCol,
		setInsertRightCol,
		clearSelection,
	} = useContext(adminControlsContext);
	const {
		setLectures
	} = useContext(lecturesContext)
	return (
		<div className='pl-1 h-24 flex flex-col justify-center items-start'>
			<div
				onClick={() => {
					clearSelection();
					setInsertFullCol(true);
				}}
				className={clsx('select-none min-w-6 h-6 text-xs flex items-center', {
					'border-l-4 border-black pl-1 font-semibold cursor-default':
						insertFullCol,
					'cursor-pointer': !insertFullCol,
				})}>
				Wstaw w całej kolumnie
			</div>
			<div
				onClick={() => {
					clearSelection();
					setInsertLeftCol(true);
				}}
				className={clsx('select-none min-w-6 h-6 text-xs flex items-center', {
					'border-l-4 border-black pl-1 font-semibold cursor-default':
						insertLeftCol,
					'cursor-pointer': !insertLeftCol,
				})}>
				Wstaw w lewej cześci
			</div>
			<div
				onClick={() => {
					clearSelection();
					setInsertRightCol(true);
				}}
				className={clsx('select-none min-w-6 h-6 text-xs flex items-center', {
					'border-l-4 border-black pl-1 font-semibold cursor-default':
						insertRightCol,
					'cursor-pointer': !insertRightCol,
				})}>
				Wstaw w prawej części
			</div>
			<div
				onClick={() => {
					clearSelection();
					setEditLectures(true);
				}}
				className={clsx('select-none min-w-6 h-6 text-xs flex items-center', {
					'border-l-4 border-black pl-1 font-semibold cursor-default':
						editLectures,
					'cursor-pointer': !editLectures,
				})}>
				Edytuj plan
			</div>
			<div
				onClick={() => {
					setLectures([]);
				}}
				className={clsx('select-none min-w-6 h-6 text-xs flex items-center cursor-pointer')}>
				Wyczyść plan
			</div>
		</div>
	);
};

export default AdminPanel;
