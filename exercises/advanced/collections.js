import { resolve } from "dns";

/**
 * Using Promise.all, write a function, combineFirstLineOfManyFiles, that:
 *    1. Reads each file at the path in the `filePaths` array
 *    2. Plucks the first line of each file
 *    3. Joins each first line into a new file
 *      - The lines should be in the same order with respect to the input array
 *      - i.e. the second line in the new file should be the first line of `filePaths[1]`
 *    4. Writes the new file to the file located at `writePath`
 */
var writeFileAsync = Promise.promisify(fs.writeFile);

var combineFirstLineOfManyFiles = function (filePaths, writePath) {
  // TODO

  // Promise(firstLineStore = '')
  // iterate through filePaths Array
  let firstLineStore = [];
  for (let i = 0; i < filePaths.length; i++) {
    firstLineStore.push(fs.readFileAsync(filePaths[i])
      .then(fileData => {
        return fileData.split('\n')[0];
      }));
  }
  Promise.all(firstLineStore)
    .then((values) => {
      let combinedStr = '';
      for (let i = 0; i < values.length; i++) {
        combinedStr += values[i] + '\n';
      };
      writeFileAsync(writePath, combinedStr);
    });

  //   fs.readFile to access the body of text (produces firstLine)
  //   firstLineStore += firstLine + '\n'

  // };

  // have the firstLineStore above to resolve...
  //   fs.writeFile(writePath, firstLineStore)

  // Promise(firstLineStore)
  // .then(combinedFirstLines => {
  //   writeFile(writepij;oih')
  // })

  // Export these functions so we can unit test them
  module.exports = {
    combineFirstLineOfManyFiles: combineFirstLineOfManyFiles
  };