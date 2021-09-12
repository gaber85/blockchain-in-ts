import SHA256 from 'crypto-js/sha256';

export class Block {
  public hash: string;

  constructor(
    private index: number,
    private timestamp: number,
    private data: unknown,
    public previousHash: string = ''
  ) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  public calculateHash() {
    return SHA256(
      this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)
    ).toString();
  }
}
