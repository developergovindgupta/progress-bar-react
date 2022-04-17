import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ProgressBar from './components/ProgressBarReactUI';

const App = () => {
	const [progress, setProgress] = useState(50);
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>Demo : progress-bar-react-ui</p>
				<a className='App-link' href='https://codesandbox.io/s/demo-progress-bar-react-ui-3n5iyp' target='_blank' rel='noopener noreferrer'>
					SourceCode
				</a>
			</header>
			<div style={{ width: '400px', maxWidth: '100vw', height: 'calc(100vh - 70px)', margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
				<ProgressBar progress={progress} width={300} color='red' />
				<br />
				<ProgressBar progress={progress} width={300} color='green' />
				<br />
				<ProgressBar progress={progress} width={300} />
				<br />
				<ProgressBar className='linear-progress-bar' progress={progress} width={300} color='linear-gradient(black, lime,black)' backgroundColor='linear-gradient(black, white,black)' />
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
