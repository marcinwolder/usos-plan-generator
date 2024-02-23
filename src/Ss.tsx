import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import html2canvas from 'html2canvas';
import { FaCamera } from 'react-icons/fa6';

const Ss = () => {
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<>
			<Modal
				opened={opened}
				onClose={() => {
					close();
				}}
				title='Zdjęcie planu:'
				size={'100%'}
				centered>
				<div id='ss'></div>
			</Modal>

			<div
				className='absolute top-0.5 right-2 bg-slate-400 p-1 rounded-sm text-white cursor-pointer hover:bg-slate-500'
				onClick={() => {
					open();
					html2canvas(document.querySelector('#capture') as HTMLElement).then(
						(canvas) => {
							document.querySelector('#ss')?.appendChild(canvas);
						}
					);
				}}>
				<FaCamera />
			</div>
		</>
	);
};

export default Ss;
