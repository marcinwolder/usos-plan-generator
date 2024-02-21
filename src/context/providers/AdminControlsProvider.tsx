import React, { useState } from 'react';
import adminControlsContext from '../adminControlsContext';

const AdminControlsProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const [editLectures, setEditLectures] = useState(true);
	const [insertFullCol, setInsertFullCol] = useState(false);
	const [insertLeftCol, setInsertLeftCol] = useState(false);
	const [insertRightCol, setInsertRightCol] = useState(false);

	const clearSelection = () => {
		setEditLectures(false);
		setInsertFullCol(false);
		setInsertLeftCol(false);
		setInsertRightCol(false);
	};

	return (
		<adminControlsContext.Provider
			value={{
				editLectures,
				setEditLectures,
				insertFullCol,
				setInsertFullCol,
				insertLeftCol,
				setInsertLeftCol,
				insertRightCol,
				setInsertRightCol,
				clearSelection,
			}}>
			{children}
		</adminControlsContext.Provider>
	);
};

export default AdminControlsProvider;
