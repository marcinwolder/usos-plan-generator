import React, { useRef, useState } from 'react';
import lecturesContext, { ILecture, TLectureType } from '../lecturesContext';
import Lecture from '../../Lecture';

const LecturesProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const id = useRef(0);
	const [lectures, setLectures] = useState<ILecture[]>([]);
	const addLecture = (
		type: TLectureType,
		day: number,
		timeStart: string,
		timeStop: string
	) => {
		const currId = id.current;
		const newLectures: ILecture[] = [
			...lectures,
			{
				day,
				el: (
					<Lecture
						key={currId}
						onRemove={() => {
							removeLecture(currId);
						}}
						col={
							type === 'leftSubColumn' ? 1 : type === 'rightSubColumn' ? 2 : day
						}
						name='Nazwa'
						timeStart={timeStart}
						timeStop={timeStop}
						type='W'
					/>
				),
				id: currId,
				type,
			} as ILecture,
		];
		id.current++;
		setLectures(newLectures);
		return currId;
	};
	const removeLecture = (id: number) => {
		setLectures((lectures) => {
			return lectures.filter((lec) => lec.id !== id);
		});
	};
	return (
		<lecturesContext.Provider value={{ lectures, addLecture }}>
			{children}
		</lecturesContext.Provider>
	);
};

export default LecturesProvider;
