let fetch = require('node-fetch') 
 let handler = async(m, { conn }) => { 
     try { 
         let pp = await(await fetch(image)).buffer 
         let gc1 = '34649537982-1370248067@g.us' 
         let gc2 = '628112958665-1628163967@g.us' 
         let gc3 = '628112958665-1571053173@g.us' 
         let _gc1 = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(gc1) 
         let _gc2 = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(gc2) 
         let _gc3 = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(gc3) 
         let caption = ` 
 *Join juga group Zerrx Bot* 
 Sekedar meramaikan, atau juga jika ada informasi mengenai bot. 
  
 *Group 1* 
 ${_gc1} 
  
 *Group 2* 
 ${_gc2} 
  
 *Group 3* 
 ${_gc3} 
  
 `.trim() 
         await conn.reply(m.chat, caption, m, { contextInfo: { 
             externalAdReply: { 
               sourceUrl: 'https://instagram.com/fitra_wahyudi_/', 
               title: 'Official group', 
               body: 'Zerrx', 
               thumbnail: pp 
             } 
         }}) 
     } catch (e) { 
         let tulisan = ` 
 *Join Juga Group Official Cute Bot!* 
Sekedar meramaikan, atau juga jika ada informasi mengenai bot. 
  
 *Group 1* 
https://chat.whatsapp.com/CBrG0HzzpJ56mN0j4dfAqL
 
 `.trim() 
     await conn.sendButtonDoc(m.chat, tulisan.trim(), 'Harap patuhi rules dan peraturan pada masing masing group ya! Terimakasih.', 'Rules', '.rules', m, {
    quoted: m,
    contextInfo: { forwardingScore: 99999, isForwarded: true,
        externalAdReply: {
        	sourceUrl: 'https://instagram.com/fitra_wahyudi_/',
            title: 'Gruop Official',
            body: '© Zerrx Bot By F.W.D',
          thumbnail: await (await fetch('https://i.postimg.cc/0yw4rS7y/ss.png')).buffer()
        }
     }
    })
 } 
 }
 handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i
 module.exports = handler
