import DecryptedText from "../Ui/DecryptedText";
import SplitText from "../Ui/SplitText";
export default function Welcome() {
  return (
    <div>
      <DecryptedText
        text="Chaitanya Nevse"
        className="text-3xl w-full h-full font-bold font-poppins tracking-wide font-grey-800"
        encryptedClassName="text-grey-500 text-5xl"
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
