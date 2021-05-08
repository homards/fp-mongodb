import { MongoClient, MongoClientOptions } from 'mongodb'

let client: MongoClient

const connect = async (
  uri: string,
  option: MongoClientOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
) => {
  client = new MongoClient(uri, option)
  await client.connect()
}

export const getConnection = () => {
  return client
}

export default connect
