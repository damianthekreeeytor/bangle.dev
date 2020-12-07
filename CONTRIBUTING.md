## Code

## Documentation

### API

The API documentation for each package is expected in to be inside an `api.md` file at the same level as the `package.json` of that package.

The script `yarn run scripts:build-docs` takes care of finding all the `api.md` file, running them through our templating engine and then putting the generated `.md` files in the `_bangle-website/docs` directory.

For templating we use [handlebars](https://handlebarsjs.com) and a configuration file `api-docs.config.js`. The config includes a bunch of shorthands & helper functions which are used by [handlebars](https://handlebarsjs.com) to generate the final product.

### Examples