function getTypeDefName(data) {
  const {
    name: { value },
  } = data;

  return value;
}

function getTypeDefValues(data) {
  if (!data.values) {
    return undefined;
  }

  return data.values.map(value => value.name.value);
}

function getFieldType(field) {
  switch (field.type.kind) {
    case 'NamedType':
      return field.type.name.value;
    case 'NonNullType':
      return `${getFieldType(field.type)}!`;
    case 'ListType':
      return `[${getFieldType(field.type)}]`;
    default:
      return 'unknown';
  }
}

function getTypeDefsFieldsValues(data) {
  if (!data.fields) {
    return undefined;
  }

  return data.fields.reduce((fields, field) => {
    const fieldArguments = (field.arguments || [])
      .map(argument => `${argument.name.value}: ${getFieldType(argument)}`)
      .join(', ');

    let fieldName = field.name.value;

    if (fieldArguments.length) {
      fieldName += `(${fieldArguments})`;
    }

    return {
      ...fields,
      [`${fieldName}`]: getFieldType(field),
    };
  }, {});
}

export default function mapSchemaToObject(document) {
  const {
    definitions: [typeDef],
  } = document;

  return {
    name: getTypeDefName(typeDef),
    values: getTypeDefValues(typeDef),
    fields: getTypeDefsFieldsValues(typeDef),
  };
}
