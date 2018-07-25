import types, { Book, BookInput, BookUpdateInput } from '../types';
import mapSchemaToObject from '../../__tests__/map-schema-to-object';

describe('graphql Book types', () => {
  const object = mapSchemaToObject(Book);

  it('Is named Book', () => {
    expect(object.name).toEqual('Book');
  });

  it('Has the right values', () => {
    expect(object.fields).toEqual({
      id: 'String!',
      title: 'String',
      name: 'String',
      author: 'String',
    });
  });
});

describe('graphql BookInput types', () => {
  const object = mapSchemaToObject(BookInput);

  it('Is named BookInput', () => {
    expect(object.name).toEqual('BookInput');
  });

  it('Has the right values', () => {
    expect(object.fields).toEqual({
      title: 'String!',
      author: 'String!',
    });
  });
});

describe('graphql BookUpdateInput types', () => {
  const object = mapSchemaToObject(BookUpdateInput);

  it('Is named BookUpdateInput', () => {
    expect(object.name).toEqual('BookUpdateInput');
  });

  it('Has the right values', () => {
    expect(object.fields).toEqual({
      title: 'String',
      author: 'String',
    });
  });
});

describe('graphql.billingType.types', () => {
  it('Exports all the billingType types', () => {
    expect(types).toEqual([Book, BookInput, BookUpdateInput]);
  });
});
