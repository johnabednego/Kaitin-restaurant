function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  function sendForm(){
      let val = document.getElementById('me').value
        let val1 = document.getElementById('you').value
        let val2 = document.getElementById('we').value
    if(confirm( "Phone Number: "+ val +"\n"+
          "Total Number Ordered: " + val1 + "\n"+
          "Location: " + val2)){
              alert("Thank You \n Be expecting it within 10 minuutes")
          }
    
  }

  function Search(){
    document.getElementById('mySearch').style.display = "block"
  }
