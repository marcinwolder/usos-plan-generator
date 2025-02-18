import { useState } from 'react';
import DaysComp from './DaysComp';
import Hours from './Hours';
import Plan from './Plan';
import { FaDev } from 'react-icons/fa6';
import { devModeContext } from './context/devContext';
import clsx from 'clsx';
import AdminPanel from './AdminPanel';
import Ss from './Ss';

const App = () => {
	const [devMode, setDevMode] = useState(false);
	const [planName, setPlanName] = useState('AGH, ISI 2023/24 - S2');

	return (
		<devModeContext.Provider value={devMode}>
			<Ss />
			<div
				className={clsx(
					'hover:text-slate-600 w-min active:text-slate-800 absolute',
					{ 'text-slate-400': !devMode, 'text-slate-700': devMode }
				)}
				onClick={() => {
					setDevMode((val) => !val);
				}}>
				<FaDev className='text-3xl' />
			</div>
			{devMode ? (
				<div className='absolute top-12'>
					<AdminPanel />
				</div>
			) : null}
			<div className='flex items-center justify-center'>
				<div
					id='capture'
					className='border rounded-md grid w-5/6'
					style={{ gridTemplateColumns: '60px 1fr' }}>
					<div className='col-span-2 bg-stone-600 text-white p-2 rounded-t-md'>
						Plan zajęć:{' '}
						{devMode ? (
							<input
								type='text'
								className='text-black pl-1'
								value={planName}
								onChange={(e) => {
									setPlanName(e.target.value);
								}}
							/>
						) : (
							<span className='font-bold'>{planName}</span>
						)}
					</div>
					<div></div>
					<DaysComp />
					<Hours />
					<Plan />
				</div>
			</div>
		</devModeContext.Provider>
	);
};

export default App;
