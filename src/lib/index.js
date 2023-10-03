// place files you want to import through the `$lib` alias in this folder.
import {base} from '$app/paths';
export const site_root_prefix = base.trim() === '' ? '' : base.trim()+'/';
export const sphinx_phrase = "Sphinx of black quartz judge my vow!"