import React from 'react';
import style from './Footer.module.css';
import Nav from "../nav/Nav";


function Footer() {
	return (
		<div className={style.footer}>
			<Nav/>
		</div>
	);
}

export default Footer;