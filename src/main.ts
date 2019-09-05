import { Connection, createConnection, getRepository } from 'typeorm';
import * as util from 'util';
import * as fs from 'fs';
import { entities } from './entities';
import { RowTransformer } from './row-transformer';
import { InputParser } from './input-parser';
const stream = require('stream');
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
  const dbStream = await repository.createQueryBuilder(table).stream();

  const rowTransformer = new RowTransformer();
  const hash = +new Date();
  const writeStream = fs.createWriteStream(`documents/${table}_${hash}.csv`, {
    encoding: 'utf8',
  });

  await dbStream
    .pipe(rowTransformer)
    .pipe(writeStream)
    .on('close', async () => {
      console.log('Done');
      await connection.close();
      process.exit(0);
    });
}

main().catch(async e => {
  if (connection) {
    await connection.close();
  }
  console.log(e);
});
