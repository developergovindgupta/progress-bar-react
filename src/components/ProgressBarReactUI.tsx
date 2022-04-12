import React, { useEffect, useState } from 'react';

type ProgressBarReactType = {
	progress?: number;
	width?: number;
	style?: object;
	color?: string;
	backgroundColor?: string;
};
const ProgressBarReact = (props: ProgressBarReactType) => {
	const [width, setWidth] = useState(props.width || 300);
	const [progress, setProgress] = useState(props.progress ?? 50);
	const [color, setColor] = useState(props.color || 'blue');
	const [backgroundColor, setBackgroundColor] = useState(props.backgroundColor || 'white');

	useEffect(() => {
		setProgress(props.progress ?? 50);
	}, [props.progress]);
	useEffect(() => {
		setWidth(props.width || 300);
	}, [props.width]);
	useEffect(() => {
		setColor(props.color || 'blue');
	}, [props.color]);
	useEffect(() => {
		setBackgroundColor(props.backgroundColor || 'white');
	}, [props.backgroundColor]);

	return (
		<div
			style={{
				width: `${width}px`,
				border: 'solid 1px black',
				padding: '2px 0px',
				borderRadius: '20px',
				overflow: 'hidden',
				fontWeight: 'bold',
				fontFamily: 'arial',
				fontSize: '20px',
				position: 'relative',
				height: '24px',
				lineHeight: '20px',
				boxSizing: 'border-box',
				background: `${backgroundColor}`,
				color: 'black',
				...props.style,
			}}
		>
			<div
				style={{
					background: `${color}`,
					position: 'absolute',
					left: '0px',
					top: '0px',
					height: '100%',
					width: `${progress}%`,
					overflow: 'hidden',
					padding: 'inherit',
					zIndex: 2,
				}}
			>
				<span
					style={{
						display: 'block',
						width: '80px',
						position: 'absolute',
						left: `${width / 2 - 40}px`,
						color: 'white',
						zIndex: 1,
					}}
				>
					{progress}%
				</span>
			</div>
			<span
				style={{
					display: 'block',
					width: '80px',
					position: 'absolute',
					left: `${width / 2 - 40}px`,
					zIndex: 1,
				}}
			>
				{progress}%
			</span>
		</div>
	);
};

export default ProgressBarReact;
