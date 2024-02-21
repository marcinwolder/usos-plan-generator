import clsx from 'clsx';
import { useContext } from 'react';
import { devModeContext } from './context/devContext';
import adminControlsContext from './context/adminControlsContext';

const Plan: React.FC<React.PropsWithChildren> = ({ children }) => {
	const lectures = [...((children as React.ReactNode[]) || [])];
	const devMode = useContext(devModeContext);
	const { editLectures } = useContext(adminControlsContext);
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
										console.log('Eoo' + ind + '' + ind2);
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
				{...lectures}
			</div>
		</div>
	);
};

export default Plan;
