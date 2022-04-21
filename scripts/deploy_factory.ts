import { ethers } from 'hardhat'
import { BMON, BNRG, BMON_Z1, BMONC, BMONEC, BMONC_Z1, BLANDC } from '../settings.json'
import { BinamonFactory__factory } from '../typechain-types';
import { BinamonFactory } from '../typechain-types/BinamonFactory'
import * as fs from 'fs';

async function main() {
  let accounts = await ethers.getSigners();
  const factoryContract = (await ethers.getContractFactory("BinamonFactory", accounts[0])) as BinamonFactory__factory;
  const binamonFactory = (await factoryContract.deploy(BMON, BNRG, BMON_Z1, BMONC, BMONEC, BMONC_Z1, BLANDC)) as BinamonFactory;
  await binamonFactory.deployed();

  const binamonFactoryAddress = binamonFactory.address;
  console.log(binamonFactoryAddress);
  if (binamonFactory.address) {
    const settingPath = 'settings.json';
    const data = fs.readFileSync(settingPath);
    let settings = JSON.parse(data.toString());
    settings['BMON_FACTORY'] = binamonFactoryAddress;
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