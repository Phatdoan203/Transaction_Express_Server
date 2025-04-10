import {Kafka, Producer} from "kafkajs";

const kafka = new Kafka({
    clientId: 'express-kafka_config',
    brokers: ['localhost:9092']
});

export const producer : Producer = kafka.producer();
export const connectProducer = async () => {
    await producer.connect();
    console.log('Kafka Producer connected');
};