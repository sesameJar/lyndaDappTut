pragma solidity ^0.5.0;

contract ApprovalContract {
    address public sender;
    address payable public receiver;
    address constant public approver = 0xf5B88C872aFf25A558Edb203aC8868BF6d437AAa;

    function deposit(address payable _receiver) external payable {
        require(msg.value >0);
        sender = msg.sender;
        receiver = _receiver;
    }

    function viewApprover() external pure returns(address) {
        return(approver);
    }

    function approve() external {
        require(msg.sender == approver);
        receiver.transfer(address(this).balance);
    }
}
