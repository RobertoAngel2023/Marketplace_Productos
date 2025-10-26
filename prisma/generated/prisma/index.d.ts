
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Producto
 * 
 */
export type Producto = $Result.DefaultSelection<Prisma.$ProductoPayload>
/**
 * Model Carrito
 * 
 */
export type Carrito = $Result.DefaultSelection<Prisma.$CarritoPayload>
/**
 * Model CarritoProducto
 * 
 */
export type CarritoProducto = $Result.DefaultSelection<Prisma.$CarritoProductoPayload>
/**
 * Model Compra
 * 
 */
export type Compra = $Result.DefaultSelection<Prisma.$CompraPayload>
/**
 * Model CompraDetalle
 * 
 */
export type CompraDetalle = $Result.DefaultSelection<Prisma.$CompraDetallePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.producto`: Exposes CRUD operations for the **Producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.producto.findMany()
    * ```
    */
  get producto(): Prisma.ProductoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carrito`: Exposes CRUD operations for the **Carrito** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carritos
    * const carritos = await prisma.carrito.findMany()
    * ```
    */
  get carrito(): Prisma.CarritoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carritoProducto`: Exposes CRUD operations for the **CarritoProducto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CarritoProductos
    * const carritoProductos = await prisma.carritoProducto.findMany()
    * ```
    */
  get carritoProducto(): Prisma.CarritoProductoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.compra`: Exposes CRUD operations for the **Compra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Compras
    * const compras = await prisma.compra.findMany()
    * ```
    */
  get compra(): Prisma.CompraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.compraDetalle`: Exposes CRUD operations for the **CompraDetalle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompraDetalles
    * const compraDetalles = await prisma.compraDetalle.findMany()
    * ```
    */
  get compraDetalle(): Prisma.CompraDetalleDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Producto: 'Producto',
    Carrito: 'Carrito',
    CarritoProducto: 'CarritoProducto',
    Compra: 'Compra',
    CompraDetalle: 'CompraDetalle'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "producto" | "carrito" | "carritoProducto" | "compra" | "compraDetalle"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Producto: {
        payload: Prisma.$ProductoPayload<ExtArgs>
        fields: Prisma.ProductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findFirst: {
            args: Prisma.ProductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findMany: {
            args: Prisma.ProductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          create: {
            args: Prisma.ProductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          createMany: {
            args: Prisma.ProductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          update: {
            args: Prisma.ProductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          deleteMany: {
            args: Prisma.ProductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          aggregate: {
            args: Prisma.ProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducto>
          }
          groupBy: {
            args: Prisma.ProductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductoCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoCountAggregateOutputType> | number
          }
        }
      }
      Carrito: {
        payload: Prisma.$CarritoPayload<ExtArgs>
        fields: Prisma.CarritoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarritoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarritoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>
          }
          findFirst: {
            args: Prisma.CarritoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarritoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>
          }
          findMany: {
            args: Prisma.CarritoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>[]
          }
          create: {
            args: Prisma.CarritoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>
          }
          createMany: {
            args: Prisma.CarritoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CarritoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>
          }
          update: {
            args: Prisma.CarritoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>
          }
          deleteMany: {
            args: Prisma.CarritoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarritoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CarritoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>
          }
          aggregate: {
            args: Prisma.CarritoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarrito>
          }
          groupBy: {
            args: Prisma.CarritoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarritoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarritoCountArgs<ExtArgs>
            result: $Utils.Optional<CarritoCountAggregateOutputType> | number
          }
        }
      }
      CarritoProducto: {
        payload: Prisma.$CarritoProductoPayload<ExtArgs>
        fields: Prisma.CarritoProductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarritoProductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoProductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarritoProductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoProductoPayload>
          }
          findFirst: {
            args: Prisma.CarritoProductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoProductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarritoProductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoProductoPayload>
          }
          findMany: {
            args: Prisma.CarritoProductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoProductoPayload>[]
          }
          create: {
            args: Prisma.CarritoProductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoProductoPayload>
          }
          createMany: {
            args: Prisma.CarritoProductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CarritoProductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoProductoPayload>
          }
          update: {
            args: Prisma.CarritoProductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoProductoPayload>
          }
          deleteMany: {
            args: Prisma.CarritoProductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarritoProductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CarritoProductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoProductoPayload>
          }
          aggregate: {
            args: Prisma.CarritoProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarritoProducto>
          }
          groupBy: {
            args: Prisma.CarritoProductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarritoProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarritoProductoCountArgs<ExtArgs>
            result: $Utils.Optional<CarritoProductoCountAggregateOutputType> | number
          }
        }
      }
      Compra: {
        payload: Prisma.$CompraPayload<ExtArgs>
        fields: Prisma.CompraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          findFirst: {
            args: Prisma.CompraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          findMany: {
            args: Prisma.CompraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>[]
          }
          create: {
            args: Prisma.CompraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          createMany: {
            args: Prisma.CompraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CompraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          update: {
            args: Prisma.CompraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          deleteMany: {
            args: Prisma.CompraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          aggregate: {
            args: Prisma.CompraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompra>
          }
          groupBy: {
            args: Prisma.CompraGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompraGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompraCountArgs<ExtArgs>
            result: $Utils.Optional<CompraCountAggregateOutputType> | number
          }
        }
      }
      CompraDetalle: {
        payload: Prisma.$CompraDetallePayload<ExtArgs>
        fields: Prisma.CompraDetalleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompraDetalleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraDetallePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompraDetalleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraDetallePayload>
          }
          findFirst: {
            args: Prisma.CompraDetalleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraDetallePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompraDetalleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraDetallePayload>
          }
          findMany: {
            args: Prisma.CompraDetalleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraDetallePayload>[]
          }
          create: {
            args: Prisma.CompraDetalleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraDetallePayload>
          }
          createMany: {
            args: Prisma.CompraDetalleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CompraDetalleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraDetallePayload>
          }
          update: {
            args: Prisma.CompraDetalleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraDetallePayload>
          }
          deleteMany: {
            args: Prisma.CompraDetalleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompraDetalleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompraDetalleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraDetallePayload>
          }
          aggregate: {
            args: Prisma.CompraDetalleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompraDetalle>
          }
          groupBy: {
            args: Prisma.CompraDetalleGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompraDetalleGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompraDetalleCountArgs<ExtArgs>
            result: $Utils.Optional<CompraDetalleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    producto?: ProductoOmit
    carrito?: CarritoOmit
    carritoProducto?: CarritoProductoOmit
    compra?: CompraOmit
    compraDetalle?: CompraDetalleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    compras: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compras?: boolean | UsuarioCountOutputTypeCountComprasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountComprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompraWhereInput
  }


  /**
   * Count Type ProductoCountOutputType
   */

  export type ProductoCountOutputType = {
    carritoProd: number
    compras: number
  }

  export type ProductoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carritoProd?: boolean | ProductoCountOutputTypeCountCarritoProdArgs
    compras?: boolean | ProductoCountOutputTypeCountComprasArgs
  }

  // Custom InputTypes
  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCountOutputType
     */
    select?: ProductoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountCarritoProdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarritoProductoWhereInput
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountComprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompraDetalleWhereInput
  }


  /**
   * Count Type CarritoCountOutputType
   */

  export type CarritoCountOutputType = {
    carritoProductos: number
  }

  export type CarritoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carritoProductos?: boolean | CarritoCountOutputTypeCountCarritoProductosArgs
  }

  // Custom InputTypes
  /**
   * CarritoCountOutputType without action
   */
  export type CarritoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoCountOutputType
     */
    select?: CarritoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarritoCountOutputType without action
   */
  export type CarritoCountOutputTypeCountCarritoProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarritoProductoWhereInput
  }


  /**
   * Count Type CompraCountOutputType
   */

  export type CompraCountOutputType = {
    detalles: number
  }

  export type CompraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalles?: boolean | CompraCountOutputTypeCountDetallesArgs
  }

  // Custom InputTypes
  /**
   * CompraCountOutputType without action
   */
  export type CompraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraCountOutputType
     */
    select?: CompraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompraCountOutputType without action
   */
  export type CompraCountOutputTypeCountDetallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompraDetalleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    idUsuario: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    idUsuario: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    idUsuario: number | null
    nombre: string | null
    email: string | null
    password: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    idUsuario: number | null
    nombre: string | null
    email: string | null
    password: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    idUsuario: number
    nombre: number
    email: number
    password: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    idUsuario?: true
  }

  export type UsuarioSumAggregateInputType = {
    idUsuario?: true
  }

  export type UsuarioMinAggregateInputType = {
    idUsuario?: true
    nombre?: true
    email?: true
    password?: true
  }

  export type UsuarioMaxAggregateInputType = {
    idUsuario?: true
    nombre?: true
    email?: true
    password?: true
  }

  export type UsuarioCountAggregateInputType = {
    idUsuario?: true
    nombre?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    idUsuario: number
    nombre: string
    email: string
    password: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUsuario?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    carrito?: boolean | Usuario$carritoArgs<ExtArgs>
    compras?: boolean | Usuario$comprasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    idUsuario?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idUsuario" | "nombre" | "email" | "password", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrito?: boolean | Usuario$carritoArgs<ExtArgs>
    compras?: boolean | Usuario$comprasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      carrito: Prisma.$CarritoPayload<ExtArgs> | null
      compras: Prisma.$CompraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idUsuario: number
      nombre: string
      email: string
      password: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `idUsuario`
     * const usuarioWithIdUsuarioOnly = await prisma.usuario.findMany({ select: { idUsuario: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carrito<T extends Usuario$carritoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$carritoArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    compras<T extends Usuario$comprasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$comprasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly idUsuario: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.carrito
   */
  export type Usuario$carritoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    where?: CarritoWhereInput
  }

  /**
   * Usuario.compras
   */
  export type Usuario$comprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    where?: CompraWhereInput
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    cursor?: CompraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Producto
   */

  export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  export type ProductoAvgAggregateOutputType = {
    idProducto: number | null
    precio: Decimal | null
  }

  export type ProductoSumAggregateOutputType = {
    idProducto: number | null
    precio: Decimal | null
  }

  export type ProductoMinAggregateOutputType = {
    idProducto: number | null
    nombre: string | null
    descripcion: string | null
    precio: Decimal | null
  }

  export type ProductoMaxAggregateOutputType = {
    idProducto: number | null
    nombre: string | null
    descripcion: string | null
    precio: Decimal | null
  }

  export type ProductoCountAggregateOutputType = {
    idProducto: number
    nombre: number
    descripcion: number
    precio: number
    _all: number
  }


  export type ProductoAvgAggregateInputType = {
    idProducto?: true
    precio?: true
  }

  export type ProductoSumAggregateInputType = {
    idProducto?: true
    precio?: true
  }

  export type ProductoMinAggregateInputType = {
    idProducto?: true
    nombre?: true
    descripcion?: true
    precio?: true
  }

  export type ProductoMaxAggregateInputType = {
    idProducto?: true
    nombre?: true
    descripcion?: true
    precio?: true
  }

  export type ProductoCountAggregateInputType = {
    idProducto?: true
    nombre?: true
    descripcion?: true
    precio?: true
    _all?: true
  }

  export type ProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Producto to aggregate.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productos
    **/
    _count?: true | ProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoMaxAggregateInputType
  }

  export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducto[P]>
      : GetScalarType<T[P], AggregateProducto[P]>
  }




  export type ProductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithAggregationInput | ProductoOrderByWithAggregationInput[]
    by: ProductoScalarFieldEnum[] | ProductoScalarFieldEnum
    having?: ProductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoCountAggregateInputType | true
    _avg?: ProductoAvgAggregateInputType
    _sum?: ProductoSumAggregateInputType
    _min?: ProductoMinAggregateInputType
    _max?: ProductoMaxAggregateInputType
  }

  export type ProductoGroupByOutputType = {
    idProducto: number
    nombre: string
    descripcion: string | null
    precio: Decimal
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  type GetProductoGroupByPayload<T extends ProductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoGroupByOutputType[P]>
        }
      >
    >


  export type ProductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idProducto?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    carritoProd?: boolean | Producto$carritoProdArgs<ExtArgs>
    compras?: boolean | Producto$comprasArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>



  export type ProductoSelectScalar = {
    idProducto?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
  }

  export type ProductoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idProducto" | "nombre" | "descripcion" | "precio", ExtArgs["result"]["producto"]>
  export type ProductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carritoProd?: boolean | Producto$carritoProdArgs<ExtArgs>
    compras?: boolean | Producto$comprasArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Producto"
    objects: {
      carritoProd: Prisma.$CarritoProductoPayload<ExtArgs>[]
      compras: Prisma.$CompraDetallePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idProducto: number
      nombre: string
      descripcion: string | null
      precio: Prisma.Decimal
    }, ExtArgs["result"]["producto"]>
    composites: {}
  }

  type ProductoGetPayload<S extends boolean | null | undefined | ProductoDefaultArgs> = $Result.GetResult<Prisma.$ProductoPayload, S>

  type ProductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductoCountAggregateInputType | true
    }

  export interface ProductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Producto'], meta: { name: 'Producto' } }
    /**
     * Find zero or one Producto that matches the filter.
     * @param {ProductoFindUniqueArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoFindUniqueArgs>(args: SelectSubset<T, ProductoFindUniqueArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Producto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductoFindUniqueOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoFindFirstArgs>(args?: SelectSubset<T, ProductoFindFirstArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.producto.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.producto.findMany({ take: 10 })
     * 
     * // Only select the `idProducto`
     * const productoWithIdProductoOnly = await prisma.producto.findMany({ select: { idProducto: true } })
     * 
     */
    findMany<T extends ProductoFindManyArgs>(args?: SelectSubset<T, ProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Producto.
     * @param {ProductoCreateArgs} args - Arguments to create a Producto.
     * @example
     * // Create one Producto
     * const Producto = await prisma.producto.create({
     *   data: {
     *     // ... data to create a Producto
     *   }
     * })
     * 
     */
    create<T extends ProductoCreateArgs>(args: SelectSubset<T, ProductoCreateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {ProductoCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductoCreateManyArgs>(args?: SelectSubset<T, ProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Producto.
     * @param {ProductoDeleteArgs} args - Arguments to delete one Producto.
     * @example
     * // Delete one Producto
     * const Producto = await prisma.producto.delete({
     *   where: {
     *     // ... filter to delete one Producto
     *   }
     * })
     * 
     */
    delete<T extends ProductoDeleteArgs>(args: SelectSubset<T, ProductoDeleteArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Producto.
     * @param {ProductoUpdateArgs} args - Arguments to update one Producto.
     * @example
     * // Update one Producto
     * const producto = await prisma.producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductoUpdateArgs>(args: SelectSubset<T, ProductoUpdateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {ProductoDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductoDeleteManyArgs>(args?: SelectSubset<T, ProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductoUpdateManyArgs>(args: SelectSubset<T, ProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Producto.
     * @param {ProductoUpsertArgs} args - Arguments to update or create a Producto.
     * @example
     * // Update or create a Producto
     * const producto = await prisma.producto.upsert({
     *   create: {
     *     // ... data to create a Producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producto we want to update
     *   }
     * })
     */
    upsert<T extends ProductoUpsertArgs>(args: SelectSubset<T, ProductoUpsertArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.producto.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends ProductoCountArgs>(
      args?: Subset<T, ProductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductoAggregateArgs>(args: Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>

    /**
     * Group by Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoGroupByArgs['orderBy'] }
        : { orderBy?: ProductoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Producto model
   */
  readonly fields: ProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carritoProd<T extends Producto$carritoProdArgs<ExtArgs> = {}>(args?: Subset<T, Producto$carritoProdArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarritoProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    compras<T extends Producto$comprasArgs<ExtArgs> = {}>(args?: Subset<T, Producto$comprasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraDetallePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Producto model
   */
  interface ProductoFieldRefs {
    readonly idProducto: FieldRef<"Producto", 'Int'>
    readonly nombre: FieldRef<"Producto", 'String'>
    readonly descripcion: FieldRef<"Producto", 'String'>
    readonly precio: FieldRef<"Producto", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Producto findUnique
   */
  export type ProductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findUniqueOrThrow
   */
  export type ProductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findFirst
   */
  export type ProductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findFirstOrThrow
   */
  export type ProductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findMany
   */
  export type ProductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto create
   */
  export type ProductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to create a Producto.
     */
    data: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
  }

  /**
   * Producto createMany
   */
  export type ProductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
  }

  /**
   * Producto update
   */
  export type ProductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to update a Producto.
     */
    data: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
    /**
     * Choose, which Producto to update.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto updateMany
   */
  export type ProductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Producto upsert
   */
  export type ProductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The filter to search for the Producto to update in case it exists.
     */
    where: ProductoWhereUniqueInput
    /**
     * In case the Producto found by the `where` argument doesn't exist, create a new Producto with this data.
     */
    create: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
    /**
     * In case the Producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
  }

  /**
   * Producto delete
   */
  export type ProductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter which Producto to delete.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto deleteMany
   */
  export type ProductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to delete
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to delete.
     */
    limit?: number
  }

  /**
   * Producto.carritoProd
   */
  export type Producto$carritoProdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoProducto
     */
    select?: CarritoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoProducto
     */
    omit?: CarritoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoProductoInclude<ExtArgs> | null
    where?: CarritoProductoWhereInput
    orderBy?: CarritoProductoOrderByWithRelationInput | CarritoProductoOrderByWithRelationInput[]
    cursor?: CarritoProductoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarritoProductoScalarFieldEnum | CarritoProductoScalarFieldEnum[]
  }

  /**
   * Producto.compras
   */
  export type Producto$comprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraDetalle
     */
    select?: CompraDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompraDetalle
     */
    omit?: CompraDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraDetalleInclude<ExtArgs> | null
    where?: CompraDetalleWhereInput
    orderBy?: CompraDetalleOrderByWithRelationInput | CompraDetalleOrderByWithRelationInput[]
    cursor?: CompraDetalleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompraDetalleScalarFieldEnum | CompraDetalleScalarFieldEnum[]
  }

  /**
   * Producto without action
   */
  export type ProductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
  }


  /**
   * Model Carrito
   */

  export type AggregateCarrito = {
    _count: CarritoCountAggregateOutputType | null
    _avg: CarritoAvgAggregateOutputType | null
    _sum: CarritoSumAggregateOutputType | null
    _min: CarritoMinAggregateOutputType | null
    _max: CarritoMaxAggregateOutputType | null
  }

  export type CarritoAvgAggregateOutputType = {
    idCarrito: number | null
    idUsuario: number | null
  }

  export type CarritoSumAggregateOutputType = {
    idCarrito: number | null
    idUsuario: number | null
  }

  export type CarritoMinAggregateOutputType = {
    idCarrito: number | null
    idUsuario: number | null
  }

  export type CarritoMaxAggregateOutputType = {
    idCarrito: number | null
    idUsuario: number | null
  }

  export type CarritoCountAggregateOutputType = {
    idCarrito: number
    idUsuario: number
    _all: number
  }


  export type CarritoAvgAggregateInputType = {
    idCarrito?: true
    idUsuario?: true
  }

  export type CarritoSumAggregateInputType = {
    idCarrito?: true
    idUsuario?: true
  }

  export type CarritoMinAggregateInputType = {
    idCarrito?: true
    idUsuario?: true
  }

  export type CarritoMaxAggregateInputType = {
    idCarrito?: true
    idUsuario?: true
  }

  export type CarritoCountAggregateInputType = {
    idCarrito?: true
    idUsuario?: true
    _all?: true
  }

  export type CarritoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carrito to aggregate.
     */
    where?: CarritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carritos to fetch.
     */
    orderBy?: CarritoOrderByWithRelationInput | CarritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carritos
    **/
    _count?: true | CarritoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarritoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarritoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarritoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarritoMaxAggregateInputType
  }

  export type GetCarritoAggregateType<T extends CarritoAggregateArgs> = {
        [P in keyof T & keyof AggregateCarrito]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarrito[P]>
      : GetScalarType<T[P], AggregateCarrito[P]>
  }




  export type CarritoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarritoWhereInput
    orderBy?: CarritoOrderByWithAggregationInput | CarritoOrderByWithAggregationInput[]
    by: CarritoScalarFieldEnum[] | CarritoScalarFieldEnum
    having?: CarritoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarritoCountAggregateInputType | true
    _avg?: CarritoAvgAggregateInputType
    _sum?: CarritoSumAggregateInputType
    _min?: CarritoMinAggregateInputType
    _max?: CarritoMaxAggregateInputType
  }

  export type CarritoGroupByOutputType = {
    idCarrito: number
    idUsuario: number
    _count: CarritoCountAggregateOutputType | null
    _avg: CarritoAvgAggregateOutputType | null
    _sum: CarritoSumAggregateOutputType | null
    _min: CarritoMinAggregateOutputType | null
    _max: CarritoMaxAggregateOutputType | null
  }

  type GetCarritoGroupByPayload<T extends CarritoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarritoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarritoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarritoGroupByOutputType[P]>
            : GetScalarType<T[P], CarritoGroupByOutputType[P]>
        }
      >
    >


  export type CarritoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCarrito?: boolean
    idUsuario?: boolean
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    carritoProductos?: boolean | Carrito$carritoProductosArgs<ExtArgs>
    _count?: boolean | CarritoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrito"]>



  export type CarritoSelectScalar = {
    idCarrito?: boolean
    idUsuario?: boolean
  }

  export type CarritoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idCarrito" | "idUsuario", ExtArgs["result"]["carrito"]>
  export type CarritoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    carritoProductos?: boolean | Carrito$carritoProductosArgs<ExtArgs>
    _count?: boolean | CarritoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CarritoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carrito"
    objects: {
      Usuario: Prisma.$UsuarioPayload<ExtArgs>
      carritoProductos: Prisma.$CarritoProductoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idCarrito: number
      idUsuario: number
    }, ExtArgs["result"]["carrito"]>
    composites: {}
  }

  type CarritoGetPayload<S extends boolean | null | undefined | CarritoDefaultArgs> = $Result.GetResult<Prisma.$CarritoPayload, S>

  type CarritoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarritoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarritoCountAggregateInputType | true
    }

  export interface CarritoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carrito'], meta: { name: 'Carrito' } }
    /**
     * Find zero or one Carrito that matches the filter.
     * @param {CarritoFindUniqueArgs} args - Arguments to find a Carrito
     * @example
     * // Get one Carrito
     * const carrito = await prisma.carrito.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarritoFindUniqueArgs>(args: SelectSubset<T, CarritoFindUniqueArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carrito that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarritoFindUniqueOrThrowArgs} args - Arguments to find a Carrito
     * @example
     * // Get one Carrito
     * const carrito = await prisma.carrito.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarritoFindUniqueOrThrowArgs>(args: SelectSubset<T, CarritoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrito that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoFindFirstArgs} args - Arguments to find a Carrito
     * @example
     * // Get one Carrito
     * const carrito = await prisma.carrito.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarritoFindFirstArgs>(args?: SelectSubset<T, CarritoFindFirstArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrito that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoFindFirstOrThrowArgs} args - Arguments to find a Carrito
     * @example
     * // Get one Carrito
     * const carrito = await prisma.carrito.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarritoFindFirstOrThrowArgs>(args?: SelectSubset<T, CarritoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carritos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carritos
     * const carritos = await prisma.carrito.findMany()
     * 
     * // Get first 10 Carritos
     * const carritos = await prisma.carrito.findMany({ take: 10 })
     * 
     * // Only select the `idCarrito`
     * const carritoWithIdCarritoOnly = await prisma.carrito.findMany({ select: { idCarrito: true } })
     * 
     */
    findMany<T extends CarritoFindManyArgs>(args?: SelectSubset<T, CarritoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carrito.
     * @param {CarritoCreateArgs} args - Arguments to create a Carrito.
     * @example
     * // Create one Carrito
     * const Carrito = await prisma.carrito.create({
     *   data: {
     *     // ... data to create a Carrito
     *   }
     * })
     * 
     */
    create<T extends CarritoCreateArgs>(args: SelectSubset<T, CarritoCreateArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carritos.
     * @param {CarritoCreateManyArgs} args - Arguments to create many Carritos.
     * @example
     * // Create many Carritos
     * const carrito = await prisma.carrito.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarritoCreateManyArgs>(args?: SelectSubset<T, CarritoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Carrito.
     * @param {CarritoDeleteArgs} args - Arguments to delete one Carrito.
     * @example
     * // Delete one Carrito
     * const Carrito = await prisma.carrito.delete({
     *   where: {
     *     // ... filter to delete one Carrito
     *   }
     * })
     * 
     */
    delete<T extends CarritoDeleteArgs>(args: SelectSubset<T, CarritoDeleteArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carrito.
     * @param {CarritoUpdateArgs} args - Arguments to update one Carrito.
     * @example
     * // Update one Carrito
     * const carrito = await prisma.carrito.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarritoUpdateArgs>(args: SelectSubset<T, CarritoUpdateArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carritos.
     * @param {CarritoDeleteManyArgs} args - Arguments to filter Carritos to delete.
     * @example
     * // Delete a few Carritos
     * const { count } = await prisma.carrito.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarritoDeleteManyArgs>(args?: SelectSubset<T, CarritoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carritos
     * const carrito = await prisma.carrito.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarritoUpdateManyArgs>(args: SelectSubset<T, CarritoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Carrito.
     * @param {CarritoUpsertArgs} args - Arguments to update or create a Carrito.
     * @example
     * // Update or create a Carrito
     * const carrito = await prisma.carrito.upsert({
     *   create: {
     *     // ... data to create a Carrito
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carrito we want to update
     *   }
     * })
     */
    upsert<T extends CarritoUpsertArgs>(args: SelectSubset<T, CarritoUpsertArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoCountArgs} args - Arguments to filter Carritos to count.
     * @example
     * // Count the number of Carritos
     * const count = await prisma.carrito.count({
     *   where: {
     *     // ... the filter for the Carritos we want to count
     *   }
     * })
    **/
    count<T extends CarritoCountArgs>(
      args?: Subset<T, CarritoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarritoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carrito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarritoAggregateArgs>(args: Subset<T, CarritoAggregateArgs>): Prisma.PrismaPromise<GetCarritoAggregateType<T>>

    /**
     * Group by Carrito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarritoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarritoGroupByArgs['orderBy'] }
        : { orderBy?: CarritoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarritoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarritoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carrito model
   */
  readonly fields: CarritoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carrito.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarritoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    carritoProductos<T extends Carrito$carritoProductosArgs<ExtArgs> = {}>(args?: Subset<T, Carrito$carritoProductosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarritoProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Carrito model
   */
  interface CarritoFieldRefs {
    readonly idCarrito: FieldRef<"Carrito", 'Int'>
    readonly idUsuario: FieldRef<"Carrito", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Carrito findUnique
   */
  export type CarritoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * Filter, which Carrito to fetch.
     */
    where: CarritoWhereUniqueInput
  }

  /**
   * Carrito findUniqueOrThrow
   */
  export type CarritoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * Filter, which Carrito to fetch.
     */
    where: CarritoWhereUniqueInput
  }

  /**
   * Carrito findFirst
   */
  export type CarritoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * Filter, which Carrito to fetch.
     */
    where?: CarritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carritos to fetch.
     */
    orderBy?: CarritoOrderByWithRelationInput | CarritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carritos.
     */
    cursor?: CarritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carritos.
     */
    distinct?: CarritoScalarFieldEnum | CarritoScalarFieldEnum[]
  }

  /**
   * Carrito findFirstOrThrow
   */
  export type CarritoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * Filter, which Carrito to fetch.
     */
    where?: CarritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carritos to fetch.
     */
    orderBy?: CarritoOrderByWithRelationInput | CarritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carritos.
     */
    cursor?: CarritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carritos.
     */
    distinct?: CarritoScalarFieldEnum | CarritoScalarFieldEnum[]
  }

  /**
   * Carrito findMany
   */
  export type CarritoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * Filter, which Carritos to fetch.
     */
    where?: CarritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carritos to fetch.
     */
    orderBy?: CarritoOrderByWithRelationInput | CarritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carritos.
     */
    cursor?: CarritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carritos.
     */
    skip?: number
    distinct?: CarritoScalarFieldEnum | CarritoScalarFieldEnum[]
  }

  /**
   * Carrito create
   */
  export type CarritoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * The data needed to create a Carrito.
     */
    data: XOR<CarritoCreateInput, CarritoUncheckedCreateInput>
  }

  /**
   * Carrito createMany
   */
  export type CarritoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carritos.
     */
    data: CarritoCreateManyInput | CarritoCreateManyInput[]
  }

  /**
   * Carrito update
   */
  export type CarritoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * The data needed to update a Carrito.
     */
    data: XOR<CarritoUpdateInput, CarritoUncheckedUpdateInput>
    /**
     * Choose, which Carrito to update.
     */
    where: CarritoWhereUniqueInput
  }

  /**
   * Carrito updateMany
   */
  export type CarritoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carritos.
     */
    data: XOR<CarritoUpdateManyMutationInput, CarritoUncheckedUpdateManyInput>
    /**
     * Filter which Carritos to update
     */
    where?: CarritoWhereInput
    /**
     * Limit how many Carritos to update.
     */
    limit?: number
  }

  /**
   * Carrito upsert
   */
  export type CarritoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * The filter to search for the Carrito to update in case it exists.
     */
    where: CarritoWhereUniqueInput
    /**
     * In case the Carrito found by the `where` argument doesn't exist, create a new Carrito with this data.
     */
    create: XOR<CarritoCreateInput, CarritoUncheckedCreateInput>
    /**
     * In case the Carrito was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarritoUpdateInput, CarritoUncheckedUpdateInput>
  }

  /**
   * Carrito delete
   */
  export type CarritoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * Filter which Carrito to delete.
     */
    where: CarritoWhereUniqueInput
  }

  /**
   * Carrito deleteMany
   */
  export type CarritoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carritos to delete
     */
    where?: CarritoWhereInput
    /**
     * Limit how many Carritos to delete.
     */
    limit?: number
  }

  /**
   * Carrito.carritoProductos
   */
  export type Carrito$carritoProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoProducto
     */
    select?: CarritoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoProducto
     */
    omit?: CarritoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoProductoInclude<ExtArgs> | null
    where?: CarritoProductoWhereInput
    orderBy?: CarritoProductoOrderByWithRelationInput | CarritoProductoOrderByWithRelationInput[]
    cursor?: CarritoProductoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarritoProductoScalarFieldEnum | CarritoProductoScalarFieldEnum[]
  }

  /**
   * Carrito without action
   */
  export type CarritoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
  }


  /**
   * Model CarritoProducto
   */

  export type AggregateCarritoProducto = {
    _count: CarritoProductoCountAggregateOutputType | null
    _avg: CarritoProductoAvgAggregateOutputType | null
    _sum: CarritoProductoSumAggregateOutputType | null
    _min: CarritoProductoMinAggregateOutputType | null
    _max: CarritoProductoMaxAggregateOutputType | null
  }

  export type CarritoProductoAvgAggregateOutputType = {
    idCarritoProd: number | null
    idCarrito: number | null
    idProducto: number | null
    cantidad: number | null
  }

  export type CarritoProductoSumAggregateOutputType = {
    idCarritoProd: number | null
    idCarrito: number | null
    idProducto: number | null
    cantidad: number | null
  }

  export type CarritoProductoMinAggregateOutputType = {
    idCarritoProd: number | null
    idCarrito: number | null
    idProducto: number | null
    cantidad: number | null
  }

  export type CarritoProductoMaxAggregateOutputType = {
    idCarritoProd: number | null
    idCarrito: number | null
    idProducto: number | null
    cantidad: number | null
  }

  export type CarritoProductoCountAggregateOutputType = {
    idCarritoProd: number
    idCarrito: number
    idProducto: number
    cantidad: number
    _all: number
  }


  export type CarritoProductoAvgAggregateInputType = {
    idCarritoProd?: true
    idCarrito?: true
    idProducto?: true
    cantidad?: true
  }

  export type CarritoProductoSumAggregateInputType = {
    idCarritoProd?: true
    idCarrito?: true
    idProducto?: true
    cantidad?: true
  }

  export type CarritoProductoMinAggregateInputType = {
    idCarritoProd?: true
    idCarrito?: true
    idProducto?: true
    cantidad?: true
  }

  export type CarritoProductoMaxAggregateInputType = {
    idCarritoProd?: true
    idCarrito?: true
    idProducto?: true
    cantidad?: true
  }

  export type CarritoProductoCountAggregateInputType = {
    idCarritoProd?: true
    idCarrito?: true
    idProducto?: true
    cantidad?: true
    _all?: true
  }

  export type CarritoProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarritoProducto to aggregate.
     */
    where?: CarritoProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarritoProductos to fetch.
     */
    orderBy?: CarritoProductoOrderByWithRelationInput | CarritoProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarritoProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarritoProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarritoProductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CarritoProductos
    **/
    _count?: true | CarritoProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarritoProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarritoProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarritoProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarritoProductoMaxAggregateInputType
  }

  export type GetCarritoProductoAggregateType<T extends CarritoProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateCarritoProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarritoProducto[P]>
      : GetScalarType<T[P], AggregateCarritoProducto[P]>
  }




  export type CarritoProductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarritoProductoWhereInput
    orderBy?: CarritoProductoOrderByWithAggregationInput | CarritoProductoOrderByWithAggregationInput[]
    by: CarritoProductoScalarFieldEnum[] | CarritoProductoScalarFieldEnum
    having?: CarritoProductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarritoProductoCountAggregateInputType | true
    _avg?: CarritoProductoAvgAggregateInputType
    _sum?: CarritoProductoSumAggregateInputType
    _min?: CarritoProductoMinAggregateInputType
    _max?: CarritoProductoMaxAggregateInputType
  }

  export type CarritoProductoGroupByOutputType = {
    idCarritoProd: number
    idCarrito: number
    idProducto: number
    cantidad: number
    _count: CarritoProductoCountAggregateOutputType | null
    _avg: CarritoProductoAvgAggregateOutputType | null
    _sum: CarritoProductoSumAggregateOutputType | null
    _min: CarritoProductoMinAggregateOutputType | null
    _max: CarritoProductoMaxAggregateOutputType | null
  }

  type GetCarritoProductoGroupByPayload<T extends CarritoProductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarritoProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarritoProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarritoProductoGroupByOutputType[P]>
            : GetScalarType<T[P], CarritoProductoGroupByOutputType[P]>
        }
      >
    >


  export type CarritoProductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCarritoProd?: boolean
    idCarrito?: boolean
    idProducto?: boolean
    cantidad?: boolean
    Carrito?: boolean | CarritoDefaultArgs<ExtArgs>
    Producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carritoProducto"]>



  export type CarritoProductoSelectScalar = {
    idCarritoProd?: boolean
    idCarrito?: boolean
    idProducto?: boolean
    cantidad?: boolean
  }

  export type CarritoProductoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idCarritoProd" | "idCarrito" | "idProducto" | "cantidad", ExtArgs["result"]["carritoProducto"]>
  export type CarritoProductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Carrito?: boolean | CarritoDefaultArgs<ExtArgs>
    Producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $CarritoProductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CarritoProducto"
    objects: {
      Carrito: Prisma.$CarritoPayload<ExtArgs>
      Producto: Prisma.$ProductoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idCarritoProd: number
      idCarrito: number
      idProducto: number
      cantidad: number
    }, ExtArgs["result"]["carritoProducto"]>
    composites: {}
  }

  type CarritoProductoGetPayload<S extends boolean | null | undefined | CarritoProductoDefaultArgs> = $Result.GetResult<Prisma.$CarritoProductoPayload, S>

  type CarritoProductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarritoProductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarritoProductoCountAggregateInputType | true
    }

  export interface CarritoProductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CarritoProducto'], meta: { name: 'CarritoProducto' } }
    /**
     * Find zero or one CarritoProducto that matches the filter.
     * @param {CarritoProductoFindUniqueArgs} args - Arguments to find a CarritoProducto
     * @example
     * // Get one CarritoProducto
     * const carritoProducto = await prisma.carritoProducto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarritoProductoFindUniqueArgs>(args: SelectSubset<T, CarritoProductoFindUniqueArgs<ExtArgs>>): Prisma__CarritoProductoClient<$Result.GetResult<Prisma.$CarritoProductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CarritoProducto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarritoProductoFindUniqueOrThrowArgs} args - Arguments to find a CarritoProducto
     * @example
     * // Get one CarritoProducto
     * const carritoProducto = await prisma.carritoProducto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarritoProductoFindUniqueOrThrowArgs>(args: SelectSubset<T, CarritoProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarritoProductoClient<$Result.GetResult<Prisma.$CarritoProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarritoProducto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoProductoFindFirstArgs} args - Arguments to find a CarritoProducto
     * @example
     * // Get one CarritoProducto
     * const carritoProducto = await prisma.carritoProducto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarritoProductoFindFirstArgs>(args?: SelectSubset<T, CarritoProductoFindFirstArgs<ExtArgs>>): Prisma__CarritoProductoClient<$Result.GetResult<Prisma.$CarritoProductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarritoProducto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoProductoFindFirstOrThrowArgs} args - Arguments to find a CarritoProducto
     * @example
     * // Get one CarritoProducto
     * const carritoProducto = await prisma.carritoProducto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarritoProductoFindFirstOrThrowArgs>(args?: SelectSubset<T, CarritoProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarritoProductoClient<$Result.GetResult<Prisma.$CarritoProductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CarritoProductos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoProductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarritoProductos
     * const carritoProductos = await prisma.carritoProducto.findMany()
     * 
     * // Get first 10 CarritoProductos
     * const carritoProductos = await prisma.carritoProducto.findMany({ take: 10 })
     * 
     * // Only select the `idCarritoProd`
     * const carritoProductoWithIdCarritoProdOnly = await prisma.carritoProducto.findMany({ select: { idCarritoProd: true } })
     * 
     */
    findMany<T extends CarritoProductoFindManyArgs>(args?: SelectSubset<T, CarritoProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarritoProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CarritoProducto.
     * @param {CarritoProductoCreateArgs} args - Arguments to create a CarritoProducto.
     * @example
     * // Create one CarritoProducto
     * const CarritoProducto = await prisma.carritoProducto.create({
     *   data: {
     *     // ... data to create a CarritoProducto
     *   }
     * })
     * 
     */
    create<T extends CarritoProductoCreateArgs>(args: SelectSubset<T, CarritoProductoCreateArgs<ExtArgs>>): Prisma__CarritoProductoClient<$Result.GetResult<Prisma.$CarritoProductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CarritoProductos.
     * @param {CarritoProductoCreateManyArgs} args - Arguments to create many CarritoProductos.
     * @example
     * // Create many CarritoProductos
     * const carritoProducto = await prisma.carritoProducto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarritoProductoCreateManyArgs>(args?: SelectSubset<T, CarritoProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CarritoProducto.
     * @param {CarritoProductoDeleteArgs} args - Arguments to delete one CarritoProducto.
     * @example
     * // Delete one CarritoProducto
     * const CarritoProducto = await prisma.carritoProducto.delete({
     *   where: {
     *     // ... filter to delete one CarritoProducto
     *   }
     * })
     * 
     */
    delete<T extends CarritoProductoDeleteArgs>(args: SelectSubset<T, CarritoProductoDeleteArgs<ExtArgs>>): Prisma__CarritoProductoClient<$Result.GetResult<Prisma.$CarritoProductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CarritoProducto.
     * @param {CarritoProductoUpdateArgs} args - Arguments to update one CarritoProducto.
     * @example
     * // Update one CarritoProducto
     * const carritoProducto = await prisma.carritoProducto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarritoProductoUpdateArgs>(args: SelectSubset<T, CarritoProductoUpdateArgs<ExtArgs>>): Prisma__CarritoProductoClient<$Result.GetResult<Prisma.$CarritoProductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CarritoProductos.
     * @param {CarritoProductoDeleteManyArgs} args - Arguments to filter CarritoProductos to delete.
     * @example
     * // Delete a few CarritoProductos
     * const { count } = await prisma.carritoProducto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarritoProductoDeleteManyArgs>(args?: SelectSubset<T, CarritoProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarritoProductos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoProductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarritoProductos
     * const carritoProducto = await prisma.carritoProducto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarritoProductoUpdateManyArgs>(args: SelectSubset<T, CarritoProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CarritoProducto.
     * @param {CarritoProductoUpsertArgs} args - Arguments to update or create a CarritoProducto.
     * @example
     * // Update or create a CarritoProducto
     * const carritoProducto = await prisma.carritoProducto.upsert({
     *   create: {
     *     // ... data to create a CarritoProducto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarritoProducto we want to update
     *   }
     * })
     */
    upsert<T extends CarritoProductoUpsertArgs>(args: SelectSubset<T, CarritoProductoUpsertArgs<ExtArgs>>): Prisma__CarritoProductoClient<$Result.GetResult<Prisma.$CarritoProductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CarritoProductos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoProductoCountArgs} args - Arguments to filter CarritoProductos to count.
     * @example
     * // Count the number of CarritoProductos
     * const count = await prisma.carritoProducto.count({
     *   where: {
     *     // ... the filter for the CarritoProductos we want to count
     *   }
     * })
    **/
    count<T extends CarritoProductoCountArgs>(
      args?: Subset<T, CarritoProductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarritoProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CarritoProducto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarritoProductoAggregateArgs>(args: Subset<T, CarritoProductoAggregateArgs>): Prisma.PrismaPromise<GetCarritoProductoAggregateType<T>>

    /**
     * Group by CarritoProducto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoProductoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarritoProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarritoProductoGroupByArgs['orderBy'] }
        : { orderBy?: CarritoProductoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarritoProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarritoProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CarritoProducto model
   */
  readonly fields: CarritoProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CarritoProducto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarritoProductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Carrito<T extends CarritoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarritoDefaultArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CarritoProducto model
   */
  interface CarritoProductoFieldRefs {
    readonly idCarritoProd: FieldRef<"CarritoProducto", 'Int'>
    readonly idCarrito: FieldRef<"CarritoProducto", 'Int'>
    readonly idProducto: FieldRef<"CarritoProducto", 'Int'>
    readonly cantidad: FieldRef<"CarritoProducto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CarritoProducto findUnique
   */
  export type CarritoProductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoProducto
     */
    select?: CarritoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoProducto
     */
    omit?: CarritoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoProductoInclude<ExtArgs> | null
    /**
     * Filter, which CarritoProducto to fetch.
     */
    where: CarritoProductoWhereUniqueInput
  }

  /**
   * CarritoProducto findUniqueOrThrow
   */
  export type CarritoProductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoProducto
     */
    select?: CarritoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoProducto
     */
    omit?: CarritoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoProductoInclude<ExtArgs> | null
    /**
     * Filter, which CarritoProducto to fetch.
     */
    where: CarritoProductoWhereUniqueInput
  }

  /**
   * CarritoProducto findFirst
   */
  export type CarritoProductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoProducto
     */
    select?: CarritoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoProducto
     */
    omit?: CarritoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoProductoInclude<ExtArgs> | null
    /**
     * Filter, which CarritoProducto to fetch.
     */
    where?: CarritoProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarritoProductos to fetch.
     */
    orderBy?: CarritoProductoOrderByWithRelationInput | CarritoProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarritoProductos.
     */
    cursor?: CarritoProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarritoProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarritoProductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarritoProductos.
     */
    distinct?: CarritoProductoScalarFieldEnum | CarritoProductoScalarFieldEnum[]
  }

  /**
   * CarritoProducto findFirstOrThrow
   */
  export type CarritoProductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoProducto
     */
    select?: CarritoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoProducto
     */
    omit?: CarritoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoProductoInclude<ExtArgs> | null
    /**
     * Filter, which CarritoProducto to fetch.
     */
    where?: CarritoProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarritoProductos to fetch.
     */
    orderBy?: CarritoProductoOrderByWithRelationInput | CarritoProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarritoProductos.
     */
    cursor?: CarritoProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarritoProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarritoProductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarritoProductos.
     */
    distinct?: CarritoProductoScalarFieldEnum | CarritoProductoScalarFieldEnum[]
  }

  /**
   * CarritoProducto findMany
   */
  export type CarritoProductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoProducto
     */
    select?: CarritoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoProducto
     */
    omit?: CarritoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoProductoInclude<ExtArgs> | null
    /**
     * Filter, which CarritoProductos to fetch.
     */
    where?: CarritoProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarritoProductos to fetch.
     */
    orderBy?: CarritoProductoOrderByWithRelationInput | CarritoProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CarritoProductos.
     */
    cursor?: CarritoProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarritoProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarritoProductos.
     */
    skip?: number
    distinct?: CarritoProductoScalarFieldEnum | CarritoProductoScalarFieldEnum[]
  }

  /**
   * CarritoProducto create
   */
  export type CarritoProductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoProducto
     */
    select?: CarritoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoProducto
     */
    omit?: CarritoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoProductoInclude<ExtArgs> | null
    /**
     * The data needed to create a CarritoProducto.
     */
    data: XOR<CarritoProductoCreateInput, CarritoProductoUncheckedCreateInput>
  }

  /**
   * CarritoProducto createMany
   */
  export type CarritoProductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CarritoProductos.
     */
    data: CarritoProductoCreateManyInput | CarritoProductoCreateManyInput[]
  }

  /**
   * CarritoProducto update
   */
  export type CarritoProductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoProducto
     */
    select?: CarritoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoProducto
     */
    omit?: CarritoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoProductoInclude<ExtArgs> | null
    /**
     * The data needed to update a CarritoProducto.
     */
    data: XOR<CarritoProductoUpdateInput, CarritoProductoUncheckedUpdateInput>
    /**
     * Choose, which CarritoProducto to update.
     */
    where: CarritoProductoWhereUniqueInput
  }

  /**
   * CarritoProducto updateMany
   */
  export type CarritoProductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CarritoProductos.
     */
    data: XOR<CarritoProductoUpdateManyMutationInput, CarritoProductoUncheckedUpdateManyInput>
    /**
     * Filter which CarritoProductos to update
     */
    where?: CarritoProductoWhereInput
    /**
     * Limit how many CarritoProductos to update.
     */
    limit?: number
  }

  /**
   * CarritoProducto upsert
   */
  export type CarritoProductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoProducto
     */
    select?: CarritoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoProducto
     */
    omit?: CarritoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoProductoInclude<ExtArgs> | null
    /**
     * The filter to search for the CarritoProducto to update in case it exists.
     */
    where: CarritoProductoWhereUniqueInput
    /**
     * In case the CarritoProducto found by the `where` argument doesn't exist, create a new CarritoProducto with this data.
     */
    create: XOR<CarritoProductoCreateInput, CarritoProductoUncheckedCreateInput>
    /**
     * In case the CarritoProducto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarritoProductoUpdateInput, CarritoProductoUncheckedUpdateInput>
  }

  /**
   * CarritoProducto delete
   */
  export type CarritoProductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoProducto
     */
    select?: CarritoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoProducto
     */
    omit?: CarritoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoProductoInclude<ExtArgs> | null
    /**
     * Filter which CarritoProducto to delete.
     */
    where: CarritoProductoWhereUniqueInput
  }

  /**
   * CarritoProducto deleteMany
   */
  export type CarritoProductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarritoProductos to delete
     */
    where?: CarritoProductoWhereInput
    /**
     * Limit how many CarritoProductos to delete.
     */
    limit?: number
  }

  /**
   * CarritoProducto without action
   */
  export type CarritoProductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoProducto
     */
    select?: CarritoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarritoProducto
     */
    omit?: CarritoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoProductoInclude<ExtArgs> | null
  }


  /**
   * Model Compra
   */

  export type AggregateCompra = {
    _count: CompraCountAggregateOutputType | null
    _avg: CompraAvgAggregateOutputType | null
    _sum: CompraSumAggregateOutputType | null
    _min: CompraMinAggregateOutputType | null
    _max: CompraMaxAggregateOutputType | null
  }

  export type CompraAvgAggregateOutputType = {
    idCompra: number | null
    idUsuario: number | null
    total: Decimal | null
  }

  export type CompraSumAggregateOutputType = {
    idCompra: number | null
    idUsuario: number | null
    total: Decimal | null
  }

  export type CompraMinAggregateOutputType = {
    idCompra: number | null
    idUsuario: number | null
    fechaCompra: Date | null
    total: Decimal | null
  }

  export type CompraMaxAggregateOutputType = {
    idCompra: number | null
    idUsuario: number | null
    fechaCompra: Date | null
    total: Decimal | null
  }

  export type CompraCountAggregateOutputType = {
    idCompra: number
    idUsuario: number
    fechaCompra: number
    total: number
    _all: number
  }


  export type CompraAvgAggregateInputType = {
    idCompra?: true
    idUsuario?: true
    total?: true
  }

  export type CompraSumAggregateInputType = {
    idCompra?: true
    idUsuario?: true
    total?: true
  }

  export type CompraMinAggregateInputType = {
    idCompra?: true
    idUsuario?: true
    fechaCompra?: true
    total?: true
  }

  export type CompraMaxAggregateInputType = {
    idCompra?: true
    idUsuario?: true
    fechaCompra?: true
    total?: true
  }

  export type CompraCountAggregateInputType = {
    idCompra?: true
    idUsuario?: true
    fechaCompra?: true
    total?: true
    _all?: true
  }

  export type CompraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Compra to aggregate.
     */
    where?: CompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Compras
    **/
    _count?: true | CompraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompraMaxAggregateInputType
  }

  export type GetCompraAggregateType<T extends CompraAggregateArgs> = {
        [P in keyof T & keyof AggregateCompra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompra[P]>
      : GetScalarType<T[P], AggregateCompra[P]>
  }




  export type CompraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompraWhereInput
    orderBy?: CompraOrderByWithAggregationInput | CompraOrderByWithAggregationInput[]
    by: CompraScalarFieldEnum[] | CompraScalarFieldEnum
    having?: CompraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompraCountAggregateInputType | true
    _avg?: CompraAvgAggregateInputType
    _sum?: CompraSumAggregateInputType
    _min?: CompraMinAggregateInputType
    _max?: CompraMaxAggregateInputType
  }

  export type CompraGroupByOutputType = {
    idCompra: number
    idUsuario: number
    fechaCompra: Date
    total: Decimal
    _count: CompraCountAggregateOutputType | null
    _avg: CompraAvgAggregateOutputType | null
    _sum: CompraSumAggregateOutputType | null
    _min: CompraMinAggregateOutputType | null
    _max: CompraMaxAggregateOutputType | null
  }

  type GetCompraGroupByPayload<T extends CompraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompraGroupByOutputType[P]>
            : GetScalarType<T[P], CompraGroupByOutputType[P]>
        }
      >
    >


  export type CompraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCompra?: boolean
    idUsuario?: boolean
    fechaCompra?: boolean
    total?: boolean
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    detalles?: boolean | Compra$detallesArgs<ExtArgs>
    _count?: boolean | CompraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compra"]>



  export type CompraSelectScalar = {
    idCompra?: boolean
    idUsuario?: boolean
    fechaCompra?: boolean
    total?: boolean
  }

  export type CompraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idCompra" | "idUsuario" | "fechaCompra" | "total", ExtArgs["result"]["compra"]>
  export type CompraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    detalles?: boolean | Compra$detallesArgs<ExtArgs>
    _count?: boolean | CompraCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CompraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Compra"
    objects: {
      Usuario: Prisma.$UsuarioPayload<ExtArgs>
      detalles: Prisma.$CompraDetallePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idCompra: number
      idUsuario: number
      fechaCompra: Date
      total: Prisma.Decimal
    }, ExtArgs["result"]["compra"]>
    composites: {}
  }

  type CompraGetPayload<S extends boolean | null | undefined | CompraDefaultArgs> = $Result.GetResult<Prisma.$CompraPayload, S>

  type CompraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompraCountAggregateInputType | true
    }

  export interface CompraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Compra'], meta: { name: 'Compra' } }
    /**
     * Find zero or one Compra that matches the filter.
     * @param {CompraFindUniqueArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompraFindUniqueArgs>(args: SelectSubset<T, CompraFindUniqueArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Compra that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompraFindUniqueOrThrowArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompraFindUniqueOrThrowArgs>(args: SelectSubset<T, CompraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Compra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraFindFirstArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompraFindFirstArgs>(args?: SelectSubset<T, CompraFindFirstArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Compra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraFindFirstOrThrowArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompraFindFirstOrThrowArgs>(args?: SelectSubset<T, CompraFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Compras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Compras
     * const compras = await prisma.compra.findMany()
     * 
     * // Get first 10 Compras
     * const compras = await prisma.compra.findMany({ take: 10 })
     * 
     * // Only select the `idCompra`
     * const compraWithIdCompraOnly = await prisma.compra.findMany({ select: { idCompra: true } })
     * 
     */
    findMany<T extends CompraFindManyArgs>(args?: SelectSubset<T, CompraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Compra.
     * @param {CompraCreateArgs} args - Arguments to create a Compra.
     * @example
     * // Create one Compra
     * const Compra = await prisma.compra.create({
     *   data: {
     *     // ... data to create a Compra
     *   }
     * })
     * 
     */
    create<T extends CompraCreateArgs>(args: SelectSubset<T, CompraCreateArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Compras.
     * @param {CompraCreateManyArgs} args - Arguments to create many Compras.
     * @example
     * // Create many Compras
     * const compra = await prisma.compra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompraCreateManyArgs>(args?: SelectSubset<T, CompraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Compra.
     * @param {CompraDeleteArgs} args - Arguments to delete one Compra.
     * @example
     * // Delete one Compra
     * const Compra = await prisma.compra.delete({
     *   where: {
     *     // ... filter to delete one Compra
     *   }
     * })
     * 
     */
    delete<T extends CompraDeleteArgs>(args: SelectSubset<T, CompraDeleteArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Compra.
     * @param {CompraUpdateArgs} args - Arguments to update one Compra.
     * @example
     * // Update one Compra
     * const compra = await prisma.compra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompraUpdateArgs>(args: SelectSubset<T, CompraUpdateArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Compras.
     * @param {CompraDeleteManyArgs} args - Arguments to filter Compras to delete.
     * @example
     * // Delete a few Compras
     * const { count } = await prisma.compra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompraDeleteManyArgs>(args?: SelectSubset<T, CompraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Compras
     * const compra = await prisma.compra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompraUpdateManyArgs>(args: SelectSubset<T, CompraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Compra.
     * @param {CompraUpsertArgs} args - Arguments to update or create a Compra.
     * @example
     * // Update or create a Compra
     * const compra = await prisma.compra.upsert({
     *   create: {
     *     // ... data to create a Compra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Compra we want to update
     *   }
     * })
     */
    upsert<T extends CompraUpsertArgs>(args: SelectSubset<T, CompraUpsertArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraCountArgs} args - Arguments to filter Compras to count.
     * @example
     * // Count the number of Compras
     * const count = await prisma.compra.count({
     *   where: {
     *     // ... the filter for the Compras we want to count
     *   }
     * })
    **/
    count<T extends CompraCountArgs>(
      args?: Subset<T, CompraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Compra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompraAggregateArgs>(args: Subset<T, CompraAggregateArgs>): Prisma.PrismaPromise<GetCompraAggregateType<T>>

    /**
     * Group by Compra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompraGroupByArgs['orderBy'] }
        : { orderBy?: CompraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Compra model
   */
  readonly fields: CompraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Compra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    detalles<T extends Compra$detallesArgs<ExtArgs> = {}>(args?: Subset<T, Compra$detallesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraDetallePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Compra model
   */
  interface CompraFieldRefs {
    readonly idCompra: FieldRef<"Compra", 'Int'>
    readonly idUsuario: FieldRef<"Compra", 'Int'>
    readonly fechaCompra: FieldRef<"Compra", 'DateTime'>
    readonly total: FieldRef<"Compra", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Compra findUnique
   */
  export type CompraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compra to fetch.
     */
    where: CompraWhereUniqueInput
  }

  /**
   * Compra findUniqueOrThrow
   */
  export type CompraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compra to fetch.
     */
    where: CompraWhereUniqueInput
  }

  /**
   * Compra findFirst
   */
  export type CompraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compra to fetch.
     */
    where?: CompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Compras.
     */
    cursor?: CompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Compras.
     */
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * Compra findFirstOrThrow
   */
  export type CompraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compra to fetch.
     */
    where?: CompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Compras.
     */
    cursor?: CompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Compras.
     */
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * Compra findMany
   */
  export type CompraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compras to fetch.
     */
    where?: CompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Compras.
     */
    cursor?: CompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * Compra create
   */
  export type CompraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * The data needed to create a Compra.
     */
    data: XOR<CompraCreateInput, CompraUncheckedCreateInput>
  }

  /**
   * Compra createMany
   */
  export type CompraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Compras.
     */
    data: CompraCreateManyInput | CompraCreateManyInput[]
  }

  /**
   * Compra update
   */
  export type CompraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * The data needed to update a Compra.
     */
    data: XOR<CompraUpdateInput, CompraUncheckedUpdateInput>
    /**
     * Choose, which Compra to update.
     */
    where: CompraWhereUniqueInput
  }

  /**
   * Compra updateMany
   */
  export type CompraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Compras.
     */
    data: XOR<CompraUpdateManyMutationInput, CompraUncheckedUpdateManyInput>
    /**
     * Filter which Compras to update
     */
    where?: CompraWhereInput
    /**
     * Limit how many Compras to update.
     */
    limit?: number
  }

  /**
   * Compra upsert
   */
  export type CompraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * The filter to search for the Compra to update in case it exists.
     */
    where: CompraWhereUniqueInput
    /**
     * In case the Compra found by the `where` argument doesn't exist, create a new Compra with this data.
     */
    create: XOR<CompraCreateInput, CompraUncheckedCreateInput>
    /**
     * In case the Compra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompraUpdateInput, CompraUncheckedUpdateInput>
  }

  /**
   * Compra delete
   */
  export type CompraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter which Compra to delete.
     */
    where: CompraWhereUniqueInput
  }

  /**
   * Compra deleteMany
   */
  export type CompraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Compras to delete
     */
    where?: CompraWhereInput
    /**
     * Limit how many Compras to delete.
     */
    limit?: number
  }

  /**
   * Compra.detalles
   */
  export type Compra$detallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraDetalle
     */
    select?: CompraDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompraDetalle
     */
    omit?: CompraDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraDetalleInclude<ExtArgs> | null
    where?: CompraDetalleWhereInput
    orderBy?: CompraDetalleOrderByWithRelationInput | CompraDetalleOrderByWithRelationInput[]
    cursor?: CompraDetalleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompraDetalleScalarFieldEnum | CompraDetalleScalarFieldEnum[]
  }

  /**
   * Compra without action
   */
  export type CompraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
  }


  /**
   * Model CompraDetalle
   */

  export type AggregateCompraDetalle = {
    _count: CompraDetalleCountAggregateOutputType | null
    _avg: CompraDetalleAvgAggregateOutputType | null
    _sum: CompraDetalleSumAggregateOutputType | null
    _min: CompraDetalleMinAggregateOutputType | null
    _max: CompraDetalleMaxAggregateOutputType | null
  }

  export type CompraDetalleAvgAggregateOutputType = {
    idCompraDetalle: number | null
    idCompra: number | null
    idProducto: number | null
    cantidad: number | null
    precioUnitario: Decimal | null
  }

  export type CompraDetalleSumAggregateOutputType = {
    idCompraDetalle: number | null
    idCompra: number | null
    idProducto: number | null
    cantidad: number | null
    precioUnitario: Decimal | null
  }

  export type CompraDetalleMinAggregateOutputType = {
    idCompraDetalle: number | null
    idCompra: number | null
    idProducto: number | null
    cantidad: number | null
    precioUnitario: Decimal | null
  }

  export type CompraDetalleMaxAggregateOutputType = {
    idCompraDetalle: number | null
    idCompra: number | null
    idProducto: number | null
    cantidad: number | null
    precioUnitario: Decimal | null
  }

  export type CompraDetalleCountAggregateOutputType = {
    idCompraDetalle: number
    idCompra: number
    idProducto: number
    cantidad: number
    precioUnitario: number
    _all: number
  }


  export type CompraDetalleAvgAggregateInputType = {
    idCompraDetalle?: true
    idCompra?: true
    idProducto?: true
    cantidad?: true
    precioUnitario?: true
  }

  export type CompraDetalleSumAggregateInputType = {
    idCompraDetalle?: true
    idCompra?: true
    idProducto?: true
    cantidad?: true
    precioUnitario?: true
  }

  export type CompraDetalleMinAggregateInputType = {
    idCompraDetalle?: true
    idCompra?: true
    idProducto?: true
    cantidad?: true
    precioUnitario?: true
  }

  export type CompraDetalleMaxAggregateInputType = {
    idCompraDetalle?: true
    idCompra?: true
    idProducto?: true
    cantidad?: true
    precioUnitario?: true
  }

  export type CompraDetalleCountAggregateInputType = {
    idCompraDetalle?: true
    idCompra?: true
    idProducto?: true
    cantidad?: true
    precioUnitario?: true
    _all?: true
  }

  export type CompraDetalleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompraDetalle to aggregate.
     */
    where?: CompraDetalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompraDetalles to fetch.
     */
    orderBy?: CompraDetalleOrderByWithRelationInput | CompraDetalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompraDetalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompraDetalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompraDetalles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompraDetalles
    **/
    _count?: true | CompraDetalleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompraDetalleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompraDetalleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompraDetalleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompraDetalleMaxAggregateInputType
  }

  export type GetCompraDetalleAggregateType<T extends CompraDetalleAggregateArgs> = {
        [P in keyof T & keyof AggregateCompraDetalle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompraDetalle[P]>
      : GetScalarType<T[P], AggregateCompraDetalle[P]>
  }




  export type CompraDetalleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompraDetalleWhereInput
    orderBy?: CompraDetalleOrderByWithAggregationInput | CompraDetalleOrderByWithAggregationInput[]
    by: CompraDetalleScalarFieldEnum[] | CompraDetalleScalarFieldEnum
    having?: CompraDetalleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompraDetalleCountAggregateInputType | true
    _avg?: CompraDetalleAvgAggregateInputType
    _sum?: CompraDetalleSumAggregateInputType
    _min?: CompraDetalleMinAggregateInputType
    _max?: CompraDetalleMaxAggregateInputType
  }

  export type CompraDetalleGroupByOutputType = {
    idCompraDetalle: number
    idCompra: number
    idProducto: number
    cantidad: number
    precioUnitario: Decimal
    _count: CompraDetalleCountAggregateOutputType | null
    _avg: CompraDetalleAvgAggregateOutputType | null
    _sum: CompraDetalleSumAggregateOutputType | null
    _min: CompraDetalleMinAggregateOutputType | null
    _max: CompraDetalleMaxAggregateOutputType | null
  }

  type GetCompraDetalleGroupByPayload<T extends CompraDetalleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompraDetalleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompraDetalleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompraDetalleGroupByOutputType[P]>
            : GetScalarType<T[P], CompraDetalleGroupByOutputType[P]>
        }
      >
    >


  export type CompraDetalleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCompraDetalle?: boolean
    idCompra?: boolean
    idProducto?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
    Compra?: boolean | CompraDefaultArgs<ExtArgs>
    Producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compraDetalle"]>



  export type CompraDetalleSelectScalar = {
    idCompraDetalle?: boolean
    idCompra?: boolean
    idProducto?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
  }

  export type CompraDetalleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idCompraDetalle" | "idCompra" | "idProducto" | "cantidad" | "precioUnitario", ExtArgs["result"]["compraDetalle"]>
  export type CompraDetalleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Compra?: boolean | CompraDefaultArgs<ExtArgs>
    Producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $CompraDetallePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompraDetalle"
    objects: {
      Compra: Prisma.$CompraPayload<ExtArgs>
      Producto: Prisma.$ProductoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idCompraDetalle: number
      idCompra: number
      idProducto: number
      cantidad: number
      precioUnitario: Prisma.Decimal
    }, ExtArgs["result"]["compraDetalle"]>
    composites: {}
  }

  type CompraDetalleGetPayload<S extends boolean | null | undefined | CompraDetalleDefaultArgs> = $Result.GetResult<Prisma.$CompraDetallePayload, S>

  type CompraDetalleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompraDetalleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompraDetalleCountAggregateInputType | true
    }

  export interface CompraDetalleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompraDetalle'], meta: { name: 'CompraDetalle' } }
    /**
     * Find zero or one CompraDetalle that matches the filter.
     * @param {CompraDetalleFindUniqueArgs} args - Arguments to find a CompraDetalle
     * @example
     * // Get one CompraDetalle
     * const compraDetalle = await prisma.compraDetalle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompraDetalleFindUniqueArgs>(args: SelectSubset<T, CompraDetalleFindUniqueArgs<ExtArgs>>): Prisma__CompraDetalleClient<$Result.GetResult<Prisma.$CompraDetallePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompraDetalle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompraDetalleFindUniqueOrThrowArgs} args - Arguments to find a CompraDetalle
     * @example
     * // Get one CompraDetalle
     * const compraDetalle = await prisma.compraDetalle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompraDetalleFindUniqueOrThrowArgs>(args: SelectSubset<T, CompraDetalleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompraDetalleClient<$Result.GetResult<Prisma.$CompraDetallePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompraDetalle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraDetalleFindFirstArgs} args - Arguments to find a CompraDetalle
     * @example
     * // Get one CompraDetalle
     * const compraDetalle = await prisma.compraDetalle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompraDetalleFindFirstArgs>(args?: SelectSubset<T, CompraDetalleFindFirstArgs<ExtArgs>>): Prisma__CompraDetalleClient<$Result.GetResult<Prisma.$CompraDetallePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompraDetalle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraDetalleFindFirstOrThrowArgs} args - Arguments to find a CompraDetalle
     * @example
     * // Get one CompraDetalle
     * const compraDetalle = await prisma.compraDetalle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompraDetalleFindFirstOrThrowArgs>(args?: SelectSubset<T, CompraDetalleFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompraDetalleClient<$Result.GetResult<Prisma.$CompraDetallePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompraDetalles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraDetalleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompraDetalles
     * const compraDetalles = await prisma.compraDetalle.findMany()
     * 
     * // Get first 10 CompraDetalles
     * const compraDetalles = await prisma.compraDetalle.findMany({ take: 10 })
     * 
     * // Only select the `idCompraDetalle`
     * const compraDetalleWithIdCompraDetalleOnly = await prisma.compraDetalle.findMany({ select: { idCompraDetalle: true } })
     * 
     */
    findMany<T extends CompraDetalleFindManyArgs>(args?: SelectSubset<T, CompraDetalleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraDetallePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompraDetalle.
     * @param {CompraDetalleCreateArgs} args - Arguments to create a CompraDetalle.
     * @example
     * // Create one CompraDetalle
     * const CompraDetalle = await prisma.compraDetalle.create({
     *   data: {
     *     // ... data to create a CompraDetalle
     *   }
     * })
     * 
     */
    create<T extends CompraDetalleCreateArgs>(args: SelectSubset<T, CompraDetalleCreateArgs<ExtArgs>>): Prisma__CompraDetalleClient<$Result.GetResult<Prisma.$CompraDetallePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompraDetalles.
     * @param {CompraDetalleCreateManyArgs} args - Arguments to create many CompraDetalles.
     * @example
     * // Create many CompraDetalles
     * const compraDetalle = await prisma.compraDetalle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompraDetalleCreateManyArgs>(args?: SelectSubset<T, CompraDetalleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CompraDetalle.
     * @param {CompraDetalleDeleteArgs} args - Arguments to delete one CompraDetalle.
     * @example
     * // Delete one CompraDetalle
     * const CompraDetalle = await prisma.compraDetalle.delete({
     *   where: {
     *     // ... filter to delete one CompraDetalle
     *   }
     * })
     * 
     */
    delete<T extends CompraDetalleDeleteArgs>(args: SelectSubset<T, CompraDetalleDeleteArgs<ExtArgs>>): Prisma__CompraDetalleClient<$Result.GetResult<Prisma.$CompraDetallePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompraDetalle.
     * @param {CompraDetalleUpdateArgs} args - Arguments to update one CompraDetalle.
     * @example
     * // Update one CompraDetalle
     * const compraDetalle = await prisma.compraDetalle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompraDetalleUpdateArgs>(args: SelectSubset<T, CompraDetalleUpdateArgs<ExtArgs>>): Prisma__CompraDetalleClient<$Result.GetResult<Prisma.$CompraDetallePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompraDetalles.
     * @param {CompraDetalleDeleteManyArgs} args - Arguments to filter CompraDetalles to delete.
     * @example
     * // Delete a few CompraDetalles
     * const { count } = await prisma.compraDetalle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompraDetalleDeleteManyArgs>(args?: SelectSubset<T, CompraDetalleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompraDetalles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraDetalleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompraDetalles
     * const compraDetalle = await prisma.compraDetalle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompraDetalleUpdateManyArgs>(args: SelectSubset<T, CompraDetalleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CompraDetalle.
     * @param {CompraDetalleUpsertArgs} args - Arguments to update or create a CompraDetalle.
     * @example
     * // Update or create a CompraDetalle
     * const compraDetalle = await prisma.compraDetalle.upsert({
     *   create: {
     *     // ... data to create a CompraDetalle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompraDetalle we want to update
     *   }
     * })
     */
    upsert<T extends CompraDetalleUpsertArgs>(args: SelectSubset<T, CompraDetalleUpsertArgs<ExtArgs>>): Prisma__CompraDetalleClient<$Result.GetResult<Prisma.$CompraDetallePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompraDetalles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraDetalleCountArgs} args - Arguments to filter CompraDetalles to count.
     * @example
     * // Count the number of CompraDetalles
     * const count = await prisma.compraDetalle.count({
     *   where: {
     *     // ... the filter for the CompraDetalles we want to count
     *   }
     * })
    **/
    count<T extends CompraDetalleCountArgs>(
      args?: Subset<T, CompraDetalleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompraDetalleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompraDetalle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraDetalleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompraDetalleAggregateArgs>(args: Subset<T, CompraDetalleAggregateArgs>): Prisma.PrismaPromise<GetCompraDetalleAggregateType<T>>

    /**
     * Group by CompraDetalle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraDetalleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompraDetalleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompraDetalleGroupByArgs['orderBy'] }
        : { orderBy?: CompraDetalleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompraDetalleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompraDetalleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompraDetalle model
   */
  readonly fields: CompraDetalleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompraDetalle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompraDetalleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Compra<T extends CompraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompraDefaultArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompraDetalle model
   */
  interface CompraDetalleFieldRefs {
    readonly idCompraDetalle: FieldRef<"CompraDetalle", 'Int'>
    readonly idCompra: FieldRef<"CompraDetalle", 'Int'>
    readonly idProducto: FieldRef<"CompraDetalle", 'Int'>
    readonly cantidad: FieldRef<"CompraDetalle", 'Int'>
    readonly precioUnitario: FieldRef<"CompraDetalle", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * CompraDetalle findUnique
   */
  export type CompraDetalleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraDetalle
     */
    select?: CompraDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompraDetalle
     */
    omit?: CompraDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraDetalleInclude<ExtArgs> | null
    /**
     * Filter, which CompraDetalle to fetch.
     */
    where: CompraDetalleWhereUniqueInput
  }

  /**
   * CompraDetalle findUniqueOrThrow
   */
  export type CompraDetalleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraDetalle
     */
    select?: CompraDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompraDetalle
     */
    omit?: CompraDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraDetalleInclude<ExtArgs> | null
    /**
     * Filter, which CompraDetalle to fetch.
     */
    where: CompraDetalleWhereUniqueInput
  }

  /**
   * CompraDetalle findFirst
   */
  export type CompraDetalleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraDetalle
     */
    select?: CompraDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompraDetalle
     */
    omit?: CompraDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraDetalleInclude<ExtArgs> | null
    /**
     * Filter, which CompraDetalle to fetch.
     */
    where?: CompraDetalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompraDetalles to fetch.
     */
    orderBy?: CompraDetalleOrderByWithRelationInput | CompraDetalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompraDetalles.
     */
    cursor?: CompraDetalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompraDetalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompraDetalles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompraDetalles.
     */
    distinct?: CompraDetalleScalarFieldEnum | CompraDetalleScalarFieldEnum[]
  }

  /**
   * CompraDetalle findFirstOrThrow
   */
  export type CompraDetalleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraDetalle
     */
    select?: CompraDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompraDetalle
     */
    omit?: CompraDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraDetalleInclude<ExtArgs> | null
    /**
     * Filter, which CompraDetalle to fetch.
     */
    where?: CompraDetalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompraDetalles to fetch.
     */
    orderBy?: CompraDetalleOrderByWithRelationInput | CompraDetalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompraDetalles.
     */
    cursor?: CompraDetalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompraDetalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompraDetalles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompraDetalles.
     */
    distinct?: CompraDetalleScalarFieldEnum | CompraDetalleScalarFieldEnum[]
  }

  /**
   * CompraDetalle findMany
   */
  export type CompraDetalleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraDetalle
     */
    select?: CompraDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompraDetalle
     */
    omit?: CompraDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraDetalleInclude<ExtArgs> | null
    /**
     * Filter, which CompraDetalles to fetch.
     */
    where?: CompraDetalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompraDetalles to fetch.
     */
    orderBy?: CompraDetalleOrderByWithRelationInput | CompraDetalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompraDetalles.
     */
    cursor?: CompraDetalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompraDetalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompraDetalles.
     */
    skip?: number
    distinct?: CompraDetalleScalarFieldEnum | CompraDetalleScalarFieldEnum[]
  }

  /**
   * CompraDetalle create
   */
  export type CompraDetalleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraDetalle
     */
    select?: CompraDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompraDetalle
     */
    omit?: CompraDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraDetalleInclude<ExtArgs> | null
    /**
     * The data needed to create a CompraDetalle.
     */
    data: XOR<CompraDetalleCreateInput, CompraDetalleUncheckedCreateInput>
  }

  /**
   * CompraDetalle createMany
   */
  export type CompraDetalleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompraDetalles.
     */
    data: CompraDetalleCreateManyInput | CompraDetalleCreateManyInput[]
  }

  /**
   * CompraDetalle update
   */
  export type CompraDetalleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraDetalle
     */
    select?: CompraDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompraDetalle
     */
    omit?: CompraDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraDetalleInclude<ExtArgs> | null
    /**
     * The data needed to update a CompraDetalle.
     */
    data: XOR<CompraDetalleUpdateInput, CompraDetalleUncheckedUpdateInput>
    /**
     * Choose, which CompraDetalle to update.
     */
    where: CompraDetalleWhereUniqueInput
  }

  /**
   * CompraDetalle updateMany
   */
  export type CompraDetalleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompraDetalles.
     */
    data: XOR<CompraDetalleUpdateManyMutationInput, CompraDetalleUncheckedUpdateManyInput>
    /**
     * Filter which CompraDetalles to update
     */
    where?: CompraDetalleWhereInput
    /**
     * Limit how many CompraDetalles to update.
     */
    limit?: number
  }

  /**
   * CompraDetalle upsert
   */
  export type CompraDetalleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraDetalle
     */
    select?: CompraDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompraDetalle
     */
    omit?: CompraDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraDetalleInclude<ExtArgs> | null
    /**
     * The filter to search for the CompraDetalle to update in case it exists.
     */
    where: CompraDetalleWhereUniqueInput
    /**
     * In case the CompraDetalle found by the `where` argument doesn't exist, create a new CompraDetalle with this data.
     */
    create: XOR<CompraDetalleCreateInput, CompraDetalleUncheckedCreateInput>
    /**
     * In case the CompraDetalle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompraDetalleUpdateInput, CompraDetalleUncheckedUpdateInput>
  }

  /**
   * CompraDetalle delete
   */
  export type CompraDetalleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraDetalle
     */
    select?: CompraDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompraDetalle
     */
    omit?: CompraDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraDetalleInclude<ExtArgs> | null
    /**
     * Filter which CompraDetalle to delete.
     */
    where: CompraDetalleWhereUniqueInput
  }

  /**
   * CompraDetalle deleteMany
   */
  export type CompraDetalleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompraDetalles to delete
     */
    where?: CompraDetalleWhereInput
    /**
     * Limit how many CompraDetalles to delete.
     */
    limit?: number
  }

  /**
   * CompraDetalle without action
   */
  export type CompraDetalleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraDetalle
     */
    select?: CompraDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompraDetalle
     */
    omit?: CompraDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraDetalleInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    idUsuario: 'idUsuario',
    nombre: 'nombre',
    email: 'email',
    password: 'password'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ProductoScalarFieldEnum: {
    idProducto: 'idProducto',
    nombre: 'nombre',
    descripcion: 'descripcion',
    precio: 'precio'
  };

  export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum]


  export const CarritoScalarFieldEnum: {
    idCarrito: 'idCarrito',
    idUsuario: 'idUsuario'
  };

  export type CarritoScalarFieldEnum = (typeof CarritoScalarFieldEnum)[keyof typeof CarritoScalarFieldEnum]


  export const CarritoProductoScalarFieldEnum: {
    idCarritoProd: 'idCarritoProd',
    idCarrito: 'idCarrito',
    idProducto: 'idProducto',
    cantidad: 'cantidad'
  };

  export type CarritoProductoScalarFieldEnum = (typeof CarritoProductoScalarFieldEnum)[keyof typeof CarritoProductoScalarFieldEnum]


  export const CompraScalarFieldEnum: {
    idCompra: 'idCompra',
    idUsuario: 'idUsuario',
    fechaCompra: 'fechaCompra',
    total: 'total'
  };

  export type CompraScalarFieldEnum = (typeof CompraScalarFieldEnum)[keyof typeof CompraScalarFieldEnum]


  export const CompraDetalleScalarFieldEnum: {
    idCompraDetalle: 'idCompraDetalle',
    idCompra: 'idCompra',
    idProducto: 'idProducto',
    cantidad: 'cantidad',
    precioUnitario: 'precioUnitario'
  };

  export type CompraDetalleScalarFieldEnum = (typeof CompraDetalleScalarFieldEnum)[keyof typeof CompraDetalleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    idUsuario?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    carrito?: XOR<CarritoNullableScalarRelationFilter, CarritoWhereInput> | null
    compras?: CompraListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    idUsuario?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    carrito?: CarritoOrderByWithRelationInput
    compras?: CompraOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    idUsuario?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    carrito?: XOR<CarritoNullableScalarRelationFilter, CarritoWhereInput> | null
    compras?: CompraListRelationFilter
  }, "idUsuario" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    idUsuario?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    idUsuario?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type ProductoWhereInput = {
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    idProducto?: IntFilter<"Producto"> | number
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringNullableFilter<"Producto"> | string | null
    precio?: DecimalFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    carritoProd?: CarritoProductoListRelationFilter
    compras?: CompraDetalleListRelationFilter
  }

  export type ProductoOrderByWithRelationInput = {
    idProducto?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio?: SortOrder
    carritoProd?: CarritoProductoOrderByRelationAggregateInput
    compras?: CompraDetalleOrderByRelationAggregateInput
  }

  export type ProductoWhereUniqueInput = Prisma.AtLeast<{
    idProducto?: number
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringNullableFilter<"Producto"> | string | null
    precio?: DecimalFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    carritoProd?: CarritoProductoListRelationFilter
    compras?: CompraDetalleListRelationFilter
  }, "idProducto">

  export type ProductoOrderByWithAggregationInput = {
    idProducto?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio?: SortOrder
    _count?: ProductoCountOrderByAggregateInput
    _avg?: ProductoAvgOrderByAggregateInput
    _max?: ProductoMaxOrderByAggregateInput
    _min?: ProductoMinOrderByAggregateInput
    _sum?: ProductoSumOrderByAggregateInput
  }

  export type ProductoScalarWhereWithAggregatesInput = {
    AND?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    OR?: ProductoScalarWhereWithAggregatesInput[]
    NOT?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    idProducto?: IntWithAggregatesFilter<"Producto"> | number
    nombre?: StringWithAggregatesFilter<"Producto"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Producto"> | string | null
    precio?: DecimalWithAggregatesFilter<"Producto"> | Decimal | DecimalJsLike | number | string
  }

  export type CarritoWhereInput = {
    AND?: CarritoWhereInput | CarritoWhereInput[]
    OR?: CarritoWhereInput[]
    NOT?: CarritoWhereInput | CarritoWhereInput[]
    idCarrito?: IntFilter<"Carrito"> | number
    idUsuario?: IntFilter<"Carrito"> | number
    Usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    carritoProductos?: CarritoProductoListRelationFilter
  }

  export type CarritoOrderByWithRelationInput = {
    idCarrito?: SortOrder
    idUsuario?: SortOrder
    Usuario?: UsuarioOrderByWithRelationInput
    carritoProductos?: CarritoProductoOrderByRelationAggregateInput
  }

  export type CarritoWhereUniqueInput = Prisma.AtLeast<{
    idCarrito?: number
    idUsuario?: number
    AND?: CarritoWhereInput | CarritoWhereInput[]
    OR?: CarritoWhereInput[]
    NOT?: CarritoWhereInput | CarritoWhereInput[]
    Usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    carritoProductos?: CarritoProductoListRelationFilter
  }, "idCarrito" | "idUsuario">

  export type CarritoOrderByWithAggregationInput = {
    idCarrito?: SortOrder
    idUsuario?: SortOrder
    _count?: CarritoCountOrderByAggregateInput
    _avg?: CarritoAvgOrderByAggregateInput
    _max?: CarritoMaxOrderByAggregateInput
    _min?: CarritoMinOrderByAggregateInput
    _sum?: CarritoSumOrderByAggregateInput
  }

  export type CarritoScalarWhereWithAggregatesInput = {
    AND?: CarritoScalarWhereWithAggregatesInput | CarritoScalarWhereWithAggregatesInput[]
    OR?: CarritoScalarWhereWithAggregatesInput[]
    NOT?: CarritoScalarWhereWithAggregatesInput | CarritoScalarWhereWithAggregatesInput[]
    idCarrito?: IntWithAggregatesFilter<"Carrito"> | number
    idUsuario?: IntWithAggregatesFilter<"Carrito"> | number
  }

  export type CarritoProductoWhereInput = {
    AND?: CarritoProductoWhereInput | CarritoProductoWhereInput[]
    OR?: CarritoProductoWhereInput[]
    NOT?: CarritoProductoWhereInput | CarritoProductoWhereInput[]
    idCarritoProd?: IntFilter<"CarritoProducto"> | number
    idCarrito?: IntFilter<"CarritoProducto"> | number
    idProducto?: IntFilter<"CarritoProducto"> | number
    cantidad?: IntFilter<"CarritoProducto"> | number
    Carrito?: XOR<CarritoScalarRelationFilter, CarritoWhereInput>
    Producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }

  export type CarritoProductoOrderByWithRelationInput = {
    idCarritoProd?: SortOrder
    idCarrito?: SortOrder
    idProducto?: SortOrder
    cantidad?: SortOrder
    Carrito?: CarritoOrderByWithRelationInput
    Producto?: ProductoOrderByWithRelationInput
  }

  export type CarritoProductoWhereUniqueInput = Prisma.AtLeast<{
    idCarritoProd?: number
    idCarrito_idProducto?: CarritoProductoIdCarritoIdProductoCompoundUniqueInput
    AND?: CarritoProductoWhereInput | CarritoProductoWhereInput[]
    OR?: CarritoProductoWhereInput[]
    NOT?: CarritoProductoWhereInput | CarritoProductoWhereInput[]
    idCarrito?: IntFilter<"CarritoProducto"> | number
    idProducto?: IntFilter<"CarritoProducto"> | number
    cantidad?: IntFilter<"CarritoProducto"> | number
    Carrito?: XOR<CarritoScalarRelationFilter, CarritoWhereInput>
    Producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }, "idCarritoProd" | "idCarrito_idProducto">

  export type CarritoProductoOrderByWithAggregationInput = {
    idCarritoProd?: SortOrder
    idCarrito?: SortOrder
    idProducto?: SortOrder
    cantidad?: SortOrder
    _count?: CarritoProductoCountOrderByAggregateInput
    _avg?: CarritoProductoAvgOrderByAggregateInput
    _max?: CarritoProductoMaxOrderByAggregateInput
    _min?: CarritoProductoMinOrderByAggregateInput
    _sum?: CarritoProductoSumOrderByAggregateInput
  }

  export type CarritoProductoScalarWhereWithAggregatesInput = {
    AND?: CarritoProductoScalarWhereWithAggregatesInput | CarritoProductoScalarWhereWithAggregatesInput[]
    OR?: CarritoProductoScalarWhereWithAggregatesInput[]
    NOT?: CarritoProductoScalarWhereWithAggregatesInput | CarritoProductoScalarWhereWithAggregatesInput[]
    idCarritoProd?: IntWithAggregatesFilter<"CarritoProducto"> | number
    idCarrito?: IntWithAggregatesFilter<"CarritoProducto"> | number
    idProducto?: IntWithAggregatesFilter<"CarritoProducto"> | number
    cantidad?: IntWithAggregatesFilter<"CarritoProducto"> | number
  }

  export type CompraWhereInput = {
    AND?: CompraWhereInput | CompraWhereInput[]
    OR?: CompraWhereInput[]
    NOT?: CompraWhereInput | CompraWhereInput[]
    idCompra?: IntFilter<"Compra"> | number
    idUsuario?: IntFilter<"Compra"> | number
    fechaCompra?: DateTimeFilter<"Compra"> | Date | string
    total?: DecimalFilter<"Compra"> | Decimal | DecimalJsLike | number | string
    Usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    detalles?: CompraDetalleListRelationFilter
  }

  export type CompraOrderByWithRelationInput = {
    idCompra?: SortOrder
    idUsuario?: SortOrder
    fechaCompra?: SortOrder
    total?: SortOrder
    Usuario?: UsuarioOrderByWithRelationInput
    detalles?: CompraDetalleOrderByRelationAggregateInput
  }

  export type CompraWhereUniqueInput = Prisma.AtLeast<{
    idCompra?: number
    AND?: CompraWhereInput | CompraWhereInput[]
    OR?: CompraWhereInput[]
    NOT?: CompraWhereInput | CompraWhereInput[]
    idUsuario?: IntFilter<"Compra"> | number
    fechaCompra?: DateTimeFilter<"Compra"> | Date | string
    total?: DecimalFilter<"Compra"> | Decimal | DecimalJsLike | number | string
    Usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    detalles?: CompraDetalleListRelationFilter
  }, "idCompra">

  export type CompraOrderByWithAggregationInput = {
    idCompra?: SortOrder
    idUsuario?: SortOrder
    fechaCompra?: SortOrder
    total?: SortOrder
    _count?: CompraCountOrderByAggregateInput
    _avg?: CompraAvgOrderByAggregateInput
    _max?: CompraMaxOrderByAggregateInput
    _min?: CompraMinOrderByAggregateInput
    _sum?: CompraSumOrderByAggregateInput
  }

  export type CompraScalarWhereWithAggregatesInput = {
    AND?: CompraScalarWhereWithAggregatesInput | CompraScalarWhereWithAggregatesInput[]
    OR?: CompraScalarWhereWithAggregatesInput[]
    NOT?: CompraScalarWhereWithAggregatesInput | CompraScalarWhereWithAggregatesInput[]
    idCompra?: IntWithAggregatesFilter<"Compra"> | number
    idUsuario?: IntWithAggregatesFilter<"Compra"> | number
    fechaCompra?: DateTimeWithAggregatesFilter<"Compra"> | Date | string
    total?: DecimalWithAggregatesFilter<"Compra"> | Decimal | DecimalJsLike | number | string
  }

  export type CompraDetalleWhereInput = {
    AND?: CompraDetalleWhereInput | CompraDetalleWhereInput[]
    OR?: CompraDetalleWhereInput[]
    NOT?: CompraDetalleWhereInput | CompraDetalleWhereInput[]
    idCompraDetalle?: IntFilter<"CompraDetalle"> | number
    idCompra?: IntFilter<"CompraDetalle"> | number
    idProducto?: IntFilter<"CompraDetalle"> | number
    cantidad?: IntFilter<"CompraDetalle"> | number
    precioUnitario?: DecimalFilter<"CompraDetalle"> | Decimal | DecimalJsLike | number | string
    Compra?: XOR<CompraScalarRelationFilter, CompraWhereInput>
    Producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }

  export type CompraDetalleOrderByWithRelationInput = {
    idCompraDetalle?: SortOrder
    idCompra?: SortOrder
    idProducto?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    Compra?: CompraOrderByWithRelationInput
    Producto?: ProductoOrderByWithRelationInput
  }

  export type CompraDetalleWhereUniqueInput = Prisma.AtLeast<{
    idCompraDetalle?: number
    idCompra_idProducto?: CompraDetalleIdCompraIdProductoCompoundUniqueInput
    AND?: CompraDetalleWhereInput | CompraDetalleWhereInput[]
    OR?: CompraDetalleWhereInput[]
    NOT?: CompraDetalleWhereInput | CompraDetalleWhereInput[]
    idCompra?: IntFilter<"CompraDetalle"> | number
    idProducto?: IntFilter<"CompraDetalle"> | number
    cantidad?: IntFilter<"CompraDetalle"> | number
    precioUnitario?: DecimalFilter<"CompraDetalle"> | Decimal | DecimalJsLike | number | string
    Compra?: XOR<CompraScalarRelationFilter, CompraWhereInput>
    Producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }, "idCompraDetalle" | "idCompra_idProducto">

  export type CompraDetalleOrderByWithAggregationInput = {
    idCompraDetalle?: SortOrder
    idCompra?: SortOrder
    idProducto?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    _count?: CompraDetalleCountOrderByAggregateInput
    _avg?: CompraDetalleAvgOrderByAggregateInput
    _max?: CompraDetalleMaxOrderByAggregateInput
    _min?: CompraDetalleMinOrderByAggregateInput
    _sum?: CompraDetalleSumOrderByAggregateInput
  }

  export type CompraDetalleScalarWhereWithAggregatesInput = {
    AND?: CompraDetalleScalarWhereWithAggregatesInput | CompraDetalleScalarWhereWithAggregatesInput[]
    OR?: CompraDetalleScalarWhereWithAggregatesInput[]
    NOT?: CompraDetalleScalarWhereWithAggregatesInput | CompraDetalleScalarWhereWithAggregatesInput[]
    idCompraDetalle?: IntWithAggregatesFilter<"CompraDetalle"> | number
    idCompra?: IntWithAggregatesFilter<"CompraDetalle"> | number
    idProducto?: IntWithAggregatesFilter<"CompraDetalle"> | number
    cantidad?: IntWithAggregatesFilter<"CompraDetalle"> | number
    precioUnitario?: DecimalWithAggregatesFilter<"CompraDetalle"> | Decimal | DecimalJsLike | number | string
  }

  export type UsuarioCreateInput = {
    nombre: string
    email: string
    password: string
    carrito?: CarritoCreateNestedOneWithoutUsuarioInput
    compras?: CompraCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    idUsuario?: number
    nombre: string
    email: string
    password: string
    carrito?: CarritoUncheckedCreateNestedOneWithoutUsuarioInput
    compras?: CompraUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    carrito?: CarritoUpdateOneWithoutUsuarioNestedInput
    compras?: CompraUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    idUsuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    carrito?: CarritoUncheckedUpdateOneWithoutUsuarioNestedInput
    compras?: CompraUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    nombre: string
    email: string
    password: string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    idUsuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ProductoCreateInput = {
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    carritoProd?: CarritoProductoCreateNestedManyWithoutProductoInput
    compras?: CompraDetalleCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateInput = {
    idProducto?: number
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    carritoProd?: CarritoProductoUncheckedCreateNestedManyWithoutProductoInput
    compras?: CompraDetalleUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    carritoProd?: CarritoProductoUpdateManyWithoutProductoNestedInput
    compras?: CompraDetalleUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateInput = {
    idProducto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    carritoProd?: CarritoProductoUncheckedUpdateManyWithoutProductoNestedInput
    compras?: CompraDetalleUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoCreateManyInput = {
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
  }

  export type ProductoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ProductoUncheckedUpdateManyInput = {
    idProducto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CarritoCreateInput = {
    Usuario: UsuarioCreateNestedOneWithoutCarritoInput
    carritoProductos?: CarritoProductoCreateNestedManyWithoutCarritoInput
  }

  export type CarritoUncheckedCreateInput = {
    idCarrito?: number
    idUsuario: number
    carritoProductos?: CarritoProductoUncheckedCreateNestedManyWithoutCarritoInput
  }

  export type CarritoUpdateInput = {
    Usuario?: UsuarioUpdateOneRequiredWithoutCarritoNestedInput
    carritoProductos?: CarritoProductoUpdateManyWithoutCarritoNestedInput
  }

  export type CarritoUncheckedUpdateInput = {
    idCarrito?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    carritoProductos?: CarritoProductoUncheckedUpdateManyWithoutCarritoNestedInput
  }

  export type CarritoCreateManyInput = {
    idUsuario: number
  }

  export type CarritoUpdateManyMutationInput = {

  }

  export type CarritoUncheckedUpdateManyInput = {
    idCarrito?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
  }

  export type CarritoProductoCreateInput = {
    cantidad: number
    Carrito: CarritoCreateNestedOneWithoutCarritoProductosInput
    Producto: ProductoCreateNestedOneWithoutCarritoProdInput
  }

  export type CarritoProductoUncheckedCreateInput = {
    idCarritoProd?: number
    idCarrito: number
    idProducto: number
    cantidad: number
  }

  export type CarritoProductoUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    Carrito?: CarritoUpdateOneRequiredWithoutCarritoProductosNestedInput
    Producto?: ProductoUpdateOneRequiredWithoutCarritoProdNestedInput
  }

  export type CarritoProductoUncheckedUpdateInput = {
    idCarritoProd?: IntFieldUpdateOperationsInput | number
    idCarrito?: IntFieldUpdateOperationsInput | number
    idProducto?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type CarritoProductoCreateManyInput = {
    idCarrito: number
    idProducto: number
    cantidad: number
  }

  export type CarritoProductoUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type CarritoProductoUncheckedUpdateManyInput = {
    idCarritoProd?: IntFieldUpdateOperationsInput | number
    idCarrito?: IntFieldUpdateOperationsInput | number
    idProducto?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type CompraCreateInput = {
    fechaCompra?: Date | string
    total: Decimal | DecimalJsLike | number | string
    Usuario: UsuarioCreateNestedOneWithoutComprasInput
    detalles?: CompraDetalleCreateNestedManyWithoutCompraInput
  }

  export type CompraUncheckedCreateInput = {
    idCompra?: number
    idUsuario: number
    fechaCompra?: Date | string
    total: Decimal | DecimalJsLike | number | string
    detalles?: CompraDetalleUncheckedCreateNestedManyWithoutCompraInput
  }

  export type CompraUpdateInput = {
    fechaCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Usuario?: UsuarioUpdateOneRequiredWithoutComprasNestedInput
    detalles?: CompraDetalleUpdateManyWithoutCompraNestedInput
  }

  export type CompraUncheckedUpdateInput = {
    idCompra?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    fechaCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detalles?: CompraDetalleUncheckedUpdateManyWithoutCompraNestedInput
  }

  export type CompraCreateManyInput = {
    idUsuario: number
    fechaCompra?: Date | string
    total: Decimal | DecimalJsLike | number | string
  }

  export type CompraUpdateManyMutationInput = {
    fechaCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CompraUncheckedUpdateManyInput = {
    idCompra?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    fechaCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CompraDetalleCreateInput = {
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    Compra: CompraCreateNestedOneWithoutDetallesInput
    Producto: ProductoCreateNestedOneWithoutComprasInput
  }

  export type CompraDetalleUncheckedCreateInput = {
    idCompraDetalle?: number
    idCompra: number
    idProducto: number
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
  }

  export type CompraDetalleUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Compra?: CompraUpdateOneRequiredWithoutDetallesNestedInput
    Producto?: ProductoUpdateOneRequiredWithoutComprasNestedInput
  }

  export type CompraDetalleUncheckedUpdateInput = {
    idCompraDetalle?: IntFieldUpdateOperationsInput | number
    idCompra?: IntFieldUpdateOperationsInput | number
    idProducto?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CompraDetalleCreateManyInput = {
    idCompra: number
    idProducto: number
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
  }

  export type CompraDetalleUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CompraDetalleUncheckedUpdateManyInput = {
    idCompraDetalle?: IntFieldUpdateOperationsInput | number
    idCompra?: IntFieldUpdateOperationsInput | number
    idProducto?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CarritoNullableScalarRelationFilter = {
    is?: CarritoWhereInput | null
    isNot?: CarritoWhereInput | null
  }

  export type CompraListRelationFilter = {
    every?: CompraWhereInput
    some?: CompraWhereInput
    none?: CompraWhereInput
  }

  export type CompraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    idUsuario?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    idUsuario?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    idUsuario?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    idUsuario?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    idUsuario?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CarritoProductoListRelationFilter = {
    every?: CarritoProductoWhereInput
    some?: CarritoProductoWhereInput
    none?: CarritoProductoWhereInput
  }

  export type CompraDetalleListRelationFilter = {
    every?: CompraDetalleWhereInput
    some?: CompraDetalleWhereInput
    none?: CompraDetalleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CarritoProductoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompraDetalleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductoCountOrderByAggregateInput = {
    idProducto?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
  }

  export type ProductoAvgOrderByAggregateInput = {
    idProducto?: SortOrder
    precio?: SortOrder
  }

  export type ProductoMaxOrderByAggregateInput = {
    idProducto?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
  }

  export type ProductoMinOrderByAggregateInput = {
    idProducto?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
  }

  export type ProductoSumOrderByAggregateInput = {
    idProducto?: SortOrder
    precio?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type CarritoCountOrderByAggregateInput = {
    idCarrito?: SortOrder
    idUsuario?: SortOrder
  }

  export type CarritoAvgOrderByAggregateInput = {
    idCarrito?: SortOrder
    idUsuario?: SortOrder
  }

  export type CarritoMaxOrderByAggregateInput = {
    idCarrito?: SortOrder
    idUsuario?: SortOrder
  }

  export type CarritoMinOrderByAggregateInput = {
    idCarrito?: SortOrder
    idUsuario?: SortOrder
  }

  export type CarritoSumOrderByAggregateInput = {
    idCarrito?: SortOrder
    idUsuario?: SortOrder
  }

  export type CarritoScalarRelationFilter = {
    is?: CarritoWhereInput
    isNot?: CarritoWhereInput
  }

  export type ProductoScalarRelationFilter = {
    is?: ProductoWhereInput
    isNot?: ProductoWhereInput
  }

  export type CarritoProductoIdCarritoIdProductoCompoundUniqueInput = {
    idCarrito: number
    idProducto: number
  }

  export type CarritoProductoCountOrderByAggregateInput = {
    idCarritoProd?: SortOrder
    idCarrito?: SortOrder
    idProducto?: SortOrder
    cantidad?: SortOrder
  }

  export type CarritoProductoAvgOrderByAggregateInput = {
    idCarritoProd?: SortOrder
    idCarrito?: SortOrder
    idProducto?: SortOrder
    cantidad?: SortOrder
  }

  export type CarritoProductoMaxOrderByAggregateInput = {
    idCarritoProd?: SortOrder
    idCarrito?: SortOrder
    idProducto?: SortOrder
    cantidad?: SortOrder
  }

  export type CarritoProductoMinOrderByAggregateInput = {
    idCarritoProd?: SortOrder
    idCarrito?: SortOrder
    idProducto?: SortOrder
    cantidad?: SortOrder
  }

  export type CarritoProductoSumOrderByAggregateInput = {
    idCarritoProd?: SortOrder
    idCarrito?: SortOrder
    idProducto?: SortOrder
    cantidad?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CompraCountOrderByAggregateInput = {
    idCompra?: SortOrder
    idUsuario?: SortOrder
    fechaCompra?: SortOrder
    total?: SortOrder
  }

  export type CompraAvgOrderByAggregateInput = {
    idCompra?: SortOrder
    idUsuario?: SortOrder
    total?: SortOrder
  }

  export type CompraMaxOrderByAggregateInput = {
    idCompra?: SortOrder
    idUsuario?: SortOrder
    fechaCompra?: SortOrder
    total?: SortOrder
  }

  export type CompraMinOrderByAggregateInput = {
    idCompra?: SortOrder
    idUsuario?: SortOrder
    fechaCompra?: SortOrder
    total?: SortOrder
  }

  export type CompraSumOrderByAggregateInput = {
    idCompra?: SortOrder
    idUsuario?: SortOrder
    total?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CompraScalarRelationFilter = {
    is?: CompraWhereInput
    isNot?: CompraWhereInput
  }

  export type CompraDetalleIdCompraIdProductoCompoundUniqueInput = {
    idCompra: number
    idProducto: number
  }

  export type CompraDetalleCountOrderByAggregateInput = {
    idCompraDetalle?: SortOrder
    idCompra?: SortOrder
    idProducto?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
  }

  export type CompraDetalleAvgOrderByAggregateInput = {
    idCompraDetalle?: SortOrder
    idCompra?: SortOrder
    idProducto?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
  }

  export type CompraDetalleMaxOrderByAggregateInput = {
    idCompraDetalle?: SortOrder
    idCompra?: SortOrder
    idProducto?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
  }

  export type CompraDetalleMinOrderByAggregateInput = {
    idCompraDetalle?: SortOrder
    idCompra?: SortOrder
    idProducto?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
  }

  export type CompraDetalleSumOrderByAggregateInput = {
    idCompraDetalle?: SortOrder
    idCompra?: SortOrder
    idProducto?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
  }

  export type CarritoCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<CarritoCreateWithoutUsuarioInput, CarritoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: CarritoCreateOrConnectWithoutUsuarioInput
    connect?: CarritoWhereUniqueInput
  }

  export type CompraCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CompraCreateWithoutUsuarioInput, CompraUncheckedCreateWithoutUsuarioInput> | CompraCreateWithoutUsuarioInput[] | CompraUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutUsuarioInput | CompraCreateOrConnectWithoutUsuarioInput[]
    createMany?: CompraCreateManyUsuarioInputEnvelope
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
  }

  export type CarritoUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<CarritoCreateWithoutUsuarioInput, CarritoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: CarritoCreateOrConnectWithoutUsuarioInput
    connect?: CarritoWhereUniqueInput
  }

  export type CompraUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CompraCreateWithoutUsuarioInput, CompraUncheckedCreateWithoutUsuarioInput> | CompraCreateWithoutUsuarioInput[] | CompraUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutUsuarioInput | CompraCreateOrConnectWithoutUsuarioInput[]
    createMany?: CompraCreateManyUsuarioInputEnvelope
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CarritoUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<CarritoCreateWithoutUsuarioInput, CarritoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: CarritoCreateOrConnectWithoutUsuarioInput
    upsert?: CarritoUpsertWithoutUsuarioInput
    disconnect?: CarritoWhereInput | boolean
    delete?: CarritoWhereInput | boolean
    connect?: CarritoWhereUniqueInput
    update?: XOR<XOR<CarritoUpdateToOneWithWhereWithoutUsuarioInput, CarritoUpdateWithoutUsuarioInput>, CarritoUncheckedUpdateWithoutUsuarioInput>
  }

  export type CompraUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CompraCreateWithoutUsuarioInput, CompraUncheckedCreateWithoutUsuarioInput> | CompraCreateWithoutUsuarioInput[] | CompraUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutUsuarioInput | CompraCreateOrConnectWithoutUsuarioInput[]
    upsert?: CompraUpsertWithWhereUniqueWithoutUsuarioInput | CompraUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CompraCreateManyUsuarioInputEnvelope
    set?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    disconnect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    delete?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    update?: CompraUpdateWithWhereUniqueWithoutUsuarioInput | CompraUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CompraUpdateManyWithWhereWithoutUsuarioInput | CompraUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CompraScalarWhereInput | CompraScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CarritoUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<CarritoCreateWithoutUsuarioInput, CarritoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: CarritoCreateOrConnectWithoutUsuarioInput
    upsert?: CarritoUpsertWithoutUsuarioInput
    disconnect?: CarritoWhereInput | boolean
    delete?: CarritoWhereInput | boolean
    connect?: CarritoWhereUniqueInput
    update?: XOR<XOR<CarritoUpdateToOneWithWhereWithoutUsuarioInput, CarritoUpdateWithoutUsuarioInput>, CarritoUncheckedUpdateWithoutUsuarioInput>
  }

  export type CompraUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CompraCreateWithoutUsuarioInput, CompraUncheckedCreateWithoutUsuarioInput> | CompraCreateWithoutUsuarioInput[] | CompraUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutUsuarioInput | CompraCreateOrConnectWithoutUsuarioInput[]
    upsert?: CompraUpsertWithWhereUniqueWithoutUsuarioInput | CompraUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CompraCreateManyUsuarioInputEnvelope
    set?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    disconnect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    delete?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    update?: CompraUpdateWithWhereUniqueWithoutUsuarioInput | CompraUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CompraUpdateManyWithWhereWithoutUsuarioInput | CompraUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CompraScalarWhereInput | CompraScalarWhereInput[]
  }

  export type CarritoProductoCreateNestedManyWithoutProductoInput = {
    create?: XOR<CarritoProductoCreateWithoutProductoInput, CarritoProductoUncheckedCreateWithoutProductoInput> | CarritoProductoCreateWithoutProductoInput[] | CarritoProductoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: CarritoProductoCreateOrConnectWithoutProductoInput | CarritoProductoCreateOrConnectWithoutProductoInput[]
    createMany?: CarritoProductoCreateManyProductoInputEnvelope
    connect?: CarritoProductoWhereUniqueInput | CarritoProductoWhereUniqueInput[]
  }

  export type CompraDetalleCreateNestedManyWithoutProductoInput = {
    create?: XOR<CompraDetalleCreateWithoutProductoInput, CompraDetalleUncheckedCreateWithoutProductoInput> | CompraDetalleCreateWithoutProductoInput[] | CompraDetalleUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: CompraDetalleCreateOrConnectWithoutProductoInput | CompraDetalleCreateOrConnectWithoutProductoInput[]
    createMany?: CompraDetalleCreateManyProductoInputEnvelope
    connect?: CompraDetalleWhereUniqueInput | CompraDetalleWhereUniqueInput[]
  }

  export type CarritoProductoUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<CarritoProductoCreateWithoutProductoInput, CarritoProductoUncheckedCreateWithoutProductoInput> | CarritoProductoCreateWithoutProductoInput[] | CarritoProductoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: CarritoProductoCreateOrConnectWithoutProductoInput | CarritoProductoCreateOrConnectWithoutProductoInput[]
    createMany?: CarritoProductoCreateManyProductoInputEnvelope
    connect?: CarritoProductoWhereUniqueInput | CarritoProductoWhereUniqueInput[]
  }

  export type CompraDetalleUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<CompraDetalleCreateWithoutProductoInput, CompraDetalleUncheckedCreateWithoutProductoInput> | CompraDetalleCreateWithoutProductoInput[] | CompraDetalleUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: CompraDetalleCreateOrConnectWithoutProductoInput | CompraDetalleCreateOrConnectWithoutProductoInput[]
    createMany?: CompraDetalleCreateManyProductoInputEnvelope
    connect?: CompraDetalleWhereUniqueInput | CompraDetalleWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CarritoProductoUpdateManyWithoutProductoNestedInput = {
    create?: XOR<CarritoProductoCreateWithoutProductoInput, CarritoProductoUncheckedCreateWithoutProductoInput> | CarritoProductoCreateWithoutProductoInput[] | CarritoProductoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: CarritoProductoCreateOrConnectWithoutProductoInput | CarritoProductoCreateOrConnectWithoutProductoInput[]
    upsert?: CarritoProductoUpsertWithWhereUniqueWithoutProductoInput | CarritoProductoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: CarritoProductoCreateManyProductoInputEnvelope
    set?: CarritoProductoWhereUniqueInput | CarritoProductoWhereUniqueInput[]
    disconnect?: CarritoProductoWhereUniqueInput | CarritoProductoWhereUniqueInput[]
    delete?: CarritoProductoWhereUniqueInput | CarritoProductoWhereUniqueInput[]
    connect?: CarritoProductoWhereUniqueInput | CarritoProductoWhereUniqueInput[]
    update?: CarritoProductoUpdateWithWhereUniqueWithoutProductoInput | CarritoProductoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: CarritoProductoUpdateManyWithWhereWithoutProductoInput | CarritoProductoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: CarritoProductoScalarWhereInput | CarritoProductoScalarWhereInput[]
  }

  export type CompraDetalleUpdateManyWithoutProductoNestedInput = {
    create?: XOR<CompraDetalleCreateWithoutProductoInput, CompraDetalleUncheckedCreateWithoutProductoInput> | CompraDetalleCreateWithoutProductoInput[] | CompraDetalleUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: CompraDetalleCreateOrConnectWithoutProductoInput | CompraDetalleCreateOrConnectWithoutProductoInput[]
    upsert?: CompraDetalleUpsertWithWhereUniqueWithoutProductoInput | CompraDetalleUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: CompraDetalleCreateManyProductoInputEnvelope
    set?: CompraDetalleWhereUniqueInput | CompraDetalleWhereUniqueInput[]
    disconnect?: CompraDetalleWhereUniqueInput | CompraDetalleWhereUniqueInput[]
    delete?: CompraDetalleWhereUniqueInput | CompraDetalleWhereUniqueInput[]
    connect?: CompraDetalleWhereUniqueInput | CompraDetalleWhereUniqueInput[]
    update?: CompraDetalleUpdateWithWhereUniqueWithoutProductoInput | CompraDetalleUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: CompraDetalleUpdateManyWithWhereWithoutProductoInput | CompraDetalleUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: CompraDetalleScalarWhereInput | CompraDetalleScalarWhereInput[]
  }

  export type CarritoProductoUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<CarritoProductoCreateWithoutProductoInput, CarritoProductoUncheckedCreateWithoutProductoInput> | CarritoProductoCreateWithoutProductoInput[] | CarritoProductoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: CarritoProductoCreateOrConnectWithoutProductoInput | CarritoProductoCreateOrConnectWithoutProductoInput[]
    upsert?: CarritoProductoUpsertWithWhereUniqueWithoutProductoInput | CarritoProductoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: CarritoProductoCreateManyProductoInputEnvelope
    set?: CarritoProductoWhereUniqueInput | CarritoProductoWhereUniqueInput[]
    disconnect?: CarritoProductoWhereUniqueInput | CarritoProductoWhereUniqueInput[]
    delete?: CarritoProductoWhereUniqueInput | CarritoProductoWhereUniqueInput[]
    connect?: CarritoProductoWhereUniqueInput | CarritoProductoWhereUniqueInput[]
    update?: CarritoProductoUpdateWithWhereUniqueWithoutProductoInput | CarritoProductoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: CarritoProductoUpdateManyWithWhereWithoutProductoInput | CarritoProductoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: CarritoProductoScalarWhereInput | CarritoProductoScalarWhereInput[]
  }

  export type CompraDetalleUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<CompraDetalleCreateWithoutProductoInput, CompraDetalleUncheckedCreateWithoutProductoInput> | CompraDetalleCreateWithoutProductoInput[] | CompraDetalleUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: CompraDetalleCreateOrConnectWithoutProductoInput | CompraDetalleCreateOrConnectWithoutProductoInput[]
    upsert?: CompraDetalleUpsertWithWhereUniqueWithoutProductoInput | CompraDetalleUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: CompraDetalleCreateManyProductoInputEnvelope
    set?: CompraDetalleWhereUniqueInput | CompraDetalleWhereUniqueInput[]
    disconnect?: CompraDetalleWhereUniqueInput | CompraDetalleWhereUniqueInput[]
    delete?: CompraDetalleWhereUniqueInput | CompraDetalleWhereUniqueInput[]
    connect?: CompraDetalleWhereUniqueInput | CompraDetalleWhereUniqueInput[]
    update?: CompraDetalleUpdateWithWhereUniqueWithoutProductoInput | CompraDetalleUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: CompraDetalleUpdateManyWithWhereWithoutProductoInput | CompraDetalleUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: CompraDetalleScalarWhereInput | CompraDetalleScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutCarritoInput = {
    create?: XOR<UsuarioCreateWithoutCarritoInput, UsuarioUncheckedCreateWithoutCarritoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCarritoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type CarritoProductoCreateNestedManyWithoutCarritoInput = {
    create?: XOR<CarritoProductoCreateWithoutCarritoInput, CarritoProductoUncheckedCreateWithoutCarritoInput> | CarritoProductoCreateWithoutCarritoInput[] | CarritoProductoUncheckedCreateWithoutCarritoInput[]
    connectOrCreate?: CarritoProductoCreateOrConnectWithoutCarritoInput | CarritoProductoCreateOrConnectWithoutCarritoInput[]
    createMany?: CarritoProductoCreateManyCarritoInputEnvelope
    connect?: CarritoProductoWhereUniqueInput | CarritoProductoWhereUniqueInput[]
  }

  export type CarritoProductoUncheckedCreateNestedManyWithoutCarritoInput = {
    create?: XOR<CarritoProductoCreateWithoutCarritoInput, CarritoProductoUncheckedCreateWithoutCarritoInput> | CarritoProductoCreateWithoutCarritoInput[] | CarritoProductoUncheckedCreateWithoutCarritoInput[]
    connectOrCreate?: CarritoProductoCreateOrConnectWithoutCarritoInput | CarritoProductoCreateOrConnectWithoutCarritoInput[]
    createMany?: CarritoProductoCreateManyCarritoInputEnvelope
    connect?: CarritoProductoWhereUniqueInput | CarritoProductoWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutCarritoNestedInput = {
    create?: XOR<UsuarioCreateWithoutCarritoInput, UsuarioUncheckedCreateWithoutCarritoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCarritoInput
    upsert?: UsuarioUpsertWithoutCarritoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCarritoInput, UsuarioUpdateWithoutCarritoInput>, UsuarioUncheckedUpdateWithoutCarritoInput>
  }

  export type CarritoProductoUpdateManyWithoutCarritoNestedInput = {
    create?: XOR<CarritoProductoCreateWithoutCarritoInput, CarritoProductoUncheckedCreateWithoutCarritoInput> | CarritoProductoCreateWithoutCarritoInput[] | CarritoProductoUncheckedCreateWithoutCarritoInput[]
    connectOrCreate?: CarritoProductoCreateOrConnectWithoutCarritoInput | CarritoProductoCreateOrConnectWithoutCarritoInput[]
    upsert?: CarritoProductoUpsertWithWhereUniqueWithoutCarritoInput | CarritoProductoUpsertWithWhereUniqueWithoutCarritoInput[]
    createMany?: CarritoProductoCreateManyCarritoInputEnvelope
    set?: CarritoProductoWhereUniqueInput | CarritoProductoWhereUniqueInput[]
    disconnect?: CarritoProductoWhereUniqueInput | CarritoProductoWhereUniqueInput[]
    delete?: CarritoProductoWhereUniqueInput | CarritoProductoWhereUniqueInput[]
    connect?: CarritoProductoWhereUniqueInput | CarritoProductoWhereUniqueInput[]
    update?: CarritoProductoUpdateWithWhereUniqueWithoutCarritoInput | CarritoProductoUpdateWithWhereUniqueWithoutCarritoInput[]
    updateMany?: CarritoProductoUpdateManyWithWhereWithoutCarritoInput | CarritoProductoUpdateManyWithWhereWithoutCarritoInput[]
    deleteMany?: CarritoProductoScalarWhereInput | CarritoProductoScalarWhereInput[]
  }

  export type CarritoProductoUncheckedUpdateManyWithoutCarritoNestedInput = {
    create?: XOR<CarritoProductoCreateWithoutCarritoInput, CarritoProductoUncheckedCreateWithoutCarritoInput> | CarritoProductoCreateWithoutCarritoInput[] | CarritoProductoUncheckedCreateWithoutCarritoInput[]
    connectOrCreate?: CarritoProductoCreateOrConnectWithoutCarritoInput | CarritoProductoCreateOrConnectWithoutCarritoInput[]
    upsert?: CarritoProductoUpsertWithWhereUniqueWithoutCarritoInput | CarritoProductoUpsertWithWhereUniqueWithoutCarritoInput[]
    createMany?: CarritoProductoCreateManyCarritoInputEnvelope
    set?: CarritoProductoWhereUniqueInput | CarritoProductoWhereUniqueInput[]
    disconnect?: CarritoProductoWhereUniqueInput | CarritoProductoWhereUniqueInput[]
    delete?: CarritoProductoWhereUniqueInput | CarritoProductoWhereUniqueInput[]
    connect?: CarritoProductoWhereUniqueInput | CarritoProductoWhereUniqueInput[]
    update?: CarritoProductoUpdateWithWhereUniqueWithoutCarritoInput | CarritoProductoUpdateWithWhereUniqueWithoutCarritoInput[]
    updateMany?: CarritoProductoUpdateManyWithWhereWithoutCarritoInput | CarritoProductoUpdateManyWithWhereWithoutCarritoInput[]
    deleteMany?: CarritoProductoScalarWhereInput | CarritoProductoScalarWhereInput[]
  }

  export type CarritoCreateNestedOneWithoutCarritoProductosInput = {
    create?: XOR<CarritoCreateWithoutCarritoProductosInput, CarritoUncheckedCreateWithoutCarritoProductosInput>
    connectOrCreate?: CarritoCreateOrConnectWithoutCarritoProductosInput
    connect?: CarritoWhereUniqueInput
  }

  export type ProductoCreateNestedOneWithoutCarritoProdInput = {
    create?: XOR<ProductoCreateWithoutCarritoProdInput, ProductoUncheckedCreateWithoutCarritoProdInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutCarritoProdInput
    connect?: ProductoWhereUniqueInput
  }

  export type CarritoUpdateOneRequiredWithoutCarritoProductosNestedInput = {
    create?: XOR<CarritoCreateWithoutCarritoProductosInput, CarritoUncheckedCreateWithoutCarritoProductosInput>
    connectOrCreate?: CarritoCreateOrConnectWithoutCarritoProductosInput
    upsert?: CarritoUpsertWithoutCarritoProductosInput
    connect?: CarritoWhereUniqueInput
    update?: XOR<XOR<CarritoUpdateToOneWithWhereWithoutCarritoProductosInput, CarritoUpdateWithoutCarritoProductosInput>, CarritoUncheckedUpdateWithoutCarritoProductosInput>
  }

  export type ProductoUpdateOneRequiredWithoutCarritoProdNestedInput = {
    create?: XOR<ProductoCreateWithoutCarritoProdInput, ProductoUncheckedCreateWithoutCarritoProdInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutCarritoProdInput
    upsert?: ProductoUpsertWithoutCarritoProdInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutCarritoProdInput, ProductoUpdateWithoutCarritoProdInput>, ProductoUncheckedUpdateWithoutCarritoProdInput>
  }

  export type UsuarioCreateNestedOneWithoutComprasInput = {
    create?: XOR<UsuarioCreateWithoutComprasInput, UsuarioUncheckedCreateWithoutComprasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutComprasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type CompraDetalleCreateNestedManyWithoutCompraInput = {
    create?: XOR<CompraDetalleCreateWithoutCompraInput, CompraDetalleUncheckedCreateWithoutCompraInput> | CompraDetalleCreateWithoutCompraInput[] | CompraDetalleUncheckedCreateWithoutCompraInput[]
    connectOrCreate?: CompraDetalleCreateOrConnectWithoutCompraInput | CompraDetalleCreateOrConnectWithoutCompraInput[]
    createMany?: CompraDetalleCreateManyCompraInputEnvelope
    connect?: CompraDetalleWhereUniqueInput | CompraDetalleWhereUniqueInput[]
  }

  export type CompraDetalleUncheckedCreateNestedManyWithoutCompraInput = {
    create?: XOR<CompraDetalleCreateWithoutCompraInput, CompraDetalleUncheckedCreateWithoutCompraInput> | CompraDetalleCreateWithoutCompraInput[] | CompraDetalleUncheckedCreateWithoutCompraInput[]
    connectOrCreate?: CompraDetalleCreateOrConnectWithoutCompraInput | CompraDetalleCreateOrConnectWithoutCompraInput[]
    createMany?: CompraDetalleCreateManyCompraInputEnvelope
    connect?: CompraDetalleWhereUniqueInput | CompraDetalleWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsuarioUpdateOneRequiredWithoutComprasNestedInput = {
    create?: XOR<UsuarioCreateWithoutComprasInput, UsuarioUncheckedCreateWithoutComprasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutComprasInput
    upsert?: UsuarioUpsertWithoutComprasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutComprasInput, UsuarioUpdateWithoutComprasInput>, UsuarioUncheckedUpdateWithoutComprasInput>
  }

  export type CompraDetalleUpdateManyWithoutCompraNestedInput = {
    create?: XOR<CompraDetalleCreateWithoutCompraInput, CompraDetalleUncheckedCreateWithoutCompraInput> | CompraDetalleCreateWithoutCompraInput[] | CompraDetalleUncheckedCreateWithoutCompraInput[]
    connectOrCreate?: CompraDetalleCreateOrConnectWithoutCompraInput | CompraDetalleCreateOrConnectWithoutCompraInput[]
    upsert?: CompraDetalleUpsertWithWhereUniqueWithoutCompraInput | CompraDetalleUpsertWithWhereUniqueWithoutCompraInput[]
    createMany?: CompraDetalleCreateManyCompraInputEnvelope
    set?: CompraDetalleWhereUniqueInput | CompraDetalleWhereUniqueInput[]
    disconnect?: CompraDetalleWhereUniqueInput | CompraDetalleWhereUniqueInput[]
    delete?: CompraDetalleWhereUniqueInput | CompraDetalleWhereUniqueInput[]
    connect?: CompraDetalleWhereUniqueInput | CompraDetalleWhereUniqueInput[]
    update?: CompraDetalleUpdateWithWhereUniqueWithoutCompraInput | CompraDetalleUpdateWithWhereUniqueWithoutCompraInput[]
    updateMany?: CompraDetalleUpdateManyWithWhereWithoutCompraInput | CompraDetalleUpdateManyWithWhereWithoutCompraInput[]
    deleteMany?: CompraDetalleScalarWhereInput | CompraDetalleScalarWhereInput[]
  }

  export type CompraDetalleUncheckedUpdateManyWithoutCompraNestedInput = {
    create?: XOR<CompraDetalleCreateWithoutCompraInput, CompraDetalleUncheckedCreateWithoutCompraInput> | CompraDetalleCreateWithoutCompraInput[] | CompraDetalleUncheckedCreateWithoutCompraInput[]
    connectOrCreate?: CompraDetalleCreateOrConnectWithoutCompraInput | CompraDetalleCreateOrConnectWithoutCompraInput[]
    upsert?: CompraDetalleUpsertWithWhereUniqueWithoutCompraInput | CompraDetalleUpsertWithWhereUniqueWithoutCompraInput[]
    createMany?: CompraDetalleCreateManyCompraInputEnvelope
    set?: CompraDetalleWhereUniqueInput | CompraDetalleWhereUniqueInput[]
    disconnect?: CompraDetalleWhereUniqueInput | CompraDetalleWhereUniqueInput[]
    delete?: CompraDetalleWhereUniqueInput | CompraDetalleWhereUniqueInput[]
    connect?: CompraDetalleWhereUniqueInput | CompraDetalleWhereUniqueInput[]
    update?: CompraDetalleUpdateWithWhereUniqueWithoutCompraInput | CompraDetalleUpdateWithWhereUniqueWithoutCompraInput[]
    updateMany?: CompraDetalleUpdateManyWithWhereWithoutCompraInput | CompraDetalleUpdateManyWithWhereWithoutCompraInput[]
    deleteMany?: CompraDetalleScalarWhereInput | CompraDetalleScalarWhereInput[]
  }

  export type CompraCreateNestedOneWithoutDetallesInput = {
    create?: XOR<CompraCreateWithoutDetallesInput, CompraUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: CompraCreateOrConnectWithoutDetallesInput
    connect?: CompraWhereUniqueInput
  }

  export type ProductoCreateNestedOneWithoutComprasInput = {
    create?: XOR<ProductoCreateWithoutComprasInput, ProductoUncheckedCreateWithoutComprasInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutComprasInput
    connect?: ProductoWhereUniqueInput
  }

  export type CompraUpdateOneRequiredWithoutDetallesNestedInput = {
    create?: XOR<CompraCreateWithoutDetallesInput, CompraUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: CompraCreateOrConnectWithoutDetallesInput
    upsert?: CompraUpsertWithoutDetallesInput
    connect?: CompraWhereUniqueInput
    update?: XOR<XOR<CompraUpdateToOneWithWhereWithoutDetallesInput, CompraUpdateWithoutDetallesInput>, CompraUncheckedUpdateWithoutDetallesInput>
  }

  export type ProductoUpdateOneRequiredWithoutComprasNestedInput = {
    create?: XOR<ProductoCreateWithoutComprasInput, ProductoUncheckedCreateWithoutComprasInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutComprasInput
    upsert?: ProductoUpsertWithoutComprasInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutComprasInput, ProductoUpdateWithoutComprasInput>, ProductoUncheckedUpdateWithoutComprasInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CarritoCreateWithoutUsuarioInput = {
    carritoProductos?: CarritoProductoCreateNestedManyWithoutCarritoInput
  }

  export type CarritoUncheckedCreateWithoutUsuarioInput = {
    idCarrito?: number
    carritoProductos?: CarritoProductoUncheckedCreateNestedManyWithoutCarritoInput
  }

  export type CarritoCreateOrConnectWithoutUsuarioInput = {
    where: CarritoWhereUniqueInput
    create: XOR<CarritoCreateWithoutUsuarioInput, CarritoUncheckedCreateWithoutUsuarioInput>
  }

  export type CompraCreateWithoutUsuarioInput = {
    fechaCompra?: Date | string
    total: Decimal | DecimalJsLike | number | string
    detalles?: CompraDetalleCreateNestedManyWithoutCompraInput
  }

  export type CompraUncheckedCreateWithoutUsuarioInput = {
    idCompra?: number
    fechaCompra?: Date | string
    total: Decimal | DecimalJsLike | number | string
    detalles?: CompraDetalleUncheckedCreateNestedManyWithoutCompraInput
  }

  export type CompraCreateOrConnectWithoutUsuarioInput = {
    where: CompraWhereUniqueInput
    create: XOR<CompraCreateWithoutUsuarioInput, CompraUncheckedCreateWithoutUsuarioInput>
  }

  export type CompraCreateManyUsuarioInputEnvelope = {
    data: CompraCreateManyUsuarioInput | CompraCreateManyUsuarioInput[]
  }

  export type CarritoUpsertWithoutUsuarioInput = {
    update: XOR<CarritoUpdateWithoutUsuarioInput, CarritoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<CarritoCreateWithoutUsuarioInput, CarritoUncheckedCreateWithoutUsuarioInput>
    where?: CarritoWhereInput
  }

  export type CarritoUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: CarritoWhereInput
    data: XOR<CarritoUpdateWithoutUsuarioInput, CarritoUncheckedUpdateWithoutUsuarioInput>
  }

  export type CarritoUpdateWithoutUsuarioInput = {
    carritoProductos?: CarritoProductoUpdateManyWithoutCarritoNestedInput
  }

  export type CarritoUncheckedUpdateWithoutUsuarioInput = {
    idCarrito?: IntFieldUpdateOperationsInput | number
    carritoProductos?: CarritoProductoUncheckedUpdateManyWithoutCarritoNestedInput
  }

  export type CompraUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: CompraWhereUniqueInput
    update: XOR<CompraUpdateWithoutUsuarioInput, CompraUncheckedUpdateWithoutUsuarioInput>
    create: XOR<CompraCreateWithoutUsuarioInput, CompraUncheckedCreateWithoutUsuarioInput>
  }

  export type CompraUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: CompraWhereUniqueInput
    data: XOR<CompraUpdateWithoutUsuarioInput, CompraUncheckedUpdateWithoutUsuarioInput>
  }

  export type CompraUpdateManyWithWhereWithoutUsuarioInput = {
    where: CompraScalarWhereInput
    data: XOR<CompraUpdateManyMutationInput, CompraUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type CompraScalarWhereInput = {
    AND?: CompraScalarWhereInput | CompraScalarWhereInput[]
    OR?: CompraScalarWhereInput[]
    NOT?: CompraScalarWhereInput | CompraScalarWhereInput[]
    idCompra?: IntFilter<"Compra"> | number
    idUsuario?: IntFilter<"Compra"> | number
    fechaCompra?: DateTimeFilter<"Compra"> | Date | string
    total?: DecimalFilter<"Compra"> | Decimal | DecimalJsLike | number | string
  }

  export type CarritoProductoCreateWithoutProductoInput = {
    cantidad: number
    Carrito: CarritoCreateNestedOneWithoutCarritoProductosInput
  }

  export type CarritoProductoUncheckedCreateWithoutProductoInput = {
    idCarritoProd?: number
    idCarrito: number
    cantidad: number
  }

  export type CarritoProductoCreateOrConnectWithoutProductoInput = {
    where: CarritoProductoWhereUniqueInput
    create: XOR<CarritoProductoCreateWithoutProductoInput, CarritoProductoUncheckedCreateWithoutProductoInput>
  }

  export type CarritoProductoCreateManyProductoInputEnvelope = {
    data: CarritoProductoCreateManyProductoInput | CarritoProductoCreateManyProductoInput[]
  }

  export type CompraDetalleCreateWithoutProductoInput = {
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    Compra: CompraCreateNestedOneWithoutDetallesInput
  }

  export type CompraDetalleUncheckedCreateWithoutProductoInput = {
    idCompraDetalle?: number
    idCompra: number
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
  }

  export type CompraDetalleCreateOrConnectWithoutProductoInput = {
    where: CompraDetalleWhereUniqueInput
    create: XOR<CompraDetalleCreateWithoutProductoInput, CompraDetalleUncheckedCreateWithoutProductoInput>
  }

  export type CompraDetalleCreateManyProductoInputEnvelope = {
    data: CompraDetalleCreateManyProductoInput | CompraDetalleCreateManyProductoInput[]
  }

  export type CarritoProductoUpsertWithWhereUniqueWithoutProductoInput = {
    where: CarritoProductoWhereUniqueInput
    update: XOR<CarritoProductoUpdateWithoutProductoInput, CarritoProductoUncheckedUpdateWithoutProductoInput>
    create: XOR<CarritoProductoCreateWithoutProductoInput, CarritoProductoUncheckedCreateWithoutProductoInput>
  }

  export type CarritoProductoUpdateWithWhereUniqueWithoutProductoInput = {
    where: CarritoProductoWhereUniqueInput
    data: XOR<CarritoProductoUpdateWithoutProductoInput, CarritoProductoUncheckedUpdateWithoutProductoInput>
  }

  export type CarritoProductoUpdateManyWithWhereWithoutProductoInput = {
    where: CarritoProductoScalarWhereInput
    data: XOR<CarritoProductoUpdateManyMutationInput, CarritoProductoUncheckedUpdateManyWithoutProductoInput>
  }

  export type CarritoProductoScalarWhereInput = {
    AND?: CarritoProductoScalarWhereInput | CarritoProductoScalarWhereInput[]
    OR?: CarritoProductoScalarWhereInput[]
    NOT?: CarritoProductoScalarWhereInput | CarritoProductoScalarWhereInput[]
    idCarritoProd?: IntFilter<"CarritoProducto"> | number
    idCarrito?: IntFilter<"CarritoProducto"> | number
    idProducto?: IntFilter<"CarritoProducto"> | number
    cantidad?: IntFilter<"CarritoProducto"> | number
  }

  export type CompraDetalleUpsertWithWhereUniqueWithoutProductoInput = {
    where: CompraDetalleWhereUniqueInput
    update: XOR<CompraDetalleUpdateWithoutProductoInput, CompraDetalleUncheckedUpdateWithoutProductoInput>
    create: XOR<CompraDetalleCreateWithoutProductoInput, CompraDetalleUncheckedCreateWithoutProductoInput>
  }

  export type CompraDetalleUpdateWithWhereUniqueWithoutProductoInput = {
    where: CompraDetalleWhereUniqueInput
    data: XOR<CompraDetalleUpdateWithoutProductoInput, CompraDetalleUncheckedUpdateWithoutProductoInput>
  }

  export type CompraDetalleUpdateManyWithWhereWithoutProductoInput = {
    where: CompraDetalleScalarWhereInput
    data: XOR<CompraDetalleUpdateManyMutationInput, CompraDetalleUncheckedUpdateManyWithoutProductoInput>
  }

  export type CompraDetalleScalarWhereInput = {
    AND?: CompraDetalleScalarWhereInput | CompraDetalleScalarWhereInput[]
    OR?: CompraDetalleScalarWhereInput[]
    NOT?: CompraDetalleScalarWhereInput | CompraDetalleScalarWhereInput[]
    idCompraDetalle?: IntFilter<"CompraDetalle"> | number
    idCompra?: IntFilter<"CompraDetalle"> | number
    idProducto?: IntFilter<"CompraDetalle"> | number
    cantidad?: IntFilter<"CompraDetalle"> | number
    precioUnitario?: DecimalFilter<"CompraDetalle"> | Decimal | DecimalJsLike | number | string
  }

  export type UsuarioCreateWithoutCarritoInput = {
    nombre: string
    email: string
    password: string
    compras?: CompraCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutCarritoInput = {
    idUsuario?: number
    nombre: string
    email: string
    password: string
    compras?: CompraUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutCarritoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCarritoInput, UsuarioUncheckedCreateWithoutCarritoInput>
  }

  export type CarritoProductoCreateWithoutCarritoInput = {
    cantidad: number
    Producto: ProductoCreateNestedOneWithoutCarritoProdInput
  }

  export type CarritoProductoUncheckedCreateWithoutCarritoInput = {
    idCarritoProd?: number
    idProducto: number
    cantidad: number
  }

  export type CarritoProductoCreateOrConnectWithoutCarritoInput = {
    where: CarritoProductoWhereUniqueInput
    create: XOR<CarritoProductoCreateWithoutCarritoInput, CarritoProductoUncheckedCreateWithoutCarritoInput>
  }

  export type CarritoProductoCreateManyCarritoInputEnvelope = {
    data: CarritoProductoCreateManyCarritoInput | CarritoProductoCreateManyCarritoInput[]
  }

  export type UsuarioUpsertWithoutCarritoInput = {
    update: XOR<UsuarioUpdateWithoutCarritoInput, UsuarioUncheckedUpdateWithoutCarritoInput>
    create: XOR<UsuarioCreateWithoutCarritoInput, UsuarioUncheckedCreateWithoutCarritoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCarritoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCarritoInput, UsuarioUncheckedUpdateWithoutCarritoInput>
  }

  export type UsuarioUpdateWithoutCarritoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    compras?: CompraUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCarritoInput = {
    idUsuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    compras?: CompraUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type CarritoProductoUpsertWithWhereUniqueWithoutCarritoInput = {
    where: CarritoProductoWhereUniqueInput
    update: XOR<CarritoProductoUpdateWithoutCarritoInput, CarritoProductoUncheckedUpdateWithoutCarritoInput>
    create: XOR<CarritoProductoCreateWithoutCarritoInput, CarritoProductoUncheckedCreateWithoutCarritoInput>
  }

  export type CarritoProductoUpdateWithWhereUniqueWithoutCarritoInput = {
    where: CarritoProductoWhereUniqueInput
    data: XOR<CarritoProductoUpdateWithoutCarritoInput, CarritoProductoUncheckedUpdateWithoutCarritoInput>
  }

  export type CarritoProductoUpdateManyWithWhereWithoutCarritoInput = {
    where: CarritoProductoScalarWhereInput
    data: XOR<CarritoProductoUpdateManyMutationInput, CarritoProductoUncheckedUpdateManyWithoutCarritoInput>
  }

  export type CarritoCreateWithoutCarritoProductosInput = {
    Usuario: UsuarioCreateNestedOneWithoutCarritoInput
  }

  export type CarritoUncheckedCreateWithoutCarritoProductosInput = {
    idCarrito?: number
    idUsuario: number
  }

  export type CarritoCreateOrConnectWithoutCarritoProductosInput = {
    where: CarritoWhereUniqueInput
    create: XOR<CarritoCreateWithoutCarritoProductosInput, CarritoUncheckedCreateWithoutCarritoProductosInput>
  }

  export type ProductoCreateWithoutCarritoProdInput = {
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    compras?: CompraDetalleCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutCarritoProdInput = {
    idProducto?: number
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    compras?: CompraDetalleUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutCarritoProdInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutCarritoProdInput, ProductoUncheckedCreateWithoutCarritoProdInput>
  }

  export type CarritoUpsertWithoutCarritoProductosInput = {
    update: XOR<CarritoUpdateWithoutCarritoProductosInput, CarritoUncheckedUpdateWithoutCarritoProductosInput>
    create: XOR<CarritoCreateWithoutCarritoProductosInput, CarritoUncheckedCreateWithoutCarritoProductosInput>
    where?: CarritoWhereInput
  }

  export type CarritoUpdateToOneWithWhereWithoutCarritoProductosInput = {
    where?: CarritoWhereInput
    data: XOR<CarritoUpdateWithoutCarritoProductosInput, CarritoUncheckedUpdateWithoutCarritoProductosInput>
  }

  export type CarritoUpdateWithoutCarritoProductosInput = {
    Usuario?: UsuarioUpdateOneRequiredWithoutCarritoNestedInput
  }

  export type CarritoUncheckedUpdateWithoutCarritoProductosInput = {
    idCarrito?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoUpsertWithoutCarritoProdInput = {
    update: XOR<ProductoUpdateWithoutCarritoProdInput, ProductoUncheckedUpdateWithoutCarritoProdInput>
    create: XOR<ProductoCreateWithoutCarritoProdInput, ProductoUncheckedCreateWithoutCarritoProdInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutCarritoProdInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutCarritoProdInput, ProductoUncheckedUpdateWithoutCarritoProdInput>
  }

  export type ProductoUpdateWithoutCarritoProdInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    compras?: CompraDetalleUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutCarritoProdInput = {
    idProducto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    compras?: CompraDetalleUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type UsuarioCreateWithoutComprasInput = {
    nombre: string
    email: string
    password: string
    carrito?: CarritoCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutComprasInput = {
    idUsuario?: number
    nombre: string
    email: string
    password: string
    carrito?: CarritoUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutComprasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutComprasInput, UsuarioUncheckedCreateWithoutComprasInput>
  }

  export type CompraDetalleCreateWithoutCompraInput = {
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    Producto: ProductoCreateNestedOneWithoutComprasInput
  }

  export type CompraDetalleUncheckedCreateWithoutCompraInput = {
    idCompraDetalle?: number
    idProducto: number
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
  }

  export type CompraDetalleCreateOrConnectWithoutCompraInput = {
    where: CompraDetalleWhereUniqueInput
    create: XOR<CompraDetalleCreateWithoutCompraInput, CompraDetalleUncheckedCreateWithoutCompraInput>
  }

  export type CompraDetalleCreateManyCompraInputEnvelope = {
    data: CompraDetalleCreateManyCompraInput | CompraDetalleCreateManyCompraInput[]
  }

  export type UsuarioUpsertWithoutComprasInput = {
    update: XOR<UsuarioUpdateWithoutComprasInput, UsuarioUncheckedUpdateWithoutComprasInput>
    create: XOR<UsuarioCreateWithoutComprasInput, UsuarioUncheckedCreateWithoutComprasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutComprasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutComprasInput, UsuarioUncheckedUpdateWithoutComprasInput>
  }

  export type UsuarioUpdateWithoutComprasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    carrito?: CarritoUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutComprasInput = {
    idUsuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    carrito?: CarritoUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type CompraDetalleUpsertWithWhereUniqueWithoutCompraInput = {
    where: CompraDetalleWhereUniqueInput
    update: XOR<CompraDetalleUpdateWithoutCompraInput, CompraDetalleUncheckedUpdateWithoutCompraInput>
    create: XOR<CompraDetalleCreateWithoutCompraInput, CompraDetalleUncheckedCreateWithoutCompraInput>
  }

  export type CompraDetalleUpdateWithWhereUniqueWithoutCompraInput = {
    where: CompraDetalleWhereUniqueInput
    data: XOR<CompraDetalleUpdateWithoutCompraInput, CompraDetalleUncheckedUpdateWithoutCompraInput>
  }

  export type CompraDetalleUpdateManyWithWhereWithoutCompraInput = {
    where: CompraDetalleScalarWhereInput
    data: XOR<CompraDetalleUpdateManyMutationInput, CompraDetalleUncheckedUpdateManyWithoutCompraInput>
  }

  export type CompraCreateWithoutDetallesInput = {
    fechaCompra?: Date | string
    total: Decimal | DecimalJsLike | number | string
    Usuario: UsuarioCreateNestedOneWithoutComprasInput
  }

  export type CompraUncheckedCreateWithoutDetallesInput = {
    idCompra?: number
    idUsuario: number
    fechaCompra?: Date | string
    total: Decimal | DecimalJsLike | number | string
  }

  export type CompraCreateOrConnectWithoutDetallesInput = {
    where: CompraWhereUniqueInput
    create: XOR<CompraCreateWithoutDetallesInput, CompraUncheckedCreateWithoutDetallesInput>
  }

  export type ProductoCreateWithoutComprasInput = {
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    carritoProd?: CarritoProductoCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutComprasInput = {
    idProducto?: number
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    carritoProd?: CarritoProductoUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutComprasInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutComprasInput, ProductoUncheckedCreateWithoutComprasInput>
  }

  export type CompraUpsertWithoutDetallesInput = {
    update: XOR<CompraUpdateWithoutDetallesInput, CompraUncheckedUpdateWithoutDetallesInput>
    create: XOR<CompraCreateWithoutDetallesInput, CompraUncheckedCreateWithoutDetallesInput>
    where?: CompraWhereInput
  }

  export type CompraUpdateToOneWithWhereWithoutDetallesInput = {
    where?: CompraWhereInput
    data: XOR<CompraUpdateWithoutDetallesInput, CompraUncheckedUpdateWithoutDetallesInput>
  }

  export type CompraUpdateWithoutDetallesInput = {
    fechaCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Usuario?: UsuarioUpdateOneRequiredWithoutComprasNestedInput
  }

  export type CompraUncheckedUpdateWithoutDetallesInput = {
    idCompra?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    fechaCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ProductoUpsertWithoutComprasInput = {
    update: XOR<ProductoUpdateWithoutComprasInput, ProductoUncheckedUpdateWithoutComprasInput>
    create: XOR<ProductoCreateWithoutComprasInput, ProductoUncheckedCreateWithoutComprasInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutComprasInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutComprasInput, ProductoUncheckedUpdateWithoutComprasInput>
  }

  export type ProductoUpdateWithoutComprasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    carritoProd?: CarritoProductoUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutComprasInput = {
    idProducto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    carritoProd?: CarritoProductoUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type CompraCreateManyUsuarioInput = {
    fechaCompra?: Date | string
    total: Decimal | DecimalJsLike | number | string
  }

  export type CompraUpdateWithoutUsuarioInput = {
    fechaCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detalles?: CompraDetalleUpdateManyWithoutCompraNestedInput
  }

  export type CompraUncheckedUpdateWithoutUsuarioInput = {
    idCompra?: IntFieldUpdateOperationsInput | number
    fechaCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detalles?: CompraDetalleUncheckedUpdateManyWithoutCompraNestedInput
  }

  export type CompraUncheckedUpdateManyWithoutUsuarioInput = {
    idCompra?: IntFieldUpdateOperationsInput | number
    fechaCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CarritoProductoCreateManyProductoInput = {
    idCarrito: number
    cantidad: number
  }

  export type CompraDetalleCreateManyProductoInput = {
    idCompra: number
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
  }

  export type CarritoProductoUpdateWithoutProductoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    Carrito?: CarritoUpdateOneRequiredWithoutCarritoProductosNestedInput
  }

  export type CarritoProductoUncheckedUpdateWithoutProductoInput = {
    idCarritoProd?: IntFieldUpdateOperationsInput | number
    idCarrito?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type CarritoProductoUncheckedUpdateManyWithoutProductoInput = {
    idCarritoProd?: IntFieldUpdateOperationsInput | number
    idCarrito?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type CompraDetalleUpdateWithoutProductoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Compra?: CompraUpdateOneRequiredWithoutDetallesNestedInput
  }

  export type CompraDetalleUncheckedUpdateWithoutProductoInput = {
    idCompraDetalle?: IntFieldUpdateOperationsInput | number
    idCompra?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CompraDetalleUncheckedUpdateManyWithoutProductoInput = {
    idCompraDetalle?: IntFieldUpdateOperationsInput | number
    idCompra?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CarritoProductoCreateManyCarritoInput = {
    idProducto: number
    cantidad: number
  }

  export type CarritoProductoUpdateWithoutCarritoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    Producto?: ProductoUpdateOneRequiredWithoutCarritoProdNestedInput
  }

  export type CarritoProductoUncheckedUpdateWithoutCarritoInput = {
    idCarritoProd?: IntFieldUpdateOperationsInput | number
    idProducto?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type CarritoProductoUncheckedUpdateManyWithoutCarritoInput = {
    idCarritoProd?: IntFieldUpdateOperationsInput | number
    idProducto?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type CompraDetalleCreateManyCompraInput = {
    idProducto: number
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
  }

  export type CompraDetalleUpdateWithoutCompraInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Producto?: ProductoUpdateOneRequiredWithoutComprasNestedInput
  }

  export type CompraDetalleUncheckedUpdateWithoutCompraInput = {
    idCompraDetalle?: IntFieldUpdateOperationsInput | number
    idProducto?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CompraDetalleUncheckedUpdateManyWithoutCompraInput = {
    idCompraDetalle?: IntFieldUpdateOperationsInput | number
    idProducto?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}