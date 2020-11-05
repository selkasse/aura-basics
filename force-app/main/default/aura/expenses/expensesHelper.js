({
  createExpense: function (component, event, expense) {
    this.saveExpense(component, expense, function (response) {
      var state = response.getState();
      if (state === "SUCCESS") {
        var expenses = component.get("v.expenses");
        expenses.push(response.getReturnValue());
        component.set("v.expenses", expenses);

        let clearEvent = $A.get("e.c:clearExpenseFormEvent");
        clearEvent.fire();
      }
    });
  },

  updateExpense: function (component, expense) {
    this.saveExpense(component, expense);
  },

  saveExpense: function (component, expense, callback) {
    var action = component.get("c.saveExpense");
    action.setParams({
      expense: expense
    });
    if (callback) {
      action.setCallback(this, callback);
    }
    $A.enqueueAction(action);
  }
});
