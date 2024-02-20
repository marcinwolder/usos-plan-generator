import DaysComp from './DaysComp';
import Hours from './Hours';

const App = () => {
	return (
		<div className='flex items-center justify-center min-h-screen'>
			<div
				className='border rounded-md grid w-3/4'
				style={{ gridTemplateColumns: '100px 1fr' }}>
				<div className='col-span-2 bg-stone-600 text-white font-bold p-2 rounded-t-md'>
					Plan studiów: AGH, ISI 2023/24 - S2
				</div>
				<div></div>
				<DaysComp />
				<Hours />
				<div>Plan</div>
			</div>
		</div>
	);
};

export default App;
