class ErrorCustom extends Error {
  code: number;

  message: string;

  additionalInfo?: string;

  constructor(code: number, message: string, additionalInfo = '') {
    super();
    this.code = code;
    this.message = message;
    this.additionalInfo = additionalInfo;
  }
}

export default ErrorCustom;
