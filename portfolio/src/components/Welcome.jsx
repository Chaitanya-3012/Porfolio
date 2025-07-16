import DecryptedText from "../Ui/DecryptedText";
import SplitText from "../Ui/SplitText";
export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <DecryptedText
        text="Chaitanya Nevse"
        className="text-6xl w-full h-full font-bold font-poppins tracking-wide font-grey-800 relative"
        encryptedClassName="text-grey-500 text-6xl"
        animateOn="view"
        speed={70}
        sequential={true}
        characters="アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
      />
      <br />
      <SplitText textAlign="center" text={"Developer"} />
    </div>
  );
}
