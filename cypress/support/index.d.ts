// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Cypress from 'cypress';

declare global {
    namespace Cypress {
        interface Chainable {
            toMatchImageSnapshot: (options?: any) => void;
        }
    }
}
