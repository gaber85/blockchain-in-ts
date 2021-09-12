import SHA256 from 'crypto-js/sha256';

export class Block {
  public hash: string;
  public nonce: number;

  constructor(
    private index: number,
    private timestamp: number,
    private data: unknown,
    public previousHash: string = '',
  ) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  public calculateHash() {
    return SHA256(
      this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce
    ).toString();
  }

  public mineBlock(difficulty: number) {
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
  }
}
