const { expect } = require("chai");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { ethers } = require("hardhat");

describe("Todo", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deployTodo() {
        // by default the first signer is used to deploy contracts.
        // const [deployer, secondAccount] = await ethers.getSigners();

        const Todo = await ethers.getContractFactory("Todo");
        const todo = await Todo.deploy();

        return { todo };
    }

    async function oneTaskAdded() {
        // Load the deployed Todo contract
        let { todo } = await loadFixture(deployTodo);

        // Add a task
        await todo.addTask("Submit Idea for BWC Hackathon");

        // return this instance.
        return { todo };
    }

    async function oneTaskCompleted() {
        // Load the Todo instance with one task added.
        let { todo } = await loadFixture(oneTaskAdded);

        // mark the task as complete.
        await todo.markTaskComplete(0);

        // return this instance.
        return { todo };
    }

    it("Should be able to add tasks", async function () {
        // Loading deployed Todo contract
        let { todo } = await loadFixture(deployTodo);

        // Try adding a task and expect everything to be ok.
        await expect(todo.addTask("Submit Idea to BWC hackathon"))
            .to.emit(todo, "TaskAdded")
            .withArgs(0);

        // Check if the task did get added
        expect((await todo.tasks(0)).description).to.be.equal(
            "Submit Idea to BWC hackathon"
        );
    });

    it("Should be able to mark tasks complete", async function () {
        // Load the Todo instance with one task added.
        let { todo } = await loadFixture(oneTaskAdded);

        // Try marking the task as complete and expect TaskCompleted event to be emitted.
        await expect(todo.markTaskComplete(0))
            .to.emit(todo, "TaskCompleted")
            .withArgs(0);
    });

    it("Should not be able to mark already completed task complete", async function () {
        // Load the Todo instance with one task completed.
        let { todo } = await loadFixture(oneTaskCompleted);

        // Trying to mark an already completed task complete
        await expect(todo.markTaskComplete(0)).to.be.revertedWith(
            "Task already complete"
        );
    });

    it("Should not be able to mark non-existent task complete", async function () {
        let { todo } = await loadFixture(deployTodo);

        // Trying to mark a non-existent task complete.
        await expect(todo.markTaskComplete(1)).to.be.revertedWith(
            "No such task exists"
        );
    });
});
