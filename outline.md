# Mastering Node.js Modules and Packages

## Module 1 - Introducing Modules

### Understanding Modules
- What is a module?
- How do I use a module?
- What happens when I require a module?
- Module pathing
  - Search behavior
- What happens when I use the same module in other modules?
  - Instancing

### Consuming your first module
- Load via require
- Execute behavior

### Creating your first module
- Create new .js file
- Assign behaviors to module.exports
- Load via require
- Execute behaviors

## Module 2 - Module Design Patterns
- Exports a Namespace
- Exports a Function
- Exports a Higher Order Function
- Exports a Constructor
- Exports a Singleton
- Extends a Global Object
- Applies a Monkey Patch

## Module 3 - Introduction to Packages

### Understanding Packages
- What is a package?
- Why would I create a package?
- What is the appropriate granularity of a package?
- How does an app know what packages are required?
- How are packages shared?
- What about my dependencies?
- How is versioning handled?

### Dissecting a Package
- What does a package consist of?
- Recommended Structure
- The essentials - index.js and package.json

### Managing Packages
- Intalling required packages
- Adding a public package
- List packages
- Removing a package
- Updating a package
- Adding a private package
	
## Module 4 - Creating Custom Packages

### Minimal package structure
- package.json
- readme.md
- LICENSE
- index.js

### Create your first package
- git init
- npm init
- add functionality to index.js
- git commit

## Module 5 - Publishing Packages

### Private
- GitHub link
- npm link
- npmjs private repo

### Public
- npmjs
- Create an account
- npm publish

## Module 6 - Performance and Other Considerations
- Long file paths in Windows
- Flattening and shortening the node_modules folder
- npmjs availability
- npm shrinkwrap
- Lazy loading a module
- Multiple modules in a a package
