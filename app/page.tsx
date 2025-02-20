import NotePreview from "./components/NotePreview";
import getNoteMetadata from "./components/getNoteMetadata";

const HomePage = () => {
  const noteMetadata = getNoteMetadata();
  const notePreviews = noteMetadata.map((note) => (
    // ...post gets all the post.title, post.date etc.
    <NotePreview key={note.slug} {...note} />
  ));
  return <div>
    <h2 className="text-xl pb-2 underline decoration-double decoration-customLine font-bold text-customText"> Notes </h2>
    {notePreviews}
    </div>
};

export default HomePage