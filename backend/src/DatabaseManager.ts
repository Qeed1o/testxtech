import { MongoClient, Db, ObjectID } from "mongodb";

export default class DBManager {
    private static instance: DBManager;
    private static DatabaseClient = MongoClient;

    private constructor() { }

    public static getInstance(): DBManager {
        if (!DBManager.instance) {
            DBManager.instance = new DBManager();
        }
        return DBManager.instance;
    }

    private callbackAndClose(connection: MongoClient, callback: (db: Db) => void) {
        const result = callback(connection.db('testxtech'));
        connection.close();
        return result;
    }

    public async accessDatabase(callback: (db: Db) => void){
        const connection = await DBManager.DatabaseClient.connect("mongodb://db:27017/test");
        return this.callbackAndClose(connection, callback)
    }

    public async getUsers(offset: number) {
        const connection = await DBManager.DatabaseClient.connect("mongodb://db:27017/test");
        const collection = connection.db('testxtech').collection('users');
        const users = await collection.find().skip(offset).limit(10).toArray();
        connection.close()
        return users
    }

    public async getUserById(id: string){
        const connection = await DBManager.DatabaseClient.connect("mongodb://db:27017/test");
        const collection = connection.db('testxtech').collection('users');
        const user = await collection.findOne({_id: new ObjectID(id)});
        connection.close()
        return user;
    }
}