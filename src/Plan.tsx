import clsx from 'clsx';

const Plan: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<div className='relative grid grid-cols-5 grid-rows-[14]'>
			{Array.from(Array(14 * 5)).map((val, ind) => {
				val;
				const light = (ind + 5) % 20 < 10;
				return (
					<div
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
									className={clsx('h-1/4', {
										'border-b': ind < 13 * 5 || (ind >= 13 * 5 && ind2 !== 3),
									})}
								/>
							);
						})}
					</div>
				);
			})}
			<div className='absolute inset-0 grid grid-cols-5 grid-rows-[repeat(56,1fr)]'>
				{children}
			</div>
		</div>
	);
};

export default Plan;
