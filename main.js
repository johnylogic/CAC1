var specialKeys = new Array();
        specialKeys.push(8); //Backspace
        function IsAlpha(e) 
        {
            var keyCode = e.which ? e.which : e.keyCode
            var ret = ((keyCode >= 97 && keyCode <= 122) || specialKeys.indexOf(keyCode) != -1);
            document.getElementById("error").style.display = ret ? "none" : "inline";
            return ret;
        }

    function test_str() 
    {
        var res;
        var str =
            document.getElementById("password").value;
        if (str.match(/[a-z]/g) && str.match(
                /[A-Z]/g) && str.match(
                /[0-9]/g) && str.match(
                /[^a-zA-Z\d]/g) && str.length >= 8)
            console.log("Valid password")
        else
            alert("Invalid password")
        usr = document.getElementById("email-address").value;
        if(usr.match(/^([a-z0-9_\.]+)@(([a-z0-9]+)\.){2}([a-z]{2,3})$/))
                console.log("Valid email")
        else
                alert("Invalid email")

    }

    function reset() 
    {
        document.getElementById("feedback-form").reset();
    }