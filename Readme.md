# Fuel Smart Contract
Basic counter app to connect in network of [Fuel](https://www.fuel.network/).

Read the docs: https://fuelbook.fuel.network/master/quickstart/developer-quickstart.html

## How install

### Contract
- Install [Rust](https://www.rust-lang.org/tools/install) and the [Fuel toolchain](https://github.com/FuelLabs/fuelup)
- Set fuel toolchain to beta-3 version `fuelup default beta-3`
- Build the contract `cd contract` and `forc build` 
- If you want to run tests install `cargo install cargo-generate` and run `cargo test`
- Run your contract to local node `fuel-core run --ip 127.0.0.1 --port 4001 --chain ./chainConfig.json --db-path ./.fueldb`
- And deploy to local network `forc deploy --node-url 127.0.0.1:4001  --unsigned`

### UI

```sh
cd ui
yarn install
yarn dev
```
 