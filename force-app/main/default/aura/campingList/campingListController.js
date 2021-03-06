({
  doInit: function (component, event, helper) {
    // Create the action
    let action = component.get("c.getItems");
    // Add callback behavior for when response is received
    action.setCallback(this, function (response) {
      let state = response.getState();
      if (state === "SUCCESS") {
        component.set("v.items", response.getReturnValue());
      } else {
        console.log("Failed with state: " + state);
      }
    });
    // Send action off to be executed
    $A.enqueueAction(action);
  },
  handleAddItem: function (component, event, helper) {
    let newItem = event.getParam("item");
    // helper.createItem(component, newItem);
    let action = component.get("c.saveItem");
    action.setParams({
      item: newItem
    });

    action.setCallback(this, function (response) {
      let state = response.getState();
      if (state === "SUCCESS") {
        let items = component.get("v.items");
        items.push(response.getReturnValue());
        component.set("v.items", items);
      } else {
        console.log("Failed with state: " + state);
      }
    });

    $A.enqueueAction(action);
  }
});
