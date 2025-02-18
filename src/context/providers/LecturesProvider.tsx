import React, { useRef, useState } from 'react';
import lecturesContext, { ILecture, TLectureDisplayType } from '../lecturesContext';
import Lecture, { TLectureType } from '../../Lecture';

const LecturesProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const id = useRef(0);
	const [lectures, setLectures] = useState<ILecture[]>([]);
	const addLecture = (
		displayType: TLectureDisplayType,
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
						onUpdate={(name: string,
							timeStart: string,
							timeStop: string,
							group: number,
							type: TLectureType,
							evenWeeksOnly: boolean,
							oddWeeksOnly: boolean,
							obligatory: boolean) => {
							updateLecture(day, 
								displayType,
								currId,
								name,
								timeStart,
								timeStop,
								group,
								type,
								evenWeeksOnly,
								oddWeeksOnly,
								obligatory);
						} }
						col={
							displayType === 'leftSubColumn' ? 1 : displayType === 'rightSubColumn' ? 2 : day
						}
						name='Nazwa'
						timeStart={timeStart}
						timeStop={timeStop}
						type='W'
					/>
				),
				id: currId,
				type: displayType,
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
	const updateLecture = (
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
		) => {
			setLectures((lectures) => {
				let newLectures = lectures.filter((lec) => lec.id !== currId);
				newLectures = [
					...newLectures,
					{
						day,
						el: (
							<Lecture
								key={currId}
								onRemove={() => {
									removeLecture(currId);
								} }
								onUpdate={(name: string,
									timeStart: string,
									timeStop: string,
									group: number,
									type: TLectureType,
									evenWeeksOnly: boolean,
									oddWeeksOnly: boolean,
									obligatory: boolean) => {
									updateLecture(day, 
										displayType,
										currId,
										name,
										timeStart,
										timeStop,
										group,
										type,
										evenWeeksOnly,
										oddWeeksOnly,
										obligatory);
								} }
								col={displayType === 'leftSubColumn' ? 1 : displayType === 'rightSubColumn' ? 2 : day}
								name={name}
								timeStart={timeStart}
								timeStop={timeStop}
								type={type}
								group={group}
								evenWeeksOnly={evenWeeksOnly}
								oddWeeksOnly={oddWeeksOnly}
								obligatory={obligatory} />
						),
						id: currId,
						type: displayType,
					} as ILecture,
				];
				return newLectures;
			});
	};
	return (
		<lecturesContext.Provider value={{ lectures, addLecture, updateLecture, setLectures }}>
			{children}
		</lecturesContext.Provider>
	);
};

export default LecturesProvider;
