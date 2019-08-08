let ApprovalContract = artifacts.require("ApprovalContact");

module.exports = function(deployer){
    deployer.deploy(ApprovalContract);
}