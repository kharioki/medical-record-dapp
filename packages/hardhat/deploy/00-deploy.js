const { ethers } = require("hardhat");

async function main() {
  const storageContract = await ethers.getContractFactory("ImageStorage");

  const deployedStorageContract = await storageContract.deploy();

  await deployedStorageContract.deployed();

  console.log(
    "Image Storage Contract Address:",
    deployedStorageContract.address
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
