const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

console.log(holidays[futureId]?.name || `ID ${futureId} not created yet`) // the question mark means that they filed is optional

//let copied = holidays.
const copied = {
    id: holidays[christmas].id,
    name: holidays[christmas].name,
    date: new Date(holidays[christmas].date.getTime())
}
copied.name = 'X-mas Day'
const correctDate = new Date(copied.date)
correctDate.setHours(0,0,0,0)
//correctDate.minutes = 0
const isEarlier = correctDate < holidays[christmas].date
console.log('New date is earlier:', isEarlier)
if (isEarlier) copied.date = correctDate
const formatter = new Intl.DateTimeFormat('en-gb', { dateStyle: 'short' });
console.log(`ID change: ${holidays[christmas].id !== copied.id && copied.id}`)
console.log(`Name change: ${holidays[christmas].name !== copied.name && copied.name}`)
console.log(`Date change: ${holidays[christmas].date !== copied.date && formatter.format(copied.date)}`)

//const dates = Object.values(holidays).map(holiday => new Date(holiday.date).getTime());
//const firstHolidayTimestamp  = new Date(Math.min(...dates));
//const lastHolidayTimestamp = new Date(Math.max(...dates));
const firstHolidayTimestamp = Math.min(
    new Date(holidays[0].date).getTime(),
    new Date(holidays[1].date).getTime(),
    new Date(holidays[2].date).getTime(),
    new Date(holidays[3].date).getTime(),
    new Date(holidays[4].date).getTime(),
    new Date(holidays[5].date).getTime(),
    new Date(holidays[6].date).getTime(),
    new Date(holidays[7].date).getTime(),
    new Date(holidays[8].date).getTime(),
)

const lastHolidayTimestamp = Math.max(
    new Date(holidays[0].date).getTime(),
    new Date(holidays[1].date).getTime(),
    new Date(holidays[2].date).getTime(),
    new Date(holidays[3].date).getTime(),
    new Date(holidays[4].date).getTime(),
    new Date(holidays[5].date).getTime(),
    new Date(holidays[6].date).getTime(),
    new Date(holidays[7].date).getTime(),
    new Date(holidays[8].date).getTime(),
)

const firstHoliday = new Date(firstHolidayTimestamp)
const firstDay = firstHoliday.getDate().toString().padStart(2, 0)
const firstMonth = (firstHoliday.getMonth() + 1).toString().padStart(2, 0)
console.log(`${firstDay}/${firstMonth}/${currentYear}`)

const lastHoliday  = new Date(lastHolidayTimestamp)
const lastDay = lastHoliday.getDate().toString().padStart(2, 0)
const lastMonth = (lastHoliday.getMonth()+1).toString().padStart(2, 0)
console.log(`${lastDay}/${lastMonth}/${currentYear}`)

const randomHoliday = holidays[Math.floor(Math.random() * 10)].date
//const randomDay = randomHoliday.getDate().toString().padStart(2, 0)
//const randomMonth = randomHoliday.getMonth().toString().padStart(2, 0)
//console.log(`${randomDay}/${randomMonth}/${currentYear}`)
console.log(formatter.format(randomHoliday))
