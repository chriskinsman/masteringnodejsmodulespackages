# Mastering Node.js Modules and Packages

## Module 1 - Introducing Modules

### Understanding Modules [Chris]
- What is a module?
- How do I use a module?
- What happens when I require a module?
- Module pathing
  - Search behavior
- What happens when I use the same module in other modules?
  - Instancing

### Consuming your first module [Jeremy]
- Load via require
- Execute behavior

### Creating your first module [Chris]
- Create new .js file
- Assign behaviors to module.exports
- Load via require
- Execute behaviors

### Advanced Module Topics [Chris]
- How does nodejs find a module?
- How are circular references handled?

## Module 2 - Module Design Patterns
### Exports a Namespace [Jeremy]
### Exports a Function [Chris]
### Exports a Higher Order Function [Jeremy]
### Exports a Constructor [Chris]
### Exports a Singleton [Jeremy]
### Extends a Global Object [Chris]
### Applies a Monkey Patch [Jeremy]

## Module 3 - Introducing to Packages

### Understanding Packages [Chris]
- What is a package?
- Why would I create a package?
- What is the appropriate granularity of a package?
- How does an app know what packages are required?
- How are packages shared?
- What about my dependencies?
- How is versioning handled?

### Dissecting a Package [Jeremy]
- What does a package consist of?
- Recommended Structure
- The essentials - index.js and package.json

### Managing Packages [Jeremy]
- Intalling required packages
- Adding a public package
- List packages
- Removing a package
- Updating a package
- Adding a private package
	
## Module 4 - Creating Custom Packages

### Minimal package structure [Chris]
- package.json
- readme.md
- LICENSE
- index.js

### Create your first package [Jeremy]
- git init
- npm init
- add functionality to index.js
- git commit

### Advanced Package.json
- index
- keywords
- homepage
- bugs
- contributors
- files
- main
- bin
- scripts
- engines
- private

### Advanced Package Structure
- .npmignore
- server.js
- bin
- lib

## Module 5 - Publishing Packages

### Private [Chris]
- GitHub link
- npm link
- npmjs private repo

### Public [Jeremy]
- npmjs
- Create an account
- npm publish

## Module 6 - Performance and Other Considerations

### Paths [Jeremy]
- Long file paths in Windows
- Flattening and shortening the node_modules folder

### npmjs availability [Chris]

### npm shrinkwrap [Chris]

### Lazy loading a module [Chris]

### Multiple modules in a package [Chris]
