var screen = document.getElementById("inp");
var screen2 = document.getElementById("inp2");

        function btnFn(num){
            if(screen.value == "error" || screen.value == 0){
                screen.value = ""
                screen.value += num 
            }
            else{
                screen.value += num 
            }
        }


        function equal(){
            
            try{
                var result = screen.value; 
                screen2.value = eval(result);

            }
            catch{
                screen2.value = "error"
            } 
        }


        function clearFn(){
                screen.value = ""
                screen2.value = ""
        }

         function del(){ 
            var current = screen.value;
            screen.value = current.slice(0, -1);

        }


        function sqrtFn(){
            try{
                var result = Math.sqrt(parseFloat(screen.value));

                if(screen.value == "NaN"){
                    screen2.value = "error"
                }
                else{
                    screen2.value = result;
                } 
            }
            catch{
                screen2.value = "error"
            }
        }