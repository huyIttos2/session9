function ValidateAccount(inputText)
{
    //var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // var mailFormat = /^(C|A|P)([0-9]{4,})*[a-zA-Z0-9]*[G|H|I|K|L|M]+$/;
    var accountFormat = /^[_a-z0-9]{6,}$/
    if(inputText.value.match(accountFormat))
    {
        document.form1.text1.focus();
        return true;
    }
    else
    {
        alert("You have entered an invalid account address!");
        document.form1.text1.focus();
        return false;
    }
}