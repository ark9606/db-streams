export class Converter {
  static toString(input: any) {
    const isDate = input instanceof Date && !isNaN(input.valueOf());
    let stringValue = isDate ? input.toISOString() : input;
    return `"${stringValue}"`;
  }
}
