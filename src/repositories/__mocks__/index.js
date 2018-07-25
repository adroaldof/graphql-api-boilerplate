import mock from '../../../__tests__/mock';
import knex from '../../config/knex';

const create = mock.asyncFn();
const detail = mock.asyncFn();
const list = mock.asyncFn();
const remove = mock.asyncFn();
const update = mock.asyncFn();

const { transaction } = knex;

export { create, detail, list, remove, transaction, update };
