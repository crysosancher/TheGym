'use client';
import React from 'react';
import GridCard from './GridCard';
import Title from './Title';
import { useRouter } from 'next/navigation';

const WorkoutRoutines = () => {
	const router = useRouter();

	const workoutData = [
		{
			title: 'Chest',
			img: 'https://c4.wallpaperflare.com/wallpaper/411/962/510/muscles-men-sweating-wallpaper-preview.jpg',
			path: '/workout-routines/chest',
			description: 'Develop a strong chest',
		},
			{
			title: 'Back',
			img: 'https://c4.wallpaperflare.com/wallpaper/940/736/840/man-dark-bodybuilder-muscle-wallpaper-preview.jpg',
			path: '/workout-routines/back',
			description: 'Strengthen your back muscles',
		},
		{
			title: 'Shoulders',
			img: 'https://c4.wallpaperflare.com/wallpaper/499/527/659/tattoo-athlete-dumbbells-bodybuilding-wallpaper-preview.jpg',
			path: '/workout-routines/shoulders',
			description: 'Build broad shoulders',
		},
		{
			title: 'Legs',
			img: 'https://c1.wallpaperflare.com/preview/94/771/655/jogging-run-sport-jog.jpg',
			path: '/workout-routines/legs',
			description: 'Power up your lower body',
		},
		{
			title: 'Abs',
			img: 'https://c4.wallpaperflare.com/wallpaper/206/268/839/pose-muscle-muscle-rod-press-hd-wallpaper-preview.jpg',
			path: '/workout-routines/abs',
			description: 'Core strengthening exercises',
		},
		{
			title: 'Arms',
			img: 'https://s1.1zoom.me/big0/150/Men_Bodybuilding_T-shirt_452870.jpg',
			path: '/workout-routines/arms',
			description: 'Build powerful arms',
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 py-8 lg:py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header Section */}
				<div className="mb-12 lg:mb-16">
					<Title
						title="Workout Routines"
						subtitle="Choose your target muscle group and start your fitness journey today"
						size="xl"
					/>
				</div>

				{/* Stats Section */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 lg:mb-16">
					{[
						{ number: '6', label: 'Muscle Groups' },
						{ number: '50+', label: 'Exercises' },
						{ number: '100k+', label: 'Users' },
						{ number: '24/7', label: 'Support' },
					].map((stat, index) => (
						<div
							key={index}
							className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 text-center shadow-lg border border-slate-200/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
							<div className="text-2xl md:text-3lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								{stat.number}
							</div>
							<div className="text-slate-600 text-sm md:text-base font-medium mt-1">
								{stat.label}
							</div>
						</div>
					))}
				</div>

				{/* Workout Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
					{workoutData.map((workout, index) => (
						<div
							key={index}
							className="animate-fadeInUp"
							style={{ animationDelay: `${index * 150}ms` }}>
							<GridCard
								onClick={() => router.push(workout.path)}
								title={workout.title}
								img={workout.img}
							/>
						</div>
					))}
				</div>

				{/* Call to Action Section */}
				{/* <div className="mt-16 lg:mt-20 text-center">
					<div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-gradient-to-r from-blue-200/30 to-purple-200/30">
						<h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
							Ready to Transform Your Body?
						</h3>
						<p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
							Join thousands of fitness enthusiasts who have
							achieved their goals with our comprehensive workout
							routines.
						</p>
						<button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
							Start Your Journey Today
						</button>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default WorkoutRoutines;
