// SPDX-License-Identifier: None
pragma solidity >=0.4.22 <0.8.0;

contract ChecksumStorage {
    string public storedChecksum;

    event Stored();

    function store(string memory checksum) public returns (bool) {
        storedChecksum = checksum;
        emit Stored();
    }

    function isStored(string memory checksum) public view returns (bool) {
        return stringAreEquals(storedChecksum, checksum);
    }

    function stringAreEquals(string memory a, string memory b)
        public
        pure
        returns (bool)
    {
        return (keccak256(abi.encodePacked(a)) ==
            keccak256(abi.encodePacked(b)));
    }
}
