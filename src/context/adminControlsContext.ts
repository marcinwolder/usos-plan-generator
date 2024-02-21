import { createContext } from 'react';

const adminControlsContext = createContext<{
	insertFullCol: boolean;
	setInsertFullCol: React.Dispatch<React.SetStateAction<boolean>>;
	insertLeftCol: boolean;
	setInsertLeftCol: React.Dispatch<React.SetStateAction<boolean>>;
	insertRightCol: boolean;
	setInsertRightCol: React.Dispatch<React.SetStateAction<boolean>>;
	editLectures: boolean;
	setEditLectures: React.Dispatch<React.SetStateAction<boolean>>;
	clearSelection: () => void;
}>({
	insertFullCol: true,
	setInsertFullCol: () => {},
	insertLeftCol: false,
	setInsertLeftCol: () => {},
	insertRightCol: false,
	setInsertRightCol: () => {},
	editLectures: false,
	setEditLectures: () => {},
	clearSelection: () => {},
});

export default adminControlsContext;
