import Image from 'next/image';
import React from 'react';

interface VideoCardProps {
	iframe: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ iframe }) => {
	return (
		<div className="cursor-pointer">
			{' '}
			{/* Add cursor-pointer for pointer cursor on hover */}
			<div className="rounded-xl border-2 border-black  bg-[#F8F8F8] sm:min-w-[1/2] sm:min-h-[600px] shadow-lg transform transition duration-300 hover:scale-105 m-5">
				<div className="flex p-1 flex-col justify-between h-full w-full">
					<iframe
						className=" transform transition duration-300 sm:min-h-[300px]"
						allowFullScreen={true}
						src={iframe}
					/>
					<div className="m-3 ">
						<strong>Instruction:</strong>
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
				</div>
			</div>
		</div>
	);
};

export default VideoCard;
