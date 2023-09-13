import {writeFileSync, readFileSync} from 'fs';
import {marked} from 'marked';


/**
 * Factory method to include in vite plugins list vite-plugin-md-to-html-svelte-hmr.
 * @author Rahul Kandekar
 * @returns A plug in that will parse any md files as svelte files using hot module reload.
 */
export default function mdToSvelte() {
    return {
        name: 'Markdown-to-Svelte-hmr',
        handleHotUpdate({ file }) {
            // Check file is a .md file
            if(! /.*\.md$/.test(file) ) return;
            // Parse file content to html
            const html = marked.parse(readFileSync(file, 'utf-8'));
            // Write out .svelte file
            const svelteFile = file.slice(0, -3)+'.svelte';
            writeFileSync(svelteFile, html);
        }
    }
}