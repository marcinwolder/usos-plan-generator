import { useState } from 'react';
import DaysComp from './DaysComp';
import Hours from './Hours';
import Lecture from './Lecture';
import Plan from './Plan';
import Splitter from './Splitter';
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
					<Plan>
						<Lecture
							onUpdate={()=>{}}
							onRemove={(ref) => ref.current?.remove()}
							col={1}
							group={1}
							timeStart='11:30'
							timeStop=' 13:00'
							type='W'
							name='Teoria grafów - Adam Sędziwy (H24 bud. HB1B2)'
						/>
						<Lecture
							onUpdate={()=>{}}
							onRemove={(ref) => ref.current?.remove()}
							col={1}
							group={1}
							timeStart='16:45'
							timeStop=' 18:15'
							type='W'
							name='Matematyka dyskretna - Andrzej Bielecki (224 bud. C2)'
						/>
						<Lecture
							onUpdate={()=>{}}
							onRemove={(ref) => ref.current?.remove()}
							col={2}
							group={1}
							timeStart='7:45'
							timeStop=' 9:15'
							type='W'
							name='Rachunek prawdopodobieństwa i statystyka - Marek Adrian (429 bud.
							C2)'
						/>
						<Lecture
							onUpdate={()=>{}}
							onRemove={(ref) => ref.current?.remove()}
							col={2}
							group={1}
							timeStart='9:45'
							timeStop=' 11:15'
							type='W'
							name='Fizyka 1 - Magdalena Szczerbowska-Boruchowska (B bud. D10)'
						/>
						<Lecture
							onUpdate={()=>{}}
							onRemove={(ref) => ref.current?.remove()}
							col={2}
							group={8}
							timeStart='11:45'
							timeStop=' 13:15'
							type='CWL'
							name='Rachunek prawdopodobieństwa i statystyka - Marek Adrian (316 bud.
							C2)'
						/>
						<Lecture
							onUpdate={()=>{}}
							onRemove={(ref) => ref.current?.remove()}
							col={2}
							group={1}
							timeStart='18:30'
							timeStop=' 20:00'
							type='W'
							name='Podstawy grafiki komputerowej - Jędrzej Byrski (on-line bud. B1)'
						/>
						<Lecture
							onUpdate={()=>{}}
							onRemove={(ref) => ref.current?.remove()}
							col={3}
							group={8}
							timeStart='8:00'
							timeStop=' 9:30'
							type='CWL'
							name='Badania operacyjne - Mateusz Ślażyński (316 bud. C2)'
							evenWeeksOnly
						/>
						<Splitter subCols={2} col={3}>
							<Lecture
								onUpdate={()=>{}}
								onRemove={(ref) => ref.current?.remove()}
								col={1}
								group={1}
								timeStart='13:15'
								timeStop=' 14:45'
								type='W'
								name='Badania operacyjne - Mateusz Ślażyński (224 bud. C2)'
								oddWeeksOnly
							/>
							<Lecture
								onUpdate={()=>{}}
								onRemove={(ref) => ref.current?.remove()}
								col={2}
								group={1}
								timeStart='13:15'
								timeStop=' 15:30'
								type='W'
								name='Wprowadzanie do systemów inteligentnych - Weronika Adrian (224 bud. C2)'
								evenWeeksOnly
							/>
						</Splitter>
						<Lecture
							onUpdate={()=>{}}
							onRemove={(ref) => ref.current?.remove()}
							col={3}
							group={1}
							timeStart='19:00'
							timeStop=' 20:30'
							type='W'
							name='Podstawy programowania 2 - Piotr Szwed (on-line bud. B1)'
						/>
						<Lecture
							onUpdate={()=>{}}
							onRemove={(ref) => ref.current?.remove()}
							col={4}
							group={4}
							timeStart='8:00'
							timeStop=' 9:30'
							type='CWA'
							name='Teoria grafów - Adam Sędziwy (210 bud. B5)'
						/>
						<Lecture
							onUpdate={()=>{}}
							onRemove={(ref) => ref.current?.remove()}
							col={4}
							timeStart='12:00'
							timeStop=' 13:30'
							type='LEKT'
							name='Język angielski 1/3 (3.09 bud. C7)'
						/>
						<Lecture
							onUpdate={()=>{}}
							onRemove={(ref) => ref.current?.remove()}
							col={4}
							group={4}
							timeStart='15:00'
							timeStop=' 16:30'
							type='CWA'
							name='Fizyka 1 - Dariusz Węgrzynek (104 bud. D11)'
							evenWeeksOnly
						/>
						<Lecture
							onUpdate={()=>{}}
							onRemove={(ref) => ref.current?.remove()}
							col={4}
							group={4}
							timeStart='16:45'
							timeStop=' 18:15'
							type='CWA'
							name='Algorytmy i struktury danych - Filip Kamiński (216 bud. C2)'
						/>
						<Lecture
							onUpdate={()=>{}}
							onRemove={(ref) => ref.current?.remove()}
							col={4}
							group={4}
							timeStart='18:30'
							timeStop=' 20:00'
							type='CWA'
							name='Matematyka dyskretna - Krystian Jobczyk (010 bud. B1)'
							evenWeeksOnly
						/>
						<Lecture
							onUpdate={()=>{}}
							onRemove={(ref) => ref.current?.remove()}
							col={5}
							group={1}
							timeStart='8:00'
							timeStop=' 9:30'
							type='W'
							name='Algorytmy i struktury danych - Konrad Kułakowski (224 bud. C2)'
						/>
						<Lecture
							onUpdate={()=>{}}
							onRemove={(ref) => ref.current?.remove()}
							col={5}
							group={8}
							timeStart='9:45'
							timeStop=' 11:15'
							type='CWL'
							name='Podstawy programowania 2 - Grzegorz Bazior (511a bud. C1)'
						/>
						<Lecture
							onUpdate={()=>{}}
							onRemove={(ref) => ref.current?.remove()}
							col={5}
							group={33}
							timeStart='11:45'
							timeStop=' 12:30'
							type='WF'
							name='Wychowanie fizyczne 2 - basen'
						/>
						<Lecture
							onUpdate={()=>{}}
							onRemove={(ref) => ref.current?.remove()}
							col={5}
							group={8}
							timeStart='13:15'
							timeStop=' 14:45'
							type='CWL'
							name='Podstawy grafiki komputerowej - Mirosław Gajer (214 bud. C2)'
						/>
					</Plan>
				</div>
			</div>
		</devModeContext.Provider>
	);
};

export default App;
