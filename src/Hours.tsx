import clsx from 'clsx';

const Hours = () => {
	return (
		<div className='flex flex-col text-xs text-gray-font border-r border-white'>
			{Array.from(Array(14)).map((val, ind) => {
				val;
				const light = (ind + 1) % 4 < 2;
				return (
					<div
						className={clsx(
							{
								'bg-hours-light': light,
								'bg-hours-dark': !light,
								'border-b': ind < 13,
								'rounded-bl-md': ind === 13,
							},
							'border-white'
						)}>
						<div className='text-right p-1 h-16'>{ind + 7 + ':00'}</div>
					</div>
				);
			})}
		</div>
	);
};

export default Hours;
