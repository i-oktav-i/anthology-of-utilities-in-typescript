// type UserInfo = {
//   id: string;
//   package_name: string;
// };
// const requestUserInfo = (id: string) => {
//   return axios.request<UserInfo>(config);
// };

// /*
// type UserInfo = {
//   id: string;
//   package_name: string;
// };
// const requestUserInfo = (id: string) => {
//   return axios.request&lt;UserInfo>(config);
// }

// <code data-highlighted="yes" class="hljs language-typescript"><span class="hljs-keyword">type</span> <span class="hljs-title class_">UserInfo</span> = {</code>
// <code data-highlighted="yes" class="hljs language-typescript">  <span class="hljs-attr">id</span>: <span class="hljs-built_in">string</span>;</code>
// <code data-highlighted="yes" class="hljs language-typescript">  <span class="hljs-attr">package_name</span>: <span class="hljs-built_in">string</span>;</code>
// <code data-highlighted="yes" class="hljs language-typescript">};</code>
// <code data-highlighted="yes" class="hljs language-typescript"><span class="hljs-keyword">const</span> <span class="hljs-title function_">requestUserInfo</span> = (<span class="hljs-params">id: <span class="hljs-built_in">string</span></span>) =&gt; {</code>
// <code data-highlighted="yes" class="hljs language-typescript">  <span class="hljs-keyword">return</span> axios.<span class="hljs-property">request</span>&lt;<span class="hljs-title class_">UserInfo</span>&gt;(config);</code>
// <code data-highlighted="yes" class="hljs language-typescript">}</code>

//  */

// type FirstId = string;
// type SecondId = string;

// // First === SecondId;

// /*
// <code data-highlighted="yes" class="hljs language-typescript"><span class="hljs-keyword">type</span> <span class="hljs-title class_">FirstId</span> = <span class="hljs-built_in">string</span>;</code>
// <code data-highlighted="yes" class="hljs language-typescript"><span class="hljs-keyword">type</span> <span class="hljs-title class_">SecondId</span> = <span class="hljs-built_in">string</span>;</code>

// <code data-highlighted="yes" class="hljs language-typescript"><span class="hljs-title class_">FirstId</span> === <span class="hljs-title class_">SecondId</span></code>
//  */

// type Id = string & {
//   __brand: 'id';
// };

// /*
// <code class="hljs language-typescript" data-highlighted="yes"><span class="hljs-keyword">type</span> <span class="hljs-title class_">Id</span> = <span class="hljs-built_in">string</span> &amp; {</code>
// <code class="hljs language-typescript" data-highlighted="yes">  <span class="hljs-attr">__brand</span>: <span class="hljs-string">'id'</span>;</code>
// <code class="hljs language-typescript" data-highlighted="yes">};</code>

//  */

// /*
// <code data-highlighted="yes" class="hljs language-typescript"><span class="hljs-keyword">type</span> Id = <span class="hljs-type">string</span> &amp; {</code>
// <code data-highlighted="yes" class="hljs language-typescript">  __brand: <span class="hljs-string">'id'</span>;</code>
// <code data-highlighted="yes" class="hljs language-typescript">};</code>
//  */

// const symbol = Symbol();
// declare const symbol: unique symbol;

// /*
// <code data-highlighted="yes" class="hljs language-typescript"><span class="hljs-keyword">const</span> <span class="hljs-built_in">symbol</span> = <span class="hljs-title class_">Symbol</span>();</code>
// <code data-highlighted="yes" class="hljs language-typescript"><span class="hljs-keyword">declare</span> <span class="hljs-keyword">const</span> <span class="hljs-attr">symbol</span>: unique <span class="hljs-built_in">symbol</span>;</code>
//  */

// declare const itemIdSymbol: unique symbol;
// type UserInfoId = string & {
//   [itemIdSymbol]: never;
// };

// /*
// <code data-highlighted="yes" class="hljs language-typescript"><span class="hljs-keyword">declare</span> <span class="hljs-keyword">const</span> <span class="hljs-attr">itemIdSymbol</span>: unique <span class="hljs-built_in">symbol</span>;</code>
// <code data-highlighted="yes" class="hljs language-typescript"><span class="hljs-keyword">type</span> <span class="hljs-title class_">UserInfoId</span> = <span class="hljs-built_in">string</span> &amp; {</code>
// <code data-highlighted="yes" class="hljs language-typescript">  [itemIdSymbol]: <span class="hljs-built_in">never</span>;</code>
// <code data-highlighted="yes" class="hljs language-typescript">};</code>
//  */

// const requestUserInfo = (id: UserInfoId) => {
//   return axios.request<UserInfo>(config);
// };
// requestUserInfo('123');
// requestUserInfo('123' as UserInfoId);
// /*
// const requestUserInfo = (id: UserInfoId) => {
//   return axios.request&lt;UserInfo>(config);
// };

// <code data-highlighted="yes" class="hljs language-javascript"><span class="hljs-keyword">const</span> <span class="hljs-title function_">requestUserInfo</span> = (<span class="hljs-params">id: UserInfoId</span>) =&gt; {</code>
// <code data-highlighted="yes" class="hljs language-javascript">  <span class="hljs-keyword">return</span> axios.<span class="hljs-property">request</span>&lt;<span class="hljs-title class_">UserInfo</span>&gt;(config);</code>
// <code data-highlighted="yes" class="hljs language-javascript">};</code>

// <code data-highlighted="yes" class="hljs language-javascript"><span class="hljs-title function_">requestUserInfo</span>(<span class="hljs-string">'123'</span>);</code>
//  */

// type UserInfoResponse = {
//   id: UserInfoId;
//   package_name: string;
// };
// type UserInfo = {
//   id: UserInfoId;
//   someField: string;
// };

// /*
// <code class="hljs language-typescript" data-highlighted="yes"><span class="hljs-keyword">type</span> <span class="hljs-title class_">UserInfoResponse</span> = {</code>
// <code class="hljs language-typescript" data-highlighted="yes">  <span class="hljs-attr">id</span>: <span class="hljs-title class_">UserInfoId</span>;</code>
// <code class="hljs language-typescript" data-highlighted="yes">  <span class="hljs-attr">package_name</span>: <span class="hljs-built_in">string</span>;</code>
// <code class="hljs language-typescript" data-highlighted="yes">};</code>
// <code class="hljs language-typescript" data-highlighted="yes"><span class="hljs-keyword">type</span> <span class="hljs-title class_">UserInfo</span> = {</code>
// <code class="hljs language-typescript" data-highlighted="yes">  <span class="hljs-attr">id</span>: <span class="hljs-title class_">UserInfoId</span>;</code>
// <code class="hljs language-typescript" data-highlighted="yes">  <span class="hljs-attr">someField</span>: <span class="hljs-built_in">string</span>;</code>
// <code class="hljs language-typescript" data-highlighted="yes">};</code>
//  */

// type Type = {
//   /*  */
// };

// type MappedType = {
//   [Key in keyof Type]: Type[Key];
// };

// // <code class="hljs language-typescript" data-highlighted="yes"><span class="hljs-keyword">type</span> <span class="hljs-title class_">Type</span> = {<span class="hljs-comment">/* ... */</span>};</code>
// // <code class="hljs language-typescript" data-highlighted="yes"><span class="hljs-keyword">type</span> <span class="hljs-title class_">MappedType</span> = {</code>
// // <code class="hljs language-typescript" data-highlighted="yes">  [<span class="hljs-title class_">Key</span> <span class="hljs-keyword">in</span> keyof <span class="hljs-title class_">Type</span>]: <span class="hljs-title class_">Transform</span>&lt;<span class="hljs-title class_">Key</span>&gt;</code>
// // <code class="hljs language-typescript" data-highlighted="yes">}</code>

// type Type = {
//   /* ... */
// };

// type MappedType = {
//   [Key in keyof Type as Transform<Key>]: Type[Key];
// };

// // <code class="hljs language-typescript" data-highlighted="yes"><span class="hljs-keyword">type</span> <span class="hljs-title class_">Type</span> = {<span class="hljs-comment">/* ... */</span>};</code>
// // <code class="hljs language-typescript" data-highlighted="yes"><span class="hljs-keyword">type</span> <span class="hljs-title class_">MappedType</span> = {</code>
// // <code class="hljs language-typescript" data-highlighted="yes">  [<span class="hljs-title class_">Key</span> <span class="hljs-keyword">in</span> keyof <span class="hljs-title class_">Type</span> <span class="hljs-keyword">as</span> <span class="hljs-title class_">Transform</span>&lt;<span class="hljs-title class_">Key</span>&gt;]: <span class="hljs-title class_">Type</span>[<span class="hljs-title class_">Key</span>];</code>
// // <code class="hljs language-typescript" data-highlighted="yes">};</code>

// /*
// <code class="hljs language-typescript" data-highlighted="yes"><span class="hljs-keyword">type</span> <span class="hljs-title class_">FromSnakeToCamelCase</span>&lt;T <span class="hljs-keyword">extends</span> <span class="hljs-built_in">string</span>&gt; =</code>
// <code class="hljs language-typescript" data-highlighted="yes">  T <span class="hljs-keyword">extends</span> <span class="hljs-string">`<span class="hljs-subst">${infer Part}</span>_<span class="hljs-subst">${infer Rest}</span>`</span></code>
// <code class="hljs language-typescript" data-highlighted="yes">    ? <span class="hljs-string">`<span class="hljs-subst">${Part}</span><span class="hljs-subst">${FromSnakeToCamelCase&lt;Capitalize&lt;Rest&gt;&gt;}</span>`</span></code>
// <code class="hljs language-typescript" data-highlighted="yes">    : T;</code>
// */

// const requestUserInfo = (id: UserInfoId): SnakeToCameCase<UserInfo> => {
//   const response = axios.request<UserInfo>(config);
//   return /* ... */;
// };

// // <code class="hljs language-typescript" data-highlighted="yes"><span class="hljs-keyword">const</span> requestUserInfo = (<span class="hljs-attr">id</span>: <span class="hljs-title class_">UserInfoId</span>): <span class="hljs-title class_">SnakeToCameCase</span>&lt;<span class="hljs-title class_">UserInfo</span>&gt; =&gt; {</code>
// // <code class="hljs language-typescript" data-highlighted="yes">  <span class="hljs-keyword">const</span> response = axios.<span class="hljs-property">request</span>&lt;<span class="hljs-title class_">UserInfo</span>&gt;(config);</code>
// // <code class="hljs language-typescript" data-highlighted="yes">  <span class="hljs-keyword">return</span> <span class="hljs-comment">/* ... */</span>;</code>
// // <code class="hljs language-typescript" data-highlighted="yes">};</code>

// type FieldValue = 'First' | 'Second' | 'Third' | string;
// type FieldValue = string;

// /*

// <code class="hljs language-typescript" data-highlighted="yes"><span class="hljs-keyword">type</span> <span class="hljs-title class_">FieldValue</span> = <span class="hljs-string">'First'</span> | <span class="hljs-string">'Second'</span> | <span class="hljs-string">'Third'</span> | <span class="hljs-built_in">string</span>;</code>
// <code class="hljs language-typescript" data-highlighted="yes"><span class="hljs-keyword">type</span> <span class="hljs-title class_">FieldValue</span> = <span class="hljs-built_in">string</span>;</code>
//  */

// type AnyString = string & {};
// type AnyNumber = number & {};
// type StringValue = 'value' | AnyString;
// type NumberValue = 1 | AnyNumber;

// /*
// <code data-highlighted="yes" class="hljs language-typescript"><span class="hljs-keyword">type</span> <span class="hljs-title class_">AnyString</span> = <span class="hljs-built_in">string</span> &amp; {};</code>
// <code data-highlighted="yes" class="hljs language-typescript"><span class="hljs-keyword">type</span> <span class="hljs-title class_">AnyNumber</span> = <span class="hljs-built_in">number</span> &amp; {};</code>
// <code data-highlighted="yes" class="hljs language-typescript"><span class="hljs-keyword">type</span> <span class="hljs-title class_">StringValue</span> = <span class="hljs-string">'value'</span> | <span class="hljs-title class_">AnyString</span>;</code>
// <code data-highlighted="yes" class="hljs language-typescript"><span class="hljs-keyword">type</span> <span class="hljs-title class_">NumberValue</span> = <span class="hljs-number">1</span> | <span class="hljs-title class_">AnyNumber</span>;</code>
//  */

// const valuesMap: Record<StringValue, string> = {
//   //    ^^^^^^^^^^ Свойство "value" отсутствует в типе "{}"
// };

// /*
// <code class="hljs language-typescript" data-highlighted="yes"><span class="hljs-keyword">const</span> <span class="hljs-attr">valuesMap</span>: <span class="hljs-title class_">Record</span>&lt;<span class="hljs-title class_">StringValue</span>, <span class="hljs-built_in">string</span>&gt; = {</code>
// <code class="hljs language-typescript" data-highlighted="yes"><span class="hljs-comment">//    ^^^^^^^^^ Свойство "value" отсутствует в типе "{}"</span></code>
// <code class="hljs language-typescript" data-highlighted="yes">};</code>
// */

// type AnyString = string & {};
// type FieldValue = 'First' | 'Second' | 'Third';
// type UserInfo = {
//   id: UserInfoId;
//   package_name: FieldValue | AnyString;
// };
// const requestUserInfo = (id: UserInfoId): SnakeToCameCase<UserInfo> => {
//   const response = axios.request<UserInfo>(config);
//   return /* ... */;
// };

// // <code class="hljs language-typescript" data-highlighted="yes"><span class="hljs-keyword">type</span> <span class="hljs-title class_">AnyString</span> = <span class="hljs-built_in">string</span> &amp; {};</code>
// // <code class="hljs language-typescript" data-highlighted="yes"><span class="hljs-keyword">type</span> <span class="hljs-title class_">FieldValue</span> = <span class="hljs-string">'First'</span> | <span class="hljs-string">'Second'</span> | <span class="hljs-string">'Third'</span>;</code>
// // <code class="hljs language-typescript" data-highlighted="yes"><span class="hljs-keyword">type</span> <span class="hljs-title class_">UserInfo</span> = {</code>
// // <code class="hljs language-typescript" data-highlighted="yes">  <span class="hljs-attr">id</span>: <span class="hljs-title class_">UserInfoId</span>;</code>
// // <code class="hljs language-typescript" data-highlighted="yes">  <span class="hljs-attr">package_name</span>: <span class="hljs-title class_">FieldValue</span> | <span class="hljs-title class_">AnyString</span>;</code>
// // <code class="hljs language-typescript" data-highlighted="yes">};</code>
// // <code class="hljs language-typescript" data-highlighted="yes"><span class="hljs-keyword">const</span> requestUserInfo = (<span class="hljs-attr">id</span>: <span class="hljs-title class_">UserInfoId</span>): <span class="hljs-title class_">SnakeToCameCase</span>&lt;<span class="hljs-title class_">UserInfo</span>&gt; =&gt; {</code>
// // <code class="hljs language-typescript" data-highlighted="yes">  <span class="hljs-keyword">const</span> response = axios.<span class="hljs-property">request</span>&lt;<span class="hljs-title class_">UserInfo</span>&gt;(config);</code>
// // <code class="hljs language-typescript" data-highlighted="yes">  <span class="hljs-keyword">return</span> <span class="hljs-comment">/* ... */</span>;</code>
// // <code class="hljs language-typescript" data-highlighted="yes">};</code>

// type FieldValue = 'First' | 'Second' | 'Third' /* | 'Forth' */;

// const item: UserInfo = {
//   /* ... */
// };

// if (valuesList.includes(item.package_name)) {
// }

// // <code class="hljs language-typescript" data-highlighted="yes"><span class="hljs-keyword">type</span> <span class="hljs-title class_">FieldValue</span> = <span class="hljs-string">'First'</span> | <span class="hljs-string">'Second'</span> | <span class="hljs-string">'Third'</span> <span class="hljs-comment">/* | 'Forth' */</span>;</code>
// // <code class="hljs language-typescript" data-highlighted="yes"><span class="hljs-keyword">const</span> <span class="hljs-attr">item</span>: <span class="hljs-title class_">UserInfo</span> = { <span class="hljs-comment">/* ... */</span> };</code>
// // <code class="hljs language-typescript" data-highlighted="yes"><span class="hljs-keyword">if</span> (valuesList.<span class="hljs-title function_">includes</span>(item.<span class="hljs-property">package_name</span>)) {}</code>

// type FieldValue = 'First' | 'Second' | 'Third';
// const valuesList: FieldValue[] = ['First', 'Second', 'Third'];

// /*
// <code class="hljs language-typescript" data-highlighted="yes"><span class="hljs-keyword">type</span> <span class="hljs-title class_">FieldValue</span> = <span class="hljs-string">'First'</span> | <span class="hljs-string">'Second'</span> | <span class="hljs-string">'Third'</span>;</code>
// <code class="hljs language-typescript" data-highlighted="yes"><span class="hljs-keyword">const</span> <span class="hljs-attr">valuesList</span>: <span class="hljs-title class_">FieldValue</span>[] = [<span class="hljs-string">'First'</span>, <span class="hljs-string">'Second'</span>, <span class="hljs-string">'Third'</span>];</code>
//  */

// type UnionToIntersection<
//   Union,
//   UnionAsFunctionsArguments = Union extends unknown
//     ? (k: Union) => void
//     : never,
//   UnionIntersection = [UnionAsFunctionsArguments] extends [(k: infer I) => void]
//     ? I
//     : never
// > = UnionIntersection;

// type OneOfUnion<
//   Union,
//   UnionAsFunctionsReturnType = Union extends unknown ? () => Union : never,
//   FunctionsIntersection = UnionToIntersection<UnionAsFunctionsReturnType>,
//   UnionElement = FunctionsIntersection extends () => infer R ? R : never
// > = UnionElement;

// type UnionToTuple<
//   Union,
//   TupleBuffer extends any[] = [],
//   UnionElement = OneOfUnion<Union>,
//   RestUnion = Exclude<Union, UnionElement>,
//   NewTuple extends any[] = [UnionElement] extends [never]
//     ? TupleBuffer
//     : [UnionElement, ...TupleBuffer],
//   Return = [RestUnion] extends [never]
//     ? NewTuple
//     : UnionToTuple<RestUnion, NewTuple>
// > = Return;

// type A = UnionToTuple<'free' | 'prime'>;

// // type PackageName = 'free' | 'prime' | 'pro';
// // const packageNamesList: UnionToTuple<PackageName> = ['free', 'prime', 'pro'];

// type PackageName = 'free' | 'prime' | 'pro' | 'deluxe';
// const packageNamesList: UnionToTuple<PackageName> =
//   //    ^^^^^^^^^^^^^^^^^ 3 элемента, а не 4
//   ['free', 'prime', 'pro'];

// const valuesList: UnionToTuple<FieldValue> = ['First', 'Second'];

// type UserConfig = {
//   type: 'free';
// };

// // const sendMetrics = (someImportantId: string) => {
// //   /*  */
// // };

type NotEmptyString = `${any}${string}`;

const sendMetrics = (someImportantId: NotEmptyString) => {
  /*  */
};

sendMetrics('');

// const process = (someImportantId: string) => {
//   if (!someImportantId) return;

//   sendMetrics(someImportantId);
// };

// const isNotEmptyString = (value: string): value is NotEmptyString => !!value;
// const process = (someImportantId: string) => {
//   if (!isNotEmptyString(someImportantId)) return;

//   sendMetrics(someImportantId);
// };
