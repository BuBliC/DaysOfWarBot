const { Telegraf } = require('telegraf')
const differenceInDays = require('date-fns/differenceInDays')
const getDay = require('date-fns/getDay')
const uk = require('date-fns/locale/uk')
var format = require('date-fns/format')


const formatDate = (date) => format(date, "cccc, d MMMM yyyy", {
  locale: uk
})

const TOKEN = "5178409964:AAGr58HYOO30oCva61LNCPoeyjZ2TKgvDDY";

const bot = new Telegraf(TOKEN)

const DAY_OF_WEEK = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Суббота"]


bot.start((ctx) => ctx.reply('Welcome, type /get to get current day of russia invades Ukraine'))
bot.hears('/get', (ctx) => {
    console.log(ctx);
    const days = differenceInDays(new Date(), new Date(2022, 1, 24))
    const dayOfWeek = getDay(new Date())
    ctx.telegram.sendMessage(ctx.message.chat.id, `
Пройшло повних днів: *${days}*
Поточний день: *${days+1}\\-й*
Сьгодні: *${formatDate(new Date())}*
    `, { parse_mode: 'MarkdownV2' })
})

bot.launch();

// exports.handler = async (event) => {
//     console.log(event)
//     try {
//         const data = JSON.parse(event.body);
//         await bot.handleUpdate(data);
//     } catch (e) {
//         console.log('Error: ', e)
//     }
    
//     return {
//         statusCode: 200,
//     }
// }