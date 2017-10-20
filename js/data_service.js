/**
 * DataService to handle all data for application. Sort of a mock API Client.
 */
class DataService {
  constructor() {
    this.data = [
      { Year: 2012, Month: 1, Value: 0.5 },
      { Year: 2012, Month: 2, Value: 0.5 },
      { Year: 2012, Month: 3, Value: 0.75 },
      { Year: 2012, Month: 4, Value: 0.75 },
      { Year: 2012, Month: 5, Value: 0.5 },
      { Year: 2012, Month: 6, Value: 0.5 },
      { Year: 2012, Month: 7, Value: 0.75 },
      { Year: 2012, Month: 8, Value: 0.75 },
      { Year: 2012, Month: 9, Value: 0.5 },
      { Year: 2012, Month: 10, Value: 0.5 },
      { Year: 2012, Month: 11, Value: 0.75 },
      { Year: 2012, Month: 12, Value: 0.75 },

      { Year: 2013, Month: 1, Value: 0.5 },
      { Year: 2013, Month: 2, Value: 0.5 },
      { Year: 2013, Month: 3, Value: 0.75 },
      { Year: 2013, Month: 4, Value: 0.75 },
      { Year: 2013, Month: 5, Value: 0.5 },
      { Year: 2013, Month: 6, Value: 0.5 },
      { Year: 2013, Month: 7, Value: 0.75 },
      { Year: 2013, Month: 8, Value: 0.75 },
      { Year: 2013, Month: 9, Value: 0.5 },
      { Year: 2013, Month: 10, Value: 0.5 },
      { Year: 2013, Month: 11, Value: 0.75 },
      { Year: 2013, Month: 12, Value: 0.75 },
      { Year: 2014, Month: 1, Value: 0.85 }
    ];
  }

  /**
     * Get the data sorted by Year with month objects
     * @return {array} sorted data by year
     */
  getDataByYear() {
    let data = this.getData();
    let sortedData = [];

    data.forEach(
      function(item) {
        sortedData = this._createYear(sortedData, item);
        let dataYear = this._findYear(sortedData, item);
        dataYear[item.Month] = item.Value;
        this._updateTotal(dataYear, item);
      }.bind(this)
    );
    return sortedData;
  }

  /**
     * Find the Year object from the given sortedData 
     * @param {array} sortedData 
     * @param {object} item - item used to match year
     * @return {object} found year item
     */
  _findYear(sortedData, item) {
    let foundItem = {};
    sortedData.forEach(function(dataItem) {
      if (dataItem.Year == item.Year) {
        foundItem = dataItem;
      }
    });
    return foundItem;
  }

  /**
     * Create a Year object for the given item in the sortedData
     * @param {array} sortedData 
     * @param {object} item 
     */
  _createYear(sortedData, item) {
    let found = false;
    sortedData.forEach(function(dataItem) {
      if (dataItem.Year == item.Year) {
        found = true;
      }
    });
    if (!found) {
      let newYear = {
        Year: item.Year,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0,
        "10": 0,
        "11": 0,
        "12": 0,
        Total: 0
      };
      sortedData.push(newYear);
    }
    return sortedData;
  }
  /**
     * Update total for the given year item
     * @param {object} yearItem - year object for setting Total
     * @param {object} item - item object to get value to add to year
     */
  _updateTotal(yearItem, item) {
    yearItem.Total += item.Value;
  }
  /**
     * Add an item to the data
     * @param {object} item 
     */
  addItem(item) {
    this.data.push(item);
    this.sortDataByDate();
  }
  sortDataByDate() {
    this.data.sort(function(a, b) {
      let aa = a.Year * 12 + a.Month;
      let bb = b.Year * 12 + b.Month;
      return aa - bb;
    });
  }
  /**
     * Get the data
     * @return {array} data
     */
  getData() {
    return this.data;
  }
}
