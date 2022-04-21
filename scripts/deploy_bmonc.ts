import { ethers } from 'hardhat'
import * as fs from 'fs';

async function main() {
  const GenesisContract = (await ethers.getContractFactory("BinamonGenesis"));
  const genesisContract = (await GenesisContract.deploy());
  await genesisContract.deployed();

  const genesisContractAddress = genesisContract.address;
  console.log(genesisContractAddress);
  if (genesisContractAddress) {
    const settingPath = 'settings.json';
    const data = fs.readFileSync(settingPath);
    let settings = JSON.parse(data.toString());
    settings['BMONC'] = genesisContractAddress;
    fs.writeFileSync(settingPath, JSON.stringify(settings, null, '\t'));
  }

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });