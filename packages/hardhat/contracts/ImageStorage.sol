// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract ImageStorage {
    mapping(string => string) imageUrls;

    function addImageUrl(
        string memory imageTitle,
        string memory _imageUrl
    ) public {
        imageUrls[imageTitle] = _imageUrl;
    }

    function getImageUL(
        string memory imageTitle
    ) public view returns (string memory) {
        return imageUrls[imageTitle];
    }
}
