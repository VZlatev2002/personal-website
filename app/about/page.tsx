import fs from 'fs';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';

const AboutPage = () => {
  const file = 'app/about/about.md';
  const content = fs.readFileSync(file, 'utf8');
  const about = matter(content);

  return (
    <div>
      <article className='prose'>
      <ReactMarkdown
          components={{
            a: ({ node, ...props }) => (
              <a className="text-customText hover:text-" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-customText" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="text-customText" {...props} />
            ),
            h4: ({ node, ...props }) => (
              <h4 className="text-customText" {...props} />
            ),
            li: ({ node, ...props }) => (
              <li className="text-customText" {...props} />
            ),
            img: ({ alt, src, ...props }) => (
              <img
                alt={alt}
                src={src}
                style={{ padding: '1.5em', maxHeight: '20em', height: 'auto',  margin: '0 auto',}}
                {...props}
              />
            ),
          }}
        >{about.content}</ReactMarkdown>
      </article>
    </div>
  );
};

export default AboutPage;