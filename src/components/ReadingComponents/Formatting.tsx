import { useState } from "react";

export default function Formatting({
  isBible,
  onChangeFont,
  onChangeSize,
  onSetGrid,
  onSetRedLettering,
}) {
  const [fontType, setFontType] = useState("Arial");
  const [fontSize, setFontSize] = useState("18px");

  const handleFontChange = (e) => {
    setFontType(e.target.value);
    onChangeFont(e.target.value);
  };
  const handleSizeChange = (e) => {
    setFontSize(e.target.value);
    onChangeSize(e.target.value);
  };
  const handleVerseByVerse = () => {
    onSetGrid((prev) => !prev);
  };
  const handleRedLettering = () => {
    onSetRedLettering((prev) => !prev);
    console.log("Worked");
  };

  return (
    <div className="grid gap-1">
      <button
        onClick={handleVerseByVerse}
        className="bg-gray-200 px-1 rounded-sm dark:hover:bg-blue-600 hover:bg-blue-600 dark:bg-[#202124]"
      >
        Verse-By-Verse
      </button>
      {isBible && (
        <button
          onClick={handleRedLettering}
          className="bg-gray-200 px-1 rounded-sm text-red-600 dark:hover:bg-red-600 hover:bg-red-600 hover:text-white active:bg-red-600 dark:bg-[#202124]"
        >
          Red Lettering
        </button>
      )}

      <select
        name="fontType"
        className="dark:bg-[#202124] bg-gray-200 p-1"
        value={fontType}
        onChange={handleFontChange}
      >
        <option value="Arial">Default</option>
        <option value="Sans Serif">Sans Serif</option>
        <option value="Georgia">Georgia</option>
      </select>
      <select
        name="fontSize"
        className="dark:bg-[#202124] bg-gray-200 p-1"
        value={fontSize}
        onChange={handleSizeChange}
      >
        <option value="text-lg">Default Size</option>
        <option value="text-xl">Medium Size</option>
        <option value="text-2xl">Large Size</option>
      </select>
    </div>
  );
}
