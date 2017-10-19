
class SandboxViewModel {
  constructor(data) {
    // define properties
    this.heading = ko.observable();
    this.store = ko.observable();
    this.newListItem = ko.observable();
    this.newBigListItemName = ko.observable();
    this.newBigListItemType = ko.observable();
    this.list = ko.observableArray();
    this.bigList = ko.observableArray();    

    // initialize UI
    this.populateList();
    this.populateBigList();
    this.populateHeadings();
  }
  populateHeadings() {
    this.heading("Ninja Heading");
    this.store("Ninja Store");
  }
  populateList() {
    this.list.push("one");
    this.list.push("two");
    this.list.push("three");
  }
  populateBigList() {
    this.bigList.push({"name": "Kevin", "type":"human"});
    this.bigList.push({"name": "Robin", "type":"human"});
    this.bigList.push({"name": "Penny", "type":"baby"});
  }
  addListItem() {
    this.list.push(this.newListItem());
    this.newListItem("");
  }
  addBigListItem() {
    let item = {
      name: this.newBigListItemName(),
      type: this.newBigListItemType()
  };
  this.bigList.push(item);
  }
}
ko.applyBindings(new SandboxViewModel());
