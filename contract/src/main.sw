contract;

abi Counter {
    #[storage(read, write)]
    fn increment() -> u64;

    #[storage(read)]
    fn count() -> u64;
}

storage {
    counter: u64 = 0,
}

impl Counter for Contract {
    #[storage(read)]
    fn count() -> u64 {
        storage.counter
    }

    #[storage(read, write)]
    fn increment() -> u64 {
        let incremented = storage.counter + 1;
        storage.counter = incremented;
        incremented
    }
}