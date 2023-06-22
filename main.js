var age = +prompt("yoshingiz n kiriting")

if(age > 0 && age < 18) {
 alert("hali oqishingiz kerak")
}else if(age > 18 && age <=50){
    alert('ishlashingiz kerak')
}else if(age > 50 && age <=59){
    alert("yaqinda pensiyaga chiqa sz")
}else if(age > 59 && age <=100){
    alert("Pensiyaner bolishingiz yoki,tirik bolsangiz")
}else{

    alert("Nmadur notogri ketib qoldi")  
}
   