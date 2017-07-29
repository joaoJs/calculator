$(document).ready(function() {
  
  var after = 0;
  var count = 0;
  var operations = [];
  var nums = [];
  var num1;
  var num2;
  
  $(".one").on("click", function() {
    $(".op").append("1");
    var str = $(".op").text();
    if (count === 0) {
      num1 = Number(str);
    } else {
      num2 = Number(str.slice(1));
    }
  });
  
  $(".two").on("click", function() {
    $(".op").append("2");
    var str = $(".op").text();
    if (count === 0) {
      num1 = Number(str);
    } else {
      num2 = Number(str.slice(1));
    }
  });
  
  $(".three").on("click", function() {
    $(".op").append("3");
    var str = $(".op").text();
    if (count === 0) {
      num1 = Number(str);
    } else {
      num2 = Number(str.slice(1));
    }
  });
  
  $(".four").on("click", function() {
    $(".op").append("4");
    var str = $(".op").text();
    if (count === 0) {
      num1 = Number(str);
    } else {
      num2 = Number(str.slice(1));
    }
  });
  
  $(".five").on("click", function() {
    $(".op").append("5");
    var str = $(".op").text();
    if (count === 0) {
      num1 = Number(str);
    } else {
      num2 = Number(str.slice(1));
    }
  });
  
  $(".six").on("click", function() {
    $(".op").append("6");
    var str = $(".op").text();
    if (count === 0) {
      num1 = Number(str);
    } else {
      num2 = Number(str.slice(1));
    }
  });
  
  $(".seven").on("click", function() {
    $(".op").append("7");
    var str = $(".op").text();
    if (count === 0) {
      num1 = Number(str);
    } else {
      num2 = Number(str.slice(1));
    }
  });
  
  $(".eight").on("click", function() {
    $(".op").append("8");
    var str = $(".op").text();
    if (count === 0) {
      num1 = Number(str);
    } else {
      num2 = Number(str.slice(1));
    }
  });
  
  $(".nine").on("click", function() {
    $(".op").append("9");
    var str = $(".op").text();
    if (count === 0) {
      num1 = Number(str);
    } else {
      num2 = Number(str.slice(1));
    }
  });
  
  $(".zero").on("click", function() {
    $(".op").append("0");
    var str = $(".op").text();
    if (count === 0) {
      num1 = Number(str);
    } else {
      num2 = Number(str.slice(1));
    }
  });
  
  $(".plus").on("click", function() {
    $(".op").html("+");
    operations.push("+");
    if (count === 0) {
      nums.push(num1);
      count++;
    } else {
      nums.push(num2);
      after = 0;
    }
  });
  
  $(".minus").on("click", function() { 
    if ((nums.length === operations.length) && (nums.length > 0)) {
      if (after === 1) {
        $(".op").html("-");
        operations.push("-");
        nums.push(num2);
        after = 0;
      } else {
      $(".op").append("-");
      }
    } else {
      $(".op").html("-");
      operations.push("-");
      if (count === 0) {
        nums.push(num1);
        count++;
      } else {
        nums.push(num2);
      }
    }
  });
  
  $(".mult").on("click", function() {
    $(".op").html("X");
    operations.push("*");
    if (count === 0) {
      nums.push(num1);
      count++;
    } else {
      nums.push(num2);
      after = 0;
    }
  });
  
  $(".per").on("click", function() {
    $(".op").html("÷");
    operations.push("/");
    if (count === 0) {
      nums.push(num1);
      count++;
    } else {
      nums.push(num2);
      after = 0;
    }
  });
  
  $(".mod").on("click", function() {
    $(".op").html("%");
    operations.push("%");
    if (count === 0) {
      nums.push(num1);
      count++;
    } else {
      nums.push(num2);
      after = 0;
    }
  });
  
  $(".clear").on("click", function() {
    clear();
  });
  
  $(".equals").on('click', function () {
    calculate();
  });
  
  function calculate() {
    if (nums.length < 2 && num2 === undefined) {
        clear();
        $(".res").html("Error");
    } else {
    var acc = nums[0];
    for (let i = 1; i < nums.length; i++) {
      if (operations[i-1] === "+") {
        acc += nums[i];
      }
      if (operations[i-1] === "-") {
        acc -= nums[i];
      }
      if (operations[i-1] === "*") {
        acc *= nums[i];
      }
      if (operations[i-1] === "/") {
        acc = acc / nums[i];
      }
      if (operations[i-1] === "%") {
        acc = acc % nums[i];
      }
  }
   console.log(acc, num2);
   var l = operations[operations.length -  1];
   if (l === "+") {
        acc += num2;
      }
      if (l === "-") {
        acc -= num2;
      }
      if (l === "*") {
        acc *= num2;
      }
      if (l === "/") {
        acc = acc / num2;
      }
      if (l === "%") {
        acc = acc % num2;
      }
    
    after = 1;
    $(".res").html(acc);
    }
  }
  
    function clear() {
      $(".op").html("");
      $(".res").html("");
      num1 = 0;
      num2 = 0;
      count = 0;
      after = 0;
      operations = [];
      nums = [];
    }
  
});