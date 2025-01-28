// #region Изначальный запрос

/* 
type UserInfo = {
  id: string;
  package_name: string;
};
const requestUserInfo = (id: string) => {
  return axios.request<UserInfo>(config);
};
*/

// #endregion

// #region Брендирование типов

// #region Без брендирования
/* 
const kilometersToMeters = (value: number) => value * 1000;
const metersToKilometers = (value: number) => value / 1000;
 */
// #endregion

// #region Попытка брендирования
/*
type Kilometers = number;
type Meters = number;

const kilometersToMeters = (value: Kilometers) => value * 1000;
const metersToKilometers = (value: Meters) => value / 1000;
 */
// #endregion

// #region Структурная типизация
/* 
type Kilometers = number;
type Meters = number;

Kilometers === Meters;
 */
// #endregion

// #region Можно добавить уникальные поля
/* 
type Kilometer = number & {
  __brand: 'Kilometer';
};
 */
// #endregion

// #region
/* 
unique symbol
const symbol = Symbol();
declare const symbol: unique symbol;
 */
// #endregion

// #region Брендирование километров
/* 
declare const kilometersBrand: unique symbol;

type Kilometers = number & {
  [kilometersBrand]: never;
};
*/
// #endregion

// #region Метры и километры
/* 
type Kilometers = number & { [kilometersBrand]: never };
type Meters = number & { [metersBrand]: never };

declare const lengthBrand: unique symbol;
declare const radiusBrand: unique symbol;

const kilometersToMeters = (value: Kilometers) => value * 1000;
const metersToKilometers = (value: Meters) => value / 1000;
 */
// #endregion

// #endregion

// #region Брендированый запрос
/* 
type UserId = string & { [userIdSymbol]: never };
type UserInfo = {
  id: UserId;
  package_name: string;
};
const requestUserInfo = (id: UserId) => {
  return axios.request<UserInfo>(config);
};
 */
// #endregion

// #region Общий тип как элемент перечисления

// #region что нам нужно
/* 
type UserId = string & { [userIdSymbol]: never };
type UserInfo = {
  id: UserId;
  package_name: string; // 'free' | 'pro' | 'prime'
};
const requestUserInfo = (id: UserId) => {
  return axios.request<UserInfo>(config);
};
 */
// #endregion

// #region Первый вариант
/* 
type PackageName = 'free' | 'pro' | 'prime' | string;
type PackageName = string;
 */
// #endregion

// #region Итог
/* 
type AnyString = string & {};
type PackageName = 'free' | 'pro' | 'prime';
type UserInfo = {
  id: UserId;
  package_name: PackageName | AnyString;
};
const requestUserInfo = (id: UserId) => {
  return axios.request<UserInfo>(config);
};
 */
// #endregion

// #endregion

// #region Discriminated Union

// #region Запрос списка пользователей
/* 
type PackageName = 'free' | 'pro' | 'prime';
type UserInfo = {
  id: UserId;
  package_name: PackageName;

  /* ... *\/
};
const requestUsersInfo = () => {
  return axios.request<UserInfo[]>(config);
};
 */
// #endregion

// #region Обработка ответа
/* 
const usersList: UserInfo[];

usersList.map((user) => {
  switch (user.package_name) {
    case 'free': /* ... *\/
    case 'pro': /* ... *\/
    case 'prime': /* ... *\/
  }
});
 */
// #endregion

// #region Первый вариант
/* 
type PackageName = 'free' | 'pro' | 'prime';
type UserInfo = {
  id: UserId;
  package_name: PackageName;
  trial_end_date?: string;
  subscription_months?: number;
  some_prime_stuff?: boolean;
};
 */
// #endregion

// #region Проблема
/* 
const user: UserInfo;
if (user.package_name === 'free') {
  user.trial_end_date;
  //     ^^^^^^^^^^^^^^^ trial_end_date?: string | undefined
  user.subscription_months;
  //     ^^^^^^^^^^^^^^^^^^^^ subscription_months?: number | undefined
}
 */
// #endregion

// #region Discriminated Union для PackageInfo
type PackageName = PackageInfo['package_name'];

type FreePackageInfo = {
  package_name: 'free';
  trial_end_date: string;
};
type ProPackageInfo = {
  package_name: 'pro';
  subscription_months: number;
};
type PrimePackageInfo = {
  package_name: 'prime';
  subscription_months: number;
  some_prime_stuff: boolean;
};
type PackageInfo = FreePackageInfo | ProPackageInfo | PrimePackageInfo;
// #endregion

type UserId = string;
// #region Новый тип UserInfo
type UserInfo = { id: UserId } & PackageInfo;
let user!: UserInfo;
if (user.package_name === 'free') {
  user.trial_end_date;
  //     ^^^^^^^^^^^^^^^ trial_end_date: string
  user.subscription_months;
  //     ^^^^^^^^^^^^^^^^^^^^ subscription_months does not exist on type 'FreePackageInfo'
}
// #endregion

// #region Разделение пользователей
type NotFreePackageUserInfo = Exclude<UserInfo, FreePackageInfo>;
type NotFreePackageUserInfo = Exclude<UserInfo, { package_name: 'free' }>;
type NotFreePackageUserInfo = Extract<
  UserInfo,
  ProPackageInfo | PrimePackageInfo
>;
type NotFreePackageUserInfo = Extract<
  UserInfo,
  { package_name: 'pro' | 'prime' }
>;
// #endregion

// #region
// #endregion

// #region
// #endregion

// #endregion

// #region Union to Tuple

// #region Запрос
/* 
type AnyString = string & {};
type PackageName = 'free' | 'pro' | 'prime';
type UserInfo = {
  id: UserId;
  package_name: PackageName | AnyString;
};
const requestUserInfo = (id: UserId) => {
  return axios.request<UserInfo>(config);
};
 */
// #endregion

// #region Обработка ответа
type PackageName = 'free' | 'pro' | 'prime';

let userInfo!: UserInfo = {
  /* ... */
};

if (packagesList.includes(item.package_name)) {
}
// #endregion

// #region
// #endregion

// #endregion

// #region Смена нотации
// #region Результат
type UserInfoResponse = {
  id: UserId;
  package_name: string;
};
// type UserInfo = ObjectToCamelCase<UserInfoResponse>;

const requestUsersInfo = (): UserInfo[] => {
  const response = axios.request<UserInfoResponse[]>(config);
  return /* ... */;
};
// #endregion
// #endregion

// #region Непустая строка
// #region запрос
const requestUsersInfo = (filter: string): UserInfo[] => {
  const response = axios.request<UserInfoResponse[]>(config(filter));
  return /* ... */;
};
// #endregion

type FromSnakeToCamelCase<
  SnakeCaseString extends string,
  StringStart extends string = ''
> = SnakeCaseString extends `${infer Part}_${infer Rest}`
  ? FromSnakeToCamelCase<Capitalize<Rest>, `${StringStart}${Part}`>
  : `${StringStart}${SnakeCaseString}`;

type ObjectToCamelCase<T> = {
  [Key in keyof T as FromSnakeToCamelCase<Key & string>]: T[Key];
};

type UserCamelCase = ObjectToCamelCase<User>;

type UnionToIntersection<
  Union,
  UnionAsFunctionsArguments = Union extends unknown
    ? (k: Union) => void
    : never,
  UnionIntersection = [UnionAsFunctionsArguments] extends [(k: infer I) => void]
    ? I
    : never
> = UnionIntersection;

type OneOfUnion<
  Union,
  UnionAsFunctionsReturnType = Union extends unknown ? () => Union : never,
  FunctionsIntersection = UnionToIntersection<UnionAsFunctionsReturnType>,
  UnionElement = FunctionsIntersection extends () => infer R ? R : never
> = UnionElement;

type UnionToTuple<
  Union,
  TupleBuffer extends any[] = [],
  UnionElement = OneOfUnion<Union>,
  RestUnion = Exclude<Union, UnionElement>,
  NewTuple extends any[] = [UnionElement] extends [never]
    ? TupleBuffer
    : [UnionElement, ...TupleBuffer],
  Return = [RestUnion] extends [never]
    ? NewTuple
    : UnionToTuple<RestUnion, NewTuple>
> = Return;

type Prettify<T> = {
  [Key in keyof T]: T[Key];
} & {};

type PPackageInfo = Prettify<PackageInfo>;
type PackageInfo =
  | {
      package_name: 'free';
      trial_end_date: string;
    }
  | {
      package_name: 'pro';
      subscription_months: number;
    }
  | {
      package_name: 'prime';
      subscription_months: number;
      some_prime_stuff: boolean;
    };
type PUserInfo = Prettify<UserInfo>;
type UserInfo =
  | {
      id: UserId;
      package_name: 'free';
      trial_end_date: string;
    }
  | {
      id: UserId;
      package_name: 'pro';
      subscription_months: number;
    }
  | {
      id: UserId;
      package_name: 'prime';
      subscription_months: number;
      some_prime_stuff: boolean;
    };

// type IsGreeting<T> = T extends `Hello ${string}!` ? true : false;

type IsGreeting = 'Oh, Hello world!))))' extends `Hello ${string}!`
  ? true
  : false;
