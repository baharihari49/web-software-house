

export const WebsiteDevelopment = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
                {/* <!-- Background --> */}
                <rect width="400" height="300" fill="#f0f4ff" rx="20" ry="20" />

                {/* <!-- Decorative elements --> */}
                <circle cx="50" cy="50" r="30" fill="#3b82f6" opacity="0.1" />
                <circle cx="350" cy="250" r="40" fill="#4f46e5" opacity="0.1" />

                {/* <!-- Browser window --> */}
                <rect x="70" y="60" width="260" height="180" rx="8" ry="8" fill="white" stroke="#e2e8f0" strokeWidth="2" />

                {/* <!-- Browser top bar --> */}
                <rect x="70" y="60" width="260" height="25" rx="8" ry="8" fill="#f1f5f9" />
                <circle cx="90" cy="72.5" r="5" fill="#ef4444" />
                <circle cx="110" cy="72.5" r="5" fill="#f59e0b" />
                <circle cx="130" cy="72.5" r="5" fill="#10b981" />

                {/* <!-- Browser address bar --> */}
                <rect x="145" y="67" width="170" height="15" rx="3" ry="3" fill="white" stroke="#cbd5e1" strokeWidth="1" />
                <circle cx="155" cy="75" r="3" fill="#3b82f6" />

                {/* <!-- Website content --> */}
                <rect x="90" y="100" width="70" height="10" rx="2" ry="2" fill="#3b82f6" />
                <rect x="90" y="120" width="220" height="5" rx="2" ry="2" fill="#94a3b8" />
                <rect x="90" y="130" width="180" height="5" rx="2" ry="2" fill="#94a3b8" />
                <rect x="90" y="140" width="200" height="5" rx="2" ry="2" fill="#94a3b8" />

                {/* <!-- Website image placeholder --> */}
                <rect x="90" y="160" width="100" height="60" rx="4" ry="4" fill="#dbeafe" />
                <rect x="200" y="160" width="70" height="25" rx="4" ry="4" fill="#93c5fd" />
                <rect x="200" y="195" width="70" height="25" rx="4" ry="4" fill="#60a5fa" />

                {/* <!-- Globe icon --> */}
                <circle cx="140" cy="190" r="20" fill="#3b82f6" opacity="0.2" />
                <path d="M130,190 a20,20 0 0,1 20,0 a20,20 0 0,1 0,20 a20,20 0 0,1 -20,0 a20,20 0 0,1 0,-20" fill="none" stroke="#3b82f6" strokeWidth="2" />
                <path d="M120,190 h40 M140,170 v40 M130,175 a30,30 0 0,0 20,0 M130,205 a30,30 0 0,1 20,0" fill="none" stroke="#3b82f6" strokeWidth="2" />
            </svg>
        </>
    )
}