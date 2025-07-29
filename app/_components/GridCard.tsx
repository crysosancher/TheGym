import Image from 'next/image';
import React from 'react';

interface GridCardProps {
	title: string;
	img: string;
	onClick: () => void;
}

const GridCard: React.FC<GridCardProps> = ({
	title,
	img,
	onClick,
}: GridCardProps) => {
	return (
		<div
			onClick={onClick}
			className="group relative overflow-hidden rounded-3xl bg-white/90 backdrop-blur-lg shadow-xl hover:shadow-2xl border border-slate-200/30 cursor-pointer transform hover:-translate-y-2 transition-all duration-500 ease-out hover:scale-105">
			{/* Background Glow Effect */}
			<div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-700"></div>

			{/* Image Container */}
			<div className="relative overflow-hidden rounded-t-3xl">
				<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
				<Image
					className="object-cover w-full h-48 md:h-56 lg:h-64 transform group-hover:scale-110 transition-transform duration-700 ease-out"
					src={img}
					alt={title}
					width={400}
					height={300}
				/>

				{/* Floating Title Overlay */}
				<div className="absolute bottom-4 left-4 right-4 z-20">
					<h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide drop-shadow-lg transform group-hover:scale-105 transition-all duration-300">
						{title}
					</h3>
					<div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
				</div>
			</div>

			{/* Bottom Content Section */}
			<div className="p-6 relative z-10">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3">
						<div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full group-hover:animate-pulse"></div>
						<span className="text-slate-600 font-medium group-hover:text-slate-800 transition-colors duration-300">
							Explore Workouts
						</span>
					</div>
					<div className="transform group-hover:translate-x-1 transition-transform duration-300">
						<svg
							className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors duration-300"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</div>
				</div>
			</div>

			{/* Hover Ripple Effect */}
			<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
				<div className="absolute top-1/2 left-1/2 w-0 h-0 bg-white/20 rounded-full group-hover:w-96 group-hover:h-96 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out"></div>
			</div>
		</div>
	);
};

export default GridCard;
