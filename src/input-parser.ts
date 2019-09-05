export class InputParser {
  static getOptions(): any {
    return (
      process.argv.slice(2).reduce((prev, curr) => {
        if (!curr.includes('=')) return;
        const [key, value] = curr.split('=');
        return {
          ...prev,
          [key]: value,
        };
      }, {}) || {}
    );
  }
}
