const request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function() {
    var data=request.response;
    var result=JSON.parse(data);
    console.log(result);

    //................................................

//1.Get all the countries from Asia continent /region using Filter function:

// var res = result.filter((ele)=>ele.region==="Asia");
// var final = res.forEach((ele)=>console.log(ele.name.common));

//.........................................................

//2.Get all the countries with a population of less than 2 lakhs using Filter function:

// var res = result.filter((ele)=>ele.population>200000);
// var final = res.forEach((ele)=>console.log(ele.name.common));

//..................................................................

//3.Print the following details name, capital, flag, using forEach function:

//var res = result.forEach((ele)=>console.log(ele.name.common,ele.capital,ele.flags.png));

//..............................................................

//4.Print the total population of countries using reduce function:

//const res = result.reduce((acc, count) => 
//   acc + count.population, 0);

//console.log(`total population is ${res}`);


//.......................................................

//5.Print the country that uses US dollars as currency:

   var res = result.filter((ele)=>ele.currencies && ele.currencies.USD);
   var final = res.forEach((ele)=>console.log(ele.name.common));

}

