# cache-require-paths

> Caches resolved paths in module require to avoid Node hunting for right module. Speeds up app load.

This is a partial solution to Node "hunting" for right file to load when you require a 3rd party
dependency. See [Node’s `require` is dog slow](https://kev.inburke.com/kevin/node-require-is-dog-slow/) 
for details.

## Use

    npm install --save cache-require-paths

Load the module first in your application file

```js
// index.js
require('cache-require-paths');
...
```

The first time the app loads a cache of resolved file paths will be saved in a local `.` file.
Every application startup after that will reuse this filename cache to avoid "hunting" for right
filename.

## Results

Here are results for loading common packages without and with caching resolved require paths.
You can run any of this experiments inside the `test` folder. `node index.js` loads
using the standard resolve. `node index.js --cache` uses a cache of the resolves paths.

Using node 0.10.37

    require('X')    |  standard (ms)  |  with cache (ms)  |  speedup (%)
    ------------------------------------------------------------------
    express@4.12.3  |        72       |       46          |     36
    karma@0.12.31   |       230       |      170          |     26
    grunt@0.4.5     |       120       |       95          |     20



## TODO

- [ ] Cache only the absolute paths (relative paths resolve quickly)
- [ ] Invalidate cache if dependencies in the package.json change

## Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/cache-require-paths/issues) on Github
