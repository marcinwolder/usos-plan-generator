import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@mantine/core/styles.css';
import App from './App';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import AdminControlsProvider from './context/providers/AdminControlsProvider';
import LecturesProvider from './context/providers/LecturesProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<MantineProvider>
			<ModalsProvider>
				<LecturesProvider>
					<AdminControlsProvider>
						<App />
					</AdminControlsProvider>
				</LecturesProvider>
			</ModalsProvider>
		</MantineProvider>
	</React.StrictMode>
);
