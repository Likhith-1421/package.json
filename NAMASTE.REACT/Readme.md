                                                REACT.JS

*WHAT IS REACT ?
 
  -> REACT IS A JAVASCRIPT LIBRARY.

* TO inject react into our browser we want to use CDN (Content Delivery Networks) 

  -> In CDN links react.developmet.js:- is the core thing of react

* What is react element ?
   
  -> React element is a JavaScript object
-------------------------------------------------------------------------------------------------------------
* GIT COMMANDS

  -> git init
  -> git branch -M  main
  -> git add .
  -> git commit -m 'react'
  -> git remote add origin https://github.com/Likhith-1421/namaste.react.git
      (GET IT FROM GIT)
  -> git push origin main
-------------------------------------------------------------------------------------------------------------
* NPM 
  -> NPM is not a node package manager its just a package manager
  -> Any package we need to include in our project we can include NPM.
  
NOTE:- Package.json is the configuration of NPM 

* We can install 2 types of dependences

  -> Dev dependences    -> Normal dependences
            |                      |
   used in development      Used in production
-------------------------------------------------------------------------------------------------------------
* What is parcel ?
  
  -> Parcel is a web application bundler.
  -> It helps developers build websites and web apps by automatically   bundling all your files — HTML, CSS, JavaScript, images, etc. — into something the browser can efficiently load.


* What does the parcel do ?
  
  -> dev build
  -> local server
  -> HMR = Hot module replacement
  -> File watching algorithm
  -> Caching - build faster
  -> image optimization
  -> minification
  -> Bundling
  -> compressing
  -> differential bundling
-------------------------------------------------------------------------------------------------------------
* Transitive dependencies
 
  -> In software, a dependency is a package your project relies on. A transitive dependency is a dependency of a dependency.

* What is NPX  ?

  -> It will execute a package.
-------------------------------------------------------------------------------------------------------------
* What is JSX ?
 
  -> JSX is not a html code written in javascript.
  -> It is html like code written in javascript.
  -> JSX doesn't understand by v8 engine. It is transpilied before it is reaching to v8 engine.
  -> TRANSPILIED = The process of converting source code from one high-level programming language to another
  -> Transpilied is by 'babel' which is a package of parcel.
  -> JSX => React.createElement => js Object => Html element
  -> If we want to write a multiple jsx code we have to use a paranthasis brackets because to better understand by the babel  '()'.
-------------------------------------------------------------------------------------------------------------
* Compailer
  -> Traditionally, a compiler translates code from a high-level programming language (like       JavaScript) into a lower-level language

* Transpiler
  ->  A transpiler converts code from one high-level language to another high-level language. 
-------------------------------------------------------------------------------------------------------------
* In react there are two types of components 
  ->CLASS BASED COMPONENTS - (Old) 
  -> FUNCTIONAL BASED COMPONENTS - (New)
 
* FUNCTIONAL COMPONENT
  -> A javascript function which retuns a react element then it is 'FUNCTIONSL COMPONENT'
  -> Writing a component in another component is known as component compositation,