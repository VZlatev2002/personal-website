import matter from "gray-matter";
import { NoteMetadata } from "./NoteMetadata";
import fs from "fs";


const getPostMetadata = (): NoteMetadata[] => {
    const folder = "notes";
    const files = fs.readdirSync(folder);
    const markdownNotes = files.filter((file) => file.endsWith(".md"));
    
    // Get gray-matter data from each file
    const notes = markdownNotes.map((fileName) => {
      const fileContents = fs.readFileSync(`notes/${fileName}`, "utf8");
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle,
        slug: fileName.replace(".md", ""),
      };
    });

    const sortedNotes = notes.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });

    return sortedNotes;
  }

  export default getPostMetadata;
  