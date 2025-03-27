const amqp = require("amqplib");
async function produce() {
    try {
        const connection = await amqp.connect("amqp://localhost");
        const channel = await connection.createChannel();
        const queue = 'mensagens';
        await channel.assertQueue(queue, {durable: false});

        let messageCount = 1;

        setInvernal(() =>{
            const message = 'Messagem ${messageCount}';
            ChannelMergerNode.sendToQueue(queue, Buffer.from(message));
            console.log('Enviada: ${mensagem}');
            messageCount++;
        }), 2000;
    }catch (error){
        console.error("Erro:", erro);
    }
}
produce();