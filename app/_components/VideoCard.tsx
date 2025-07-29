import React from 'react';

interface VideoCardProps {
	iframe: string;
	instructions: string[];
}

export default function VideoCard({ iframe, instructions }: VideoCardProps) {
	return (
		<div className="w-full px-4 sm:px-6 lg:px-8">
			<div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200/50 backdrop-blur-sm">
				<div className="flex flex-col lg:flex-row p-6 lg:p-8 gap-6 lg:gap-8 max-w-7xl mx-auto">
					{/* Video Section */}
					<div className="w-full lg:w-3/5 relative group">
						<div className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200/20">
							<iframe
								className="w-full h-64 md:h-80 lg:h-96 transform transition-all duration-700 group-hover:scale-105"
								allowFullScreen={true}
								src={iframe}
								loading="lazy"
								title="Exercise demonstration video"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
						</div>
					</div>

					{/* Instructions Section */}
					<div className="w-full lg:w-2/5 flex flex-col justify-center space-y-4">
						<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-slate-200/30">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
								<h3 className="font-bold text-2xl md:text-3xl text-slate-800 tracking-tight">
									Instructions
								</h3>
							</div>

							<ul className="space-y-4">
								{instructions.map((instruction, index) => (
									<li
										key={index}
										className="flex items-start gap-3 group/item hover:bg-slate-50/50 p-3 rounded-xl transition-all duration-300">
										<div className="flex-shrink-0 mt-1">
											<div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-sm">
												<span className="text-white text-xs font-bold">
													{index + 1}
												</span>
											</div>
										</div>
										<p className="text-slate-700 leading-relaxed text-sm md:text-base font-medium group-hover/item:text-slate-900 transition-colors duration-300">
											{instruction}
										</p>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
