"use client"

import { motion } from "motion/react"

type HeroProps = {
    name: string;
};

export default function Hero({ name }: HeroProps) {
    return (
        <div className="relative overflow-hidden border-b-8 border-black bg-yellow-400 text-black shadow-[0_12px_0_0_rgba(0,0,0,1)]">
            <div
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(135deg, transparent, transparent 24px, rgba(0,0,0,0.2) 24px, rgba(0,0,0,0.2) 26px)",
                }}
            />

            <div className="absolute hidden lg:block -top-20 -left-20 h-64 w-64 -rotate-12 border-8 border-black bg-red-600 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]" />
            <div className="absolute hidden lg:block -bottom-24 right-[-60px] h-72 w-72 rotate-6 border-8 border-black bg-green-600 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] opacity-80" />

            <div className="relative max-w-7xl mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]"
                >
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="flex h-20 w-20 -rotate-3 items-center justify-center border-4 border-black bg-red-600 text-4xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                                🎁
                            </div>
                            <div className="flex h-16 w-16 rotate-6 items-center justify-center border-4 border-black bg-white text-3xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                                ⭐
                            </div>
                            <div className="flex h-14 w-14 -rotate-12 items-center justify-center border-4 border-black bg-green-500 text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                ❄️
                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className="inline-flex items-center gap-3 border-4 border-black bg-white px-5 py-2 text-lg font-black uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                                🎅 Welkom, {name}!
                            </p>
                            <h1 className="text-6xl leading-none font-black uppercase tracking-tight text-black drop-shadow-[4px_4px_0_rgba(0,0,0,0.25)] md:text-8xl">
                                <span className="mb-2 inline-block border-4 border-black bg-black px-3 py-1 text-yellow-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                                    Lootjes
                                </span>
                                Trekken
                            
                            </h1>
                            <p className="max-w-xl border-l-8 border-black bg-white/80 px-6 py-4 text-lg font-semibold leading-relaxed text-black">
                                Organiseer eenvoudig je Sinterkerst of andere feestelijke lootjestrekkingen. Voeg deelnemers toe, start een trekking en deel een persoonlijke link naar elke deelnemer!
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm font-black uppercase">
                            <span className="inline-flex items-center gap-2 border-4 border-black bg-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                🎄 Maak onbeperkt groepen
                            </span>
                            <span className="inline-flex items-center gap-2 border-4 border-black bg-red-500 px-4 py-2 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                🎁 Deel lootjes via een link
                            </span>
                            <span className="inline-flex items-center gap-2 border-4 border-black bg-green-500 px-4 py-2 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                ❄️ Geen e-mailadressen of andere poespas!
                            </span>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <motion.div
                            initial={{ rotate: -6, scale: 0.9, opacity: 0 }}
                            animate={{ rotate: 0, scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 120, damping: 14 }}
                            className="relative grid grid-cols-2 gap-6"
                        >
                            {[{
                                emoji: "🎄",
                                className: "bg-white text-black",
                                rotate: -8,
                                delay: 0
                            }, {
                                emoji: "⛄",
                                className: "bg-red-500 text-white",
                                rotate: 10,
                                delay: 0.1
                            }, {
                                emoji: "🎅",
                                className: "bg-yellow-300 text-black",
                                rotate: 6,
                                delay: 0.2
                            }, {
                                emoji: "⭐",
                                className: "bg-green-500 text-white",
                                rotate: -12,
                                delay: 0.3
                            }].map((card) => (
                                <motion.div
                                    key={card.emoji}
                                    className={`flex h-48 items-center justify-center border-4 border-black text-7xl font-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] ${card.className}`}
                                    initial={{ rotate: card.rotate, y: 12 }}
                                    animate={{ rotate: [card.rotate, card.rotate + 4, card.rotate], y: [12, 0, 12] }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 6.5,
                                        delay: card.delay,
                                        ease: "easeInOut"
                                    }}
                                >
                                    {card.emoji}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}