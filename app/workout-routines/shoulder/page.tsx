'use client';
import React, { useEffect } from 'react';
import NavBar from '../../_components/NavBar';
import Footer from '../../_components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Title from '../../_components/Title';
import VideoCard from '@/app/_components/VideoCard';
import VideoCardGrid from '@/app/_components/VideoCard';
// import Divider from '@mui/material/Divider';

const page = () => {
	const videoCardItems = [
		{
			iframe: 'https://www.youtube.com/embed/plankVideo',
			instructions: [
				'Start Position: Begin on your forearms and toes, ensuring your elbows are directly under your shoulders and your body forms a straight line from head to heels.',
				'Engage Core: Tighten your abdominal muscles, glutes, and thighs to maintain a stable and straight position.',
				'Maintain Alignment: Keep your head neutral, looking down, and avoid letting your hips sag or lift too high.',
				'Hold and Breathe: Hold the position for as long as possible with proper form, breathing steadily throughout.',
			],
		},
		{
			iframe: 'https://www.youtube.com/embed/pushupVideo',
			instructions: [
				'Start Position: Begin in a high plank position with hands placed slightly wider than shoulder-width apart.',
				'Lower Down: Lower your body until your chest nearly touches the floor, keeping your body in a straight line.',
				'Push Up: Push through your palms to return to the starting position.',
				'Maintain Form: Keep your core engaged and avoid sagging hips throughout the movement.',
			],
		},
		{
			iframe: 'https://www.youtube.com/embed/squatVideo',
			instructions: [
				'Starting Position: Stand with feet shoulder-width apart, toes slightly pointed outward.',
				'Descent: Lower your body by bending your knees and pushing your hips back as if sitting in a chair.',
				'Depth: Go down until your thighs are parallel to the ground or as low as comfortable.',
				'Return: Push through your heels to return to the starting position, squeezing your glutes at the top.',
			],
		},
	];
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<div data-aos="fade-right">
				<div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50 py-8 lg:py-16">
					<div className="max-w-8xl mx-auto">
						{/* Header Section */}
						<div className="text-center mb-12 lg:mb-16 px-4">
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
								Exercise Library
							</h1>
							<p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
								Master your fitness journey with our
								comprehensive exercise demonstrations and
								step-by-step instructions.
							</p>
						</div>

						{/* Video Cards */}
						<div className="space-y-8 lg:space-y-12">
							{videoCardItems.map((item, index) => (
								<div
									key={index}
									className="animate-fadeInUp"
									style={{
										animationDelay: `${index * 200}ms`,
									}}>
									<VideoCard
										iframe={item.iframe}
										instructions={item.instructions}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;
