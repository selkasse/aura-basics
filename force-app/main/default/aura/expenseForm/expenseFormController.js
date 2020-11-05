({
  clickCreate: function (component, event, helper) {
    var validExpense = component
      .find("expenseform")
      .reduce(function (validSoFar, inputCmp) {
        // Displays error messages for invalid fields
        inputCmp.showHelpMessageIfInvalid();
        return validSoFar && inputCmp.get("v.validity").valid;
      }, true);
    // If we pass error checking, do some real work
    if (validExpense) {
      // Create the new expense
      var newExpense = component.get("v.newExpense");
      console.log("Create expense: " + JSON.stringify(newExpense));
      helper.createExpense(component, newExpense);
    }
  },
  handleClearForm: function (component, event, helper) {
    console.log("in handleClearForm");
    component.set("v.newExpense", {
      sobjectType: "Expense__c",
      Name: "",
      Amount__c: 0,
      Client__c: "",
      Date__c: "",
      Reimbursed__c: false
    });
  }
});
