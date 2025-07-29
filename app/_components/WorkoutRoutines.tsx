'use client';
import React from 'react';
import GridCard from './GridCard';
import Title from './Title';
import { useRouter } from 'next/navigation';

const WorkoutRoutines = () => {
	const router = useRouter();
	return (
		<>
			<Title title="Workout Routines" />
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full h-full  p-1">
				<GridCard
					onClick={() => {
						router.push('/workout-routines/abs');
					}}
					title="Abs"
					img="https://c4.wallpaperflare.com/wallpaper/206/268/839/pose-muscle-muscle-rod-press-hd-wallpaper-preview.jpg"
				/>
				<GridCard
					onClick={() => {
						router.push('/workout-routines/arms');
					}}
					title="Arms"
					img="https://s1.1zoom.me/big0/150/Men_Bodybuilding_T-shirt_452870.jpg"
				/>
				<GridCard
					onClick={() => {
						router.push('/workout-routines/chest');
					}}
					title="Chest"
					img="https://c4.wallpaperflare.com/wallpaper/411/962/510/muscles-men-sweating-wallpaper-preview.jpg"
				/>
				<GridCard
					onClick={() => {
						router.push('/workout-routines/back');
					}}
					title="Back"
					img="https://c4.wallpaperflare.com/wallpaper/940/736/840/man-dark-bodybuilder-muscle-wallpaper-preview.jpg"
				/>
				<GridCard
					onClick={() => {
						router.push('/workout-routines/shoudlers');
					}}
					title="Shoulders"
					img="https://c4.wallpaperflare.com/wallpaper/499/527/659/tattoo-athlete-dumbbells-bodybuilding-wallpaper-preview.jpg"
				/>
				<GridCard
					onClick={() => {
						router.push('/workout-routines/legs');
					}}
					title="Legs"
					img="https://c1.wallpaperflare.com/preview/94/771/655/jogging-run-sport-jog.jpg"
				/>
			</div>
		</>
	);
};

export default WorkoutRoutines;
