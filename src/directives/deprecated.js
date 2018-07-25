import { SchemaDirectiveVisitor } from 'graphql-tools';

export default class DeprecatedDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const target = field;
    target.isDeprecated = true;
    target.deprecationReason = this.args.reason;
  }

  visitEnumValue(value) {
    const target = value;
    target.isDeprecated = true;
    target.deprecationReason = this.args.reason;
  }
}
