import Welcome from "./components/Welcome";
import InfiniteMenu from "./Ui/InfiniteMenu";
import Nav from "./Ui/Nav";
import Particles from "./Ui/Particles";
export default function App() {
  const items = [
    { label: "Home", href: "#" },
    { label: "Projects", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];
  const Projects = [
    {
      image: "/images/Project-1.jpg",
      link: "https://google.com/",
      title: "Project 1",
      description: "This is Project 1, it is pretty cool!",
    },
    {
      image: "/images/Project-2.jpg",
      link: "https://google.com/",
      title: "Project 2",
      description: "This is Project 2, it is pretty cool!",
    },
    {
      image: "/images/Project-3.jpg",
      link: "https://google.com/",
      title: "Project 3",
      description: "This is Project 3, it is pretty cool!",
    },
    {
      image: "/images/Project-4.jpg",
      link: "https://google.com/",
      title: "Project 4",
      description: "This is Project 4, it is pretty cool!",
    },
  ];
  return (
    <>
      {/*Background*/}
      <div className="fixed w-full h-full min-h-screen">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={100}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles
          disableRotation={false}
        />
      </div>
      {/*Foreground*/}
      <div className="relative w-full h-full flex flex-col items-center justify-center z-1 ">
        <Nav
          className="sticky top-0 left-0 w-full z-10"
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={50}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
        <div
          className="flex items-center justify-center w-full"
          style={{ height: "90dvh" }}
        >
          <Welcome />
          <div style={{ width: "50dvw" }}></div>
        </div>
      </div>
      <br/>
      <br/>
      <div className="w-full h-full">
        <InfiniteMenu items={Projects} />
      </div>
    </>
  );
}
