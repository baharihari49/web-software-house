"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export const ImageAbout = () => {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (!svgRef.current) return;

        const svg = svgRef.current;
        const ctx = gsap.context(() => {
            // Animasi untuk main frame
            gsap.from(".main-frame", {
                scale: 0.9,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            });

            // Animasi untuk decorative circles
            gsap.from(".deco-circle", {
                scale: 0,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "back.out(1.7)"
            });

            // Animasi untuk glow circles
            gsap.from(".glow-circle", {
                opacity: 0,
                scale: 0.5,
                duration: 1.2,
                stagger: 0.2,
                delay: 0.3,
                ease: "power2.out"
            });

            // Pulsing animation for glow circles
            gsap.to(".glow-circle", {
                scale: 1.1,
                opacity: 0.8,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.5
            });

            // Animasi untuk dashboard card
            gsap.from(".dashboard-card", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: 0.5,
                ease: "power3.out"
            });

            // Animasi untuk dashboard elements
            gsap.from(".dashboard-element", {
                y: 20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                delay: 0.8,
                ease: "power2.out"
            });

            // Animasi untuk graph
            gsap.from(".graph-line", {
                drawSVG: "0%",
                duration: 1.5,
                delay: 1,
                ease: "power2.inOut"
            });

            gsap.from(".graph-dot", {
                scale: 0,
                opacity: 0,
                duration: 0.3,
                stagger: 0.03,
                delay: 1.2,
                ease: "back.out(3)"
            });

            // Animasi untuk metric cards
            gsap.from(".metric-card", {
                y: 20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.15,
                delay: 1.5,
                ease: "back.out(1.7)"
            });

            // Animasi untuk premium badge
            gsap.from(".premium-badge", {
                y: -20,
                opacity: 0,
                duration: 0.8,
                delay: 2.5,
                ease: "elastic.out(1, 0.6)"
            });

            // Animasi untuk code elements
            gsap.from(".code-element", {
                opacity: 0,
                duration: 0.5,
                stagger: 0.15,
                delay: 2.7,
                ease: "power2.out"
            });

            // Animasi untuk tech symbols
            gsap.from(".tech-symbol", {
                scale: 0,
                rotation: 90,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                delay: 3,
                ease: "back.out(1.7)"
            });

            // Animasi untuk bottom lines
            gsap.from(".bottom-line", {
                scaleX: 0,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                delay: 3.2,
                ease: "power2.inOut",
                transformOrigin: "left center"
            });


        }, svg);

        return () => ctx.revert();
    }, []);

    return (
        <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
            {/* Background and gradient definitions */}
            <defs>
                <linearGradient id="outerFrameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38B6FF" />
                    <stop offset="50%" stopColor="#7B6EE7" />
                    <stop offset="100%" stopColor="#D961F4" />
                </linearGradient>

                <linearGradient id="innerCardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4568DC" />
                    <stop offset="100%" stopColor="#8A3DF0" />
                </linearGradient>

                <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#23F0C7" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#38B6FF" stopOpacity="0.3" />
                </linearGradient>

                <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D961F4" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#8A3DF0" stopOpacity="0.3" />
                </linearGradient>

                <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="0.3" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="0.4" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                {/* Pattern for background */}
                <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="1" fill="white" opacity="0.3" />
                </pattern>
            </defs>

            {/* Background */}
            <rect width="800" height="600" fill="white" />

            {/* Main outer frame with gradient - ENLARGED */}
            <rect className="main-frame" x="100" y="50" width="600" height="450" rx="20" fill="url(#outerFrameGradient)" filter="url(#dropShadow)" />

            {/* Background pattern */}
            <rect x="100" y="50" width="600" height="450" rx="20" fill="url(#dots)" />

            {/* Decorative elements */}
            <circle className="deco-circle" cx="100" cy="50" r="15" fill="#D961F4" />
            <circle className="deco-circle" cx="700" cy="500" r="15" fill="#38B6FF" />

            {/* Glow circles in background */}
            <circle className="glow-circle" cx="250" cy="150" r="70" fill="url(#glowGradient)" filter="url(#glow)" opacity="0.7" />
            <circle className="glow-circle" cx="600" cy="350" r="80" fill="url(#purpleGlow)" filter="url(#glow)" opacity="0.6" />

            {/* Digital dashboard card - ENLARGED AND CENTERED */}
            <rect className="dashboard-card" x="220" y="120" width="360" height="240" rx="10" fill="url(#innerCardGradient)" filter="url(#dropShadow)" />

            {/* Dashboard elements - ADJUSTED */}
            <rect className="dashboard-element" x="240" y="145" width="320" height="35" rx="5" fill="white" opacity="0.9" />
            <circle className="dashboard-element" cx="260" cy="162" r="9" fill="#23F0C7" />
            <text className="dashboard-element" x="278" y="166" fontFamily="Arial" fontSize="14" fill="#333" fontWeight="bold">Analytics Dashboard</text>

            {/* Analytics graph - ADJUSTED */}
            <rect className="dashboard-element" x="240" y="190" width="320" height="130" rx="5" fill="white" opacity="0.8" />

            {/* Graph lines - ADJUSTED */}
            <polyline className="graph-line" points="255,285 290,260 325,275 360,240 395,255 430,220 465,235 500,210 535,230"
                stroke="#23F0C7" strokeWidth="4" fill="none" />
            <polyline className="graph-line" points="255,285 290,270 325,290 360,260 395,275 430,250 465,265 500,235 535,250"
                stroke="#8A3DF0" strokeWidth="4" fill="none" />

            {/* Graph dots - ADJUSTED */}
            <circle className="graph-dot" cx="255" cy="285" r="5" fill="#23F0C7" />
            <circle className="graph-dot" cx="290" cy="260" r="5" fill="#23F0C7" />
            <circle className="graph-dot" cx="325" cy="275" r="5" fill="#23F0C7" />
            <circle className="graph-dot" cx="360" cy="240" r="5" fill="#23F0C7" />
            <circle className="graph-dot" cx="395" cy="255" r="5" fill="#23F0C7" />
            <circle className="graph-dot" cx="430" cy="220" r="5" fill="#23F0C7" />
            <circle className="graph-dot" cx="465" cy="235" r="5" fill="#23F0C7" />
            <circle className="graph-dot" cx="500" cy="210" r="5" fill="#23F0C7" />
            <circle className="graph-dot" cx="535" cy="230" r="5" fill="#23F0C7" />

            <circle className="graph-dot" cx="255" cy="285" r="5" fill="#8A3DF0" />
            <circle className="graph-dot" cx="290" cy="270" r="5" fill="#8A3DF0" />
            <circle className="graph-dot" cx="325" cy="290" r="5" fill="#8A3DF0" />
            <circle className="graph-dot" cx="360" cy="260" r="5" fill="#8A3DF0" />
            <circle className="graph-dot" cx="395" cy="275" r="5" fill="#8A3DF0" />
            <circle className="graph-dot" cx="430" cy="250" r="5" fill="#8A3DF0" />
            <circle className="graph-dot" cx="465" cy="265" r="5" fill="#8A3DF0" />
            <circle className="graph-dot" cx="500" cy="235" r="5" fill="#8A3DF0" />
            <circle className="graph-dot" cx="535" cy="250" r="5" fill="#8A3DF0" />

            {/* Metrics cards - ADJUSTED */}
            <rect className="metric-card" x="240" y="330" width="90" height="65" rx="5" fill="#4568DC" />
            <text className="metric-card" x="285" y="355" fontFamily="Arial" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">KLIEN</text>
            <text className="metric-card" x="285" y="380" fontFamily="Arial" fontSize="16" fill="white" textAnchor="middle" fontWeight="bold">50+</text>

            <rect className="metric-card" x="345" y="330" width="90" height="65" rx="5" fill="#8A3DF0" />
            <text className="metric-card" x="390" y="355" fontFamily="Arial" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">PROYEK</text>
            <text className="metric-card" x="390" y="380" fontFamily="Arial" fontSize="16" fill="white" textAnchor="middle" fontWeight="bold">100+</text>

            <rect className="metric-card" x="450" y="330" width="90" height="65" rx="5" fill="#D961F4" />
            <text className="metric-card" x="495" y="355" fontFamily="Arial" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">TIM</text>
            <text className="metric-card" x="495" y="380" fontFamily="Arial" fontSize="16" fill="white" textAnchor="middle" fontWeight="bold">15+</text>



            {/* Premium badge - ADJUSTED */}
            <g className="premium-badge" transform="translate(160, 95)">
                <rect x="0" y="0" width="90" height="32" rx="16" fill="#23F0C7" />
                <text x="45" y="21" fontFamily="Arial" fontSize="14" fill="#333" textAnchor="middle" fontWeight="bold">Premium</text>
                <circle cx="18" cy="16" r="8" fill="white" />
                <path d="M18,11 L21,16 L18,21 L15,16 Z" fill="#23F0C7" />
            </g>

            {/* Code elements at bottom - ADJUSTED */}
            <text className="code-element" x="180" y="420" fontFamily="monospace" fontSize="16" fill="white" opacity="0.8">&lt;div class=&quot;nexgen-solutions&quot;&gt;</text>
            <text className="code-element" x="200" y="445" fontFamily="monospace" fontSize="16" fill="white" opacity="0.8">&lt;h1&gt;About Us&lt;/h1&gt;</text>
            <text className="code-element" x="180" y="470" fontFamily="monospace" fontSize="16" fill="white" opacity="0.8">&lt;/div&gt;</text>

            {/* Decorative tech symbols floating around */}
            <g opacity="0.8">
                <text className="tech-symbol" x="130" y="100" fontFamily="monospace" fontSize="16" fill="white">&lt;/&gt;</text>
                <text className="tech-symbol" x="670" y="100" fontFamily="monospace" fontSize="16" fill="white">{ }</text>
                <text className="tech-symbol" x="140" y="450" fontFamily="monospace" fontSize="16" fill="white">&#9881;</text>
                <text className="tech-symbol" x="650" y="450" fontFamily="monospace" fontSize="16" fill="white">#</text>
            </g>

            {/* Bottom decorative lines - ADJUSTED */}
            <line className="bottom-line" x1="250" y1="520" x2="320" y2="520" stroke="#23F0C7" strokeWidth="3" strokeLinecap="round" />
            <line className="bottom-line" x1="350" y1="520" x2="450" y2="520" stroke="#7B6EE7" strokeWidth="3" strokeLinecap="round" />
            <line className="bottom-line" x1="480" y1="520" x2="550" y2="520" stroke="#D961F4" strokeWidth="3" strokeLinecap="round" />
        </svg>
    );
};