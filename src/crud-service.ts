/**
 * @copyright FLYACTS GmbH 2018
 */

import {
    BaseEntity,
} from '@flyacts/backend-core-entities';
import {
    Inject,
    Service,
} from 'typedi';
import {
    Connection,
} from 'typeorm';

/**
 * Service for providing crud operations
 */
@Service()
export class CrudService {
    /**
     * Database connection
     */
    @Inject()
    private connection!: Connection;

    /**
     * Returns all items for this entity
     * @param entityType The target class
     */
    public async find<T extends BaseEntity>(entityType: new() => T): Promise<T[]> {
        return this.connection.manager.find<T>(entityType);
    }

    /**
     *  Saves the given entity to the database
     */
    public async save<T extends BaseEntity>(entity: T): Promise<T> {
        return this.connection.manager.save(entity);
    }

    /**
     * Find an entity by it's id
     */
    public async findById<T extends BaseEntity>(entityType: new() => T, id: number): Promise<T | undefined> {
        return this.connection.manager.findOne(entityType, id);
    }
}
