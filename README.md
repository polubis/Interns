# Interns

Project created with command:
`ng new --routing=true --style=scss --lintFix=true interns`

### tslint.json

The file checks the quality of the code based on the defined settings. Thanks to this, the code is easy and identical even if the application is written by many programmers

### tsconfig.json

The file is responsible for defining the files ts that will be compiled later to the js code and give you the option to configure the compiler

[DOCS](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

```json
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "inlineSourceMap": true,
    "declaration": false,
    "module": "es2015",
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "target": "es5",
    "typeRoots": ["node_modules/@types"],
    "lib": ["es2018", "dom"]
  }
}
```

`compileOnSave` this is information for IDE - create all needed files on save.

`baseUrl` starting point to resolve non-relative module names by NodeJs

`outDir` place when our project will be generated after build

`sourceMap` creating inline source maps for dedicated file

`declaration` creating file with d.ts format. It allows to import modules without paths - just like all libraries

`module` defines target es stanard after compile ts to js. If standard is > ES5 we need babel here to transform syntax.

`emitDecoratorMetadata` send additional informations while using decorators

`experimentalDecorators` we can use decorator syntax from ES6 standard. Decorator is just higher order function.

`typeRoots` we are defining list of folder to include type definition. We can also just type every file by hand in **types** property but this is not needed with typeRoots.

`lib` list of library files which will be included in compilation. We need here **ES8** standard and **dom**

`moduleResolution` specyfing how we importing other modules to dedicated file. We can use two values **classic** - this is default ( we are importing files only in relative way to file where we are actualy ) and
**node** we are letting NodeJs module resolver to handle imports. He will start from root/src. We can create **package.json** files in dedicated folder to make our import paths shorter

### package.json

File holds scripts which are responsible for building app, runing development server, tests and etc... In addition, in this file we define the bookshelves that our application will use. File is important for publish application purposes and also development. Name and version are the most important attributes.
[DOCS](https://docs.npmjs.com/files/package.json)

### angular.json

This is angular - cli workspace file. In previous Angular versions this file was named __angular-cli__. With this file we can have one configuration for many applications in single workspace.
[Article](https://nitayneeman.com/posts/understanding-the-angular-cli-workspace-file/)

### package-lock.json

Created and updated in every npm install command - connected with node_modules.

###e2e

Folder which is reponsible for generating and containing stuff connected with __e2e__ testing. For that kind of tests we using __protractor__.
