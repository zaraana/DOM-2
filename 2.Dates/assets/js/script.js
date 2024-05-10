
// Ex 1
const brusselsTime = new Date().toLocaleString("fr-BE", { timeZone: 'Europe/Brussels' });
const usTime = new Date().toLocaleString("fr-BE", { timeZone: 'America/Anchorage' });
const icelandTime = new Date().toLocaleString("fr-BE", { timeZone: 'Atlantic/Reykjavik' });
const russiaTime = new Date().toLocaleString("fr-BE", { timeZone: 'Europe/Moscow' });

// Get current time for user's local time zone
const localTime = new Date()

console.log("USA time: ", usTime, "Brussels time: ", brusselsTime);
console.log("Iceland time: ", icelandTime, "Brussels time: ", brusselsTime);
console.log("Russia time: ", russiaTime, "Brussels time: ", brusselsTime);

//Ex 2
const birthDate = new Date ("October 1 , 1992");
const currentDate = new Date ();

//Calculate in Milliseconds 
const diffMillis = currentDate.getTime()-birthDate.getTime();
//Calculate in Days
const passedDays = Math.round(diffMillis/(1000*60*60*24));

console.log(`Exactly ${passedDays} has passed since my birth 😁`);

function daysSinceSeventies(date){
    oneDay = 24*60*60*1000;
    oneEpoch = new Date(0);
    const diffDays = Math.round((date-oneEpoch/oneDay));
    return diffDays;
}

const today = new Date();
const daysSinceToday = daysSinceSeventies(today);
console.log(`Days Since 70's : ${daysSinceToday}😯`);


//Ex 3