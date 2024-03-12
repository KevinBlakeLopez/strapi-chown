import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginSlugifySlug extends Schema.CollectionType {
  collectionName: 'slugs';
  info: {
    singularName: 'slug';
    pluralName: 'slugs';
    displayName: 'slug';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    slug: Attribute.Text;
    count: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::slugify.slug',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::slugify.slug',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginPublisherAction extends Schema.CollectionType {
  collectionName: 'actions';
  info: {
    singularName: 'action';
    pluralName: 'actions';
    displayName: 'actions';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    executeAt: Attribute.DateTime;
    mode: Attribute.String;
    entityId: Attribute.Integer;
    entitySlug: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::publisher.action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::publisher.action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginRedirectsRedirect extends Schema.CollectionType {
  collectionName: 'redirects';
  info: {
    singularName: 'redirect';
    pluralName: 'redirects';
    displayName: 'redirect';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    from: Attribute.String & Attribute.Required;
    to: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<['permanent', 'temporary']> &
      Attribute.Required &
      Attribute.DefaultTo<'permanent'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::redirects.redirect',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::redirects.redirect',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBrandBrand extends Schema.CollectionType {
  collectionName: 'brands';
  info: {
    singularName: 'brand';
    pluralName: 'brands';
    displayName: 'Brand';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    logo: Attribute.Media & Attribute.Required;
    seo: Attribute.Component<'shared.seo'>;
    slug: Attribute.UID<'api::brand.brand', 'name'>;
    categories: Attribute.Relation<
      'api::brand.brand',
      'manyToMany',
      'api::category.category'
    >;
    cost: Attribute.Relation<
      'api::brand.brand',
      'manyToMany',
      'api::price-tier.price-tier'
    >;
    lead_time: Attribute.Relation<
      'api::brand.brand',
      'manyToMany',
      'api::lead-time.lead-time'
    >;
    projects: Attribute.Relation<
      'api::brand.brand',
      'manyToMany',
      'api::project.project'
    >;
    collections: Attribute.Component<'brand-blades.collections'>;
    intro: Attribute.Component<'brand-blades.intro'> & Attribute.Required;
    contentCta: Attribute.Component<'page-blades.content-cta'>;
    banner: Attribute.Media;
    card: Attribute.Media;
    subcategories: Attribute.Relation<
      'api::brand.brand',
      'manyToMany',
      'api::subcategory.subcategory'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::brand.brand',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::brand.brand',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCategoryCategory extends Schema.CollectionType {
  collectionName: 'categories';
  info: {
    singularName: 'category';
    pluralName: 'categories';
    displayName: 'Category';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    slug: Attribute.UID<'api::category.category', 'title'>;
    brands: Attribute.Relation<
      'api::category.category',
      'manyToMany',
      'api::brand.brand'
    >;
    projects: Attribute.Relation<
      'api::category.category',
      'manyToMany',
      'api::project.project'
    >;
    description: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDesignerDesigner extends Schema.CollectionType {
  collectionName: 'designers';
  info: {
    singularName: 'designer';
    pluralName: 'designers';
    displayName: 'Designer';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    headshot: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::designer.designer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::designer.designer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFooterNavigationFooterNavigation extends Schema.SingleType {
  collectionName: 'footer_navigations';
  info: {
    singularName: 'footer-navigation';
    pluralName: 'footer-navigations';
    displayName: 'Navigation - Footer';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    exploreNavigation: Attribute.Component<'navigation.nav-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    companyNavigation: Attribute.Component<'navigation.nav-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    legalLinks: Attribute.Component<'navigation.nav-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    exploreLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Explore'>;
    companyLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Company'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer-navigation.footer-navigation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::footer-navigation.footer-navigation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGeneralFormDataGeneralFormData extends Schema.SingleType {
  collectionName: 'general_form_datas';
  info: {
    singularName: 'general-form-data';
    pluralName: 'general-form-datas';
    displayName: 'General Form Data';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    newsletterTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Subscribe'>;
    sampleRequestTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Request Finish Sample'>;
    warrantyClaimTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Submit a warranty claim.'>;
    appointmentTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Book an appointment'>;
    nameLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Name'>;
    namePlaceholder: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Enter your name'>;
    emailLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Email'>;
    emailPlaceholder: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'email@email.com'>;
    addressLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Address'>;
    addressPlaceholder: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Enter your address'>;
    cityLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'City'>;
    stateLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Enter your state'>;
    statePlaceholder: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Enter your state'>;
    zipLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Zip'>;
    zipPlaceholder: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'XXXXX'>;
    phoneLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Phone Number'>;
    phonePlaceholder: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'XXX-XXX-XXXX'>;
    companyLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Company Name'>;
    companyPlaceholder: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Enter your company name'>;
    brandLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Brand'>;
    finishLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Finish'>;
    orderLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Order ID'>;
    productLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Product ID'>;
    appointmentSubtitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Tell us a little about you.'>;
    selfIdentifierLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Are you a...?'>;
    selfIdentifierOptions: Attribute.JSON & Attribute.Required;
    tradeProfessionalLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Are you working with a Trade Professional?'>;
    tradeProfessionalOptions: Attribute.JSON;
    projectInfoTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Tell us about your project.'>;
    projectNeedLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'What are you shopping for?'>;
    projectDetailLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Please tell us a little more about your project needs.'>;
    optInLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Check to sign up for our newsletter.'>;
    defectDetailsLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Details of defect'>;
    uploadLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Upload Photo(s)'>;
    fileSizeLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Maximum file size: 10MB'>;
    fileTypeLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Allowed extensions: jpg, png, pdf'>;
    fileUploadLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Drag and drop or <link>browser</link> your files'>;
    sampleDateLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'When do you need to receive the sample?'>;
    sampleDatePlaceholder: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'MM/DD/YYYY'>;
    additionalCommentsLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Additional Comments'>;
    referralLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'How did you hear about us?'>;
    referralOptions: Attribute.JSON;
    locationLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'What showroom are you interested in working with?'>;
    professionLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'What is your profession?'>;
    professionOptions: Attribute.JSON;
    locationPlaceholder: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Select a showroom'>;
    professionPlaceholder: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Check all that applies.'>;
    newsletterButtonLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Subscribe'>;
    submitButtonLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Submit'>;
    locationOptions: Attribute.JSON;
    defectDetailsPlaceholder: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Defective product? Warranty issue? Missing product?'>;
    additionalCommentsPlaceholder: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    preferredContactLabel: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'How would you like to be contacted?'>;
    preferredContactOptions: Attribute.JSON;
    tradeProfessionalPlaceholder: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'If yes, who'>;
    projectNeedPlaceholder: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Example: Door hardware? Cabinet hardware? Kitchen plumbing? Bath plumbing?'>;
    projectDetailPlaceholder: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Example: Full build? Kitchen or bath remodel?'>;
    newsletterSuccessTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Thank You'>;
    appointmentSuccessMessage: Attribute.Text;
    warrantySuccessMessage: Attribute.Text;
    sampleSuccessMessage: Attribute.Text;
    newsletterSuccessMessage: Attribute.Text;
    appointmentSuccessTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Thank You for Reaching Out'>;
    warrantySuccessTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Thank You for Reaching Out'>;
    sampleSuccessTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Thank You for Reaching Out'>;
    errorMessage: Attribute.Text;
    nearestLocationLabel: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Select your nearest Chown location'>;
    nearestLocationOptions: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::general-form-data.general-form-data',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::general-form-data.general-form-data',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGlobalDataGlobalData extends Schema.SingleType {
  collectionName: 'global_datas';
  info: {
    singularName: 'global-data';
    pluralName: 'global-datas';
    displayName: 'Global Data';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    siteTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Chown Hardware | Est 1879'>;
    copyright: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Copyright 2024 Chown Hardware. All Rights Reserved.'>;
    defaultSeo: Attribute.Component<'shared.seo'>;
    socialMediaLinks: Attribute.Component<'global.social-media-link', true>;
    showMoreLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Show more'>;
    clearFiltersLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Clear Filters'>;
    designerLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Designer'>;
    photographerLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Photographer'>;
    clientLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Client'>;
    categoriesLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Categories'>;
    priceTierLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Price Tier'>;
    leadTimeLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Lead Time'>;
    leadTimeInfo: Attribute.Text & Attribute.Required;
    learnMoreLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Learn More'>;
    associatedBrandLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Associated Brand Partners'>;
    locationLabel: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Location'>;
    brandsLabel: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Brands'>;
    chownTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Let Chown Help'>;
    chownDescription: Attribute.RichText;
    chownCta: Attribute.Component<'global.call-to-action'>;
    brandContentCta: Attribute.Component<'page-blades.content-cta'>;
    projectHero: Attribute.Component<'page-blades.hero'>;
    emptyResultsText: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    brandAssociatedProjects: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    errorPageContent: Attribute.Component<'global.error-page-content'>;
    projectFilters: Attribute.Boolean;
    subcategoriesLabel: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    teamYears: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::global-data.global-data',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::global-data.global-data',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHeaderNavigationHeaderNavigation extends Schema.SingleType {
  collectionName: 'header_navigations';
  info: {
    singularName: 'header-navigation';
    pluralName: 'header-navigations';
    displayName: 'Navigation - Header';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    primaryNavigation: Attribute.Component<'navigation.nav-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    secondaryNavigation: Attribute.Component<'navigation.nav-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::header-navigation.header-navigation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::header-navigation.header-navigation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLeadTimeLeadTime extends Schema.CollectionType {
  collectionName: 'lead_times';
  info: {
    singularName: 'lead-time';
    pluralName: 'lead-times';
    displayName: 'Lead Time';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    slug: Attribute.UID<'api::lead-time.lead-time', 'title'>;
    description: Attribute.Text;
    filterLabel: Attribute.String;
    brands: Attribute.Relation<
      'api::lead-time.lead-time',
      'manyToMany',
      'api::brand.brand'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lead-time.lead-time',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lead-time.lead-time',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNewsletterCtaNewsletterCta extends Schema.SingleType {
  collectionName: 'newsletter_ctas';
  info: {
    singularName: 'newsletter-cta';
    pluralName: 'newsletter-ctas';
    displayName: 'Newsletter CTA';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }> &
      Attribute.DefaultTo<'Join our newsletter to  stay up to date on the latest trends.'>;
    cta: Attribute.Component<'global.call-to-action'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::newsletter-cta.newsletter-cta',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::newsletter-cta.newsletter-cta',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPagePage extends Schema.CollectionType {
  collectionName: 'pages';
  info: {
    singularName: 'page';
    pluralName: 'pages';
    displayName: 'Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    slug: Attribute.UID<'api::page.page', 'title'> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    pageContent: Attribute.DynamicZone<
      [
        'page-blades.all-brands',
        'page-blades.content-column',
        'page-blades.content-cta',
        'page-blades.embed',
        'page-blades.featured-content',
        'page-blades.hero',
        'page-blades.marquee-blade',
        'page-blades.multi-columns',
        'page-blades.proposition',
        'page-blades.quote',
        'page-blades.rich-text',
        'page-blades.team-members',
        'brand-blades.brands-grid',
        'page-blades.more-information-blade',
        'project-blades.projects-grid'
      ]
    >;
    seo: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::page.page', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::page.page', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiPriceTierPriceTier extends Schema.CollectionType {
  collectionName: 'price_tier';
  info: {
    singularName: 'price-tier';
    pluralName: 'price-tiers';
    displayName: 'Price Tiers';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    description: Attribute.Text;
    filterLabel: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    brands: Attribute.Relation<
      'api::price-tier.price-tier',
      'manyToMany',
      'api::brand.brand'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::price-tier.price-tier',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::price-tier.price-tier',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProjectProject extends Schema.CollectionType {
  collectionName: 'projects';
  info: {
    singularName: 'project';
    pluralName: 'projects';
    displayName: 'Project';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    slug: Attribute.UID<'api::project.project', 'title'> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    seo: Attribute.Component<'shared.seo'>;
    categories: Attribute.Relation<
      'api::project.project',
      'manyToMany',
      'api::category.category'
    >;
    brands: Attribute.Relation<
      'api::project.project',
      'manyToMany',
      'api::brand.brand'
    >;
    designer: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'api::designer.designer'
    >;
    hero: Attribute.Media;
    card: Attribute.Media;
    intro: Attribute.Component<'project-blades.intro'> & Attribute.Required;
    projectCta: Attribute.Component<'page-blades.content-cta'>;
    projectHero: Attribute.Component<'page-blades.hero'>;
    projectDynamicContent: Attribute.DynamicZone<
      [
        'project-blades.hero',
        'project-blades.media-gallery',
        'page-blades.quote',
        'page-blades.rich-text'
      ]
    >;
    subcategories: Attribute.Relation<
      'api::project.project',
      'manyToMany',
      'api::subcategory.subcategory'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiQuoteQuote extends Schema.CollectionType {
  collectionName: 'quotes';
  info: {
    singularName: 'quote';
    pluralName: 'quotes';
    displayName: 'Quote';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    quote: Attribute.Text & Attribute.Required;
    attribution: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    image: Attribute.Media;
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::quote.quote',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::quote.quote',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSubcategorySubcategory extends Schema.CollectionType {
  collectionName: 'subcategories';
  info: {
    singularName: 'subcategory';
    pluralName: 'subcategories';
    displayName: 'Subcategory';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    slug: Attribute.UID<'api::subcategory.subcategory', 'title'> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    brands: Attribute.Relation<
      'api::subcategory.subcategory',
      'manyToMany',
      'api::brand.brand'
    >;
    projects: Attribute.Relation<
      'api::subcategory.subcategory',
      'manyToMany',
      'api::project.project'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::subcategory.subcategory',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::subcategory.subcategory',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTeamMemberTeamMember extends Schema.CollectionType {
  collectionName: 'team_members';
  info: {
    singularName: 'team-member';
    pluralName: 'team-members';
    displayName: 'Team Member';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    experience: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    image: Attribute.Media & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::team-member.team-member',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::team-member.team-member',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::slugify.slug': PluginSlugifySlug;
      'plugin::publisher.action': PluginPublisherAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'plugin::redirects.redirect': PluginRedirectsRedirect;
      'api::brand.brand': ApiBrandBrand;
      'api::category.category': ApiCategoryCategory;
      'api::designer.designer': ApiDesignerDesigner;
      'api::footer-navigation.footer-navigation': ApiFooterNavigationFooterNavigation;
      'api::general-form-data.general-form-data': ApiGeneralFormDataGeneralFormData;
      'api::global-data.global-data': ApiGlobalDataGlobalData;
      'api::header-navigation.header-navigation': ApiHeaderNavigationHeaderNavigation;
      'api::lead-time.lead-time': ApiLeadTimeLeadTime;
      'api::newsletter-cta.newsletter-cta': ApiNewsletterCtaNewsletterCta;
      'api::page.page': ApiPagePage;
      'api::price-tier.price-tier': ApiPriceTierPriceTier;
      'api::project.project': ApiProjectProject;
      'api::quote.quote': ApiQuoteQuote;
      'api::subcategory.subcategory': ApiSubcategorySubcategory;
      'api::team-member.team-member': ApiTeamMemberTeamMember;
    }
  }
}
