import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

type Items = {
    [key: string]: string;
};

// return '/_posts/hoge.md'
const postsDirectory: string = join(process.cwd(), '_posts');

export const getPostSlugs = () => {
    const listFiles = (dir: string): string[] =>
        fs
            .readdirSync(dir, { withFileTypes: true })
            .flatMap((dirent) =>
                dirent.isFile() ? [`${dir}/${dirent.name}`] : listFiles(`${dir}/${dirent.name}`),
            );
    const fullPaths = listFiles(postsDirectory);
    return fullPaths.map((path) => path.replace(postsDirectory, ''));
};

export const getPostBySlug = (slug: string, fields: string[] = []) => {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const { data, content } = matter(fileContents);

    const items: Items = {};

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug;
        }
        if (field === 'content') {
            items[field] = content;
        }

        if (typeof data[field] !== 'undefined') {
            items[field] = data[field];
        }
    });
    return items;
};

export const getAllPosts = (fields: string[] = []) => {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        // sort post by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
};
