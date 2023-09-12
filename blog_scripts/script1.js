import { log } from 'console';
import {readdirSync, createWriteStream, closeSync} from 'fs';
import { resolve } from 'path';
import { inspect } from 'util'

log("> Starting script");

log('> Reading blogs dir')
let blogs = readdirSync('src/routes/blogs');

log('> Creating output stream');
const blog_store_path = resolve('src', 'routes', 'blog_store.js');
const blog_store = createWriteStream(blog_store_path);
log('> Writing to stream');
blog_store.write('export const blogs = {\n  ');
blog_store.write(`dir_names: ${inspect(blogs)}\n`);
blog_store.write('};');
log('> Ending stream');
blog_store.end();
log(`>> Noted ${blogs.length} blogs in ${blog_store_path}`);