function getForm(){
    console.log("taz")
      let nameField = document.getElementById("name-input")
      let name = nameField.value;


      let poisonField = document.getElementsByName("coffee")
      let poison
        for(let i = 0; i < poisonField.length; i++) {
            
            if(poisonField[i].checked === true) {
            poison = poisonField[i].value
        }
        
    }
      console.log(poisonField)
      
      let shotsField = document.getElementsByName("shots")
      let shots
      console.log(shotsField)
      for(let i = 0; i < shotsField.length; i++) {
        if(shotsField[i].checked === true) {
            shots = shotsField[i].value
            console.log(shotsField[i])
        }
    }
    

      let milkField = document.getElementsByName("milk")
      let milk
      for(let i = 0; i < milkField.length; i++) {
        if(milkField[i].checked === true) {
             milk = milkField[i].value
        }
    }
    

      let emailField = document.getElementById("email")
      let email = emailField.value;
      alert(`Hello ${name}! Your ${poison} with ${shots} and ${milk} will be ready shortly. An email will be sent to ${email} when its ready!`)
}
  