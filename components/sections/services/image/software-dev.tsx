export const SoftwareDev = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
                {/* <!-- Background --> */}
                <rect width="400" height="300" fill="#ecfdf5" rx="20" ry="20" />

                {/* <!-- Decorative elements --> */}
                <circle cx="50" cy="50" r="35" fill="#10b981" opacity="0.1" />
                <circle cx="350" cy="260" r="40" fill="#0d9488" opacity="0.1" />

                {/* <!-- Monitor --> */}
                <rect x="100" y="60" width="200" height="130" rx="5" ry="5" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                <rect x="100" y="60" width="200" height="110" fill="#f1f5f9" />
                <rect x="140" y="190" width="120" height="10" rx="3" ry="3" fill="#cbd5e1" />
                <rect x="180" y="200" width="40" height="40" rx="3" ry="3" fill="#cbd5e1" />

                {/* <!-- Code elements on screen --> */}
                <rect x="120" y="80" width="160" height="10" rx="2" ry="2" fill="#10b981" opacity="0.7" />
                <rect x="120" y="100" width="100" height="8" rx="2" ry="2" fill="#0d9488" opacity="0.5" />
                <rect x="130" y="115" width="120" height="8" rx="2" ry="2" fill="#0d9488" opacity="0.5" />
                <rect x="140" y="130" width="90" height="8" rx="2" ry="2" fill="#0d9488" opacity="0.5" />
                <rect x="120" y="145" width="130" height="8" rx="2" ry="2" fill="#10b981" opacity="0.7" />

                {/* <!-- Gear icons representing custom software components --> */}
                <circle cx="310" cy="90" r="15" fill="#10b981" opacity="0.2" />
                <path d="M310,83 L310,97 M303,90 L317,90 M304,84 L316,96 M304,96 L316,84" fill="none" stroke="#10b981" strokeWidth="2" />
                <circle cx="310" cy="90" r="5" fill="#10b981" />

                <circle cx="310" cy="130" r="15" fill="#0d9488" opacity="0.2" />
                <path d="M310,123 L310,137 M303,130 L317,130 M304,124 L316,136 M304,136 L316,124" fill="none" stroke="#0d9488" strokeWidth="2" />
                <circle cx="310" cy="130" r="5" fill="#0d9488" />

                {/* <!-- Database icon --> */}
                <ellipse cx="70" cy="150" rx="20" ry="10" fill="white" stroke="#0d9488" strokeWidth="2" />
                <path d="M50,150 v40 a20,10 0 0,0 40,0 v-40" fill="none" stroke="#0d9488" strokeWidth="2" />
                <path d="M50,170 a20,10 0 0,0 40,0" fill="none" stroke="#0d9488" strokeWidth="2" />

                {/* <!-- Connecting lines representing system integrations --> */}
                <path d="M90,150 L100,120" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4,2" />
                <path d="M90,170 L100,150" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4,2" />
                <path d="M90,190 L100,180" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4,2" />
            </svg>
        </>
    )
} 