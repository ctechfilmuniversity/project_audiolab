# Making Waves documentation repo

## How to add workshops, performances, etc

The page is setup as a blog where each workshop, performance, jam etc is represented as posts.

In `content/posts/` are all the posts documenting past workshops, performances, etc named for their semester or event name.

Note that each post is a folder containing an `index.md` file with the written content, a `cover.jpg` (or .png) that will be used on the overview pages, and any further assets (images, sounds, videos, etc) associated with this post. Nice and contained!

The `index.md` file contains Markdown as you know it, plus some meta data, separated by `+++` at the top. Let's look at an example:

```
+++
title = "Filmuniversity's 70-year anniversary party"
date = "2024-11-05"
author = ""
categories = ["performance"]
summary = "Making Waves performance at the Filmuniversity's 70-year anniversary party"
+++
```

`Title`, `date` and `author` should be clear. `categories` is a list (note the []) and is used to sort the post into one of the navigational categories. A post can have more than one category.

The `summary` is used as a teaser text in the overview pages.

To create a new post, feel free to copy and adjust this snippet (yes, the +++ are part of it) and then just write Markdown underneath it. Images and other media can be placed directly in the post's folder, so you don't even have to worry about paths and stuff.

When you're done, commit all your changes and push to master. (Or just do everything in the web interface.) Then you're done.

Then the GitHub action pipline will automatically re-build and publish the website after a few minutes. You can check [its progress here](https://github.com/ctechfilmuniversity/workshop_making_waves/actions).

## How to add a page

Currently there are only two non-post pages: Index and About.

The index or home page lists all the posts, plus a little extra text at the top. The text can be changed in `content/_index.md`.

The About page just renders some text with a template that's a little different from the single-post template. You can change it's content in `content/about/index.md`

To add a new page create a new folder in `content/` and place an `index.md` file into it, for example `content/contact/index.md`. Then you can also add additional files to that folder.

## Change Navigation

In `config/_default/hugo.toml` you find the main theme and site configuration. Among other things also the navigation options. You can probably figure them out on your own. 

## Name change

If the name of the repository changes, and with it the name of the GitHub page, you need to change it in `config/production/hugo.toml` in the baseUrl and logoLinkHome fields as well. Otherwise links on the page will break.

## Local setup

It is not necessary to run this locally, but you can.

The entire page is built using the [Hugo](https://gohugo.io/installation/) static site generator. [Install Hugo for your operating system]() clone the repository, `cd` into it and run either

``` shell
$ hugo build
```

for a complete build of the page, to be found in the dist folder.

Or

``` shell
$ hugo serve
```

for a development server that auto-refreshes.

Make any changes you want and commit to master. From there the GitHub action will take over.


## GitHub Actions pipeline

Github offers a free CI/CD pipeline (continuous integration/ continuous deployment) that you can configure directly through files in your repository.

In `.github/workflows` you find the `publish.yml` which documents the steps. Basically it's running hugo build and commits to the gh-pages branch, from which the website is served.

You can follow the progress of the [Actions here](https://github.com/ctechfilmuniversity/making-waves/actions).
