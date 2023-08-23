import { useState } from "react";

const samplePrompts = [
  "a gentleman otter in a 19th century portrait",
  "bowl of ramen in the style of a comic book",
  "flower field drawn by Jean-Jacques Sempé",
  "illustration of a taxi cab in the style of r crumb",
  "multicolor hyperspace",
  "painting of fruit on a table in the style of Raimonds Staprans",
  "pencil sketch of robots playing poker",
  "photo of an astronaut riding a horse",
];
import sample from "lodash/sample";

export default function PromptForm(props) {
  const [prompt] = useState(sample(samplePrompts));
  const [image, setImage] = useState(null);

  return (
    <form
      onSubmit={props.onSubmit}
      className="py-1 animate-in fade-in duration-700"
    >
      <div className="max-w-[512px] flex">
        <textarea
            type="text"
            name="prompt"
            placeholder="Example: Long white dress, colourful bottom, 
             sweetheart neckline, black gloves... etc"
            className="w-full z-10 font-sans bg-black text-white px-3 py-2 rounded-l-3xl 
            focus:outline-none focus:ring-2 focus:ring-green-700 h-15 border border-blue-500"
          />

          <button
            type="submit"
            className=" z-0 p-2 font-sans px-4 py-2 bg-black text-white hover:bg-gradient-to-b 
            from-emerald-900 to-black focus:outline-emerald-900 focus:ring-2 focus:ring-green-700 
            rounded-r-3xl text-lg border border-blue-500">
            Create
          </button>
      </div>
    </form>
  );
}
