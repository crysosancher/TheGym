import React from 'react';
import NavBar from '../../_components/NavBar';
import Footer from '../../_components/Footer';

const page = () => {
	return (
		<div>
			<NavBar />
			<strong className="text-3xl ml-3">Back Exercises Database</strong>
			<div className=" w-full grid grid-rows-1 grid-cols-1  md:grid-cols-2 gap-2">
				<iframe
					className="rounded-xl "
					allowFullScreen={true} // Correct property name and boolean value
					width="600"
					height="315"
					src="https://www.youtube.com/embed/T78xCiw_R6g?rel=0&amp;autoplay=1&mute=1" //embed video for iframe
					title="How to do a chin up"
				></iframe>

				<div
					className="flex flex-col items-center
				"
				>
					<strong className="text-2xl">Chin Ups</strong>
					<h3 className="font-semibold underline">Instructions</h3>
					<div>
						<div>
							1. Using a supinated grip, grasp the bar with a shoulder width
							grip.
						</div>
						<div>
							2. Take a deep breath, squeeze your glutes and brace your abs.
							Depress the shoulder blades and then drive the elbows straight
							down to the floor while activating the lats.
						</div>
						<div>
							3. Pull your chin towards the bar until the lats are fully
							contracted, then slowly lower yourself back to the start position
							and repeat for the assigned number of repetitions.
						</div>
					</div>
				</div>

				<div className="">
					<iframe
						className="rounded-xl"
						allowFullScreen={true} // Correct property name and boolean value
						width="600"
						height="315"
						src="https://www.youtube.com/embed/T78xCiw_R6g?rel=0&amp;autoplay=1&mute=1" //embed video for iframe
						title="How to do a chin up"
					></iframe>

					<div
						className="flex flex-col items-center
				"
					>
						<strong className="text-2xl">Chin Ups</strong>
						<h3 className="font-semibold underline">Instructions</h3>
						<div>
							<div>
								1.Using a supinated grip, grasp the bar with a shoulder width
								grip.
							</div>
							<div>
								2.Take a deep breath, squeeze your glutes and brace your abs.
								Depress the shoulder blades and then drive the elbows straight
								down to the floor while activating the lats.
							</div>
							<div>
								3.Pull your chin towards the bar until the lats are fully
								contracted, then slowly lower yourself back to the start
								position and repeat for the assigned number of repetitions.
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default page;
