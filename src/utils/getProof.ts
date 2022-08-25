function getProof (
  whitelist: string[],
  tree: string[][],
  leaf: string
) {
  const proofs = []

  let index = whitelist.indexOf(leaf)

  for (let node of tree) {
    if (node.length === 1) continue

    const proof = index % 2 === 0 ? node[index +1] : node[index - 1]

    if (proof) proofs.push(`0x${proof}`)

    index = Math.floor(index / 2)
  }

  return proofs
}

export default getProof
