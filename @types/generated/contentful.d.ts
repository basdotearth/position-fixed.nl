// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IAuthorFields {
  /** Name */
  name: string;

  /** Link */
  link?: string | undefined;
}

export interface IAuthor extends Entry<IAuthorFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "author";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IEducationFields {
  /** Subject */
  subject: string;

  /** Start */
  start: string;

  /** End */
  end?: string | undefined;

  /** By-line */
  byLine?: string | undefined;
}

export interface IEducation extends Entry<IEducationFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "education";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IProjectFields {
  /** Company */
  company: string;

  /** Logo */
  logo?: Asset | undefined;

  /** Start */
  start: string;

  /** End */
  end?: string | undefined;

  /** Location */
  location: string;

  /** Description */
  description: Document;

  /** Tags */
  tags: string[];

  /** Consultancy */
  consultancy: boolean;
}

export interface IProject extends Entry<IProjectFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "project";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IStaticTextsFields {
  /** Content */
  content: Document;

  /** Slug */
  slug: string;
}

export interface IStaticTexts extends Entry<IStaticTextsFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "staticTexts";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ITaskFields {
  /** Title */
  title: string;

  /** Description */
  description: Document;

  /** Codepen */
  codepen: string;

  /** Publish Date */
  publishDate?: string | undefined;

  /** Author */
  author: IAuthor;
}

export interface ITask extends Entry<ITaskFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "task";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE =
  | "author"
  | "education"
  | "project"
  | "staticTexts"
  | "task";

export type LOCALE_CODE = "en-GB" | "nl-NL";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-GB";