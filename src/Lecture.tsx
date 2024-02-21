import clsx from 'clsx';
import React, { useContext, useRef, useState } from 'react';
import { devModeContext } from './context/devContext';

import { IoRemoveCircle } from 'react-icons/io5';

type TLectureType = 'W' | 'CWL' | 'CWA' | 'LEKT' | 'WF';

const Lecture: React.FC<{
	name: string;
	timeStart: string;
	timeStop: string;
	group?: number;
	col: number;
	type: TLectureType;
	evenWeeksOnly?: boolean;
	oddWeeksOnly?: boolean;
}> = ({
	name,
	timeStart,
	timeStop,
	type,
	group,
	col,
	evenWeeksOnly = false,
	oddWeeksOnly = false,
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
		<div className='text-xs flex justify-center gap-2 absolute -top-5 right-0'>
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
					name='Parzyste'
					type='checkbox'
				/>
				<label htmlFor='Parzyste'>Parzyste</label>
			</div>
			<div
				className='flex items-center gap-1 select-none'
				onClick={() => {
					setOddWeeks((val) => {
						if (!val) setEvenWeeks(false);
						return !val;
					});
				}}>
				<input
					checked={oddWeeks}
					onChange={() => {}}
					name='Nieparzyste'
					type='checkbox'
				/>
				<label htmlFor='Nieparzyste'>Nieparzyste</label>
			</div>
		</div>
	) : null;
	const EvenWeeksOnly = evenWeeks ? (
		<div className='text-red-400 text-xs bg-red-100 px-1 py-0.5 border-b border border-red-300 w-max'>
			W tygodnie parzyste
		</div>
	) : null;
	const OddWeeksOnly = oddWeeks ? (
		<div className='text-blue-400 text-xs bg-blue-100 px-1 py-0.5 border-b border border-blue-300 w-max'>
			W tygodnie nieparzyste
		</div>
	) : null;
	const NotObligatory =
		lectureType === 'W' ? (
			devMode ? (
				<div className='text-xs flex items-center gap-1 absolute bottom-2 right-2'>
					<input
						checked={lectureObligatory}
						onChange={() => {
							setLectureObligatory((val) => !val);
						}}
						name='Obowiazkowy'
						type='checkbox'
					/>
					<label htmlFor='Obowiazkowy'>Obowiązkowy?</label>
				</div>
			) : !lectureObligatory ? (
				<div className='text-slate-500 text-xs absolute bottom-2 text-right w-full pr-4'>
					*Nieobowiązkowy
				</div>
			) : null
		) : null;
	const Name = devMode ? (
		<input
			type='text'
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
			value={lectureStopTime}
			onChange={(e) => {
				setLectureStopTime(e.target.value);
			}}
		/>
	) : (
		lectureStopTime
	);
	const LectureGroup = devMode ? (
		<input
			className='w-6 text-center'
			type='text'
			placeholder='gr.:'
			value={lectureGroup}
			onChange={(e) => {
				setLectureGroup(Number(e.target.value) || undefined);
			}}
		/>
	) : lectureGroup ? (
		`, gr. ${lectureGroup}`
	) : null;
	const Type = devMode ? (
		<select
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
			ref={ref}
			className={clsx(
				'relative m-0.5 border border-lecture-border p-1 row-start-4 row-end-10 z-10',
				{
					'bg-white': lectureType !== 'W' || lectureObligatory,
					'bg-slate-200': lectureType === 'W' && !lectureObligatory,
				}
			)}
			style={{
				gridColumnStart: col,
				gridRowStart: hourStart * 4 + minuteStart / 15 + 1,
				gridRowEnd: hourStop * 4 + minuteStop / 15 + 1,
			}}>
			<div
				onClick={() => {
					console.log(ref.current);
					ref.current?.remove();
				}}
				className='absolute bottom-1 left-1 text-xl text-red-500 cursor-pointer z-20'
				style={{ display: devMode ? 'block' : 'none' }}>
				<IoRemoveCircle />
			</div>
			<div className='absolute text-[.6em] text-gray-font'>
				{StartTime} - {StopTime} - {Type}
				{LectureGroup}
			</div>
			<div className='p-1 flex justify-center items-center h-full text-xs font-semibold'>
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
