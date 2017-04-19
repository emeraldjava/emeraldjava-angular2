// app/app.ts

/**
 ** First, we need to:
 **  1a. import the Component class from @angular/core library
 **  1b. import the bootstrap method from @angular/platform-browser-dynamic to load our web app
 */
import { Component } from '@angular/core';                // 1a
import { bootstrap } from '@angular/platform-browser-dynamic';   // 1b

/**
 ** 2a. Pass in the name for the HTML class selector (<my-app></my-app>)
 ** 2b. Set the styles of our component using the styles options
 ** 2c. Define our component's template inline, rather than using the templateUrl option to access an external file.
 **/
@Component({
    // 2a
    selector: 'my-app',

    // 2b
    styles: [`
        h1 {
    color:#545454;
    background:#02A8F4;
    padding:15px;
    box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);
    }`]

    // 2c
    template: `<h1>Hello from the {{componentName}}.</h1>`
})

/**
 ** 3a. export our component so that it can be imported to othr files
 **
 **/
export class AppComponent {
    componentName: 'AppComponent'
}
bootstrap(AppComponent);