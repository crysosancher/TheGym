'use client';
// import { Badge, Button, Card, Group, Paper, Text } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import NavBar from '../../_components/NavBar';
import Footer from '../../_components/Footer';
import { Paper } from '@mantine/core';

const page = () => {
	return (
		<>
			<NavBar />

			<div className="text-3xl">Arms Exercise Database</div>
			<Paper
				shadow="xl"
				p="xl"
			>
				<div className="flex justify-between gap-1">
					<Image
						className="rounded-xl flex-grow"
						src="https://www.jefit.com/images/exercises/960_590/212.jpg"
						alt=""
						height={40}
						width={240}
					/>
					<Image
						className="rounded-xl flex-grow"
						src="https://www.jefit.com/images/exercises/960_590/213.jpg"
						alt=""
						height={40}
						width={240}
					/>
				</div>
				<div className="flex flex-col text-center">
					<div className="font-bold text-xl text-blue-900">
						Band Reverse Fly
					</div>
					<div>Main Muscle Group : Triceps</div>
					<div>Type : Strength</div>
					<div>Equipment : Bands</div>
				</div>
			</Paper>
			<div>
				<div className="flex gap-1">
					<Image
						className="rounded-xl flex-grow"
						src="https://www.jefit.com/images/exercises/960_590/212.jpg"
						alt=""
						height={40}
						width={240}
					/>
					<Image
						className="rounded-xl flex-grow"
						src="https://www.jefit.com/images/exercises/960_590/213.jpg"
						alt=""
						height={40}
						width={240}
					/>
				</div>
				<div className="flex flex-col text-center">
					<div className="font-bold text-xl text-blue-900">
						Band Reverse Fly
					</div>
					<div>Main Muscle Group : Triceps</div>
					<div>Type : Strength</div>
					<div>Equipment : Bands</div>
				</div>
			</div>
			<div>
				<div className="flex gap-1">
					<Image
						className="rounded-xl flex-grow"
						src="https://www.jefit.com/images/exercises/960_590/212.jpg"
						alt=""
						height={40}
						width={240}
					/>
					<Image
						className="rounded-xl flex-grow"
						src="https://www.jefit.com/images/exercises/960_590/213.jpg"
						alt=""
						height={40}
						width={240}
					/>
				</div>
				<div className="flex flex-col text-center">
					<div className="font-bold text-xl text-blue-900">
						Band Reverse Fly
					</div>
					<div>Main Muscle Group : Triceps</div>
					<div>Type : Strength</div>
					<div>Equipment : Bands</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default page;
