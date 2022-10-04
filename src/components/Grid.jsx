import React from 'react';
import defaultLogo from '../defaultLogo.svg';
import Balls from '../components/Balls';

export default function Grid() {
	return (
		<div className='container'>
			<div className='item gradient-div'></div>
			<nav className='item nav-area'>
				<img
					src={defaultLogo}
					alt='logo'
					className='nav-logo'
				/>
			</nav>
			<div className='item CTA'>
				<h1 className='CTA-text'>Call To Action</h1>
				<p className='CTA-subtext'>
					Explain about your call to action and
					<br /> the purpose of this website
				</p>
			</div>
			<button className='item joinButton'>Join the email list!</button>
			<div className='item balls'>
				<Balls className='balls' />
			</div>
			<div className='infoBoxContainer'>
				<div className='item infoBox1 infoBox'>
					<h2 className='infoBox-header'>Info Box 1</h2>
					<p className='infoBox-text'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						auctor, nisl quis ultricies lacinia, nunc nisl fermentum massa, nec
						ultricies nunc justo eget nunc. Donec auctor, nisl quis ultricies
						lacinia, nunc nisl
					</p>
				</div>
				<div className='item infoBox2 infoBox'>
					<h2 className='infoBox-header'>Info Box 2</h2>
					<p className='infoBox-text'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						auctor, nisl quis ultricies lacinia, nunc nisl fermentum massa, nec
						ultricies nunc justo eget nunc. Donec auctor, nisl quis ultricies
						lacinia, nunc nisl
					</p>
				</div>
				<div className='item infoBox3 infoBox'>
					<h2 className='infoBox-header'>Info Box 3</h2>
					<p className='infoBox-text'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						auctor, nisl quis ultricies lacinia, nunc nisl fermentum massa, nec
						ultricies nunc justo eget nunc. Donec auctor, nisl quis ultricies
						lacinia, nunc nisl
					</p>
				</div>
			</div>
		</div>
	);
}
