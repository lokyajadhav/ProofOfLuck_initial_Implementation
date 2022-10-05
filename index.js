/*
Join the MINING
    - Needs to put minimum stake
    - Add to owners array

Mining Mechanism
    - Miners(3) will be selected randomly from owners
    - First miner calculates Block hash,verifies data and broadcasts.
    (If first is not available or does any mistake, next subsequent miner will mine the block)

Verification Mechanism
    - Validators will verify the broadcasted block(by miner) by verifying the previous block hash 
        and re-calculating the broadcasted block's hash.
*/

//code : 

//imports 
const prompt = require("prompt-sync")();

//varibles
let owners = [];
let nominated_miners = [];
let blockMiner;
let minerGeneratedRandom=new Map();

const JoinMining = () => {
    // console.log("join mining function");
    let ownersLength = prompt("Enter no.of miners: ");
    let i=0;
    while(ownersLength>0)
    {
        i=i+1;
        let minerName = prompt(`Enter owner ${i} name: `);
        let stakedAmount = prompt(`Enter owner ${i} stake: `);
        // console.log("you staked " + stakedAmount);
        if(stakedAmount>100 && minerName!=null)
        {
            owners.push(minerName);
        }
        ownersLength--;
    }
}
JoinMining();

const selectMiners = () =>{
    console.log("selecting miners...");
    let size=owners.length;
    let k=0;
  //  let minerGeneratedRandom=new Map();
    while(k<size)
    {
        let randomNumber=Math.floor((Math.random() * 1000000) + 1);
        minerGeneratedRandom.set(randomNumber,k);
        nominated_miners.push(randomNumber);
        k++;

    }
}

const calculateHash = (blockMiner) =>{

}

const broadcastBlock = (blockHash) =>{

}

const startMining = (miners) =>{
    let l=0;
    nominated_miners.sort();
    do{
        let MaxRandomNum=nominated_miners[l++];
        let miner_index=minerGeneratedRandom.get(MaxRandomNum);
        let blockMiner=owners[miner_index];

        let blockHash=calculateHash(blockMiner);


    }while(!broadcastBlock(blockHash));
    minerGeneratedRandom.clear();
}

const Mine = () => {
    //select 4 miners randomly
    selectMiners();
    console.log("selected miners are : ");
    console.log(nominated_miners);
    startMining();
}
Mine();