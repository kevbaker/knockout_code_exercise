
class MainViewModel {
    constructor(data) {
      // define properties
      this.newBigListItemName = ko.observable();
      this.newBigListItemType = ko.observable();
      this.records = ko.observableArray();
      this.dataSevice = new DataService();
  
      // initialize UI
      this.populateRecords();
    }
    populateRecords() {
      this.records = this.dataSevice.getDataByYear();
    }
    addItem() {
      let item = {
        Year: 2014,
        Month: 6,
        Value: 22
      };
      this.records = ko.observableArray();
      this.bigList.push(item);
    }
  }
  ko.applyBindings(new MainViewModel());

  