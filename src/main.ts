import { Connection, createConnection, getRepository } from 'typeorm';
import * as util from 'util';
import * as fs from 'fs';
import { entities } from './entities';
import { DataTransformer } from './data-transformer';
import { InputParser } from './input-parser';
import * as stream from 'stream';

const pipeline = util.promisify(stream.pipeline);
let connection: Connection;
async function main() {
  const { table } = InputParser.getOptions();
  if (!table) {
    throw Error(`Table not specified`);
  }

  const entity = entities[table];
  if (!entity) {
    throw Error(`No such table ${table}`);
  }

  connection = await createConnection();
  const repository = getRepository(entity);
  // problem with read stream
  const dbStream = await repository.createQueryBuilder(table).stream();
  const dataTransformer = new DataTransformer();

  const hash = +new Date();
  const fileName = `documents/${table}_${hash}.csv`;
  const writeStream = fs.createWriteStream(fileName, { encoding: 'utf8' });

  await pipeline(
    dbStream,
    dataTransformer,
    writeStream
  );
  console.log('Done');
}

main().catch(async e => {
  if (connection) {
    await connection.close();
  }
  console.log(e);
});
