import React from 'react';

const Title = ({ title }: any) => {
	return (
		<div>
			<div className="border-b-2 pb-4 flex justify-center  border-blue-500 text-2xl uppercase  ">
				<strong className="">{title}</strong>
			</div>
		</div>
	);
};

export default Title;
