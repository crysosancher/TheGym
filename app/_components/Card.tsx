import Image from 'next/image';
import React from 'react';

interface CardProps {
	img: string;
	title: string;
	onClick: () => void; // Add onClick to the props interface
}

const Card: React.FC<CardProps> = ({ img, title, onClick }) => {
	return (
		<div
			onClick={onClick}
			className="cursor-pointer"
		>
			{' '}
			{/* Add cursor-pointer for pointer cursor on hover */}
			<div className=" flex justify-between rounded-2xl w-[95%] h-[140px] bg-[#F8F8F8] shadow-lg transform transition duration-300 hover:scale-105 m-5">
				<Image
					className="  rounded-xl transform transition duration-300 "
					src={img}
					alt="Your Muscle Image"
					width={100}
					height={100}
				/>
				<div className="flex flex-col justify-center ml-4">
					<strong className="text-2xl m-3">{title}</strong>
				</div>
			</div>
		</div>
	);
};

export default Card;
