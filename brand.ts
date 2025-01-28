export {};

type CreationResponse = { transactionId: string };
type ConfirmResponse = { itemId: string };

// prettier-ignore
const create = (): CreationResponse => {/*  */}
// prettier-ignore
const confirm = (): ConfirmResponse => {/*  */}
// prettier-ignore
const deleteItem = (id: string) => {/*  */}

type Brand<TType, TBrand extends symbol> = TBrand & { [key in TBrand]: never };
type BrandedNumber<TBrand extends symbol> = Brand<number, TBrand>;

declare const kilometersBrand: unique symbol;
declare const metersBrand: unique symbol;
declare const radiusBrand: unique symbol;

type Kilometers = BrandedNumber<typeof kilometersBrand>;
type Meters = BrandedNumber<typeof metersBrand>;
type Radius = BrandedNumber<typeof radiusBrand>;

type ResponseData = {
  time_stamp: string;
  short_name: string;
  full_name: string;
};

// type Data = {
//   timeStamp: string;
//   shortName: string;
//   fullName: string;
// };

type Data = {
  value: { value: { value: string; time_stamp: string }; time_stamp: string };
  time_stamp: {
    value: { value: string; time_stamp: string };
    time_stamp: string;
  };
};
type Modified<Data, K extends keyof Data> = Pick<Data, K> &
  Partial<Omit<Data, K>>;
type Mod = Modified<Data, 'value'>;

type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

// type DeepPrettify<T> = T extends any
//   ? T extends infer U
//     ? {
//         [K in keyof U]: U[K];
//       }
//     : never
//   : never;

type DeepPrettify<T> = T extends object
  ? { [K in keyof T]: DeepPrettify<T[K]> }
  : T;

type M = Prettify<Mod>;

type DeepPartial<T> = {
  [Key in keyof T]?: T[Key] extends object ? DeepPartial<T[Key]> : T[Key];
};

type D = DeepPartial<Data>;
type PD = Prettify<D>;
type PD1 = DeepPrettify<D>;

type With<T, K extends string> = Omit<T, K>;

type G<T extends WithOut<T, 'a'>> = T;

type CCC = G<{ a?: string; b?: number }>;

// type FromSnakeToCamelCase<
//   SnakeCaseString extends string,
//   ProcessedPart extends string = ''
// > = SnakeCaseString extends `${infer Word}_${infer Rest}`
//   ? FromSnakeToCamelCase<Capitalize<Rest>, `${ProcessedPart}${Word}`>
//   : `${ProcessedPart}${SnakeCaseString}`;

type FromSnakeToCamelCase<
  SnakeCaseString extends string
> = SnakeCaseString extends `${infer Word}_${infer Rest}`
  ? `${Capitalize<Word>}${FromSnakeToCamelCase<Rest>}`
  : SnakeCaseString;
