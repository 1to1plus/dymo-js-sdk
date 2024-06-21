class MissingPrinter extends Error {
  constructor(message: string = 'Missing printer') {
    super(message);

    this.name = 'missing-printer';
  }
}

export default MissingPrinter;
