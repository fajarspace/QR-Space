import { useEffect, useState } from 'react';

function DarkMode() {
	const [theme, setTheme] = useState(true);

	useEffect(() => {
		theme ?
			document.body.classList.remove('dark') :
			document.body.classList.add('dark');
	}, [theme]);
		
	return (
		<div className='md:container mx-auto p-5' >
			<h3 className={theme ? 'sr-only' : null}>light</h3> 

			<input
				id="toggle"
				type="checkbox"
				className="toggle-checkbox"
				onClick={()=>setTheme(!theme)}
			/>

			<label htmlFor="toggle" className="toggle-label">
				<span className="toggle-label-bg"></span>
			</label>

			<h3 className={!theme ? 'sr-only' : null}>dark</h3> 
		</div>
	);
}

export default DarkMode;