function validate()
{
  var psw1 = document.getElementById("psw1").value;
  var psw2 = document.getElementById("psw2").value;

    if(psw1.length < 8)
    { 
	    alert("The length of Original Password is less than 8 characters!");
    }

    else if(psw2.length < 8)
    { 
	    alert("The length of Re-Entered Password is less than 8 characters!");
    }

    else if( psw1 != psw2)
    {
        alert("Passwords don't match!");
    }

    else 
    {
	    alert("All clear!");
    }

}
