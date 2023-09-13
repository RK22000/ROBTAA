// import {log} from 'console';
import {writeFileSync, readFileSync} from 'fs';
import {marked} from 'marked';

/**
 * Function to parse and write out a .md file as a .svelte file
 * @param {string} file 
 */
export function md_to_svelte(file) {
    // Check file is a .md file
    if(! /.*\.md$/.test(file) ) return;
    // Parse file content to html
    const html = marked.parse(readFileSync(file, 'utf-8'));
    // Write out .svelte file
    const svelteFile = file.slice(0, -3)+'.svelte';
    writeFileSync(svelteFile, html);
}
// md_to_svelte('src/routes/blogs/diffusion_gam_models/2022-11-18-Diffusion-GAN-models.md');