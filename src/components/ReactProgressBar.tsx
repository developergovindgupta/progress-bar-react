type ReactProgressBarType = {
	progress: number;
	width: number;
	style?: object;
	color?: string;
};
const ReactProgressBar = (props: ReactProgressBarType) => {
	let width = props.width || 400;
	let progress = props.progress || 0;
	let color = props.color || 'blue';
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
				backgroundColor: 'white',
				margin: 'auto',
				color: 'black',
				...props.style,
			}}
		>
			<div
				style={{
					backgroundColor: `${color}`,
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
					{props.progress}%
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
				{props.progress}%
			</span>
		</div>
	);
};

export default ReactProgressBar;
