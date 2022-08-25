import keccak256 from 'keccak256'

function plantTree (whitelist: string[]) {
  const tree = []
  const leaves = whitelist.map(item => keccak256(item).toString('hex'))

  let layers = 0

  tree.push(leaves)

  while (leaves.length > Math.pow(2, layers)) {
    const layer: string[] = tree[layers]
    const _tempArray: string[] = []

    for (let i = 0; i < layer.length; ++i) {
      const _num = Math.floor(i / 2)

      if (!_tempArray[_num]) {
        _tempArray.push(layer[i])
      } else {
        _tempArray[_num] = _tempArray[_num] <= layer[i]
        ? keccak256(`0x${_tempArray[_num]}${layer[i]}`).toString('hex')
        : keccak256(`0x${layer[i]}${_tempArray[_num]}`).toString('hex')
      }
    }
    tree.push(_tempArray)
    layers++
  }

  return tree
}

export default plantTree
