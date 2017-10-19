var vm = {
  heading: ko.observable(),
  store: ko.observable(),
  list: ko.observableArray()
};
vm.heading("Ninja Heading");
vm.store("Ninja Store");
vm.list.push("one");
vm.list.push("two");
vm.list.push("three");
ko.applyBindings(vm);
