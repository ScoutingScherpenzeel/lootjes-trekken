"use client"

import { motion } from "motion/react"

export default function Hero({name}: {name: string}) {
    return (
        <div className="relative overflow-hidden bg-red-600 text-white border-b-8 border-green-700">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, white 2px, white 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, white 2px, white 4px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>
            {/* Christmas Trees */}
            <div className="absolute bottom-0 left-10 text-8xl opacity-30">🎄</div>
            <div className="absolute bottom-0 right-20 text-7xl opacity-30">🎄</div>
            <div className="absolute top-10 right-40 text-6xl opacity-20">⛄</div>

            <div className="relative max-w-7xl mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid md:grid-cols-2 gap-8 items-center"
                >
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-20 h-20 bg-green-700 border-4 border-white flex items-center justify-center transform -rotate-3">
                                <span className="text-4xl">🎁</span>
                            </div>
                            <div className="w-16 h-16 bg-white border-4 border-red-600 flex items-center justify-center transform rotate-6">
                                <span className="text-3xl">⭐</span>
                            </div>
                            <div className="w-14 h-14 bg-yellow-400 border-4 border-white flex items-center justify-center transform -rotate-12">
                                <span className="text-2xl">❄️</span>
                            </div>
                        </div>
                        <h1 className="text-7xl md:text-8xl font-black leading-none uppercase tracking-tight">
                            LOOTJES<br />TREKKEN
                        </h1>
                        <div className="border-l-8 border-white pl-6 py-4 bg-green-700/30">
                            <p className="text-2xl font-bold uppercase">
                                🎅 Welkom, {name}!
                            </p>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-40 bg-green-700 border-4 border-white transform rotate-2 flex items-center justify-center text-6xl">
                                🎄
                            </div>
                            <div className="h-40 bg-white border-4 border-red-600 transform -rotate-3 flex items-center justify-center text-6xl">
                                ⛄
                            </div>
                            <div className="h-40 bg-white border-4 border-green-700 transform -rotate-1 flex items-center justify-center text-6xl">
                                🎅
                            </div>
                            <div className="h-40 bg-green-700 border-4 border-white transform rotate-3 flex items-center justify-center text-6xl">
                                ⭐
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}