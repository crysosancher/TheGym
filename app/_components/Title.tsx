import React from 'react';

interface TitleProps {
	title: string;
	subtitle?: string;
	variant?: 'primary' | 'secondary' | 'accent';
	size?: 'sm' | 'md' | 'lg' | 'xl';
	centered?: boolean;
}

const Title: React.FC<TitleProps> = ({
	title,
	subtitle,
	variant = 'primary',
	size = 'lg',
	centered = true,
}) => {
	const sizeClasses = {
		sm: 'text-xl md:text-2xl lg:text-3xl',
		md: 'text-2xl md:text-3xl lg:text-4xl',
		lg: 'text-3xl md:text-4xl lg:text-5xl',
		xl: 'text-4xl md:text-5xl lg:text-6xl',
	};

	const variantClasses = {
		primary: 'from-blue-600 to-purple-600',
		secondary: 'from-slate-600 to-slate-800',
		accent: 'from-purple-600 to-pink-600',
	};

	return (
		<div
			className={`w-full ${
				centered ? 'text-center' : 'text-left'
			} mb-8 lg:mb-12`}>
			{/* Main Title Container */}
			<div className="relative group">
				{/* Background Glow Effect */}
				<div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform scale-150"></div>

				{/* Title Content */}
				<div className="relative">
					{/* Animated Border */}
					<div className="relative overflow-hidden">
						<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-700 ease-out rounded-full"></div>
						<div className="border-b-2 border-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 pb-6 relative">
							{/* Static gradient border */}
							<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
						</div>
					</div>

					{/* Main Title */}
					<div className="pb-6">
						<h1
							className={`
                            ${sizeClasses[size]} font-bold uppercase tracking-wide
                            bg-gradient-to-r ${variantClasses[variant]} bg-clip-text text-transparent
                            transform group-hover:scale-105 transition-all duration-500
                            drop-shadow-sm group-hover:drop-shadow-md
                            relative z-10
                        `}>
							{title}
						</h1>

						{/* Subtitle */}
						{subtitle && (
							<p className="text-slate-600 text-lg md:text-xl mt-4 font-medium leading-relaxed max-w-2xl mx-auto">
								{subtitle}
							</p>
						)}
					</div>

					{/* Decorative Elements */}
					<div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-500"></div>
					<div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-700 delay-100"></div>
					<div className="absolute -bottom-3 left-1/4 w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-25 group-hover:opacity-50 transition-opacity duration-600 delay-200"></div>
				</div>
			</div>

			{/* Optional glassmorphism container variant */}
			<style jsx>{`
				.glass-title {
					background: linear-gradient(
						135deg,
						rgba(255, 255, 255, 0.1),
						rgba(255, 255, 255, 0.05)
					);
					backdrop-filter: blur(10px);
					border: 1px solid rgba(255, 255, 255, 0.18);
				}
			`}</style>
		</div>
	);
};

export default Title;
