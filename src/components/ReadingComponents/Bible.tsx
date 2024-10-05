"use client";

import { useEffect, useState } from "react";
import { books } from "@/assets/BookTitles/BibleMenu";
import Formatting from "@/components/ReadingComponents/Formatting";
import BaseNode from "@/components/BaseNode";
import Note from "@/components/ReadingComponents/Note";
import { FetchNoteData } from "@/components/ReadingComponents/FetchNoteData";

interface BibleProps {
  isLoggedIn: boolean;
}

export default function BibleLoader({ isLoggedIn }: BibleProps) {
  const [book, setBook] = useState(() => {
    const savedBook = window.localStorage.getItem("saved_book");
    return savedBook !== null ? JSON.parse(savedBook) : "genesis.json";
  });
  const [chapter, setChapter] = useState(() => {
    const savedChapter = window.localStorage.getItem("saved_chapter");
    return savedChapter !== null ? JSON.parse(savedChapter) : 1;
  });

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [fontType, setFontType] = useState("Arial");
  const [fontSize, setFontSize] = useState("18px");

  const [grid, setGrid] = useState(() => {
    const savedGrid = window.localStorage.getItem("isGrid");
    return savedGrid !== null ? JSON.parse(savedGrid) : false;
  });
  const [isRed, setIsRed] = useState(() => {
    const savedRedLettering = window.localStorage.getItem("isRed");
    return savedRedLettering !== null ? JSON.parse(savedRedLettering) : true;
  });

  const handleFontChanges = (newFont: string) => setFontType(newFont);
  const handleSizeChange = (newSize: string) => setFontSize(newSize);
  const handleGridChange = (newState: string) => setGrid(newState);
  const handeRedLetteringChange = (newState: boolean) => setIsRed(newState);
  const handleBookChange = (newState: never) => {
    if (newState !== book) {
      setBook(newState);
      setChapter(1);
    }
  };
  const handleChapterChange = (newState: number) => {
    setChapter(newState);
  };

  async function fetchBookData(filename: string) {
    setLoading(true);
    try {
      const res = await fetch(`/Texts/BibleJSONFiles/${filename}`);
      if (res.status !== 200) throw new Error(`Error: ${res.status}`);
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.error("Failed to load data", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBookData(book);
  }, [book]);
  useEffect(() => {
    window.localStorage.setItem("saved_book", JSON.stringify(book));
    window.localStorage.setItem("saved_chapter", JSON.stringify(chapter));
  }, [book, chapter]);
  useEffect(() => {
    window.localStorage.setItem("isGrid", JSON.stringify(grid));
  }, [grid]);
  useEffect(() => {
    window.localStorage.setItem("isRed", JSON.stringify(isRed));
  }, [isRed]);

  if (loading) return <div>Loading...</div>;

  const selectedChapter = data?.chapters[chapter - 1] || { verses: [] };

  return (
    <>
      <div className={"grid grid-cols-4 grid-rows-1 gap-5 nodeMargins"}>
        <div
          className={
            "xl:col-start-1 xl:col-span-1 sm:col-start-2 sm:col-span-2 col-start-1 col-span-full"
          }
        >
          {/*Navigation node*/}
          <BaseNode title={"Navigate"}>
            <div className="grid grid-cols-2 gap-1">
              <select
                className="p-1"
                onChange={(e) => handleBookChange(e.target.value)}
                value={book}
              >
                {books.map((b) => (
                  <option key={b.filename} value={b.filename}>
                    {b.title}
                  </option>
                ))}
              </select>

              <select
                className="p-1"
                onChange={(e) => handleChapterChange(parseInt(e.target.value))}
                value={chapter}
              >
                {data?.chapters.map((_, index: number) => (
                  <option key={index + 1} value={index + 1}>
                    Chapter {index + 1}
                  </option>
                ))}
              </select>
            </div>
          </BaseNode>

          {/*Formatting node*/}
          <BaseNode title={"Formatting Options"}>
            <Formatting
              isBible={true}
              onChangeFont={handleFontChanges}
              onChangeSize={handleSizeChange}
              onSetGrid={handleGridChange}
              onSetRedLettering={handeRedLetteringChange}
            />
          </BaseNode>
        </div>
        <div className={"xl:col-span-3 col-span-full"}>
          {/*Text loading node*/}
          <BaseNode
            title={`Book of ${data.book} Chapter ${selectedChapter.chapter}`}
          >
            <div className={grid ? "grid" : ""}>
              {/*{selectedChapter.verses.map((verse) => {*/}
              {/*  // const note = FetchNoteData.filter(*/}
              {/*  //   (note) => note.verse_id === verse.id,*/}
              {/*  // );*/}
              {selectedChapter.verses.map((verse: string, idx: number) => (
                <span
                  id={verse.id}
                  key={idx}
                  className={`m-1 p-1 ${fontSize} ${verse.isRed && isRed ? "text-red-600" : ""}`.trim()}
                  style={{
                    fontFamily: fontType,
                  }}
                >
                  <span className="font-bold">{verse.verse}</span> {verse.text}
                  {isLoggedIn && (
                    // <Note
                    //   noteID={note.id}
                    //   noteText={note.text}
                    //   bookName={""}
                    //   chapterNumber={0}
                    //   verseNumber={0}
                    // />
                    <p>WORKED</p>
                  )}
                </span>
              ))}
              ; ) ;
              {/*  selectedChapter.verses.map((verse: string, idx: number) => (
                <span
                  id={verse.id}
                  key={idx}
                  className={`m-1 p-1 ${fontSize} ${verse.isRed && isRed ? "text-red-600" : ""}`.trim()}
                  style={{
                    fontFamily: fontType,
                  }}
                >
                  <span className="font-bold">{verse.verse}</span> {verse.text}
                  {isLoggedIn && (
                    <Note
                      noteID={undefined}
                      userID={undefined}
                      verseID={verse.id}
                      fathersID={undefined}
                    />
                  )}
                </span>
              ))*/}
            </div>
          </BaseNode>
        </div>
      </div>
    </>
  );
}
