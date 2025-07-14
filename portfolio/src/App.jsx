import Welcome from "./components/Welcome";
import Nav from "./Ui/Nav";
import Particles from "./Ui/Particles";
export default function App() {
  const items = [
    { label: "Home", href: "#" },
    { label: "Projects", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];
  return (
    <>
      <div className="w-full h-full flex items-center justify-center font-poppins text-1xl">
        <Nav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={50}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
      <div className="relative w-full h-full min-h-screen">
        <Particles
          className="fixed inset-0 -z-10 w-full h-full"
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={400}
          particleSpread={20}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles
          disableRotation={false}
        />
        <Welcome />
      </div>
    </>
  );
}
