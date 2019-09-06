import { Transform } from 'stream';
import { Converter } from './converter';

export class DataTransformer extends Transform {
  private isFirst: boolean;
  constructor() {
    super({ objectMode: true });
    this.isFirst = true;
  }

  _transform(dbRow: any, encoding: string, callback: Function): void {
    let csvRow = this.parseRow(dbRow);
    if (this.isFirst) {
      this.push(this.getHeaders(dbRow));
      this.isFirst = false;
    }
    callback(null, csvRow);
  }

  private parseRow(dbRow: any): string {
    const keys = Object.keys(dbRow);
    const row = keys.map(key => Converter.toString(dbRow[key])).join(',');
    return row + '\n';
  }

  private getHeaders(dbRow: any): string {
    const keys = Object.keys(dbRow);
    const row = keys.map(key => Converter.toString(key)).join(',');
    return row + '\n';
  }
}
