/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.38.0
  Forc version: 0.35.5
  Fuel-Core version: 0.17.3
*/

import type {
  BigNumberish,
  BN,
  BytesLike,
  Contract,
  DecodedValue,
  FunctionFragment,
  Interface,
  InvokeFunction,
} from 'fuels';

interface RegisterNameExampleAbiInterface extends Interface {
  functions: {
    count: FunctionFragment;
    increment: FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'count', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'increment', values: []): Uint8Array;

  decodeFunctionData(functionFragment: 'count', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'increment', data: BytesLike): DecodedValue;
}

export class RegisterNameExampleAbi extends Contract {
  interface: RegisterNameExampleAbiInterface;
  functions: {
    count: InvokeFunction<[], BN>;
    increment: InvokeFunction<[], BN>;
  };
}
