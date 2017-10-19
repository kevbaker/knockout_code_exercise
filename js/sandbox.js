var vm = {
  heading: ko.observable(),
  store: ko.observable(),
  newListItem: ko.observable(),
  newBigListItemName: ko.observable(),
  newBigListItemType: ko.observable(),
  list: ko.observableArray(),
  bigList: ko.observableArray(),
  addListItem: function() {
    this.list.push(this.newListItem());
    this.newListItem("");
  },
  addBigListItem: function() {
    let item = {
        name: this.newBigListItemName(),
        type: this.newBigListItemType()
    };
    this.bigList.push(item);
  }
};
vm.heading("Ninja Heading");
vm.store("Ninja Store");


vm.list.push("one");
vm.list.push("two");
vm.list.push("three");

vm.bigList.push({"name": "Kevin", "type":"human"});
vm.bigList.push({"name": "Robin", "type":"human"});
vm.bigList.push({"name": "Penny", "type":"baby"});

ko.applyBindings(vm);
