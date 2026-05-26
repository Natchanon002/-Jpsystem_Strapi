import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAccordionItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_accordion_items';
  info: {
    description: '';
    displayName: 'AccordionItem';
    icon: 'layer';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    sectionId: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedBenefitItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_benefit_items';
  info: {
    description: '';
    displayName: 'BenefitItem';
    icon: 'check';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.Text;
  };
}

export interface SharedCostItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_cost_items';
  info: {
    description: '';
    displayName: 'CostItem';
    icon: 'dollar-sign';
  };
  attributes: {
    label: Schema.Attribute.String;
    price: Schema.Attribute.String;
  };
}

export interface SharedInfoRow extends Struct.ComponentSchema {
  collectionName: 'components_shared_info_rows';
  info: {
    description: '';
    displayName: 'InfoRow';
    icon: 'list';
  };
  attributes: {
    key: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SharedItFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_it_feature_items';
  info: {
    description: '';
    displayName: 'ItFeatureItem';
    icon: 'star';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedItServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_it_service_items';
  info: {
    description: '';
    displayName: 'ItServiceItem';
    icon: 'server';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedNewsCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_news_cards';
  info: {
    description: '';
    displayName: 'NewsCard';
    icon: 'newspaper';
  };
  attributes: {
    category: Schema.Attribute.String;
    date: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedPainItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_pain_items';
  info: {
    description: '';
    displayName: 'PainItem';
    icon: 'exclamation';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface SharedServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_items';
  info: {
    description: '';
    displayName: 'ServiceItem';
    icon: 'apps';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedSocialIcon extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_icons';
  info: {
    description: '';
    displayName: 'SocialIcon';
    icon: 'globe';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.accordion-item': SharedAccordionItem;
      'shared.benefit-item': SharedBenefitItem;
      'shared.cost-item': SharedCostItem;
      'shared.info-row': SharedInfoRow;
      'shared.it-feature-item': SharedItFeatureItem;
      'shared.it-service-item': SharedItServiceItem;
      'shared.news-card': SharedNewsCard;
      'shared.pain-item': SharedPainItem;
      'shared.service-item': SharedServiceItem;
      'shared.social-icon': SharedSocialIcon;
    }
  }
}
