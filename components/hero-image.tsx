"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// Pre-defined particle data to prevent hydration mismatches
const PARTICLES_DATA = [
  { width: 3.58, height: 2.61, top: 27.82, left: 8.67, opacity: 0.66 },
  { width: 4.91, height: 5.99, top: 42.54, left: 26.79, opacity: 0.69 },
  { width: 4.00, height: 5.00, top: 90.19, left: 64.19, opacity: 0.66 },
  { width: 3.60, height: 4.75, top: 57.99, left: 4.36, opacity: 0.52 },
  { width: 2.82, height: 3.24, top: 53.19, left: 41.62, opacity: 0.49 },
  { width: 2.11, height: 5.92, top: 37.21, left: 65.24, opacity: 0.35 },
  { width: 3.25, height: 3.55, top: 0.59, left: 47.68, opacity: 0.35 },
  { width: 4.26, height: 3.57, top: 37.60, left: 62.36, opacity: 0.64 },
  { width: 4.64, height: 4.35, top: 68.29, left: 42.40, opacity: 0.21 },
  { width: 4.41, height: 3.79, top: 57.70, left: 15.10, opacity: 0.39 },
  { width: 3.34, height: 4.47, top: 28.41, left: 96.78, opacity: 0.40 },
  { width: 3.51, height: 3.04, top: 99.92, left: 53.15, opacity: 0.58 },
  { width: 2.01, height: 5.49, top: 56.92, left: 61.55, opacity: 0.22 },
  { width: 3.93, height: 2.37, top: 90.77, left: 39.71, opacity: 0.46 },
  { width: 3.15, height: 4.88, top: 73.85, left: 37.68, opacity: 0.59 }
];

export const HeroImage = ({ particlesData = PARTICLES_DATA }) => {
    const svgRef = useRef(null);
    const [isClient, setIsClient] = useState(false);
    
    // Mark component as mounted on client-side
    useEffect(() => {
        setIsClient(true);
    }, []);
    
    useEffect(() => {
        if (!svgRef.current || !isClient) return;
        
        const ctx = gsap.context(() => {
            // Floating animation for blob shapes
            gsap.to(".blob", {
                y: -15,
                scale: 1.05,
                duration: 3.5,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
                stagger: 0.2,
            });
            
            // Particle animation - only run on client
            gsap.to(".particle", {
                y: "random(-20, 20)",
                x: "random(-20, 20)",
                scale: "random(0.8, 1.2)",
                duration: "random(2, 4)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.1,
            });
            
            // Pulse animation for glass cards
            gsap.to(".glass-card", {
                boxShadow: "0 8px 32px rgba(138, 75, 255, 0.3)",
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.5,
            });
            
            // Dashboard elements animation
            gsap.from(".dashboard-element", {
                y: 20,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "back.out(1.7)",
            });
            
            // Data flow animation
            gsap.from(".data-flow", {
                drawSVG: "0%",
                duration: 1.5,
                stagger: 0.2,
                ease: "power2.inOut",
            });
            
            // Rotate the 3D cube slowly
            gsap.to(".cube", {
                rotationY: 360,
                transformOrigin: "center center",
                duration: 20,
                repeat: -1,
                ease: "none",
            });
            
            // Wave animation
            gsap.to(".wave-path", {
                morphSVG: { shape: ".wave-path-alt", shapeIndex: "auto" },
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        }, svgRef);
        
        return () => ctx.revert();
    }, [isClient]); // Add isClient dependency to ensure animations run only after hydration
    
    return (
        <div className="w-full h-full relative" ref={svgRef}>
            {/* Abstract Blobs in Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="blob absolute w-64 h-64 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-400/20 blur-2xl top-0 right-0 transform translate-x-1/4 -translate-y-1/4"></div>
                <div className="blob absolute w-80 h-80 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-600/20 blur-2xl bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4"></div>
                <div className="blob absolute w-56 h-56 rounded-full bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 blur-2xl top-1/2 left-1/4 transform -translate-y-1/2"></div>
            </div>
            
            {/* Floating Particles with pre-defined values */}
            <div className="absolute inset-0 overflow-hidden">
                {particlesData.map((particle, i) => (
                    <div 
                        key={i} 
                        className="particle absolute rounded-full bg-white"
                        style={{
                            width: `${particle.width}px`,
                            height: `${particle.height}px`,
                            top: `${particle.top}%`,
                            left: `${particle.left}%`,
                            opacity: particle.opacity,
                        }}
                    ></div>
                ))}
            </div>
            
            {/* Main SVG Content */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" className="w-full h-full relative z-10">
                <defs>
                    {/* Gradients */}
                    <linearGradient id="glass-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.03" />
                    </linearGradient>
                    
                    <linearGradient id="primary-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                    
                    <linearGradient id="secondary-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0EA5E9" />
                        <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>
                    
                    <linearGradient id="accent-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F59E0B" />
                        <stop offset="100%" stopColor="#EF4444" />
                    </linearGradient>
                    
                    {/* Filters */}
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="8" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    
                    <filter id="glass-blur" x="-10%" y="-10%" width="120%" height="120%">
                        <feGaussianBlur stdDeviation="5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    
                    {/* Clips */}
                    <clipPath id="dashboard-clip">
                        <rect x="250" y="130" width="300" height="200" rx="16" />
                    </clipPath>
                </defs>
                
                {/* Central Dashboard */}
                <g className="dashboard">
                    {/* Main Glass Card */}
                    <rect 
                        className="glass-card"
                        x="250" y="130" width="300" height="200" rx="16" 
                        fill="url(#glass-gradient)"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="1.5"
                        style={{ filter: "url(#glass-blur)" }}
                    />
                    
                    {/* Dashboard Header */}
                    <rect 
                        className="dashboard-element"
                        x="266" y="146" width="268" height="32" rx="8" 
                        fill="rgba(255,255,255,0.1)" 
                    />
                    <circle className="dashboard-element" cx="284" cy="162" r="8" fill="#8B5CF6" />
                    <rect className="dashboard-element" x="300" y="157" width="80" height="10" rx="2" fill="rgba(255,255,255,0.6)" />
                    <circle className="dashboard-element" cx="510" cy="162" r="6" fill="rgba(255,255,255,0.3)" />
                    <circle className="dashboard-element" cx="490" cy="162" r="6" fill="rgba(255,255,255,0.3)" />
                    
                    {/* Dashboard Content */}
                    <g clipPath="url(#dashboard-clip)">
                        {/* Data Visualization */}
                        <g transform="translate(266, 190)">
                            {/* Chart background */}
                            <rect className="dashboard-element" width="268" height="120" rx="8" fill="rgba(15,23,42,0.7)" />
                            
                            {/* Chart Title */}
                            <text className="dashboard-element" x="15" y="20" fontSize="12" fill="rgba(255,255,255,0.8)" fontFamily="Arial">Analytics Overview</text>
                            
                            {/* Chart Grid */}
                            <line className="dashboard-element" x1="0" y1="40" x2="268" y2="40" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                            <line className="dashboard-element" x1="0" y1="70" x2="268" y2="70" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                            <line className="dashboard-element" x1="0" y1="100" x2="268" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                            
                            {/* Chart Data */}
                            <path 
                                className="dashboard-element"
                                d="M15,90 C40,60 60,80 85,60 S130,30 155,40 S195,70 215,50 S240,55 255,35" 
                                fill="none" 
                                stroke="url(#primary-gradient)" 
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                            
                            <path 
                                className="dashboard-element"
                                d="M15,100 C40,85 60,95 85,80 S130,70 155,75 S195,85 215,70 S240,75 255,65" 
                                fill="none" 
                                stroke="url(#secondary-gradient)" 
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                            
                            {/* Data Points */}
                            <circle className="dashboard-element" cx="15" cy="90" r="4" fill="url(#primary-gradient)" />
                            <circle className="dashboard-element" cx="85" cy="60" r="4" fill="url(#primary-gradient)" />
                            <circle className="dashboard-element" cx="155" cy="40" r="4" fill="url(#primary-gradient)" />
                            <circle className="dashboard-element" cx="215" cy="50" r="4" fill="url(#primary-gradient)" />
                            <circle className="dashboard-element" cx="255" cy="35" r="4" fill="url(#primary-gradient)" />
                            
                            <circle className="dashboard-element" cx="15" cy="100" r="4" fill="url(#secondary-gradient)" />
                            <circle className="dashboard-element" cx="85" cy="80" r="4" fill="url(#secondary-gradient)" />
                            <circle className="dashboard-element" cx="155" cy="75" r="4" fill="url(#secondary-gradient)" />
                            <circle className="dashboard-element" cx="215" cy="70" r="4" fill="url(#secondary-gradient)" />
                            <circle className="dashboard-element" cx="255" cy="65" r="4" fill="url(#secondary-gradient)" />
                        </g>
                    </g>
                </g>
                
                {/* Connected Elements */}
                <g className="connected-elements">
                    {/* 3D Cube */}
                    <g className="cube" transform="translate(175, 200)">
                        {/* Front face */}
                        <rect width="60" height="60" fill="url(#glass-gradient)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                        
                        {/* Top face */}
                        <polygon points="0,0 60,0 75,-15 15,-15" fill="url(#primary-gradient)" fillOpacity="0.4" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                        
                        {/* Right face */}
                        <polygon points="60,0 75,-15 75,45 60,60" fill="url(#primary-gradient)" fillOpacity="0.2" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                        
                        {/* Cube content */}
                        <text x="20" y="35" fontSize="14" fill="white" fontFamily="Arial">Data</text>
                    </g>
                    
                    {/* Mobile Device */}
                    <g transform="translate(570, 180)">
                        {/* Device body */}
                        <rect width="70" height="120" rx="10" fill="url(#glass-gradient)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                        
                        {/* Screen */}
                        <rect x="5" y="15" width="60" height="90" rx="2" fill="rgba(15,23,42,0.8)" />
                        
                        {/* App content */}
                        <rect x="10" y="25" width="50" height="10" rx="2" fill="rgba(255,255,255,0.2)" />
                        <rect x="10" y="40" width="50" height="25" rx="2" fill="url(#secondary-gradient)" fillOpacity="0.6" />
                        <rect x="10" y="70" width="22" height="25" rx="2" fill="url(#primary-gradient)" fillOpacity="0.6" />
                        <rect x="38" y="70" width="22" height="25" rx="2" fill="url(#accent-gradient)" fillOpacity="0.6" />
                        
                        {/* Home button */}
                        <circle cx="35" cy="115" r="8" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                    </g>
                    
                    {/* Connection Paths */}
                    <path 
                        className="data-flow" 
                        d="M235,230 C280,210 320,200 250,165" 
                        fill="none" 
                        stroke="url(#primary-gradient)" 
                        strokeWidth="2" 
                        strokeDasharray="5,3"
                    />
                    
                    <path 
                        className="data-flow" 
                        d="M570,230 C540,210 490,200 550,165" 
                        fill="none" 
                        stroke="url(#primary-gradient)" 
                        strokeWidth="2" 
                        strokeDasharray="5,3"
                    />
                    
                    {/* Connection nodes */}
                    <circle className="dashboard-element" cx="250" cy="165" r="6" fill="url(#primary-gradient)" />
                    <circle className="dashboard-element" cx="550" cy="165" r="6" fill="url(#primary-gradient)" />
                    
                    {/* Data flowing animation */}
                    <circle className="data-particle" cx="235" cy="230" r="3" fill="white">
                        <animateMotion 
                            path="M0,0 C45,-20 85,-30 15,-65" 
                            dur="3s" 
                            repeatCount="indefinite" 
                        />
                    </circle>
                    
                    <circle className="data-particle" cx="570" cy="230" r="3" fill="white">
                        <animateMotion 
                            path="M0,0 C-30,-20 -80,-30 -20,-65" 
                            dur="2.5s" 
                            repeatCount="indefinite" 
                        />
                    </circle>
                </g>
                
                {/* Cloud Network - Modern Cloud Shape */}
                <g transform="translate(400, 90)">
                    <path 
                        d="M-100,20 C-80,-20 -30,-30 0,-20 C20,-40 60,-40 80,-20 C110,-30 140,-10 130,20 C140,40 120,60 90,50 C70,70 30,70 10,50 C-20,65 -60,60 -80,40 C-110,45 -120,30 -100,20" 
                        fill="url(#glass-gradient)"
                        stroke="rgba(255,255,255,0.3)"
                        strokeWidth="1.5"
                    />
                    
                    {/* Cloud Content */}
                    <text x="0" y="10" fontSize="12" fill="rgba(255,255,255,0.9)" textAnchor="middle" fontFamily="Arial">Digital Ecosystem</text>
                    
                    {/* Connection to Dashboard */}
                    <path 
                        className="data-flow" 
                        d="M0,50 L0,90" 
                        stroke="url(#primary-gradient)" 
                        strokeWidth="2" 
                        strokeDasharray="5,3"
                    />
                    
                    <circle cx="0" cy="50" r="4" fill="url(#primary-gradient)" />
                    
                    {/* Data particles flowing down */}
                    <circle r="2" fill="white">
                        <animateMotion path="M0,50 L0,90" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                    <circle r="2" fill="white">
                        <animateMotion path="M0,50 L0,90" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
                    </circle>
                </g>
                
                {/* Bottom Wave Animation */}
                <g transform="translate(0, 450)">
                    <path 
                        className="wave-path"
                        d="M0,50 C100,0 200,100 300,50 C400,0 500,100 600,50 C700,0 800,100 800,50 L800,150 L0,150 Z" 
                        fill="url(#primary-gradient)" 
                        fillOpacity="0.2"
                    />
                    <path 
                        className="wave-path-alt"
                        d="M0,50 C100,100 200,0 300,50 C400,100 500,0 600,50 C700,100 800,0 800,50 L800,150 L0,150 Z" 
                        fill="url(#primary-gradient)" 
                        fillOpacity="0" 
                        style={{ visibility: "hidden" }}
                    />
                </g>
                
                {/* Floating Glass Cards - Stats */}
                <g className="stats">
                    {/* Growth Metric */}
                    <g transform="translate(170, 350)">
                        <rect 
                            className="glass-card"
                            width="110" height="70" rx="12" 
                            fill="url(#glass-gradient)"
                            stroke="rgba(255,255,255,0.2)"
                            strokeWidth="1"
                        />
                        <text x="55" y="25" fontSize="10" fill="rgba(255,255,255,0.7)" textAnchor="middle" fontFamily="Arial">ROI GROWTH</text>
                        <text x="55" y="50" fontSize="22" fill="white" fontWeight="bold" textAnchor="middle" fontFamily="Arial">+287%</text>
                    </g>
                    
                    {/* User Metric */}
                    <g transform="translate(345, 350)">
                        <rect 
                            className="glass-card"
                            width="110" height="70" rx="12" 
                            fill="url(#glass-gradient)"
                            stroke="rgba(255,255,255,0.2)"
                            strokeWidth="1"
                        />
                        <text x="55" y="25" fontSize="10" fill="rgba(255,255,255,0.7)" textAnchor="middle" fontFamily="Arial">ACTIVE USERS</text>
                        <text x="55" y="50" fontSize="22" fill="white" fontWeight="bold" textAnchor="middle" fontFamily="Arial">85.4K</text>
                    </g>
                    
                    {/* Revenue Metric */}
                    <g transform="translate(520, 350)">
                        <rect 
                            className="glass-card"
                            width="110" height="70" rx="12" 
                            fill="url(#glass-gradient)"
                            stroke="rgba(255,255,255,0.2)"
                            strokeWidth="1"
                        />
                        <text x="55" y="25" fontSize="10" fill="rgba(255,255,255,0.7)" textAnchor="middle" fontFamily="Arial">REVENUE</text>
                        <text x="55" y="50" fontSize="22" fill="white" fontWeight="bold" textAnchor="middle" fontFamily="Arial">$1.2M</text>
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default HeroImage;