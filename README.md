# Merkle Tree for solidity

## installation

You can install merkleTree with yarn:

`yarn add merkleTree`

or npm:

`npm install merkleTree`

or pnpm:

`pnpm add merkleTree`

## Usage

1. plant tree with whitelist

```javascript
const TREE = plantTree(WHITELIST)
```

2. get root 

```javascript
const ROOT = getRoot(TREE)
```


3. get proof
```javascript
const proof = getProof(WHITELIST, TREE, LEAF)
```
