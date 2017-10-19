var vm = {
  heading: ko.observable(),
  store: ko.observable(),
  newListItem: ko.observable(),
  list: ko.observableArray(), 
    addListItem: function() {
        this.list.push(this.newListItem());
        this.newListItem("");
    }
};
vm.heading("Ninja Heading");
vm.store("Ninja Store");
vm.list.push("one");
vm.list.push("two");
vm.list.push("three");
ko.applyBindings(vm);
