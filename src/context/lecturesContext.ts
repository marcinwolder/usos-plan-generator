import { createContext } from 'react';

export type TLectureType = 'fullColumn' | 'leftSubColumn' | 'rightSubColumn';

export interface ILecture {
	type: TLectureType;
	day: number;
	id: number;
	el: React.ReactNode;
}

const lecturesContext = createContext<{
	lectures: ILecture[];
	addLecture: (
		type: TLectureType,
		day: number,
		timeStart: string,
		timeStop: string
	) => number;
}>({ lectures: [], addLecture: () => 0 });

export default lecturesContext;
