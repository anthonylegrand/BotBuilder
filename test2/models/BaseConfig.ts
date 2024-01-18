abstract class BaseConfig {
  abstract options: Option[];

  setOption(name: string, value: string | string[] | number | boolean | null) {
    this.options.map((option) => {
      if (option.name === name) {
        if (value === null && option.allowNull) throw "Error 1";
        console.log(option);
        if (typeof value === "string") {
          if (option.regex && !option.regex.test(value)) throw "Error 2";
        } else if (typeof value === "number") {
          if (option.min && option.min > value) throw "Error 3";
          if (option.max && option.max < value) throw "Error 4";
        }

        console.log(typeof value);

        option.value = value;
      }
    });
  }

  _toJson(): object[] {
    return [
      this.options.map((option) => {
        return {
          name: option.name,
          value: option.value,
        };
      }),
    ];
  }
}

interface Option {
  name: string;
  info?: string;
  regex?: RegExp;
  min?: number;
  max?: number;
  allowNull?: boolean;

  value?: string | string[] | boolean | number | null;
}

class Requirement extends BaseConfig {
  options: Option[];

  constructor(options: Option[]) {
    super();
    this.options = options;
  }

  isFilled() {
    return this.options.every(
      (option) =>
        option.value !== undefined &&
        option.value !== null &&
        option.value !== ""
    );
  }
}

export { BaseConfig, Requirement, Option };
