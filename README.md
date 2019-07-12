# Basic files description

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

This is angular - cli workspace file. In previous Angular versions this file was named **angular-cli**. With this file we can have one configuration for many applications in single workspace.
[Article](https://nitayneeman.com/posts/understanding-the-angular-cli-workspace-file/)

### package-lock.json

Created and updated in every npm install command - connected with node_modules.

# Project structure & architecture

### pages

This folder should contains unique views

### services

This folder contains API connected logic. Services at the root level are Injectable classes with public methods.

### **tests**

Folder dedicated for tests. In services making file reading much cleaner.

### **mocks**

Folder which contains dedicated entities mocks for testing purposes and writting functionalities if backend developers are still working on some
features.

### entities

Models connected with bussiness logic

### utils

Additional files with constant, regexp and etc...

# TIPS and valuable content to learn about

### Use json-generator while implementation

This allows you to mock a lot of data for testing and implementing features before BE devs finish.
[JSON_GENERATOR](// https://www.json-generator.com/)

### Tree shaking

Enabled in angular by default - when you importing something and this is not used angular will avoid it in bundle file.

### SSR

Improve first load of application - angular content rendered by server.

### Configure PWA

PWA - progressive web application can improve performance of the application. You need to configure file manifest.json -
PWA - allows you to cache request responses from the server and whole application which gives you a lot of performance boost.
Service worker cache - can cache static files on client side.

### Ivy Render Engine

New angular offers Ivy Render engine which is mile step in angular rendering performance. You can test it with ng new command with
useIvy flag.

### Cache control header

This header allows browser to cache responses from the server. You need to specify how long this response needs to be cached.
If user will try get data from the server - browser will check is that request is cached and return immiedietely data from
browser database.

### Gzip your builded app

Use compression to decrease size of whole application while uploading on server.

### Avoid width: 100%, and height: 100% in images

Using that directives in any img tag selector will tell browser to scale images. Use max-width: 100% and max-height: 100% or use backend
to scale images properly.

### Use onPush ChangeDetectionStrategy

Default change detection strategy works if input will change, or internall component state will change. It makes re-render operation.
But you can increase performance of component by using immutable data structures like Immutable.js and changing state in immutable way with [...], {...} operators
and immutable functions like map, reduce, filter and etc... Also you need to use **onPush** ChangeDetectionStrategy. With that angular engine
don't check whole array or objects but only reference.

### Use Detach Change Detector

This can make your application work really fast - especially you can see this in big lists.

```ts
import {AfterViewInit, ChangeDetectorRef} from '@angular/core';
@Component(…)
class AppComponent implements AfterViewInit {

    constructor(private cdr: ChangeDetectorRef) {}
    ngAfterViewInit() {
        // We need to perform detach first time
        this.cdr.detach();
    }

    detect() {
        // Use detect method for run changeDetection
        this.cdr.detectChanges();
    }
}
``
```

### Animate only opacity and transform properties

Browser engines like **V8** for example using 4 phases for put changes into application.
Every phase have different performance cost.

- Style - huge cost
- Layout - huge cost - margins, paddings
- Paint - huge cost - colors, backgrounds, shadows
- Composite - transform, opacity

If you use only transform and opacity you will trigger only last step. This will give you
nice 60FPS animations.

### Use webworksers for more advanced calculations

WebWorkers gives JS engine oportunity to work on more than one thread. This allows you even to convert zip files on client side
without any performance cost in UI

### Use trackBy for list - increasing performance while CRUD operations

```ts
@Component({
    selector: 'app',
    template: `<ul>
                    <li *ngFor="let item of items; trackBy: trackById">{{item.name}}</li>
               </ul>`
})
class AppComponent {
    items = [
        {
            id: 1,
            name: 'item 1'
        }, {
            id: 2,
            name: 'item 2'
        },
        ...
    ];
    trackById(index, item) {
        return item.id;
    }
}
```

### No complex computations in template

Use methods in components for handle advanced computations.

### Use Pure Pipes

When you creating a Pipe - class wich implements transform function you can add pure flag to true in decorator.
It will pipe make it unrelated to the external state

### Use share operator in observable

If you subscribed observable in many places you can avoid recreating values in every data emit.
This will remove not needed duplications.

```ts
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { share } from "rxjs/operators";
@Injectable()
export class AppService {
  data: Observable<any>;
  constructor(private http: HttpClient) {
    this.data = this.http.get<any>("apiUrl").pipe(share());
  }
  getData() {
    return this.data;
  }
}
```


### Unsubscribe observables always and use async pipe

Using async pipe is always good practice because this pipe have unsubscribe builded in. If you need
to subscribe in component then use @AutoUnsubscribe() directive from dedicated library.

### Use data-attr-id in html for more advanced event listeners

If you need to add a lot of events you can improve performance with adding one event listener to container block and for every item
dedicated __data-attr__. This will allows you to use e.target.getAttribute('data-attr') function and get needed value without creating 
spam of events.

# Architectural patterns with angular

### Dependency Injection, MVVC - Modal - View - ViewModel, MVP - Model View Presenter, Provider, Flux

# DevTools

### Augury
Debugging angular application state and dependency injection.

### Google Analytics
Connecting Angular SPA to GA script and you can see user interaction with your application.

### HeatMaps
Connect Angular with heat maps and check which features user using the most.


