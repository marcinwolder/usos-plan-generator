import clsx from 'clsx';
import { useContext, useState } from 'react';
import { devModeContext } from './context/devContext';
import adminControlsContext from './context/adminControlsContext';
import Splitter from './Splitter';
import Lecture from './Lecture';

const Plan: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [lectures, setLectures] = useState([
		...((children as React.ReactNode[]) || []),
	]);
	const mondayLectures = [] as React.ReactNode[];
	const tuesdayLectures = [] as React.ReactNode[];
	const wednesdayLectures = [] as React.ReactNode[];
	const thursdayLectures = [] as React.ReactNode[];
	const fridayLectures = [] as React.ReactNode[];
	const devMode = useContext(devModeContext);
	const {
		editLectures,
		insertFullCol,
		// insertLeftCol,
		// insertRightCol,
		clearSelection,
		setEditLectures,
	} = useContext(adminControlsContext);
	return (
		<div className='relative grid grid-cols-5 grid-rows-[14]'>
			{Array.from(Array(14 * 5)).map((val, ind) => {
				val;
				const light = (ind + 5) % 20 < 10;
				return (
					<div
						key={ind}
						className={clsx(
							{
								'bg-table-bg-light': light,
								'bg-table-bg-dark': !light,
								'border-r': (ind + 1) % 5,
								'rounded-br-md': ind === 14 * 5 - 1,
							},
							'flex flex-col'
						)}>
						{Array.from(Array(4)).map((val2, ind2) => {
							val2;
							ind2;
							return (
								<div
									key={ind2}
									onClick={() => {
										if (insertFullCol) {
											setLectures((lec) => {
												return [
													...lec,
													<Lecture
														col={(ind % 5) + 1}
														name='Nazwa'
														timeStart={
															Math.floor(ind / 5) +
															7 +
															':' +
															(ind2 * 15 || '00')
														}
														timeStop={
															Math.floor(ind / 5) + 8 + ':' + (ind2 + 2) * 15
														}
														type='W'
													/>,
												];
											});
										}
										clearSelection();
										setEditLectures(true);
										console.log(Math.floor(ind / 5));
										console.log(Math.floor(ind / 5) + 7 + ':' + ind2 * 15);
									}}
									className={clsx('h-1/4', {
										'border-b': ind < 13 * 5 || (ind >= 13 * 5 && ind2 !== 3),
									})}
								/>
							);
						})}
					</div>
				);
			})}
			<div
				className={clsx(
					'absolute inset-0 grid grid-cols-5 grid-rows-[repeat(840,1fr)]',
					{ '-z-10': devMode && !editLectures }
				)}>
				<>
					{...lectures}
					<Splitter col={1} subCols={2}>
						{...mondayLectures}
					</Splitter>
					<Splitter col={2} subCols={2}>
						{...tuesdayLectures}
					</Splitter>
					<Splitter col={3} subCols={2}>
						{...wednesdayLectures}
					</Splitter>
					<Splitter col={4} subCols={2}>
						{...thursdayLectures}
					</Splitter>
					<Splitter col={5} subCols={2}>
						{...fridayLectures}
					</Splitter>
				</>
			</div>
		</div>
	);
};

export default Plan;
