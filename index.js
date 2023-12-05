const qrcode = require('qrcode-terminal');

const { Client,LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
		args: ['--no-sandbox'],
	}
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

const user =[
    {ad:"onur"},
    {ad:"halil"},
    {ad:"zeynep"}
]
client.on('message_create', (msg) => {
    
    // Fired on all message creations, including your own
    if (msg.fromMe) {

        if (msg.body == 'TEST') {
            // Send a new message as a reply to the current one
            msg.reply('TEST ÇALIŞIYOR');
        
        }
      else if (msg.body == 'TEST2') {
        user.forEach(user => client.sendMessage(msg.from, user.ad))
       }
     
  
}});

client.initialize();
 