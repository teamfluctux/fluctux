import { kafka } from "@/lib/kafka";

export class KafkaService {
    private admin: ReturnType<typeof kafka.admin>
    constructor() {
        this.admin = kafka.admin()
    }

    protected async init() {
        console.log("creating kafka admin")
        this.admin.connect()
        await this.admin.createTopics({
            topics: [
                {
                    topic: "createKanban",
                    numPartitions: 3,
                }
            ]
        })

        console.log("Disconnecting kafka")
        await this.admin.disconnect()
    }
}