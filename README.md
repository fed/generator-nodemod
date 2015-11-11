# generator-nodemod

A [Yeoman](http://yeoman.io) generator for scaffolding simple node modules.

## Built-in packages

* [Jest](https://facebook.github.io/jest/): Painless JavaScript Unit Testing
* [JSHint](http://jshint.com/): A JavaScript Code Quality Tool
* [Grunt](http://gruntjs.com/): The JavaScript Task Runner

## Scaffolding a new node module

1. Setup [npm](https://nodejs.org/) properly for your development environment.

2. Install [Yeoman](http://yeoman.io/) and its required libraries:

```
npm install -g yo grunt-cli
```

3. Install the [nodemod](https://github.com/fknussel/generator-nodemod) generator:

```
npm install -g generator-nodemod
```

4. Create a new directory and initialize a Git repo on it for your new node module:

```
mkdir your-project
cd your-project
git init
git remote add origin https://github.com/some-user/some-project.git
```

5. Run the generator:

```
yo nodemod
```

6. Answer the questions.

7. **STRONGLY RECOMMENDED:** commit the generated code to your git repository before making any modifications. This will make it much easier to see a diff of the work you have done vs. the generator output.

```
git add --all
git commit -m "Initial commit"
```

## Start writing your code

See the `README.md` file in your newly created node module for more information.

## Release versions

This repo uses [grunt-bump](https://github.com/gruntjs/grunt-bump) and Semantic Versioning to version and tag releases. To release a new version, run the appropriate command:

```
grunt release:major       # bump major version, eg. 1.0.2 -> 2.0.0
grunt release:minor       # bump minor version, eg. 0.1.3 -> 0.2.0
grunt release:patch       # bump patch version, eg. 0.0.1 -> 0.0.2
grunt release:prerelease  # bump pre-release version, eg. 1.0.0 -> 1.0.0-1
```

Make sure to push tags:

```
git push --tags origin master
```

Publish the package to [npm's public registry](https://www.npmjs.com/):

```
npm publish
```

To make sure everything worked just fine, go to [http://npmjs.com/package/generator-nodemod](http://npmjs.com/package/generator-nodemod).

**Heads up!** To publish, you must have a user on the npm registry. If you don't have one, create it with `npm adduser`. If you created one on the site, use `npm login` to store the credentials on the client. You can use `npm config ls` to ensure that the credentials are stored on your client. Check that it has been added to the registry by going to [http://npmjs.com/~](http://npmjs.com/~).

## Semantic Versioning

Given a version number `MAJOR.MINOR.PATCH`, increment the:

1. `MAJOR` version when you make incompatible API changes,
2. `MINOR` version when you add functionality in a backwards-compatible manner, and
3. `PATCH` version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the `MAJOR.MINOR.PATCH` format.

See the [Semantic Versioning](http://semver.org/) specification for more information.

## Release History

See the [CHANGELOG](CHANGELOG.md).
