/*!
 * @copyright FLYACTS GmbH 2018
 */

import { Container } from 'typedi';

/**
 * Import another container into this project
 */
export function useContainer(container: any) {
    for (const service of container.globalInstance.services) {
        if (!Container.has(service)) {
            Container.set(service);
        }
    }
}
