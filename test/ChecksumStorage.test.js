/* eslint-disable jest/expect-expect */
const ChecksumStorage = artifacts.require('ChecksumStorage')
const truffleAssert = require('truffle-assertions')

contract('ChecksumStorage test suite', async () => {
  let instance
  beforeEach(async () => {
    instance = await ChecksumStorage.new()
  })

  it('should emit Stored event after store a string', async () => {
    const transaction = await instance.store('b2263f1fas4a')

    truffleAssert.eventEmitted(transaction, 'Stored')
  })

  it('should return true if checksum is stored', async () => {
    await instance.store('7509e5bda0c7')

    const isChecksumStored = await instance.isStored.call('7509e5bda0c7')

    assert.equal(isChecksumStored, true)
  })

  it('should return false if checksum is not stored', async () => {
    await instance.store('7509e5bda0c7')

    const isChecksumStored = await instance.isStored.call('b5b2263fa01c')

    assert.equal(isChecksumStored, false)
  })
})
