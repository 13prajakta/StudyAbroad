export const validate=(data)=>{
    let error={}
    var namereg = /^[a-zA-Z_ ]*$/;
     var phonereg = /^[0-9]/;
     var emailreg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(data.name && data.mobile && data.email && data.nationality && data.language && data.program){
    if(!data.name.value){
        error.name="*Name is required"
    }
    else if(!namereg.test(data.name.value)){
        error.name="*only alphabates"
    }
    if(!data.mobile.value){
        error.mobile="*mobile is required"
    }
    else if(!phonereg.test(data.mobile.value)){
        error.mobile="*Digits Only"
    }
    else if(data.mobile.value.length !==10)
    {
        error.mobile="*Phone Number Should be 10 Digits Only"
    }
    if(!data.email.value){
        error.email="*email is required"
    }
    else if(!emailreg.test(data.email.value)){
        error.email="*invalid email type"
    }
    if(data.nationality.value==" "){
        error.nationality="*Nationality is required"
    }
    if(data.language.value==" "){
        error.language="*Language is required"
    }
    if(data.program.value==" "){
        error.program="*Program is required"
    }
    return error;
}
else if(data.name && data.mobile && data.email && data.password && data.cpassword){
    if(!data.name.value){
        error.name="*Name is required"
    }
    else if(!namereg.test(data.name.value)){
        error.name="*only alphabates"
    }
    if(!data.mobile.value){
        error.mobile="*mobile is required"
    }
    else if(!phonereg.test(data.mobile.value)){
        error.mobile="*Digits Only"
    }
    else if(data.mobile.value.length !==10)
    {
        error.mobile="*Phone Number Should be 10 Digits Only"
    }
    if(!data.email.value){
        error.email="*email is required"
    }
    else if(!emailreg.test(data.email.value)){
        error.email="*invalid email type"
    }
    if(!data.password.value)
    {
        error.password="*password is required"
    }
    if(!data.c_password.value)
    {
        error.c_password="*Confirm password is required"
    }
    if(data.password.value !== data.c_password.value)
    {
        error.c_password="*password and Confirm password not match"
    }
    return error;
}
else if(data.email && data.password)
{
    if(!data.email.value){
        error.email="*email is required"
    }
    else if(!emailreg.test(data.email.value)){
        error.email="*invalid email type"
    }
    if(!data.password.value)
    {
        error.password="*password is required"
    }
    return error;
}

}