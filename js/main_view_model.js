/**
 * Main ViewModel for index UI
 */
class MainViewModel {
    constructor(data) {
      // define properties
      this.records = ko.observableArray();
      this.data = ko.observableArray();
      this.newYear = ko.observable((new Date()).getFullYear());
      this.newValue = ko.observable(0.8);
      this.newMonth = ko.observable(1);

      // services
      this.dataSevice = new DataService();

      // utils
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

      // initialize display
      this.updateRecords();
      this.updateData();
    }

    /**
     * Update data property
     */
    updateData() {
      let newData = this.dataSevice.getData();
      this.data(this.dataSevice.getData());
    }

    /**
     * Update records property. Theser are the sorted values
     */
    updateRecords() {
      this.records(this.dataSevice.getDataByYear());    
    }

    /**
     * Change item in data
     * @param {integer} year 
     * @param {integer} month 
     * @param {object} data 
     * @param {object} e 
     */
    onChangeItem(year, month, data, e) {
      let value = e.target.value;
      let item = {
        Year: year,
        Month: month,
        Value: parseFloat(value)
      };
      this.updateItem(item);
    }

    /**
     * Add item in data. If item already exists, update with new value.
     */
    onAddItem() {
      let item = {
        Year: this.newYear(),
        Month: this._getMonthValue(this.newMonth()),
        Value: parseFloat(this.newValue())
      };
      this.updateItem(item);
    }

    /**
     * Refresh the data used in the displa
     */
    refresh() {
      this.updateData();
      this.updateRecords();
    }

    /**
     * Update the item
     * @param {object} item 
     */
    updateItem(item) {
      this.dataSevice.removeItem(item);
      this.dataSevice.addItem(item);
      this.refresh();
    }

    /**
     * Get the month value for the given name
     * @param {string} monthName 
     */
    _getMonthValue(monthName) {
      let found = 1;
      this.months.forEach(function(m){
        if (m.text == monthName){
          found = m.value;
        }
      });
      return found;
    }
  }
  let mv = new MainViewModel();
  ko.applyBindings(mv);

  