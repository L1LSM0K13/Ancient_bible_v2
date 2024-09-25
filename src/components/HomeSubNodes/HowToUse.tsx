export default function HowToUse() {
  return (
    <>
      <div className="m-5">
        <h1 className="font-bold text-2xl">The navigation bar</h1>
        <span>
          On the top, you will see options to see your bible, the collection of
          the patristic writings, and the login and signup options, when you are
          logged in you will see an additional option to see your account.
        </span>
        <hr />
        <img
          src={"/features/navBarNotLoggedIn.png"}
          alt="navigation bar not logged in"
          className="m-5 border-2 border-[#355488]"
          loading={"lazy"}
        />
        <img
          src={"/features/loggedIn.png"}
          alt="nav bar logged in"
          className="m-5 border-2 border-[#355488]"
          loading={"lazy"}
        />
        <h1 className="font-bold text-2xl">Bible</h1>
        <span>
          In the bible page, you see the navigate, formatting, and text nodes.
          The navigate node is used to change books and chapters. The title of
          the book and chapter number will be displayed in the text node. There
          are 2 arrows that are used to go either to the next or previous
          chapter. If you are on the last chapter of a book and hit forward it
          will automatically bring you to the next book and vice versa for going
          back.
        </span>
        <hr />
        <img
          src={"/features/bookAndChapterDemo.png"}
          alt="book and chapter demo"
          className="m-5 border-2 border-[#355488]"
          loading={"lazy"}
        />
        <h1 className="font-bold text-2xl">Formatting</h1>
        <span>
          In the formatting node, there are options to toggle verse-by-verse,
          red lettering, the choice of fonts, and the size of the font. These
          changes will be constant no matter if you go to another book or
          chapter, or even you go to the fathers page, you can change these
          formatting options on that page as well.
        </span>
        <hr />
        <img
          src={"/features/formattingOptionsDemo.png"}
          alt="formatting options demo"
          className="m-5 border-2 border-[#355488]"
          loading={"lazy"}
        />
        <h1 className="font-bold text-2xl">Verse by Verse</h1>
        <span>
          This is the visual representation of toggling each verse on its own
          line, by default this will be <strong>OFF</strong>
        </span>
        <hr />
        <img
          src={"/features/verseByVerseToggled.png"}
          alt="verse by verse toggled"
          className="m-5 border-2 border-[#355488]"
          loading={"lazy"}
        />
        <h1 className="font-bold text-2xl">Red lettering</h1>
        <span>
          This is the visual representation of toggling the red lettering, this
          spans across the four gospels, acts, and revelation, by default this
          will be <strong>ON</strong>
        </span>
        <hr />
        <img
          src={"/features/redLetteringToggled.png"}
          alt="red lettering toggled"
          className="m-5 border-2 border-[#355488]"
          loading={"lazy"}
        />
        <h1 className="font-bold text-2xl">Font changes</h1>
        <span>
          This is the visual representation of the changes in font size and
          type, there is a default, medium, and large option. For fonts, there
          is a default (which is your phone/computer's default font), Arial, and
          Times New Roman.
        </span>
        <hr />
        <img
          src={"/features/largeView.png"}
          alt="large view"
          className="m-5 border-2 border-[#355488]"
          loading={"lazy"}
        />
        <h1 className="font-bold text-2xl">Church Fathers</h1>
        <span>
          This page is visually similar to the bible page but without the red
          lettering option. The list of fathers is sorted alphabetically. These
          collection of texts are formatted by punctuation so you have the
          ability to make specific note annotations.
        </span>
        <hr />
        <img
          src={"/features/churchFathersDemo.png"}
          alt="church fathers demo"
          className="m-5 border-2 border-[#355488]"
          loading={"lazy"}
        />
        <h1 className="font-bold text-2xl">Your account</h1>
        <span>
          If you decide to sign up to Ancient Bible, you will have this page
          available, it will show you your name, email, your total notes taken,
          and your total highlights. As well as the ability to change any
          account details. If you sign up, you will also have the ability to
          toggle light and dark mode.
        </span>
        <hr />
        <img
          src={"/features/userSettingsDemo.png"}
          alt="user settings demo"
          className="m-5 border-2 border-[#355488]"
          loading={"lazy"}
        />
        <h1 className="font-bold text-2xl">Note-taking and highlighting</h1>
        <span>
          You must sign up to be able to use this feature, as all the notes and
          highlights will be saved to your account. Click on a verse or piece of
          text to open this menu. On the top there are a range of colors to
          highlight, and in the middle is the area to type in a note, these
          notes. You are able to make extensive commentaries in one note but
          there will be a future feature that will allow you to make lengthy
          commentaries and dissertations
        </span>
        <hr />
        <img
          src={"/features/noteTakingDemo.png"}
          alt="note taking demo"
          className="m-5 border-2 border-[#355488]"
          loading={"lazy"}
        />
        <h1 className="font-bold text-2xl">Note and Highlight</h1>
        <span>This is a visual representation of a note and a highlight.</span>
        <hr />
        <img
          src={"/features/notePostedDemo.png"}
          alt="note posted demo"
          className="m-5 border-2 border-[#355488]"
          loading={"lazy"}
        />
        <h1 className="font-bold text-2xl">
          Adding more notes and deleting highlights
        </h1>
        <span>
          If you click on the highlighted or noted verse, you will have the
          ability to take even more notes, but you cannot highlight it again,
          you can remove the highlight and replace it with another color.
        </span>
        <hr />
        <img
          src={"/features/moreNotes.png"}
          alt="more notes"
          className="m-5 border-2 border-[#355488]"
          loading={"lazy"}
        />
        <h1 className="font-bold text-2xl">You&apos;re all done!</h1>
        <span className="mb-5">
          You have now completed the tour of the website!
        </span>
      </div>
    </>
  );
}