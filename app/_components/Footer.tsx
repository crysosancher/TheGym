import React from 'react';
import { MdOutlineSportsGymnastics } from 'react-icons/md';
import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaYoutube,
	FaLinkedin,
} from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Footer = () => {
	const footerLinks = [
		{
			title: 'Company',
			links: [
				{ name: 'About Us', href: '/about' },
				{ name: 'Our Team', href: '/team' },
				{ name: 'Careers', href: '/careers' },
				{ name: 'Blog', href: '/blog' },
			],
		},
		{
			title: 'Services',
			links: [
				{ name: 'Personal Training', href: '/personal-training' },
				{ name: 'Group Classes', href: '/group-classes' },
				{ name: 'Nutrition Plans', href: '/nutrition' },
				{ name: 'Online Coaching', href: '/online-coaching' },
			],
		},
		{
			title: 'Support',
			links: [
				{ name: 'Help Center', href: '/help' },
				{ name: 'Contact Us', href: '/contact' },
				{ name: 'Privacy Policy', href: '/privacy' },
				{ name: 'Terms of Service', href: '/terms' },
			],
		},
	];

	const socialLinks = [
		{ Icon: FaFacebook, href: '#', label: 'Facebook' },
		{ Icon: FaTwitter, href: '#', label: 'Twitter' },
		{ Icon: FaInstagram, href: '#', label: 'Instagram' },
		{ Icon: FaYoutube, href: '#', label: 'YouTube' },
		{ Icon: FaLinkedin, href: '#', label: 'LinkedIn' },
	];

	const contactInfo = [
		{ Icon: HiMail, text: 'support@fitnesshub.com' },
		{ Icon: HiPhone, text: '+1 (555) 123-4567' },
		{
			Icon: HiLocationMarker,
			text: '123 Fitness St, Health City, HC 12345',
		},
	];

	return (
		<footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden w-full">
			{/* Background Effects */}
			<div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
			<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>

			{/* Floating Background Elements */}
			<div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
			<div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Main Footer Content */}
				<div className="pt-16 pb-8">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
						{/* Brand Section */}
						<div className="lg:col-span-1">
							<div className="flex items-center gap-3 mb-6">
								<div className="relative">
									<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-sm opacity-30"></div>
									<MdOutlineSportsGymnastics
										size={40}
										className="relative text-white"
									/>
								</div>
								<span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
									FitnessHub
								</span>
							</div>

							<p className="text-slate-300 leading-relaxed mb-6 text-sm lg:text-base">
								Transform your body and mind with our
								comprehensive fitness programs. Join thousands
								who have achieved their fitness goals with us.
							</p>

							{/* Contact Info */}
							<div className="space-y-3">
								{contactInfo.map((item, index) => {
									const Icon = item.Icon;
									return (
										<div
											key={index}
											className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-300">
											<div className="w-8 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
												<Icon
													className="text-blue-400"
													size={16}
												/>
											</div>
											<span className="text-sm">
												{item.text}
											</span>
										</div>
									);
								})}
							</div>
						</div>

						{/* Footer Links */}
						{footerLinks.map((section, index) => (
							<div
								key={index}
								className="lg:col-span-1">
								<h3 className="text-lg font-semibold text-white mb-6 relative">
									{section.title}
									<div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
								</h3>
								<ul className="space-y-3">
									{section.links.map((link, linkIndex) => (
										<li key={linkIndex}>
											<a
												href={link.href}
												className="text-slate-300 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 inline-block relative group">
												{link.name}
												<div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				{/* Newsletter Section */}
				<div className="py-8 border-t border-slate-700/50">
					<div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl p-6 lg:p-8 border border-slate-600/30">
						<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
							<div className="flex-1">
								<h3 className="text-xl font-bold text-white mb-2">
									Stay Updated with FitnessHub
								</h3>
								<p className="text-slate-300 text-sm lg:text-base">
									Get the latest workout tips, nutrition
									advice, and exclusive offers delivered to
									your inbox.
								</p>
							</div>
							<div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
								<input
									type="email"
									placeholder="Enter your email"
									className="px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-slate-600/30 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 min-w-0 flex-1 lg:w-64"
								/>
								<button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
									Subscribe
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="py-8 border-t border-slate-700/50">
					<div className="flex flex-col lg:flex-row items-center justify-between gap-6">
						{/* Copyright */}
						<div className="text-center lg:text-left">
							<p className="text-slate-400 text-sm">
								© 2024{' '}
								<span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
									FitnessHub™
								</span>
								. All rights reserved.
							</p>
						</div>

						{/* Social Links */}
						<div className="flex items-center gap-4">
							<span className="text-slate-400 text-sm mr-2">
								Follow us:
							</span>
							{socialLinks.map((social, index) => {
								const Icon = social.Icon;
								return (
									<a
										key={index}
										href={social.href}
										aria-label={social.label}
										className="w-10 h-10 bg-gradient-to-r from-slate-700 to-slate-600 rounded-xl flex items-center justify-center text-slate-300 hover:from-blue-500 hover:to-purple-600 hover:text-white transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
										<Icon size={18} />
									</a>
								);
							})}
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Gradient Line */}
			<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
		</footer>
	);
};

export default Footer;
