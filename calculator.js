window.onload = function() { 
  // alert("Loaded"); //
  var result_display = document.getElementById("result_display_value");
      operator_display = document.getElementById("operator_display");
      num_1 = document.getElementById("num_1");
      num_2 = document.getElementById("num_2");
      num_3 = document.getElementById("num_3");
      num_4 = document.getElementById("num_4");
      num_5 = document.getElementById("num_5");
      num_6 = document.getElementById("num_6");
      num_7 = document.getElementById("num_7");
      num_8 = document.getElementById("num_8");
      num_9 = document.getElementById("num_9");
      num_0 = document.getElementById("num_0");
      plus =  document.getElementById("plus") ;
      minus = document.getElementById("minus");
      multi = document.getElementById("multi");
      divis = document.getElementById("divis");
      clear = document.getElementById("clear");
      enter = document.getElementById("enter");
      op = "";
      first = "";
      last = "";
      result = "";
    
    num_1.onclick = function(event){
        var one = 1;
        alert(one);
        operator_display.innerHTML ="";
        result_display.innerHTML = result_display.innerHTML + one;
        }; 

    num_2.onclick = function(event){
      var two = 2;
      alert(two);
      operator_display.innerHTML ="";
      result_display.innerHTML = result_display.innerHTML + two; 
        };
  
  num_3.onclick = function(event){
      var three = 3;
      operator_display.innerHTML ="";
      alert(three); 
      result_display.innerHTML = result_display.innerHTML + three;
      };
  
  num_4.onclick = function(event){
      var four = 4;
      operator_display.innerHTML ="";
      alert(four);   
      result_display.innerHTML = result_display.innerHTML + four;
      };

  num_5.onclick = function(event){
      var five = 5;
      alert(five); 
      operator_display.innerHTML =""; 
      result_display.innerHTML = result_display.innerHTML + five;
      };

  num_6.onclick = function(event){
      var six =6;
      alert(six);
      operator_display.innerHTML ="";   
      result_display.innerHTML = result_display.innerHTML + six;
      };
   
  num_7.onclick = function(event){
      var seven = 7;
      alert(seven);
      operator_display.innerHTML ="";   
      result_display.innerHTML = result_display.innerHTML + seven;
      };

    num_8.onclick = function(event){
      var eight = 8;
      alert("8");
      operator_display.innerHTML ="";   
      result_display.innerHTML = result_display.innerHTML + eight;
      };
  
    num_9.onclick = function(event){
      var nine = 9;
      alert(nine);
      operator_display.innerHTML ="";   
      result_display.innerHTML = result_display.innerHTML + nine;
      };
  
    num_0.onclick = function(event){
      var zero = 0;
      alert(zero);
      operator_display.innerHTML ="";   
      result_display.innerHTML = result_display.innerHTML + zero;
      };
 
    plus.onclick = function(event){
      alert("+");
      first = result_display.innerHTML;
      result_display.innerHTML = "";
      operator_display.innerHTML ="+";
      op = operator_display.innerHTML;
      };

    minus.onclick = function(event){
      alert("-");   
      first = result_display.innerHTML;
      result_display.innerHTML = "";
      operator_display.innerHTML ="-";
      op = operator_display.innerHTML;
      };

    multi.onclick = function(event){
      alert("*"); 
      first = result_display.innerHTML;  
      result_display.innerHTML = "";
      operator_display.innerHTML ="*";
      op = operator_display.innerHTML;
        };
   
    divis.onclick = function(event){
      alert("/");
      first = result_display.innerHTML;
      result_display.innerHTML = "";
      operator_display.innerHTML ="/"; 
      op = operator_display.innerHTML;
      };
  
    clear.onclick = function(event){
      alert("CLR");
      operator_display.innerHTML ="";   
      result_display.innerHTML = "";
      };
  
    enter.onclick = function(event){
      alert("ENT");
      last = result_display.innerHTML;
      first = parseInt(first);
      last = parseInt(last);
      if(op === "+"){result = first + last;}
      if(op === "-"){result = first - last;}
      if(op === "*"){result = first * last;}
      if(op === "/"){result = first / last;}
      result_display_value.innerHTML = result;
 };
};
