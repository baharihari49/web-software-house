export const UiUxDesignt = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
                {/* <!-- Background --> */}
                <rect width="400" height="300" fill="#fff7ed" rx="20" ry="20" />

                {/* <!-- Decorative elements --> */}
                <circle cx="40" cy="40" r="30" fill="#f59e0b" opacity="0.1" />
                <circle cx="360" cy="260" r="35" fill="#ea580c" opacity="0.1" />

                {/* <!-- Design elements --> */}
                {/* <!-- Color palette --> */}
                <rect x="50" y="80" width="25" height="25" rx="4" ry="4" fill="#f97316" />
                <rect x="50" y="115" width="25" height="25" rx="4" ry="4" fill="#fb923c" />
                <rect x="50" y="150" width="25" height="25" rx="4" ry="4" fill="#fdba74" />
                <rect x="50" y="185" width="25" height="25" rx="4" ry="4" fill="#ffedd5" />

                {/* <!-- UI design board --> */}
                <rect x="100" y="60" width="250" height="180" rx="6" ry="6" fill="white" stroke="#e2e8f0" strokeWidth="2" />

                {/* <!-- Design grid --> */}
                <path d="M100,90 H350 M100,120 H350 M100,150 H350 M100,180 H350 M100,210 H350 M130,60 V240 M160,60 V240 M190,60 V240 M220,60 V240 M250,60 V240 M280,60 V240 M310,60 V240 M340,60 V240" stroke="#f1f5f9" strokeWidth="1" />

                {/* <!-- UI elements on design board --> */}
                <rect x="115" y="70" width="80" height="10" rx="2" ry="2" fill="#ea580c" opacity="0.8" />

                {/* <!-- Navigation --> */}
                <rect x="115" y="100" width="60" height="8" rx="2" ry="2" fill="#f97316" opacity="0.6" />
                <rect x="185" y="100" width="60" height="8" rx="2" ry="2" fill="#cbd5e1" />
                <rect x="255" y="100" width="60" height="8" rx="2" ry="2" fill="#cbd5e1" />

                {/* <!-- Content blocks --> */}
                <rect x="115" y="130" width="95" height="60" rx="4" ry="4" fill="#ffedd5" />
                <rect x="220" y="130" width="95" height="60" rx="4" ry="4" fill="#ffedd5" />
                <rect x="125" y="145" width="75" height="6" rx="1" ry="1" fill="#f97316" />
                <rect x="125" y="158" width="65" height="4" rx="1" ry="1" fill="#94a3b8" />
                <rect x="125" y="168" width="70" height="4" rx="1" ry="1" fill="#94a3b8" />
                <rect x="230" y="145" width="75" height="6" rx="1" ry="1" fill="#f97316" />
                <rect x="230" y="158" width="65" height="4" rx="1" ry="1" fill="#94a3b8" />
                <rect x="230" y="168" width="70" height="4" rx="1" ry="1" fill="#94a3b8" />

                {/* <!-- Footer elements --> */}
                <rect x="115" y="200" width="200" height="25" rx="3" ry="3" fill="#ffedd5" />
                <rect x="125" y="210" width="50" height="6" rx="1" ry="1" fill="#f97316" />
                <circle cx="300" cy="212" r="8" fill="#f97316" />
                <circle cx="275" cy="212" r="8" fill="#fb923c" />

                {/* <!-- Ruler guides --> */}
                <rect x="100" y="40" width="250" height="15" fill="#f8fafc" />
                <rect x="85" y="60" width="15" height="180" fill="#f8fafc" />
                <path d="M110,40 v15 M120,45 v10 M130,40 v15 M140,45 v10 M150,40 v15 M160,45 v10 M170,40 v15" stroke="#cbd5e1" strokeWidth="1" />
                <path d="M85,70 h15 M90,80 h10 M85,90 h15 M90,100 h10 M85,110 h15" stroke="#cbd5e1" strokeWidth="1" />
            </svg>
        </>
    )
}