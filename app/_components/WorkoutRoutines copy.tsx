'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import Title from './Title';

const WorkoutRoutines = () => {
	const router = useRouter();
	return (
		<>
			<div className="secondary-header   justify-start">
				<Title title="Workout Routines" />

				<div className=" w-full flex flex-col gap-2  mb-2">
					<div
						onClick={() => {
							router.push('/abs');
						}}
						className="w-full border-b-2 border-blue-500 flex hover:underline hover:cursor-pointer"
					>
						<img
							src="https://www.muscleandfitness.com/wp-content/themes/muscle-and-fitness/assets/build/images/body-parts/body-part-abs.png"
							alt=""
							className="h-52 w-52"
						/>
						<strong className=" p-20 text-5xl uppercase font-bold ">Abs</strong>
						<ul
							className="self-center flex-grow"
							style={{ listStyleType: 'disc' }}
						>
							<li>
								<strong>Core Stability:</strong>Strong abs enhance your core
								stability, supporting better posture and overall strength.
							</li>
							<li>
								<strong>Daily Performance:</strong>A powerful core improves
								performance in daily activities and reduces injury risks.
							</li>
							<li>
								<strong>Confidence Boost: </strong>Achieving a sculpted
								midsection boosts confidence and promotes a resilient mindset.
							</li>
							<li>
								<strong>Life Discipline:</strong>The dedication to ab workouts
								fosters perseverance, benefiting various aspects of life.
							</li>
						</ul>
					</div>
					<div
						onClick={() => {
							router.push('/back');
						}}
						className=" border-b-2  border-blue-500 flex hover:underline hover:cursor-pointer"
					>
						<img
							src="https://www.muscleandfitness.com/wp-content/themes/muscle-and-fitness/assets/build/images/body-parts/body-part-back.png"
							alt=""
							className="h-52 w-52"
						/>
						<strong className=" p-20 text-5xl uppercase font-bold ">
							back
						</strong>
						<ul
							className="self-center flex-grow "
							style={{ listStyleType: 'disc' }}
						>
							<li>
								<strong>Core Stability:</strong>Strong abs enhance your core
								stability, supporting better posture and overall strength.
							</li>
							<li>
								<strong>Daily Performance:</strong>A powerful core improves
								performance in daily activities and reduces injury risks.
							</li>
							<li>
								<strong>Confidence Boost: </strong>Achieving a sculpted
								midsection boosts confidence and promotes a resilient mindset.
							</li>
							<li>
								<strong>Life Discipline:</strong>The dedication to ab workouts
								fosters perseverance, benefiting various aspects of life.
							</li>
						</ul>
					</div>
					<div
						onClick={() => {
							router.push('/arms');
						}}
						className=" border-b-2  border-blue-500 flex hover:underline hover:cursor-pointer"
					>
						<img
							src="https://www.muscleandfitness.com/wp-content/themes/muscle-and-fitness/assets/build/images/body-parts/body-part-arms.png"
							alt=""
							className="h-52 w-52"
						/>
						<strong className=" p-20 text-5xl uppercase font-bold ">Arm</strong>
						<ul
							className="self-center flex-grow "
							style={{ listStyleType: 'disc' }}
						>
							<li>
								<strong>Core Stability:</strong>Strong abs enhance your core
								stability, supporting better posture and overall strength.
							</li>
							<li>
								<strong>Daily Performance:</strong>A powerful core improves
								performance in daily activities and reduces injury risks.
							</li>
							<li>
								<strong>Confidence Boost: </strong>Achieving a sculpted
								midsection boosts confidence and promotes a resilient mindset.
							</li>
							<li>
								<strong>Life Discipline:</strong>The dedication to ab workouts
								fosters perseverance, benefiting various aspects of life.
							</li>
						</ul>
					</div>
					<div
						onClick={() => {
							router.push('/chest');
						}}
						className=" border-b-2  border-blue-500 flex hover:underline hover:cursor-pointer"
					>
						<img
							src="https://www.muscleandfitness.com/wp-content/themes/muscle-and-fitness/assets/build/images/body-parts/body-part-chest.png"
							alt=""
							className="h-52 w-52"
						/>
						<strong className=" p-20 text-5xl uppercase font-bold ">
							chest
						</strong>
						<ul
							className="self-center flex-grow "
							style={{ listStyleType: 'disc' }}
						>
							<li>
								<strong>Core Stability:</strong>Strong abs enhance your core
								stability, supporting better posture and overall strength.
							</li>
							<li>
								<strong>Daily Performance:</strong>A powerful core improves
								performance in daily activities and reduces injury risks.
							</li>
							<li>
								<strong>Confidence Boost: </strong>Achieving a sculpted
								midsection boosts confidence and promotes a resilient mindset.
							</li>
							<li>
								<strong>Life Discipline:</strong>The dedication to ab workouts
								fosters perseverance, benefiting various aspects of life.
							</li>
						</ul>
					</div>
					<div
						onClick={() => {
							router.push('/legs');
						}}
						className=" border-b-2  border-blue-500 flex hover:underline hover:cursor-pointer"
					>
						<img
							src="https://www.muscleandfitness.com/wp-content/themes/muscle-and-fitness/assets/build/images/body-parts/body-part-legs.png"
							alt=""
							className="h-52 w-52"
						/>
						<strong className=" p-20 text-5xl uppercase font-bold ">
							Shoulder
						</strong>
						<ul
							className="self-center flex-grow "
							style={{ listStyleType: 'disc' }}
						>
							<li>
								<strong>Core Stability:</strong>Strong abs enhance your core
								stability, supporting better posture and overall strength.
							</li>
							<li>
								<strong>Daily Performance:</strong>A powerful core improves
								performance in daily activities and reduces injury risks.
							</li>
							<li>
								<strong>Confidence Boost: </strong>Achieving a sculpted
								midsection boosts confidence and promotes a resilient mindset.
							</li>
							<li>
								<strong>Life Discipline:</strong>The dedication to ab workouts
								fosters perseverance, benefiting various aspects of life.
							</li>
						</ul>
					</div>
					<div
						onClick={() => {
							router.push('/shoulder');
						}}
						className=" border-b-2  border-blue-500 flex hover:underline hover:cursor-pointer"
					>
						<img
							src="https://www.muscleandfitness.com/wp-content/themes/muscle-and-fitness/assets/build/images/body-parts/body-part-shoulders.png"
							alt=""
							className="h-52 w-52"
						/>
						<strong className=" p-20 text-5xl uppercase font-bold ">
							Legs
						</strong>
						<ul
							className="self-center flex-grow "
							style={{ listStyleType: 'disc' }}
						>
							<li>
								<strong>Core Stability:</strong>Strong abs enhance your core
								stability, supporting better posture and overall strength.
							</li>
							<li>
								<strong>Daily Performance:</strong>A powerful core improves
								performance in daily activities and reduces injury risks.
							</li>
							<li>
								<strong>Confidence Boost: </strong>Achieving a sculpted
								midsection boosts confidence and promotes a resilient mindset.
							</li>
							<li>
								<strong>Life Discipline:</strong>The dedication to ab workouts
								fosters perseverance, benefiting various aspects of life.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default WorkoutRoutines;
