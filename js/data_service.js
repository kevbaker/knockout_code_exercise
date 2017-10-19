
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
    getDataByYear() {
      let data = this.getData();
      let sortedData = [];
  
      data.forEach(
        function(item) {
          sortedData = this.createYear(sortedData, item);
          let dataYear = this.findYear(sortedData, item);
          dataYear[item.Month] = item.Value;
        }.bind(this)
      );
      return sortedData;
    }
    findYear(sortedData, item) {
      let foundItem = {};
      sortedData.forEach(function(dataItem) {
        if (dataItem.Year == item.Year) {
          foundItem = dataItem;
        }
      });
      return foundItem;
    }
    createYear(sortedData, item) {
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
    addItem(item) {
      this.data.push(item);
    }
    getData() {
      return this.data;
    }
  }
