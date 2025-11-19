"use client";

import { motion } from "motion/react";
import NewGroup from "./NewGroup";

export default function NoGroups() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-8 border-black bg-white p-16 text-center transform -rotate-1 relative overflow-hidden"
        >
            <div className="absolute top-4 right-4 text-6xl opacity-20">🎄</div>
            <div className="absolute bottom-4 left-4 text-5xl opacity-20">⛄</div>
            <div className="w-32 h-32 mx-auto mb-8 bg-red-600 border-4 border-green-700 flex items-center justify-center transform rotate-6">
                <span className="text-7xl">🎁</span>
            </div>
            <h3 className="text-4xl font-black uppercase mb-4">
                Nog geen trekkingen
            </h3>
            <p className="text-xl font-bold mb-8 uppercase">
                Maak nu je eerste trekking!
            </p>
            <NewGroup />
        </motion.div>
    );
}