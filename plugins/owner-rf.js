const { tmpdir } = require('os')
const { join } = require('path')
let fs = require('fs')
let handler = async (m, { args, text, usedPrefix, command }) => {
	let info = `${usedPrefix + command} <old name> | <new name>

• example:
➞ ${usedPrefix + command} inv | rpg-inv

• Note:
Harap tidak memakai kata .js diakhir kalimat
harap tidak menggunakan spasi diantar nama file, seperti "rpg- inv"`
if (!args[0]) throw info
if (!args[1] == "|") throw `• example:
➞ ${usedPrefix + command} inv | rpg-inv`
if (!args[2]) throw `• example:
➞ ${usedPrefix + command} inv | rpg-inv`

let from = args[0]
let to = args[2]

let ar = Object.keys(plugins)
    let ar1 = ar.map(v => v.replace('.js', ''))
    if (!ar1.includes(args[0])) return m.reply(`*🗃️ NOT FOUND!*\n==================================\n\n${ar1.map(v => ' ' + v).join`\n`}`)
await fs.renameSync(`./plugins/${from}.js`, `./plugins/${to}.js`)
conn.reply(m.chat, `Succes changes "plugins/${from}.js" to "plugins/${to}.js"`, m)
    
}
handler.help = ['rf','renamefile'].map(_=> _ + " <old name> | <new name>")
handler.tags = ['owner']
handler.command = /^(r(ename(file)?|f))$/i

handler.mods = true

module.exports = handler