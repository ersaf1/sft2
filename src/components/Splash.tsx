import React from 'react'

const Splash: React.FC = () => {
    return (
        <div className="splash fixed inset-0 z-[100] flex items-center justify-center flex-col gap-6 px-6">
            <div className="splash-card flex flex-col items-center gap-4">
                <div className="splash-logo-wrapper">
                    <img src="/sft.png" alt="eseftwo logo" className="splash-logo" />
                </div>

                <h1 className="splash-title gradient-text text-4xl md:text-5xl font-extrabold tracking-tight">ESEFTWO</h1>
                <p className="splash-slogan text-sm md:text-base text-neutral-300">Berkarya dengan logika, berprestasi dengan hati, melangkah menuju masa depan digital yang gemilang.</p>
            </div>

            <div className="splash-loader mt-4" aria-hidden="true">
                <svg className="loader-svg" width="48" height="48" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#069e2d" />
                            <stop offset="60%" stopColor="#04773b" />
                            <stop offset="100%" stopColor="#03440c" />
                        </linearGradient>
                    </defs>
                    <circle cx="25" cy="25" r="20" stroke="#0b0b0b" strokeWidth="6" opacity="0.08"></circle>
                    <path d="M45 25a20 20 0 0 1-20 20" stroke="url(#g1)" strokeWidth="6" strokeLinecap="round" />
                </svg>
            </div>
        </div>
    )
}

export default Splash
