import { BlockChain } from "./BlockChain";
import { Block } from "./Block";

let gabeCoin = new BlockChain();
gabeCoin.addBlock(new Block(1, Date.now(), { amount: 4 }));
gabeCoin.addBlock(new Block(2, Date.now(), { amount: 10 }));
