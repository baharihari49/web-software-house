export const MobileApp = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
                {/* <!-- Background --> */}
                <rect width="400" height="300" fill="#faf5ff" rx="20" ry="20" />

                {/* <!-- Decorative elements --> */}
                <circle cx="60" cy="60" r="40" fill="#9333ea" opacity="0.1" />
                <circle cx="340" cy="240" r="35" fill="#c026d3" opacity="0.1" />

                {/* <!-- Mobile devices --> */}
                {/* <!-- Phone 1 --> */}
                <rect x="110" y="60" width="70" height="150" rx="10" ry="10" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                <rect x="110" y="75" width="70" height="120" fill="#f5f3ff" />
                <rect x="135" y="65" width="20" height="4" rx="2" ry="2" fill="#e2e8f0" />
                <circle cx="145" cy="200" r="8" fill="#e2e8f0" />

                {/* <!-- App UI elements on Phone 1 --> */}
                <rect x="120" y="85" width="50" height="10" rx="3" ry="3" fill="#9333ea" />
                <rect x="120" y="105" width="50" height="40" rx="4" ry="4" fill="#a855f7" opacity="0.7" />
                <rect x="120" y="155" width="22" height="22" rx="4" ry="4" fill="#c084fc" opacity="0.5" />
                <rect x="148" y="155" width="22" height="22" rx="4" ry="4" fill="#c084fc" opacity="0.7" />

                {/* <!-- Phone 2 --> */}
                <rect x="220" y="90" width="70" height="150" rx="10" ry="10" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                <rect x="220" y="105" width="70" height="120" fill="#f5f3ff" />
                <rect x="245" y="95" width="20" height="4" rx="2" ry="2" fill="#e2e8f0" />
                <circle cx="255" cy="230" r="8" fill="#e2e8f0" />

                {/* <!-- App UI elements on Phone 2 --> */}
                <rect x="230" y="115" width="50" height="10" rx="3" ry="3" fill="#9333ea" />
                <circle cx="255" cy="155" r="20" fill="#c026d3" opacity="0.6" />
                <rect x="230" y="185" width="22" height="22" rx="4" ry="4" fill="#c084fc" opacity="0.5" />
                <rect x="258" y="185" width="22" height="22" rx="4" ry="4" fill="#c084fc" opacity="0.7" />

                {/* <!-- Connecting lines --> */}
                <path d="M180,120 C200,120 210,160 220,160" fill="none" stroke="#9333ea" strokeWidth="1.5" strokeDasharray="4,2" />
                <path d="M180,150 C200,150 210,170 220,170" fill="none" stroke="#9333ea" strokeWidth="1.5" strokeDasharray="4,2" />

                {/* <!-- Code brackets --> */}
                <path d="M170,60 L190,70 L170,80" fill="none" stroke="#9333ea" strokeWidth="2" />
                <path d="M190,200 L170,210 L190,220" fill="none" stroke="#9333ea" strokeWidth="2" />
            </svg>
        </>
    )
}