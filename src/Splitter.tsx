import React from 'react';

const Splitter: React.FC<
	React.PropsWithChildren<{
		col: number;
		cols: number;
	}>
> = ({ col, cols, children }) => {
	return (
		<div
			className='absolute inset-0 grid grid-rows-[repeat(56,1fr)]'
			style={{
				gridTemplateColumns: `repeat(${cols}, 1fr)`,
				gridColumnStart: col,
				gridColumnEnd: col,
			}}>
			{children}
		</div>
	);
};

export default Splitter;
