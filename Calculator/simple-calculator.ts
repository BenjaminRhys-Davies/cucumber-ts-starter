import { Logger } from '../cucumber/loggers/common-logger';

export class SimpleCalculator implements Calculator {
  private currentValue = 0;
  constructor (private logger: Logger) {
    this.logger = logger;
  }
  public startWith (value: number): Calculator {
    this.logger.info(`startWith(${value})`);
    this.currentValue = value;
    return this;
  }
  public incrementBy (value: number): Calculator {
    this.logger.info(`incrementBy(${value})`);
    this.currentValue += value;
    return this;
  }
  public get result (): number {
    return this.currentValue;
  }
}

export interface Calculator {
  startWith: (value: number) => Calculator;
  result: number;
  incrementBy: (value: number) => Calculator;
}
