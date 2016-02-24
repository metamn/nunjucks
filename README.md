# nunjucks

## JSON

The same name JSON is loaded **BUT** it is accessible only locally.
- `components/header/header.html.swig` has access **ONLY** to `header.json`
- `components/logo/logo.html.swig` has access **ONLY** to `logo.json`
- `page.html.swig` has access **ONLY** to `page.json`

Parent JSON is accessible to descendants **ONLY** on its own level
- `page.json` is available for **ALL** `components` but is visible **ONLY** in `page.html`. If you check `header.html` the data from `page.json` will be empty


## Including other files and templates

- always use absolute paths like `components/header/header.html.swig`
- couldn't implement relative paths: https://github.com/mozilla/nunjucks/pull/349
- includes are working also inside a for loop, like `{% include 'components/article-' + i + '/article-' + i + '.html.swig' %}`
