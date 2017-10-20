
class MainViewModel {
    constructor(data) {
      // define properties
      this.records = ko.observableArray();
      this.data = ko.observableArray();
      this.newYear = ko.observable((new Date()).getFullYear());
      this.newValue = ko.observable(0.25);
      this.newMonth = ko.observable(1);
      this.dataSevice = new DataService();
      this.months = [
        {text: 'Jan', value: 1},
        {text: 'Feb', value: 2},
        {text: 'Mar', value: 3},
        {text: 'Apr', value: 4},
        {text: 'May', value: 5},
        {text: 'Jun', value: 6},
        {text: 'Jul', value: 7},
        {text: 'Aug', value: 8},
        {text: 'Sep', value: 9},
        {text: 'Oct', value: 10},
        {text: 'Nov', value: 11},
        {text: 'Dec', value: 12}
      ];

      // initialize UI
      this.updateRecords();
      this.updateData();
    }
    updateData() {
      let newData = this.dataSevice.getData();
      this.data(newData);
    }
    updateRecords() {
      this.records(this.dataSevice.getDataByYear());
    }
    _getMonthValue(monthName) {
      let found = 1;
      this.months.forEach(function(m){
        if (m.text == monthName){
          found = m.value;
        }
      });
      return found;
    }
    changeItem(year, month, data, e) {

    }
    addItem() {
      let item = {
        Year: this.newYear(),
        Month: this._getMonthValue(this.newMonth()),
        Value: parseFloat(this.newValue())
      };
      this.dataSevice.removeItem(item)
      this.dataSevice.addItem(item);
      this.data(this.dataSevice.data);
      this.updateRecords();
    }
  }
  let mv = new MainViewModel();
  ko.applyBindings(mv);

  