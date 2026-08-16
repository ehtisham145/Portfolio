import { useMemo } from "react";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "../context/ThemeContext";

export default function ParticleBackground() {
  const { dark } = useTheme();

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: "transparent" },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: true,
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.5 } },
        },
      },
      particles: {
        color: { value: dark ? "#a78bfa" : "#6366f1" },
        links: {
          color: dark ? "#a78bfa" : "#6366f1",
          distance: 130,
          enable: true,
          opacity: 0.25,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.6,
          outModes: { default: "out" },
        },
        number: {
          value: 70,
          density: { enable: true, area: 900 },
        },
        opacity: { value: 0.4 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    [dark]
  );

  return (
    <ParticlesProvider init={loadSlim}>
      <Particles
        id="tsparticles"
        className="absolute inset-0 -z-10"
        options={options}
      />
    </ParticlesProvider>
  );
}
