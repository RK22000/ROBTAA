import { log } from 'console';
import {readdirSync, createWriteStream, closeSync, existsSync, readFileSync} from 'fs';
import { resolve } from 'path';
import { inspect } from 'util'

log("> Starting script");
let blogs=Object();
log('> Reading blogs dir')
let blogDirs = readdirSync('src/routes/blogs');
blogs.dirs=blogDirs;
log(`> Discovered ${blogDirs.length} blog dirictories`);
log(`> Checking each blog for PostCard.json file`);
const postCardJSONs = blogDirs.map((dir)=>{
    const postCardJSONpath = resolve('src', 'routes', 'blogs', dir, 'PostCard.json');
    if (!existsSync(postCardJSONpath)) return null;
    let postCardJSON = JSON.parse(readFileSync(postCardJSONpath));
    postCardJSON.relative_path = `blogs/${dir}`;
    postCardJSON.dir=dir;
    return postCardJSON
}).filter(p=>p);
log(`> Discovered ${postCardJSONs.length} PostCard.json files`);
blogs.post_cards = postCardJSONs;
const blogsJSPath = 'src/lib/blogs.js';
log(`> Writing to ${blogsJSPath}`);
const blogJS = createWriteStream(blogsJSPath);
blogJS.write('// This file is written by a script. Do not modify it!!\n');
blogJS.write('export const blogsJSON = ');
blogJS.write(JSON.stringify(blogs));
blogJS.end()
log(blogs);
log(`> Wrote blogs to ${blogsJSPath}`);