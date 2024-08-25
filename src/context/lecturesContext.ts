import { createContext } from 'react';
import { TLectureType } from '../Lecture';

export type TLectureDisplayType = 'fullColumn' | 'leftSubColumn' | 'rightSubColumn';

export interface ILecture {
	type: TLectureDisplayType;
	day: number;
	id: number;
	el: React.ReactNode;
}

const lecturesContext = createContext<{
	lectures: ILecture[];
	addLecture: (
		type: TLectureDisplayType,
		day: number,
		timeStart: string,
		timeStop: string
	) => number;
	updateLecture: (
		day: number, 
		displayType: TLectureDisplayType,
		currId: number,
		name: string,
		timeStart: string,
		timeStop: string,
		group: number,
		type: TLectureType,
		evenWeeksOnly: boolean,
		oddWeeksOnly: boolean,
		obligatory: boolean
	) => void
}>({ lectures: [], addLecture: () => 0, updateLecture: ()=>{} });

export default lecturesContext;
