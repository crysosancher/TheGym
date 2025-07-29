import Image from 'next/image';
import React from 'react';
import Title from './Title';

interface GridCardProps {
	title: String;
	img: string;
	onClick: () => void;
}
const GridCard: React.FC<GridCardProps> = ({
	title,
	img,
	onClick,
}: GridCardProps) => {
	return (
		<>
			<div
				onClick={onClick}
				className="flex flex-col items-center justify-center  "
			>
				<strong className="">{title}</strong>
				<Image
					className="object-cover w-full h-full"
					src={img}
					alt="abs"
					width={300}
					height={300}
				/>
			</div>
		</>
	);
};

export default GridCard;
