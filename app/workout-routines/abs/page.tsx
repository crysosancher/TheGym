'use client';
import React, { useEffect } from 'react';
import NavBar from '../../_components/NavBar';
import Footer from '../../_components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Title from '../../_components/Title';
import VideoCard from '@/app/_components/VideoCard';
// import Divider from '@mui/material/Divider';

const page = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<div data-aos="fade-right">
				<NavBar />
				<Title title="Abs Workout" />
				<div className=" grid gap-x-3 grid-cols-1 grid-rows-1  lg:grid-cols-2">
					<VideoCard iframe="https://www.youtube.com/embed/Ubkevtdkkdg?rel=0&amp;&mute=1" />
					<VideoCard iframe="https://www.youtube.com/embed/Ubkevtdkkdg?rel=0&amp;&mute=1" />
				</div>

				{/* <div className="flex w-full">
					<div className=" justify-center  flex flex-col items-center">
						<ul style={{ listStyleType: 'disc' }}>
							<li>
								Start Position: Begin on your forearms and toes, ensuring your
								elbows are directly under your shoulders and your body forms a
								straight line from head to heels.
							</li>
							<li>
								Engage Core: Tighten your abdominal muscles, glutes, and thighs
								to maintain a stable and straight position.
							</li>
							<li>
								Maintain Alignment: Keep your head neutral, looking down, and
								avoid letting your hips sag or lift too high.
							</li>
							<li>
								Hold and Breathe: Hold the position for as long as possible with
								proper form, breathing steadily throughout.
							</li>
						</ul>
					</div>

					<div className=" justify-center  flex flex-col items-center">
						<ul style={{ listStyleType: 'disc' }}>
							<li>
								Start Position: Begin on your forearms and toes, ensuring your
								elbows are directly under your shoulders and your body forms a
								straight line from head to heels.
							</li>
							<li>
								Engage Core: Tighten your abdominal muscles, glutes, and thighs
								to maintain a stable and straight position.
							</li>
							<li>
								Maintain Alignment: Keep your head neutral, looking down, and
								avoid letting your hips sag or lift too high.
							</li>
							<li>
								Hold and Breathe: Hold the position for as long as possible with
								proper form, breathing steadily throughout.
							</li>
						</ul>
					</div>

					<div className=" justify-center  flex flex-col items-center">
						<ul style={{ listStyleType: 'disc' }}>
							<li>
								Start Position: Begin on your forearms and toes, ensuring your
								elbows are directly under your shoulders and your body forms a
								straight line from head to heels.
							</li>
							<li>
								Engage Core: Tighten your abdominal muscles, glutes, and thighs
								to maintain a stable and straight position.
							</li>
							<li>
								Maintain Alignment: Keep your head neutral, looking down, and
								avoid letting your hips sag or lift too high.
							</li>
							<li>
								Hold and Breathe: Hold the position for as long as possible with
								proper form, breathing steadily throughout.
							</li>
						</ul>
					</div>
				</div> */}
				<br />
			</div>

			<Footer />
		</>
	);
};

export default page;
