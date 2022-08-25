function getRoot (tree: string[][]) {
  return `0x${tree[tree.length -1][0]}`
}

export default getRoot
