const ApprovalContract = artifacts.require('../contracts/ApprovalContract.sol')

contract('ApprovalContract', function(accounts) {
    it('initiates contract', async function(){
        const contract = await ApprovalContract.deployed();
        const approver = await contract.approver.call();
        assert.equal(approver, 0xf5B88C872aFf25A558Edb203aC8868BF6d437AAa, "addresses are not matched");
    })

    it('Takes a deposit', async  function() {
        const contract = await ApprovalContract.deployed();
        await contract.deposit(accounts[0], {value : 1e+18, from : accounts[1]});
        assert.equal(await web3.eth.getBalance(contract.address), 1e+18, "balance not matched");
    })
})