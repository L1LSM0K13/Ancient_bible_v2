interface NoteType {
  noteID: number;
  noteText: string;
  bookName: string;
  chapterNumber: number;
  verseNumber: number;
}

export default function Note({
  noteID,
  noteText,
  bookName,
  chapterNumber,
  verseNumber,
}: NoteType) {
  return (
    <>
      <div className="flex">
        <div className="noteDiv p-5">
          <span className="dark:text-black">
            <strong>
              On {bookName} - {chapterNumber}:{verseNumber}
            </strong>
          </span>

          <p>{noteText}</p>

          <div className="flex justify-end">
            <form action="/users/bible/action/note" method="POST">
              <button
                type="submit"
                className="align-middle p-1 m-1 bg-gray-100 border border-gray-300 rounded-md active:bg-red-300 hover:bg-red-400 dark:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                </svg>
              </button>
              <input type="hidden" name="note_id" value={noteID} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
