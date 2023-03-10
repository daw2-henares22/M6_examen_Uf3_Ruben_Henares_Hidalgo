function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}
// Nótese que se evita el 2° índice ya que no hay ningún elemento en esa posición del array
[2, 5, , 9].forEach(logArrayElements);
// salida:
// a[0] = 2
// a[1] = 5
// a[2] = 9





const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"



var words = ['uno', 'dos', 'tres', 'cuatro'];
words.forEach(function(word) {
  console.log(word);
  if (word === 'dos') {
    words.shift();
  }
});
// uno
// dos
// cuatro




// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.com/#x15.4.4.18
if (!Array.prototype.forEach) {

    Array.prototype.forEach = function forEach(callback, thisArg) {
      'use strict';
      var T, k;
  
      if (this == null) {
        throw new TypeError("this is null or not defined");
      }
  
      var kValue,
          // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
          O = Object(this),
  
          // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
          // 3. Let len be ToUint32(lenValue).
          len = O.length >>> 0; // Hack to convert O.length to a UInt32
  
      // 4. If IsCallable(callback) is false, throw a TypeError exception.
      // See: http://es5.github.com/#x9.11
      if ({}.toString.call(callback) !== "[object Function]") {
        throw new TypeError(callback + " is not a function");
      }
  
      // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
      if (arguments.length >= 2) {
        T = thisArg;
      }
  
      // 6. Let k be 0
      k = 0;
  
      // 7. Repeat, while k < len
      while (k < len) {
  
        // a. Let Pk be ToString(k).
        //   This is implicit for LHS operands of the in operator
        // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
        //   This step can be combined with c
        // c. If kPresent is true, then
        if (k in O) {
  
          // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
          kValue = O[k];
  
          // ii. Call the Call internal method of callback with T as the this value and
          // argument list containing kValue, k, and O.
          callback.call(T, kValue, k, O);
        }
        // d. Increase k by 1.
        k++;
      }
      // 8. return undefined
    };
  }



  Sintaxis
arr.forEach(function callback(currentValue, index, array) {
    // tu iterador
}[, thisArg]);




<div class="mb-3 form-check">
<input type="checkbox" class="form-check-input" id="terms" required>
<label for="terms" class="form-check-label">Acepto los terminos y condiciones</label>
</div>
<div class="valid-feedback">
Todo bien
</div>
<div class="invalid-feedback">
Es necesario aceptar los terminos
</div>