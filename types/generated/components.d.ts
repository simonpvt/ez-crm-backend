import type { Schema, Struct } from '@strapi/strapi';

export interface CommonAddress extends Struct.ComponentSchema {
  collectionName: 'components_common_addresses';
  info: {
    description: '';
    displayName: 'Address';
    icon: 'house';
  };
  attributes: {
    city: Schema.Attribute.String;
    country: Schema.Attribute.String;
    postalCode: Schema.Attribute.String;
    street: Schema.Attribute.String;
  };
}

export interface CommonNotes extends Struct.ComponentSchema {
  collectionName: 'components_common_notes';
  info: {
    displayName: 'Notes';
    icon: 'file';
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    date: Schema.Attribute.Date & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.address': CommonAddress;
      'common.notes': CommonNotes;
    }
  }
}
