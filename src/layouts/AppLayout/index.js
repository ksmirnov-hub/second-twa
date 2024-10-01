import React from 'react';

import { Outlet } from "react-router-dom";

// import './appLayout.scss';

const AppLayout = () => {

	return (
		<>
			<Outlet />
		</>
	);
}

export default AppLayout;