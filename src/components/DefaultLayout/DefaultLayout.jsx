import React from 'react'
import Head from 'next/head'
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
// import HeaderImage from '@images/header,png'

export default function DefaultLayout({ title = 'hasanchamdany', children }) {
	return (
		<div className="relative">
			<Head>
				<title>{title}</title>
				<link rel="icon" href="./images/header.png" />
			</Head>
            <div className="w-fit max-w-full overflow-x-hidden">
			<Navbar />
			<div className="w-screen max-w-full overflow-x-hidden">
				<main className=''>{children}</main>
				<Footer />
			</div>
            </div>
		</div>
	);
}
