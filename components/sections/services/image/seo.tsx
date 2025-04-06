export const Seo = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
                {/* <!-- Background --> */}
                <rect width="400" height="300" fill="#fff1f2" rx="20" ry="20" />

                {/* <!-- Decorative elements --> */}
                <circle cx="50" cy="50" r="35" fill="#e11d48" opacity="0.1" />
                <circle cx="350" cy="250" r="40" fill="#db2777" opacity="0.1" />

                {/* <!-- Growth chart --> */}
                <rect x="70" y="90" width="160" height="120" rx="5" ry="5" fill="white" stroke="#e2e8f0" strokeWidth="2" />

                {/* <!-- Chart axis --> */}
                <path d="M90,190 h120 M90,190 v-80" fill="none" stroke="#cbd5e1" strokeWidth="2" />

                {/* <!-- Chart gridlines --> */}
                <path d="M90,170 h120 M90,150 h120 M90,130 h120 M90,110 h120" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                <path d="M110,190 v-80 M130,190 v-80 M150,190 v-80 M170,190 v-80 M190,190 v-80" fill="none" stroke="#f1f5f9" strokeWidth="1" />

                {/* <!-- Chart data line --> */}
                <path d="M90,170 L110,160 L130,170 L150,145 L170,120 L190,110" fill="none" stroke="#e11d48" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

                {/* <!-- Data points --> */}
                <circle cx="90" cy="170" r="4" fill="white" stroke="#e11d48" strokeWidth="2" />
                <circle cx="110" cy="160" r="4" fill="white" stroke="#e11d48" strokeWidth="2" />
                <circle cx="130" cy="170" r="4" fill="white" stroke="#e11d48" strokeWidth="2" />
                <circle cx="150" cy="145" r="4" fill="white" stroke="#e11d48" strokeWidth="2" />
                <circle cx="170" cy="120" r="4" fill="white" stroke="#e11d48" strokeWidth="2" />
                <circle cx="190" cy="110" r="4" fill="white" stroke="#e11d48" strokeWidth="2" />

                {/* <!-- Chart labels --> */}
                <text x="90" y="205" fontFamily="Arial" fontSize="8" textAnchor="middle" fill="#64748b">Jan</text>
                <text x="110" y="205" fontFamily="Arial" fontSize="8" textAnchor="middle" fill="#64748b">Feb</text>
                <text x="130" y="205" fontFamily="Arial" fontSize="8" textAnchor="middle" fill="#64748b">Mar</text>
                <text x="150" y="205" fontFamily="Arial" fontSize="8" textAnchor="middle" fill="#64748b">Apr</text>
                <text x="170" y="205" fontFamily="Arial" fontSize="8" textAnchor="middle" fill="#64748b">May</text>
                <text x="190" y="205" fontFamily="Arial" fontSize="8" textAnchor="middle" fill="#64748b">Jun</text>

                {/* <!-- Search bar and magnifying glass --> */}
                <rect x="240" y="90" width="120" height="30" rx="15" ry="15" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                <circle cx="255" cy="105" r="8" fill="none" stroke="#e11d48" strokeWidth="2" />
                <line x1="261" y1="111" x2="265" y2="115" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" />
                <rect x="270" y="101" width="70" height="8" rx="2" ry="2" fill="#f1f5f9" />

                {/* <!-- Keywords and tags --> */}
                <rect x="240" y="130" width="80" height="20" rx="10" ry="10" fill="#fecdd3" />
                <text x="280" y="144" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#e11d48">#SEO</text>

                <rect x="240" y="160" width="100" height="20" rx="10" ry="10" fill="#fecdd3" />
                <text x="290" y="174" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#e11d48">#ContentMarketing</text>

                <rect x="240" y="190" width="90" height="20" rx="10" ry="10" fill="#fecdd3" />
                <text x="285" y="204" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#e11d48">#SocialMedia</text>

                {/* <!-- Target/bullseye icon --> */}
                <circle cx="180" cy="240" r="25" fill="#fecdd3" />
                <circle cx="180" cy="240" r="18" fill="white" />
                <circle cx="180" cy="240" r="10" fill="#fecdd3" />
                <circle cx="180" cy="240" r="5" fill="#e11d48" />

                {/* <!-- Analytics icon --> */}
                <rect x="70" y="225" width="80" height="15" rx="2" ry="2" fill="#f1f5f9" />
                <rect x="70" y="225" width="60" height="15" rx="2" ry="2" fill="#fda4af" />
                <rect x="70" y="245" width="80" height="15" rx="2" ry="2" fill="#f1f5f9" />
                <rect x="70" y="245" width="35" height="15" rx="2" ry="2" fill="#fda4af" />

                {/* <!-- Social media icons --> */}
                <circle cx="290" cy="240" r="8" fill="#e11d48" opacity="0.8" />
                <circle cx="310" cy="240" r="8" fill="#db2777" opacity="0.8" />
                <circle cx="330" cy="240" r="8" fill="#f43f5e" opacity="0.8" />
            </svg>
        </>
    )
}