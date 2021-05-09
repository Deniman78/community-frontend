import { createContext } from 'react';

const {
    Provider: ServiceProvider,
    Consumer: ServiceConsumer,
} = createContext();

export { ServiceConsumer, ServiceProvider };
