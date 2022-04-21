import { ethers } from 'hardhat'
import * as fs from 'fs';

async function main() {
  let accounts = await ethers.getSigners();
  const EnergyContract = (await ethers.getContractFactory("BinamonEnergy", accounts[0]));
  const energyContract = (await EnergyContract.deploy());
  await energyContract.deployed();

  const energyContractAddress = energyContract.address;
  console.log(energyContractAddress);
  if (energyContractAddress) {
    const settingPath = 'settings.json';
    const data = fs.readFileSync(settingPath);
    let settings = JSON.parse(data.toString());
    settings['BMONEC'] = energyContractAddress;
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