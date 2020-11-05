({
  createItem: function (component, newItem) {
    let addEvent = component.getEvent("addItem");
    addEvent.setParams({ item: newItem });
    addEvent.fire();
    component.set("v.newItem", {
      sobjectType: "Camping_Item__c",
      Price__c: 0,
      Quantity__c: 0
    });
  }
});
