const beacons = require('./beacons')

const distance = (x1, y1, x2, y2) => {
  return Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2));
};

const perimeter = (x1, y1, x2, y2, x3, y3) => {
  return distance(x1, y1, x2, y2) + distance(x2, y2, x3, y3) + distance(x1, y1, x3, y3)
}

const findSmallestTriangle = (arr) => {
  let peri = Infinity
  let smallestTriangle = [null, null, null]
  for (let i = 0; i < arr.length; i++) {
		  for (let j = i + 1; j < arr.length; j++) {
        	for (let k = j + 1; k < arr.length; k++) {
									const per = perimeter(arr[i].x, arr[i].y, arr[j].x, arr[j].y, arr[k].x, arr[k].y)
									if (per && per < peri) {
					                      peri = per;
					                      smallestTriangle = [arr[i], arr[j], arr[k]];
									}
				     }
         }
	   }
  return smallestTriangle
};

console.log(findSmallestTriangle(beacons))



module.exports = { distance, perimeter, findSmallestTriangle };

