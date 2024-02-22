import React from 'react';

const Splitter: React.FC<
	React.PropsWithChildren<{
		col: number;
		subCols: number;
	}>
> = ({ col, subCols, children }) => {
	return (
		<div
			className='absolute inset-0 grid grid-rows-[repeat(840,1fr)]'
			style={{
				gridTemplateColumns: `repeat(${subCols}, auto)`,
				gridColumnStart: col,
				gridColumnEnd: col,
			}}>
			{children}
		</div>
	);
};

export default Splitter;
