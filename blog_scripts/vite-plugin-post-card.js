import {readdirSync, createWriteStream, readFileSync, existsSync, writeFileSync, lstatSync} from 'fs';
import { resolve } from 'path';

export default function postCard() {
    return {
        name: "PostCard",
        handleHotUpdate({ file }) {
            // Check file type is PostCard.json in blogs
            if (!/.*blogs\/[^/]+\/PostCard.json/.test(file))  return;
            // Create blogs object
            /** @type {{ dirs: string[], post_cards: JSON[]}} */
            let blogs = Object();
            // Scan blogs dirictory
            const pathToBlogs = 'src/routes/blogs'
            blogs.dirs = readdirSync(pathToBlogs).filter(
                dir=>lstatSync(resolve(pathToBlogs, dir)).isDirectory()
            );
            // Scan for PostCards
            blogs.post_cards = blogs.dirs.map((dir) => {
                const postCardJSONpath = resolve('src', 'routes', 'blogs', dir, 'PostCard.json');
                if (!existsSync(postCardJSONpath))
                    return null;
                let postCardJSON = JSON.parse(readFileSync(postCardJSONpath));
                postCardJSON.relative_path = 'blogs/'+dir+'.html';
                postCardJSON.dir = dir;
                return postCardJSON;
            }).filter(p=>p);
            // Write to BlogsJS
            const blogsJS = 'src/lib/blogs.js';
            let content = '// This file is written by a plugin script. Do not modify it\n';
            content += 'export const blogsJSON = ';
            content += JSON.stringify(blogs);
            writeFileSync(blogsJS, content);
        }
    }
}