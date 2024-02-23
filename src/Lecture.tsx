import clsx from 'clsx';
import React, { useContext, useId, useRef, useState } from 'react';
import { devModeContext } from './context/devContext';

import { IoRemoveCircle } from 'react-icons/io5';

type TLectureType = 'W' | 'CWL' | 'CWA' | 'LEKT' | 'WF';

const Lecture: React.FC<{
	name: string;
	timeStart: string;
	timeStop: string;
	group?: number;
	col: number;
	onRemove: (ref: React.RefObject<HTMLDivElement>) => void;
	type: TLectureType;
	evenWeeksOnly?: boolean;
	oddWeeksOnly?: boolean;
}> = ({
	name,
	timeStart,
	timeStop,
	type,
	group = 0,
	col,
	evenWeeksOnly = false,
	oddWeeksOnly = false,
	onRemove,
}) => {
	const [oddWeeks, setOddWeeks] = useState(oddWeeksOnly);
	const [evenWeeks, setEvenWeeks] = useState(evenWeeksOnly);
	const [lectureName, setLectureName] = useState(name);
	const [lectureStartTime, setLectureStartTime] = useState(timeStart);
	const [lectureStopTime, setLectureStopTime] = useState(timeStop);
	const [lectureType, setLectureType] = useState<TLectureType>(type);
	const [lectureGroup, setLectureGroup] = useState(group);
	const [lectureObligatory, setLectureObligatory] = useState(false);

	const ref = useRef<HTMLDivElement>(null);
	const devMode = useContext(devModeContext);

	const id = useId();

	// Disabled to increase readability
	// eslint-disable-next-line prefer-const
	let [hourStart, minuteStart] = lectureStartTime
		.split(':')
		.map((val) => Number(val));
	hourStart -= 7;
	// eslint-disable-next-line prefer-const
	let [hourStop, minuteStop] = lectureStopTime
		.split(':')
		.map((val) => Number(val));
	hourStop -= 7;

	const Controls = devMode ? (
		<div
			className={clsx(
				'text-xs flex justify-end absolute bottom-full -right-px border border-lecture-border border-b-0 px-1 flex-wrap w-fit',
				{
					'bg-white': lectureType !== 'W' || lectureObligatory,
					'bg-gray-100': lectureType === 'W' && !lectureObligatory,
				}
			)}>
			<div
				className='flex items-center gap-1 select-none'
				onClick={() => {
					setEvenWeeks((val) => {
						if (!val) setOddWeeks(false);
						return !val;
					});
				}}>
				<input
					checked={evenWeeks}
					onChange={() => {}}
					id={'Parzyste' + id}
					type='checkbox'
				/>
				<label>Parzyste</label>
			</div>
			<div
				className='ml-2 flex items-center gap-1 select-none'
				onClick={() => {
					setOddWeeks((val) => {
						if (!val) setEvenWeeks(false);
						return !val;
					});
				}}>
				<input
					checked={oddWeeks}
					onChange={() => {}}
					id={'Nieparzyste' + id}
					type='checkbox'
				/>
				<label>Nieparzyste</label>
			</div>
		</div>
	) : null;
	const EvenWeeksOnly = evenWeeks ? (
		<div className='text-red-400 text-[0.6em] bg-white px-1 border-b border border-lecture-border w-max pb-0.5'>
			W tygodnie parzyste
		</div>
	) : null;
	const OddWeeksOnly = oddWeeks ? (
		<div className='text-blue-400 text-[0.6em] bg-white px-1 border-b border border-lecture-border w-max pb-0.5'>
			W tygodnie nieparzyste
		</div>
	) : null;
	const NotObligatory =
		lectureType === 'W' ? (
			devMode ? (
				<div
					className='text-xs flex items-center gap-1 absolute bottom-2 right-8'
					onClick={() => {
						setLectureObligatory((val) => !val);
					}}>
					<input
						checked={lectureObligatory}
						onChange={() => {}}
						id={'Obowiazkowy' + id}
						type='checkbox'
					/>
					<label>Obow.?</label>
				</div>
			) : !lectureObligatory ? (
				<div className='text-slate-500 text-[0.6em] absolute bottom-2 text-right w-full pr-4 italic'>
					*Nieobowiązkowy
				</div>
			) : null
		) : null;
	const Name = devMode ? (
		<input
			type='text'
			id={'Name' + id}
			className='w-full'
			value={lectureName}
			onChange={(e) => {
				setLectureName(e.target.value);
			}}
		/>
	) : (
		lectureName
	);
	const StartTime = devMode ? (
		<input
			className='w-1/5'
			type='text'
			id={'StartTime' + id}
			value={lectureStartTime}
			onChange={(e) => {
				setLectureStartTime(e.target.value);
			}}
		/>
	) : (
		lectureStartTime
	);
	const StopTime = devMode ? (
		<input
			className='w-1/5'
			type='text'
			id={'StopTime' + id}
			value={lectureStopTime}
			onChange={(e) => {
				setLectureStopTime(e.target.value);
			}}
		/>
	) : (
		lectureStopTime
	);
	const LectureGroup = devMode ? (
		<div className='ml-2 inline-block'>
			gr.:
			<input
				className='w-6 text-center'
				type='text'
				id={'Group' + id}
				value={lectureGroup}
				onChange={(e) => {
					setLectureGroup(Number(e.target.value) || 0);
				}}
			/>
		</div>
	) : lectureGroup ? (
		`, gr. ${lectureGroup}`
	) : null;
	const Type = devMode ? (
		<select
			id={'Type' + id}
			value={lectureType}
			onChange={(e) => {
				setLectureType(e.target.value as TLectureType);
			}}>
			<option value='W'>W</option>
			<option value='CWL'>CWL</option>
			<option value='CWA'>CWA</option>
			<option value='WF'>WF</option>
			<option value='LEKT'>LEKT</option>
		</select>
	) : (
		lectureType
	);

	return (
		<div
			key={'' + timeStart + timeStop + evenWeeks}
			ref={ref}
			className={clsx(
				'relative m-0.5 border border-lecture-border p-1 row-start-4 row-end-10 z-10',
				{
					'bg-white': lectureType !== 'W' || lectureObligatory,
					'bg-gray-100': lectureType === 'W' && !lectureObligatory,
					'border-l-2 border-l-red-400': evenWeeks,
					'border-l-2 border-l-blue-400': oddWeeks,
				}
			)}
			style={{
				gridColumnStart: col,
				gridRowStart: hourStart * 60 + minuteStart + 1,
				gridRowEnd: hourStop * 60 + minuteStop + 1,
			}}>
			<div
				onClick={() => {
					onRemove(ref);
				}}
				className='absolute bottom-1.5 right-1.5 text-xl text-red-500 cursor-pointer z-20'
				style={{ display: devMode ? 'block' : 'none' }}>
				<IoRemoveCircle />
			</div>
			<div className='absolute text-[.6em] text-gray-font'>
				{StartTime} - {StopTime} - {Type}
				{LectureGroup}
			</div>
			<div className='p-1 flex justify-center items-center h-full text-xs'>
				{Name}
			</div>
			{Controls}
			{NotObligatory}
			{EvenWeeksOnly}
			{OddWeeksOnly}
		</div>
	);
};

export default Lecture;
