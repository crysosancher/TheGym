'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import Title from './Title';
import Card from './Card';

const WorkoutRoutines = () => {
	const router = useRouter();
	return (
		<>
			<div className="secondary-header">
				<Title title="Workout Routines" />

				<div className="">
					<Card
						onClick={() => {
							router.push('/workout-routines/abs');
						}}
						title="Abs"
						img="https://e1.pxfuel.com/desktop-wallpaper/140/792/desktop-wallpaper-boys-abs-abs.jpg"
					/>
					<Card
						onClick={() => {
							router.push('/workout-routines/abs');
						}}
						title="Chest"
						img="https://e1.pxfuel.com/desktop-wallpaper/140/792/desktop-wallpaper-boys-abs-abs.jpg"
					/>
					<Card
						onClick={() => {
							router.push('/workout-routines/abs');
						}}
						title="Back"
						img="https://e1.pxfuel.com/desktop-wallpaper/140/792/desktop-wallpaper-boys-abs-abs.jpg"
					/>
					<Card
						onClick={() => {
							router.push('/abs');
						}}
						title="Legs"
						img="https://e1.pxfuel.com/desktop-wallpaper/140/792/desktop-wallpaper-boys-abs-abs.jpg"
					/>
					<Card
						onClick={() => {
							router.push('/abs');
						}}
						title="Shoulders"
						img="https://e1.pxfuel.com/desktop-wallpaper/140/792/desktop-wallpaper-boys-abs-abs.jpg"
					/>
					<Card
						onClick={() => {
							router.push('/abs');
						}}
						title="Arms"
						img="https://e1.pxfuel.com/desktop-wallpaper/140/792/desktop-wallpaper-boys-abs-abs.jpg"
					/>
				</div>
			</div>
		</>
	);
};

export default WorkoutRoutines;
