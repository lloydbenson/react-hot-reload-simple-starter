# React Hot Reload Starter

This is a basic react + webpack starter bundle. Be prepared to add your own style, this has less than none. The motivation for making this was we couldn't find a simple setup that was feature rich. We think this setup will scale nicely for small to medium sized web applications. If you're familier with webpack, you know it's very powerful, but sometimes lacking in the documentation and practical example departments. Hopefully this simple example will help you build your own setup or you can just start with ours!

## Features

- webpack
- react
- react-router@1.0.0-beta3
- webpack-dev-server
- hot reload on bundle change
- lazy loading based on the router
- babel
- stylus
  - rupture plugin
  - jeet plugin

## Making it Work

If you want to play around run `npm run dev`. This will start webpack in watch mode and launch the webpack-dev-server. Visit `http://localhost:8080/webpack-dev-server/` to see the thing in action. Click through the different nav items to see the different pages load in asynchronously. Made style changes and seem them appear "instantly".

If you want to see the results, run `npm run build` and check the "build" folder. This will generate a production build. This enables compression and chunk order optimizations.

## Warning

This is sill a work in progress. There is beta modules being used. Also, there are `setTimeouts` in the lazy loading code for dramatic flare. You wouldn't want to go to production with that in there.
