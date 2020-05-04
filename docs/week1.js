 function getInputValue(){
        var inputVal1=document.getElementById("texbox1").value;
        var inputVal2=document.getElementById("texbox2").value;

        function largest(inputVal1,inputVal2){
            if(inputVal1 > inputVal2)
		return inputVal1;
	else if(inputVal1 === inputVal2)
		return 0;
	else
		return inputVal2;
    }
       var largestValue= (largest(inputVal1,inputVal2));
                
             alert(largestValue);
                 
}






