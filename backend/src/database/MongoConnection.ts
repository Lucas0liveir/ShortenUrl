import { config } from '../config/Constants'

import mongoose from 'mongoose'

export class MongoConnection {
    public async Connect(): Promise<void>{
        try{
           await mongoose.connect(config.MONGO_CONNECTION)
           console.log('data base connect')
        }catch(err){
            console.log(err)
            process.exit(1)
        }
    }
}