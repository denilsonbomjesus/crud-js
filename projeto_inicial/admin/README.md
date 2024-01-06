abrir a pasta admin no vscode e 
rodar o json server: 
```js
json-server --watch db.json
```

Rodar: 
```js
browser-sync start --server --file . --host --port 5000 --startPath admin/telas/lista_cliente.html
```

ou (o curso mostrou o 1º método, mas na minha máquina rodou apenas com o método abaixo):
```js
npx json-server --watch -p 3000 db.json
```
```js
npm install -g browser-sync
```
```js
browser-sync start --server --files . --host --port 5000 --startPath /telas/lista_cliente.html
```
