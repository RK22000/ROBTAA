import {log} from 'console';
import {lstatSync, existsSync, readdirSync, createWriteStream, readFileSync} from 'fs';
import {resolve} from 'path';
import {marked} from 'marked';

log('> Starting Script');

/**
 * 
 * @param {string} path 
 */
function convert(path) {
    log(`> Converting ${path}`)
    const htmlFile = createWriteStream(`${path.slice(0, -3)}.html`);
    htmlFile.write('<!-- This file is auto generated. Do not modify it -->');
    htmlFile.write(marked.parse(readFileSync(path, 'utf-8')));
    htmlFile.end()
    log(`> Wrote ${path.slice(0, -3)}.html`);
}

function scanDir(path) {
    if (!existsSync(path) || !lstatSync(path).isDirectory()) return;
    readdirSync(path).map(p => {
        let _p = resolve(path, p);
        // log(`> Checking ${_p}`);
        if (/.*\.md$/.test(p)) convert(_p);
        else scanDir(_p);
    })  
}

scanDir('src');
log('> Done Scanning');