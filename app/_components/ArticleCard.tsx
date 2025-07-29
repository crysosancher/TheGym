import React from 'react';

const ArticleCard = () => {
	return (
		<>
			<div className="flex border-2">
				<img
					className="rounded-xl "
					src="https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2024/04/Man-Performing-a-Dumbbell-Row-for-this-15-Minute-Tri-set-Strength-Workout.jpg?w=400&quality=86&strip=all"
					alt="img"
					height={50}
					width={200}
				/>

				<div className="flex flex-col">
					<div className="font-">Workout Routines</div>
					<div className="font-bold">
						SHORT ON TIME? TRY THIS 15-MINUTE STRENGTH WORKOUT
					</div>
					<div className="font-light">
						One more quick HIIT proves that there's always time to get a good
						sweat on.
					</div>
					<div className="font-normal text-xs decoration-indigo-500">
						Read Article
					</div>
				</div>
			</div>
		</>
	);
};

export default ArticleCard;
