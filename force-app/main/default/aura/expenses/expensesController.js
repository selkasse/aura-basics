({
  //Load Expenses from Salesforce
  doInit: function (component, event, helper) {
    console.log("in doInit");
    //create the Action
    var action = component.get("c.getExpenses");
    //add a callback fron when response is received
    action.setCallback(this, function (response) {
      var state = response.getState();
      if (state === "SUCCESS") {
        component.set("v.expenses", response.getReturnValue());
        console.log("ReturnValue: " + response.getReturnValue());
      } else {
        console.log("Failed with state: " + state);
      }
    });
    //Send action off to be executed
    $A.enqueueAction(action);
  },

  handleUpdateExpense: function (component, event, helper) {
    var updatedExp = event.getParam("expense");
    helper.updateExpense(component, updatedExp);
  },

  handleCreateExpense: function (component, event, helper) {
    var newExpense = event.getParam("expense");
    helper.createExpense(component, event, newExpense);
  }
  //   expensesChange: function (component, event) {
  //     console.log("in expensesChange");
  //     let clearEvent = component.getEvent("clearForm");

  //     clearEvent.fire();
  //   }
});
