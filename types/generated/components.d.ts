import type { Schema, Attribute } from '@strapi/strapi';

export interface BrandBladesCollections extends Schema.Component {
  collectionName: 'components_brand_blades_collections';
  info: {
    displayName: 'Collections';
    description: '';
  };
  attributes: {
    headline: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    subhead: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    Collection: Attribute.Component<'global.collection', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 6;
      }>;
  };
}

export interface BrandBladesIntro extends Schema.Component {
  collectionName: 'components_brand_blades_intros';
  info: {
    displayName: 'intro';
    description: '';
  };
  attributes: {
    description: Attribute.RichText;
    brandCta: Attribute.Component<'global.call-to-action', true>;
    secondaryTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    secondaryDescription: Attribute.RichText;
    secondaryCta: Attribute.Component<'global.call-to-action'>;
  };
}

export interface GlobalCallToAction extends Schema.Component {
  collectionName: 'components_global_call_to_actions';
  info: {
    displayName: 'Call to Action';
    description: '';
  };
  attributes: {
    link: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    label: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    type: Attribute.Enumeration<['internal', 'external', 'form']> &
      Attribute.Required &
      Attribute.DefaultTo<'external'>;
    style: Attribute.Enumeration<['default', 'text']> &
      Attribute.Required &
      Attribute.DefaultTo<'default'>;
  };
}

export interface GlobalCard extends Schema.Component {
  collectionName: 'components_global_cards';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    image: Attribute.Media & Attribute.Required;
    link: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    linkType: Attribute.Enumeration<['internal', 'external']> &
      Attribute.Required &
      Attribute.DefaultTo<'external'>;
    project: Attribute.Relation<
      'global.card',
      'oneToOne',
      'api::project.project'
    >;
  };
}

export interface GlobalCollectionImage extends Schema.Component {
  collectionName: 'components_global_collection_images';
  info: {
    displayName: 'Collection Image';
  };
  attributes: {
    description: Attribute.RichText;
    image: Attribute.Media;
  };
}

export interface GlobalCollection extends Schema.Component {
  collectionName: 'components_global_collections';
  info: {
    displayName: 'Collection';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    image: Attribute.Component<'global.collection-image', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
  };
}

export interface GlobalColumn extends Schema.Component {
  collectionName: 'components_global_columns';
  info: {
    displayName: 'Column';
  };
  attributes: {
    headline: Attribute.String;
    subcopy: Attribute.RichText;
    image: Attribute.Media & Attribute.Required;
    cta: Attribute.Component<'global.call-to-action'> & Attribute.Required;
  };
}

export interface GlobalMedia extends Schema.Component {
  collectionName: 'components_global_media';
  info: {
    displayName: 'media';
    description: '';
  };
  attributes: {
    video: Attribute.Media;
    image: Attribute.Media & Attribute.Required;
    youtubeUrl: Attribute.Text & Attribute.CustomField<'plugin::oembed.oembed'>;
  };
}

export interface GlobalSelectOption extends Schema.Component {
  collectionName: 'components_global_select_options';
  info: {
    displayName: 'Select Option';
  };
  attributes: {
    label: Attribute.String;
  };
}

export interface GlobalSocialMediaLink extends Schema.Component {
  collectionName: 'components_global_social_media_links';
  info: {
    displayName: 'Social Media Link';
  };
  attributes: {
    link: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    label: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface NavigationNavItem extends Schema.Component {
  collectionName: 'components_navigation_nav_items';
  info: {
    displayName: 'Nav Item';
  };
  attributes: {
    link: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    label: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    type: Attribute.Enumeration<['internal', 'external', 'form']> &
      Attribute.Required &
      Attribute.DefaultTo<'internal'>;
  };
}

export interface PageBladesAllBrands extends Schema.Component {
  collectionName: 'components_page_blades_all_brands';
  info: {
    displayName: 'All Brands';
  };
  attributes: {
    headline: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    subcopy: Attribute.RichText;
    cta: Attribute.Component<'global.call-to-action'>;
  };
}

export interface PageBladesContentColumn extends Schema.Component {
  collectionName: 'components_page_blades_content_columns';
  info: {
    displayName: 'Content Column';
    description: '';
  };
  attributes: {
    headline: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    subcopy: Attribute.RichText;
    cta: Attribute.Component<'global.call-to-action'>;
    bgColor: Attribute.Enumeration<['darkblue', 'eggshell', 'skyblue']> &
      Attribute.Required &
      Attribute.DefaultTo<'darkblue'>;
  };
}

export interface PageBladesContentCta extends Schema.Component {
  collectionName: 'components_global_content_ctas';
  info: {
    displayName: 'Content CTA';
    description: '';
  };
  attributes: {
    headline: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    subcopy: Attribute.RichText;
    cta: Attribute.Component<'global.call-to-action'>;
    bgImage: Attribute.Media;
    bgColor: Attribute.Enumeration<['darkblue', 'eggshell', 'skyblue']> &
      Attribute.Required &
      Attribute.DefaultTo<'darkblue'>;
  };
}

export interface PageBladesEmbed extends Schema.Component {
  collectionName: 'components_page_blades_embeds';
  info: {
    displayName: 'Virtual Showroom';
    description: '';
  };
  attributes: {
    headline: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    posterImage: Attribute.Media;
    virtualShowroomLInk: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface PageBladesFeaturedContent extends Schema.Component {
  collectionName: 'components_page_blades_featured_contents';
  info: {
    displayName: 'Featured Content';
  };
  attributes: {
    headline: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    contentCard: Attribute.Component<'global.card', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 5;
      }>;
  };
}

export interface PageBladesHero extends Schema.Component {
  collectionName: 'components_page_blades_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    headline: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    subcopy: Attribute.RichText;
    media: Attribute.Component<'global.media'>;
    cta: Attribute.Component<'global.call-to-action'>;
    bgColor: Attribute.Enumeration<['darkblue', 'eggshell', 'skyblue']> &
      Attribute.Required &
      Attribute.DefaultTo<'eggshell'>;
    imageOrientation: Attribute.Enumeration<['left', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'right'>;
  };
}

export interface PageBladesMarqueeBlade extends Schema.Component {
  collectionName: 'components_page_blades_marquee_blades';
  info: {
    displayName: 'Marquee';
    description: '';
  };
  attributes: {
    headline: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    cta: Attribute.Component<'global.call-to-action'>;
    media: Attribute.Component<'global.media'>;
    additionalImages: Attribute.Media;
  };
}

export interface PageBladesMultiColumns extends Schema.Component {
  collectionName: 'components_page_blades_multi_columns';
  info: {
    displayName: 'Multi Columns';
  };
  attributes: {
    columns: Attribute.Component<'global.column', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 2;
        max: 3;
      }>;
  };
}

export interface PageBladesProposition extends Schema.Component {
  collectionName: 'components_page_blades_propositions';
  info: {
    displayName: 'Proposition';
  };
  attributes: {
    headline: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    subcopy: Attribute.RichText;
    images: Attribute.Media & Attribute.Required;
  };
}

export interface PageBladesQuote extends Schema.Component {
  collectionName: 'components_page_blades_quotes';
  info: {
    displayName: 'Quote';
  };
  attributes: {
    quote: Attribute.Relation<
      'page-blades.quote',
      'oneToOne',
      'api::quote.quote'
    >;
  };
}

export interface PageBladesRichText extends Schema.Component {
  collectionName: 'components_page_blades_rich_texts';
  info: {
    displayName: 'Rich Text';
  };
  attributes: {
    copy: Attribute.RichText;
  };
}

export interface PageBladesTeamMembers extends Schema.Component {
  collectionName: 'components_page_blades_team_members';
  info: {
    displayName: 'Team Members';
    description: '';
  };
  attributes: {
    headline: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    subcopy: Attribute.RichText;
    teamMembers: Attribute.Relation<
      'page-blades.team-members',
      'oneToMany',
      'api::team-member.team-member'
    > &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 6;
      }>;
  };
}

export interface ProjectBladesHero extends Schema.Component {
  collectionName: 'components_project_blades_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    copy: Attribute.RichText;
    images: Attribute.Component<'global.collection-image', true>;
    imageOrientation: Attribute.Enumeration<['left', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'right'>;
  };
}

export interface ProjectBladesIntro extends Schema.Component {
  collectionName: 'components_project_blades_intros';
  info: {
    displayName: 'Intro';
  };
  attributes: {
    headline: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    overview: Attribute.RichText;
    location: Attribute.RichText;
    photographer: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    client: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'brand-blades.collections': BrandBladesCollections;
      'brand-blades.intro': BrandBladesIntro;
      'global.call-to-action': GlobalCallToAction;
      'global.card': GlobalCard;
      'global.collection-image': GlobalCollectionImage;
      'global.collection': GlobalCollection;
      'global.column': GlobalColumn;
      'global.media': GlobalMedia;
      'global.select-option': GlobalSelectOption;
      'global.social-media-link': GlobalSocialMediaLink;
      'navigation.nav-item': NavigationNavItem;
      'page-blades.all-brands': PageBladesAllBrands;
      'page-blades.content-column': PageBladesContentColumn;
      'page-blades.content-cta': PageBladesContentCta;
      'page-blades.embed': PageBladesEmbed;
      'page-blades.featured-content': PageBladesFeaturedContent;
      'page-blades.hero': PageBladesHero;
      'page-blades.marquee-blade': PageBladesMarqueeBlade;
      'page-blades.multi-columns': PageBladesMultiColumns;
      'page-blades.proposition': PageBladesProposition;
      'page-blades.quote': PageBladesQuote;
      'page-blades.rich-text': PageBladesRichText;
      'page-blades.team-members': PageBladesTeamMembers;
      'project-blades.hero': ProjectBladesHero;
      'project-blades.intro': ProjectBladesIntro;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
