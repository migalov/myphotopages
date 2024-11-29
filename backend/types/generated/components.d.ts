import type { Schema, Struct } from '@strapi/strapi';

export interface NavigationItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_items';
  info: {
    displayName: 'Item';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface NavigationListItems extends Struct.ComponentSchema {
  collectionName: 'components_navigation_list_items';
  info: {
    displayName: 'ListItems';
    icon: 'bulletList';
  };
  attributes: {
    href: Schema.Attribute.String;
    listItems: Schema.Attribute.Component<'navigation.item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SystemSlidersSlide extends Struct.ComponentSchema {
  collectionName: 'components_system_sliders_slides';
  info: {
    displayName: 'Slide';
    icon: 'picture';
  };
  attributes: {
    htmlContent: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    labelButton: Schema.Attribute.String;
    linkButton: Schema.Attribute.String;
    srcDesktop: Schema.Attribute.String;
    srcMobile: Schema.Attribute.String;
  };
}

export interface SystemSlidersSlider extends Struct.ComponentSchema {
  collectionName: 'components_system_sliders_sliders';
  info: {
    displayName: 'Slider';
    icon: 'picture';
  };
  attributes: {
    slider: Schema.Attribute.Component<'system-sliders.slide', true>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'navigation.item': NavigationItem;
      'navigation.list-items': NavigationListItems;
      'system-sliders.slide': SystemSlidersSlide;
      'system-sliders.slider': SystemSlidersSlider;
    }
  }
}
