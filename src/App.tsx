import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactProgressBar from './components/ReactProgressBar';

const App = () => {
	const [progress, setProgress] = useState(50);
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>Demo : react-progress-bar</p>
				<a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
			<div style={{ width: '400px', maxWidth: '100vw', height: 'calc(100vh - 70px)', margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
				<ReactProgressBar progress={progress} width={300} />
				<hr style={{ width: '100%', margin: '20px' }} />
				<span>Set Progressbar value</span>
				<hr style={{ width: '100%', margin: '20px' }} />
				<input
					type='range'
					min={0}
					max={100}
					value={progress}
					style={{ width: '300px' }}
					onChange={(e) => {
						setProgress(parseFloat(e.target.value));
					}}
				/>
			</div>
		</div>
	);
};

export default App;
