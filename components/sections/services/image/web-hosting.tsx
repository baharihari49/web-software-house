export const WebHosting = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
                {/* <!-- Background --> */}
                <rect width="400" height="300" fill="#f0f9ff" rx="20" ry="20" />

                {/* <!-- Decorative elements --> */}
                <circle cx="60" cy="60" r="40" fill="#0ea5e9" opacity="0.1" />
                <circle cx="340" cy="240" r="35" fill="#06b6d4" opacity="0.1" />

                {/* <!-- Server rack --> */}
                <rect x="70" y="90" width="120" height="160" rx="5" ry="5" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />

                {/* <!-- Server units --> */}
                <rect x="80" y="100" width="100" height="25" rx="3" ry="3" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
                <rect x="80" y="135" width="100" height="25" rx="3" ry="3" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
                <rect x="80" y="170" width="100" height="25" rx="3" ry="3" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
                <rect x="80" y="205" width="100" height="25" rx="3" ry="3" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />

                {/* <!-- Server LEDs and details --> */}
                <circle cx="90" cy="112" r="3" fill="#22d3ee" />
                <circle cx="100" cy="112" r="3" fill="#10b981" />
                <circle cx="90" cy="147" r="3" fill="#22d3ee" />
                <circle cx="100" cy="147" r="3" fill="#10b981" />
                <circle cx="90" cy="182" r="3" fill="#22d3ee" />
                <circle cx="100" cy="182" r="3" fill="#10b981" />
                <circle cx="90" cy="217" r="3" fill="#22d3ee" />
                <circle cx="100" cy="217" r="3" fill="#10b981" />

                <rect x="115" y="107" width="55" height="4" rx="1" ry="1" fill="#cbd5e1" />
                <rect x="115" y="115" width="35" height="4" rx="1" ry="1" fill="#cbd5e1" />
                <rect x="115" y="142" width="55" height="4" rx="1" ry="1" fill="#cbd5e1" />
                <rect x="115" y="150" width="35" height="4" rx="1" ry="1" fill="#cbd5e1" />
                <rect x="115" y="177" width="55" height="4" rx="1" ry="1" fill="#cbd5e1" />
                <rect x="115" y="185" width="35" height="4" rx="1" ry="1" fill="#cbd5e1" />
                <rect x="115" y="212" width="55" height="4" rx="1" ry="1" fill="#cbd5e1" />
                <rect x="115" y="220" width="35" height="4" rx="1" ry="1" fill="#cbd5e1" />

                {/* <!-- Website with shield (security) --> */}
                <rect x="220" y="90" width="120" height="100" rx="5" ry="5" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                <rect x="220" y="90" width="120" height="15" rx="5" ry="5" fill="#f1f5f9" />
                <circle cx="230" cy="97.5" r="3" fill="#f43f5e" />
                <circle cx="240" cy="97.5" r="3" fill="#f59e0b" />
                <circle cx="250" cy="97.5" r="3" fill="#10b981" />

                {/* <!-- Website content --> */}
                <rect x="230" y="115" width="60" height="6" rx="1" ry="1" fill="#0ea5e9" />
                <rect x="230" y="130" width="100" height="4" rx="1" ry="1" fill="#94a3b8" />
                <rect x="230" y="140" width="90" height="4" rx="1" ry="1" fill="#94a3b8" />
                <rect x="230" y="150" width="80" height="4" rx="1" ry="1" fill="#94a3b8" />
                <rect x="230" y="165" width="30" height="10" rx="2" ry="2" fill="#0ea5e9" />

                {/* <!-- Shield for security --> */}
                <path d="M280,220 l-20,-10 l-20,10 v-30 a40,20 0 0,1 40,0 z" fill="#0ea5e9" opacity="0.2" stroke="#0ea5e9" strokeWidth="2" />
                <path d="M268,205 l-8,-8 l-5,5 l8,8 l15,-15 l-5,-5 z" fill="none" stroke="#0ea5e9" strokeWidth="2" />

                {/* <!-- Connection lines from server to website --> */}
                <path d="M190,120 C205,120 210,120 220,120" fill="none" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="4,2" />
                <path d="M190,150 C205,150 210,140 220,140" fill="none" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="4,2" />
                <path d="M190,180 C205,180 210,160 220,160" fill="none" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="4,2" />

                {/* <!-- Cloud symbol --> */}
                <ellipse cx="270" cy="60" rx="25" ry="15" fill="#0ea5e9" opacity="0.2" />
                <ellipse cx="255" cy="50" rx="15" ry="10" fill="#0ea5e9" opacity="0.2" />
                <ellipse cx="285" cy="50" rx="15" ry="10" fill="#0ea5e9" opacity="0.2" />

                {/* <!-- Backup symbol --> */}
                <circle cx="320" cy="170" r="20" fill="#0ea5e9" opacity="0.1" />
                <path d="M320,160 v20 M310,170 h20" stroke="#0ea5e9" strokeWidth="2" />
            </svg>
        </>
    )
}