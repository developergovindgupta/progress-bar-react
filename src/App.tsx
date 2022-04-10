import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactProgressBar from './components/ReactProgressBar';

const App = () => {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>Demo : react-progress-bar</p>
				<a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
			<div style={{ width: '800px', height: 'calc(100vh - 70px)', margin: 'auto', display: 'flex', alignItems: 'center' }}>
				<ReactProgressBar progress={50} width={300} />
			</div>
		</div>
	);
};

export default App;
