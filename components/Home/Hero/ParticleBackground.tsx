"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
    type Container,
    type ISourceOptions,
    MoveDirection,
    OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesHero() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: { value: "transparent" },
            },
            fullScreen: {
                enable: false,
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onClick: { enable: true, mode: "grab" },
                    onHover: { enable: true, mode: "connect" },
                },
                modes: {
                    grab: { distance: 400, line_linked: { opacity: 0.5 } },
                    connect: { distance: 150, line_linked: { opacity: 0.5 } },
                },
            },
            particles: {
                color: { value: ["#3b82f6", "#60a5fa", "#93c5fd"] },
                links: {
                    color: "#60a5fa",
                    distance: 150,
                    enable: true,
                    opacity: 0.4,
                    width: 2,
                },
                move: {
                    angle: 45,
                    direction: MoveDirection.none,
                    enable: true,
                    outModes: { default: OutMode.bounce },
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: { enable: true, area: 800 },
                    value: 100,
                },
                opacity: { value: 0.6 },
                shape: { type: "circle" },
                size: { value: { min: 2, max: 6 } },
            },
            detectRetina: true,
        }),
        []
    );

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
            className="absolute inset-0 "
        />
    );
}
