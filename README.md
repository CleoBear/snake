# snake
snake game use typescript

1. create package.json
``` 
npm init -y
```
2. install webpack and dependencies

```
npm install --save-dev webpack webpack-cli typescript ts-loader
```
While install finsh, you can see these dependencies in package.json
```json
 "devDependencies": {
    "ts-loader": "^9.3.0",
    "typescript": "^4.7.3",
    "webpack": "^5.73.0",
    "webpack-cli": "^4.9.2"
  }
```
3. Add webpack.config.js file to configure webpack

4. Add tsconfig.json to configure typescript
```
tsc --init
```
change compilerOptions target and moudle to es6

```json
{
"compilerOptions": 
    {
    /* Language and Environment */
    "target": "es6",
    /* Modules */
    "module": "es6",
    }
}   
```
5. config package.json to setting build use webpack
```json
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
```

6. package project
```
npm run build
```

7. git ignore node_modules

```
touch .gitignore && echo "node_modules/" >> .gitignore
```
