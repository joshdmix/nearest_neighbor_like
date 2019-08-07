const b = require('./beacons');

const distance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2));
  };
const perimeter = (x1, y1, x2, y2, x3, y3) => {
    return distance(x1, y1, x2, y2) + distance(x2, y2, x3, y3) + distance(x1, y1, x3, y3)
};

// console.log(distance(23.7, -18.8, 31.92, -0.55))
// // console.log(distance(23.7, -18.8, -12.6, -20.41))
// // console.log(distance(-12.6, -20.41, 31.92, -0.55))




// console.log(perimeter(23.7, -18.8, 31.92, -0.55, -12.6, -20.41))


const findSmallestDistance = (arr) => {
  let dist = Infinity
  let smallestDist = [null, null, null]
  for (let i = 0; i < arr.length; i++) {
		  for (let j = i + 1; j < arr.length; j++) {
									const d = distance(arr[i].x, arr[i].y, arr[j].x, arr[j].y)
				     				  if (
                        (d < dist)
															&& (arr[i]._id !== arr[j]._id)) {
															dist = d;
															smallestDist = [arr[i], arr[j]];
															}
				     }
         }
return smallestDist;
};

findSmallestDistance(b);

module.exports = {distance, perimeter};
