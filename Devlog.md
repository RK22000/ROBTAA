# Thu Sep 14 14:42:18 PDT 2023

Sweet I've migrated 3 of my blogs so far and it looks like everything is behaving consistently. Time to improve the workflow even more. I want to see if I can automatically load in the title from the PostCard.json file. I also want to include the date in the PostCard.json file, then use that date to display the PostCards sorted by recency.

---
> endlog - Thu Sep 14 14:45:23 PDT 2023

## Wed Sep 13 15:22:40 PDT 2023

Things are comming together!!!!

look at this

![clean responsive blog layout](pics/blog_layout.gif)

Any markdown blog I create should now automatically get a layout like this in the site. The white layer on which the blog material sits is declared in +layout.svelte in blogs/

Next I'll automate how the blog post cards show up on the site and I'll be good to begin the migration.

---
> endlog - Wed Sep 13 15:36:29 PDT 2023

## Wed Sep 13 14:28:52 PDT 2023

Ok so this is really cool. I created a plugin that does hmr with md files. So now I can modify my md file in my blog and the changes are reflected right away on the dev site.

Honestly it was quite simple and I should make a blog post on it as well. The key concept to understand was hooks. It may have been something so obvious that the docs site didn't bother to explain it properly or I just could not read.

The plugin is at blog_scripts/vite-plugin-md-to-html-svelte-hmr.js

---
> endlog - Wed Sep 13 14:32:27 PDT 2023

## Wed Sep 13 02:47:11 PDT 2023

Well I finally imported (poorly) a blog from the older site. Every step after coping the markdown was codable so I should be able to automate all the steps the md blog to svelte page soon. 😴

---
> endlog - Wed Sep 13 02:53:02 PDT 2023

## Wed Sep 13 01:03:54 PDT 2023

Cool I feel like everything is set up well enough that I should try migrating a blog post from my previous site. I'm gonna do the one on cold diffusion models cuz its got pictures of Aang and I like him.

---
> endlog - Wed Sep 13 01:07:32 PDT 2023

## Wed Sep 13 00:26:24 PDT 2023

Woohooo!! I've got nice Post Cards to list my blogs. Time to include some of my actual blogs and wire things up. I'm so close to migrating to this site. 🤞 this site is gonna be awesome.

---
> endlog - Wed Sep 13 00:30:22 PDT 2023

## Tue Sep 12 15:34:46 PDT 2023

Did you know that git does not track empty dirictories??? I didn't It caused my latest build to fail. There's something called .gitkeep to prevent this from happening but its just easier to create an empty file for now.

---
> endlog - Tue Sep 12 15:36:20 PDT 2023

## Tue Sep 12 14:34:11 PDT 2023

Here's how I'm thinking I want the blogging workflow to be.

- I write a blog and its associated material
- I run a blog script that will process my blog and prepare it for the site
- The site was running on a dev server so the changes are immediately reflected
- If alls well I deploy the site

🤞 I'll be able to implement something that can give me a close enough experience.

---
> endlog - Tue Sep 12 14:47:36 PDT 2023

## Tue Sep 12 14:15:58 PDT 2023

Ok so this is cool. `package.json` has a first level attribute called `"scripts"`. I can store custom scripts here and then easily use them later.

So for instance I have a script i `blog_scripts/script1.js` that would normally be run as

```sh
$> node blog_scripts/script1.js
```

then I can put it in package.json like so

```json
{
  "scripts": {
    "blog": "node blog_scripts/script1.js"
  }
}
```

and run simply run

```sh
$> npm run blog
```

I like this because the `npm run {something}` is the same alias that is being used to run everything else from starting the dev server, building the project, and much more that I don't fully understand yet.

Also I think this means that I can put my custom scripts in some absurd deeply nested location and not worry about perfectly remembering the location every single time to run them.

---
> endlog - Tue Sep 12 14:29:18 PDT 2023

## Tue Sep 12 04:12:46 PDT 2023

I made the title card banner for the site.

![Website title card](pics/robta_banner.gif)

---
> endlog - Tue Sep 12 04:14:51 PDT 2023

## Tue Sep 12 00:57:23 PDT 2023

Few things about the project setup about tailwind. Following this [guide](https://tailwindcss.com/docs/guides/sveltekit) gets me set up with tailwind. However there's this funny little thing in tailwind where it basically strips out a lot of the default stying information. For instance by default it will make all the headers the same. Now tailwind does make it super easy to individually customize every element with fair precission. So tailwind wan't you to do the customization yourself and it recommends not relying on defaults so that you are not blindsided by any nitpicky thing in the defaults. However defaults are usefull so tailwind gives you a plugin to get a good set of helpfull defaults that can easily be applied. That's [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin). Apply the `prose` class on any vanila html element and the usefull default typography will carry over to all the children.

---
> endlog - Tue Sep 12 01:04:42 PDT 2023

### Tue Sep 12 00:29:34 PDT 2023

You know those things that you never notice because they just work. Then you suddenly notic it because it no longer work. Ya it sucks to find out when they no longer work.

I reinstalled wsl on my machine to uninstall a program that for some reason I was unable to uninstal. Don't know what blood magic I used to bind that installation to my wsl instance that it was easier to uninstall, then reinstall wsl and everything else. But anywasy I did that and I forgot to save my ssh config files from the previous installation. So I had to reset up ssh with github. That was a pain. I'm not gonn reliv it by typing it out. But just thought you should know.

Oh the template project uploads and deploys freely on pushing to main.

---
> endlog - Tue Sep 12 00:34:01 PDT 2023

## Mon Sep 11 23:04:01 PDT 2023

I've got a feel for how things to make a site using svelte and tailwind. I have a barely active blog site that I think could be made to look better. 2+2=Refactor the blog site into a svelte tailwind site that I understand and might use more often.

---
> endlog - Mon Sep 11 23:06:20 PDT 2023
