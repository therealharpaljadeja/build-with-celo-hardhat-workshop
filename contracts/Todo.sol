// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.7;

contract Todo {
    struct Task {
        bool isComplete;
        string description;
    }

    uint256 taskCounter;
    mapping(uint256 => Task) public tasks;

    event TaskAdded(uint256 indexed taskId);
    event TaskCompleted(uint256 indexed taskId);

    function addTask(string calldata task) external returns (uint256) {
        uint256 taskId = taskCounter;
        tasks[taskId].description = task;
        emit TaskAdded(taskId);
        taskCounter++;
        return taskId;
    }

    function isCompleted(uint256 taskId) public view returns (bool) {
        return tasks[taskId].isComplete;
    }

    function markTaskComplete(uint256 taskId) external {
        require(taskId < taskCounter, "No such task exists");
        require(!isCompleted(taskId), "Task already complete");
        tasks[taskId].isComplete = true;
        emit TaskCompleted(taskId);
    }
}
