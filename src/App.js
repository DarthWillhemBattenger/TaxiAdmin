import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import s from './App.module.css';
import { Navigation } from './MainScreen/Navigation';
import { Routes } from './Routes';

function App() {
	// eslint-disable-next-line
	const [isAuth, setIsAuth] = useState(true);
	return (
		<div className={s.appScreen}>
			<Router>
				{isAuth && <Navigation />}
				{isAuth ? (
					<div className={s.pageWithNavigation}>
						<Routes isAuth={isAuth} />
					</div>
				) : (
					<div>
						<Routes isAuth={isAuth} />
					</div>
				)}
				
			</Router>
		</div>
	);
}

export default App;
