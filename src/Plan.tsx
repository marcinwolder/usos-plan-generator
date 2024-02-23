import clsx from 'clsx';
import { useContext, useState } from 'react';
import { devModeContext } from './context/devContext';
import adminControlsContext from './context/adminControlsContext';
import Splitter from './Splitter';
import lecturesContext from './context/lecturesContext';

const Plan: React.FC<React.PropsWithChildren> = ({ children }) => {
	const { addLecture, lectures } = useContext(lecturesContext);
	const [lecturesOLD] = useState([...((children as React.ReactNode[]) || [])]);
	const devMode = useContext(devModeContext);
	const {
		editLectures,
		insertFullCol,
		insertLeftCol,
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
										const typeName = insertFullCol
											? 'fullColumn'
											: insertLeftCol
											? 'leftSubColumn'
											: 'rightSubColumn';

										addLecture(
											typeName,
											(ind % 5) + 1,
											Math.floor(ind / 5) + 7 + ':' + (ind2 * 15 || '00'),
											Math.floor(ind / 5) + 8 + ':' + (ind2 + 2) * 15
										);

										clearSelection();
										setEditLectures(true);
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
					{...lecturesOLD}
					{...lectures
						.filter((lec) => lec.type === 'fullColumn')
						.map((lec) => lec.el)}
					<Splitter col={1} subCols={2}>
						{...lectures
							.filter((lec) => lec.type !== 'fullColumn' && lec.day === 1)
							.map((lec) => lec.el)}
					</Splitter>
					<Splitter col={2} subCols={2}>
						{...lectures
							.filter((lec) => lec.type !== 'fullColumn' && lec.day === 2)
							.map((lec) => lec.el)}
					</Splitter>
					<Splitter col={3} subCols={2}>
						{...lectures
							.filter((lec) => lec.type !== 'fullColumn' && lec.day === 3)
							.map((lec) => lec.el)}
					</Splitter>
					<Splitter col={4} subCols={2}>
						{...lectures
							.filter((lec) => lec.type !== 'fullColumn' && lec.day === 4)
							.map((lec) => lec.el)}
					</Splitter>
					<Splitter col={5} subCols={2}>
						{...lectures
							.filter((lec) => lec.type !== 'fullColumn' && lec.day === 5)
							.map((lec) => lec.el)}
					</Splitter>
				</>
			</div>
		</div>
	);
};

export default Plan;
