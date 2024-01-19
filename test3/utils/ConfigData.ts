enum ConfigDataType {
  string = "string",
  string_array = "string[]",
  boolean = "boolean",
  int = "int",
  enum = "enum",
}

abstract class ConfigData {
  protected type!: ConfigDataType;
  protected label!: string;
  protected info?: string;

  protected min?: number;
  protected max?: number;
  protected enum_suggestions?: string[];
  protected regex?: RegExp;
  protected allowNull?: boolean;

  protected value?: string | string[] | boolean | number | null;

  format?(
    _value: string | string[] | number
  ): string | string[] | number | null;

  constructor(value?: string | string[] | boolean | number) {}

  setValue(value?: string | string[] | boolean | number) {
    console.log("001", value, this.regex);
    if (this.regex && this.regex.test(value as string)) {
      console.log("002");
      if (this.format)
        this.value = this.format(value as string | string[] | number);
      else this.value = value;
    }
  }
}

abstract class RequiredData extends ConfigData {}

abstract class GlobalRequiredData extends RequiredData {}
abstract class GlobalConfigData extends ConfigData {}

export {
  ConfigData,
  RequiredData,
  ConfigDataType,
  GlobalRequiredData,
  GlobalConfigData,
};
