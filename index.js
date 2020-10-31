const fi = (function () {
  return   {
   libraryMethod: function () {
     return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
   },

   each: function (collection, alert) {

      for (const key in collection) {
        alert(collection[key]);
      }
      return collection;
   },

   map: function (collection, callback) {

      let array = [];
      for (const key in collection) {
        array.push(callback(collection[key]));
      }
      return array;
   },

   reduce: function (collection, callback, acc) {
    if (acc === undefined) {
      acc = collection[0];
      for (let i = 1; i < collection.length; i++){
        acc = callback(acc, collection[i])
      }
      return acc
    } else {
      for (let el of collection) {
        acc = callback(acc, el)
      }
      return acc
    }
  },

    find: function (collection, predicate) {
      for (const key in collection) {
        if (predicate(collection[key]) === true) {
          return collection[key];
        }
      }
    },

    filter: function (collection, predicate) {
      const newArr = [];
      for (const key in collection) {
        if (predicate(collection[key]) === true) {
          newArr.push(collection[key]);
        }
      }
      return newArr;
    },

    size: function (collection) {
      return Object.keys(collection).length;
    },

    first: function (array, n) {
      if (n === undefined) {
        return array[0];
      } else {
        return array.slice(0, n);
      }
    },

    last: function (array, n) {
      if (n === undefined) {
        return array[array.length - 1];
      } else {
        return array.slice(array.length - n);
      }
    },

    compact: function(array){
      let newArr = [];
      for(let el of array){
        if(!!el){
          newArr.push(el);
        }
      }
      return newArr
    },

    sortBy: function (array, callback) {
      return [...array].sort(function (a, b) {
        return callback(a) - callback(b);
      });
    },

    uniq: function (array, isSorted, callback) {
      let newArr = [];
      if (callback) {
        let arr = [...array].map((element) => callback(element));
        newArr = array.filter(
          (value, index, array) => arr.indexOf(callback(value)) === index
        );
      } else {
        newArr = [...new Set(array)];
      }
      return newArr;
    },
    flatten: function (array, shallow) {
      let flattened = [];
      if (shallow) {
        for (const element of array) {
          if (Array.isArray(element)) {
            for (const nestedElement of element) {
              flattened.push(nestedElement);
            }
          } else {
            flattened.push(element);
          }
        }
      } else {
        for (const element of array) {
          if (Array.isArray(element)) {
            const arrayFlatten = this.flatten(element);
            for (const nestedElement of arrayFlatten) {
              flattened.push(nestedElement);
            }
          } else {
            flattened.push(element);
          }
        }
      }
      return flattened;
    },	    
     keys: function (object) {

      return Object.keys(object);
     },
     values: function (object) {
      return Object.values(object);
    },
    functions: function (object) {
      let arr = []
      for(let key in object){
        if(typeof object[key] === "function"){
          arr.push(key)
        }
      }
      return arr.sort();
    },
  };
})();

fi.libraryMethod();
