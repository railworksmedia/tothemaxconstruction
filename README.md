# tothemaxconstruction
To The Max Construction Website

This site uses HTML, JavaScript and SASS  
  
Installing SASS:  
- `npm install --save-dev sass`  

Compiling SASS:  
- `sass scss/main.scss dist/css/style.css --watch`  

## Claude instructions
To The Max Construction is a professional website for a licensed general contractor (License #998426) based in Diamond Bar, California, owned by Max Garcia. The company specializes in custom home remodeling, structural repair, and retaining wall construction, serving Diamond Bar and surrounding communities including Walnut, Chino Hills, and Pomona. The project is built using HTML5 for semantic markup and page structure, SCSS for modular styling with variables, mixins, and nested selectors that maintain scalability and maintainability, and vanilla JavaScript for client-side functionality and interactive elements without external dependencies. The stylesheet is organized into modular SCSS files including _variables.scss for design tokens, _common.scss for shared styles, _about.scss and _contact.scss for page-specific styling, and main.scss for home page styles and global animations. The development workflow involves writing all styling changes in SCSS files and then compiling them to CSS using the Sass compiler with the command sass scss/main.scss, generating files in dist/css/style.css, which produces a single style css file referenced by all HTML pages to maintain a single source of truth for styling while keeping the codebase organized and modular. Responses should include limited and brief details about changes, but should always provide a list containing only the filenames that were modified; this will allow for copy pasting of responses to be tested outside on a local development environment.