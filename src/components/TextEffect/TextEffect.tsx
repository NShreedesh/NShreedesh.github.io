import { ITextEffect } from "../../interfaces/ITextEffect";

function TextEffect({ text }: ITextEffect) {
  return (
    <span className="p-1 font-semibold text-white bg-pink-800 rounded-md ">
      {text}
    </span>
  );
}

export default TextEffect;
