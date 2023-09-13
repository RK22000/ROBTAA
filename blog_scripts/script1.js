import { log } from 'console';
import {readdirSync, createWriteStream, closeSync} from 'fs';
import { resolve } from 'path';
import { inspect } from 'util'

log("> Starting script");

log('> Reading blogs dir')
let blogs = readdirSync('src/routes/blogs');

log('> Creating output stream');
const blog_store_path = resolve('src', 'routes', 'blog_dirs_json.js');
const blog_store = createWriteStream(blog_store_path);
log('> Writing to stream');
blog_store.write('// This file is written by a script. DO NOT MODIFY it!\n');
blog_store.write('export let blogsJSON = {\n  ');
blog_store.write(`dir_names: ${inspect(blogs)}\n`);
blog_store.write('};');
log('> Ending stream');
blog_store.end();
log(`>> Noted ${blogs.length} blogs in ${blog_store_path}`);