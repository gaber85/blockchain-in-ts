import { Block } from './Block';

export class BlockChain {
  private chain: Block[];
  private difficulty: number;
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 5;
  }

  createGenesisBlock(): Block {
    return new Block(0, Date.now(), 'Genesis Block', '0');
  }

  /** Returns the latest block in the chain */
  getLatestBlock(): Block {
    return this.chain[this.chain.length - 1];
  }

  /** Adds a new block to the chain */
  addBlock(newBlock: Block): void {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  }

  /** Validates the chain */
  isChainValid(): boolean {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }

    return true;
  }
}
