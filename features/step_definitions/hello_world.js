const assert = require("assert");
const { Given, When, Then, After } = require("cucumber");
const axios = require("axios");

const server = require("../../src/app");

let actualResponse = "";

Given("I have an axios instance", function() {
    this.axiosInstance = axios.create({
        baseURL: "http://localhost:3000/",
        timeout: 5000,
    });
});

When("I visit the {string} route", async function(string) {
    await this.axiosInstance.get(string).then(function(response) {
        actualResponse = response.data;
    });
});

Then("I should get {string}", function(expectedResponse) {
    assert.equal(actualResponse, expectedResponse);
});

After(function() {
    server.close();
});
