import {writeFileSync, readFileSync, existsSync} from 'fs';
import {Marked} from 'marked';
import {markedHighlight} from 'marked-highlight';
import hljs from 'highlight.js';
import path from 'path';
import { log } from 'console';


/**
 * Factory method to include in vite plugins list vite-plugin-md-to-html-svelte-hmr.
 * @author Rahul Kandekar
 * @returns A plug in that will parse any md files as svelte files using hot module reload.
 */
export default function mdToSvelte() {
    const marked = new Marked(
        markedHighlight({
            langPrefix: 'hljs language-',
            highlight(code, lang) {
                const language = hljs.getLanguage(lang) ? lang : 'plaintext';
                return hljs.highlight(code, { language }).value;
            }
        })
    );
    return {
        name: 'Markdown-to-Svelte-hmr',
        /**
         * 
         * @param {{file: string}} param0 
         * @returns 
         */
        handleHotUpdate({ file }) {
            // Check file is a .md file
            if(! /.*\.md$/.test(file) ) return;
            // Parse title and date from PostCard.json
            // log(file.split('/').slice(0, -1).join('/')+'/PostCard.json');
            // const post_card_path = file.split('/').slice(0, -1).join('/') + '/PostCard.json';
            let html = '';
            /** @type {{title: string, date: string}} */
            let post_card;
            const post_card_path = file.split('/').slice(0, -1).join('/') + '/PostCard.json';
            if(existsSync(post_card_path)) post_card = JSON.parse(readFileSync(post_card_path));
            if(post_card?.title) {
                html += `<h1 class="blog-title">${post_card.title}</h1>\n`;
            }
            if(post_card?.date) {
                html += `<h2 class="blog-subtitle">${new Date(post_card.date).toUTCString().slice(0, -12)}</h2>\n`
            }
            // Parse file content to html
            html += marked.parse(readFileSync(file, 'utf-8'));
            // Write out .svelte file
            const svelteFile = file.slice(0, -3)+'.svelte';
            log(`Svelte file is ${svelteFile}`);
            writeFileSync(svelteFile, html);
            // If no +page.svelte, create it
            let page_path = file.split('/').slice(0, -1).join('/') + '/+page.svelte';
            log(`> Checking page_path ${page_path}`);
            if (existsSync(page_path)) return;
            // log(svelteFile.split('/').slice(-1));
            let page = `<script>\n\timport BlogPost from './${svelteFile.split('/').slice(-1)[0]}'\n</script>\n<BlogPost />`;
            // log(page_path);
            writeFileSync(page_path, page);
        }
    }
}