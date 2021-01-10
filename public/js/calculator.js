function number(n)   
         {   //when the number or operation button is cliked
             var t = document.getElementById("second").value
             var ans = document.getElementById("screen").value
             if(t=="0"){
                t=""
             }
             if(ans.indexOf("=")!=-1 ) { //the equal button has just been clicked 
                document.getElementById("screen").value = t
                if(n!="+" && n!="-" && n!="*" && n!="/") {   
                    t=""
                }
             }
             document.getElementById("second").value=t+n 
         } 
       
       function stringToList(str) 
       {                   // convert the string of screen to an array 
          var result = [],temp = ''
          for (var i = 0, e; e = str.charAt(i); i++) {
          if ('*/+-'.indexOf(e) > -1) {
            if (temp == '' && e == '-') {
                temp = '-'
            } else {
                result.push(parseFloat(temp), e);
                temp = ''
            }
           } else {
             temp += str.charAt(i)
           }
         }
         if (temp != '') {
         result.push(parseFloat(temp))
            }
       return result
       }

function result(list) {   //calculate the result 
    
      var newList = [],temp
      var op = [{'*': (x, y) => x * y, '/': (x, y) => x / y},{'+': (x, y) => x + y, '-': (x, y) => x - y}]
    for (var i = 0; i < op.length; i++) {
        for (var j = 0; j < list.length; j++) {
            if (op[i][list[j]]) {
                temp = op[i][list[j]]
            } else if (temp) {
                newList[newList.length - 1] = temp(newList[newList.length - 1], list[j])
                temp = null
            } else {
                newList.push(list[j])
            }
        }
        list = newList
        newList = []
    }
    if (list.length > 1) {
        console.log('Error: error message')
        return list
    } else {
        return list[0]
    }
}
	function calculate() 
         { 
         	let a = document.getElementById("second").value
            document.getElementById("screen").value = a + "="
            document.getElementById("second").value = result(stringToList(a))
                  
         }  