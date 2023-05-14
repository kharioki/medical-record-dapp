const QUERYPRAM = "patients json"; // used when quering pinata to get pinned items
const CONTRACTADDRESS = "0xA7526e6665177dC85870Ed882250cB811E91a59A";
const JWT = `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`;
const CONTRACTOWNER = "0x76D0096220eB4e7C62eb2b3D92af9068D149a5d9".toLocaleLowerCase();

export { QUERYPRAM, CONTRACTADDRESS, JWT, CONTRACTOWNER };