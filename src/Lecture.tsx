import clsx from 'clsx';
import React from 'react';

type TLectureType = 'W' | 'CWL' | 'CWA' | 'LEKT' | 'WF';

const Lecture: React.FC<{
	name: string;
	timeStart: string;
	timeStop: string;
	group?: number;
	col: number;
	lectureType: TLectureType;
	evenWeeksOnly?: boolean;
	oddWeeksOnly?: boolean;
}> = ({
	name,
	timeStart,
	timeStop,
	lectureType,
	group,
	col,
	evenWeeksOnly = false,
	oddWeeksOnly = false,
}) => {
	// Disabled to increase readability
	// eslint-disable-next-line prefer-const
	let [hourStart, minuteStart] = timeStart.split(':').map((val) => Number(val));
	hourStart -= 7;
	// eslint-disable-next-line prefer-const
	let [hourStop, minuteStop] = timeStop.split(':').map((val) => Number(val));
	hourStop -= 7;

	const EvenWeeksOnly = evenWeeksOnly ? (
		<div className='text-red-400 text-xs bg-red-100 px-1 py-0.5 border-b border border-red-300 w-max'>
			W tygodnie parzyste
		</div>
	) : (
		''
	);
	const OddWeeksOnly = oddWeeksOnly ? (
		<div className='text-blue-400 text-xs bg-blue-100 px-1 py-0.5 border-b border border-blue-300 w-max'>
			W tygodnie nieparzyste
		</div>
	) : (
		''
	);
	const NotObligatory =
		lectureType === 'W' ? (
			<div className='text-slate-500 text-xs absolute bottom-2 text-right w-full pr-4'>
				*Nieobowiązkowy
			</div>
		) : (
			''
		);

	return (
		<div
			className={clsx(
				'relative m-0.5 border border-lecture-border p-1 row-start-4 row-end-10',
				{
					'bg-white': lectureType !== 'W',
					'bg-slate-200': lectureType === 'W',
				}
			)}
			style={{
				gridColumnStart: col,
				gridRowStart: hourStart * 4 + minuteStart / 15 + 1,
				gridRowEnd: hourStop * 4 + minuteStop / 15 + 1,
			}}>
			<div className='absolute text-[.6em] text-gray-font'>
				{timeStart} - {timeStop} - {lectureType}
				{group ? `, gr. ${group}` : ''}
			</div>
			<div className='p-1 flex justify-center items-center h-full text-xs font-semibold'>
				{name}
			</div>
			{NotObligatory}
			{EvenWeeksOnly}
			{OddWeeksOnly}
		</div>
	);
};

export default Lecture;
