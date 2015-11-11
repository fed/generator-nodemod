'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ultimate ' + chalk.red('nodemod') + ' generator!'
    ));

    var prompts = [
      {
        type: 'confirm',
        name: 'generatorUpToDate',
        message: 'have you run: npm -g update generator-nodemod?',
        default: false
      },
      {
        type: 'input',
        name: 'module',
        message: 'module name? (no spaces)',
        filter: function (input) {
          return input.toLowerCase();
        },
        when: function (answers) {
          return answers.generatorUpToDate;
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'description?',
        when: function (answers) {
          return answers.generatorUpToDate;
        }
      },
      {
        type: 'input',
        name: 'repository',
        message: 'repository url?',
        filter: function (input) {
          return input.toLowerCase();
        },
        when: function (answers) {
          return answers.generatorUpToDate;
        }
      },
      {
        type: 'input',
        name: 'license',
        message: 'license?',
        default: 'MIT',
        filter: function (input) {
          return input.toUpperCase();
        },
        when: function (answers) {
          return answers.generatorUpToDate;
        }
      },
      {
        type: 'input',
        name: 'username',
        message: 'your name?',
        when: function (answers) {
          return answers.generatorUpToDate;
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'your email address?',
        when: function (answers) {
          return answers.generatorUpToDate;
        }
      },
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      // package.json
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        {
          module: this.props.module,
          description: this.props.description,
          repository: this.props.repository,
          license: this.props.license,
          username: this.props.username,
          email: this.props.email
        }
      );
      // source folder
      this.fs.copy(
        this.templatePath('src/module.js'),
        this.destinationPath('src/' + this.props.module + '.js')
      );
      // tests folder
      this.fs.copyTpl(
        this.templatePath('tests/module-test.js'),
        this.destinationPath('tests/' + this.props.module + '-test.js'),
        { module: this.props.module }
      );
      // README.md
      this.fs.copyTpl(
        this.templatePath('_README.md'),
        this.destinationPath('README.md'),
        { module: this.props.module, description: this.props.description }
      );
      // CHANGELOG.md
      this.fs.copy(
        this.templatePath('_CHANGELOG.md'),
        this.destinationPath('CHANGELOG.md')
      );
      // AUTHORS.md
      this.fs.copy(
        this.templatePath('_AUTHORS.md'),
        this.destinationPath('AUTHORS.md')
      );
    },

    projectfiles: function () {
      // .editorconfig
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      // .gitignore
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
      // Gruntfile.js
      this.fs.copy(
        this.templatePath('_Gruntfile.js'),
        this.destinationPath('Gruntfile.js')
      );
      // grunt folder
      this.directory(
        this.templatePath('grunt'),
        this.destinationPath('grunt')
      );
    }
  },

  install: function () {
    this.installDependencies({
      bower: false
    });
  }
});
