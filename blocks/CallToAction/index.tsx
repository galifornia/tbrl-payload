/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";
import { Block } from "payload/types";
import { Type as Page } from "../../collections/Page";
import RichText from "../../components/RichText";
import backgroundColor, {
  Type as backgroundColorType,
} from "../../fields/background-color";
import link from "../../fields/link";

export type Button =
  | {
      type: "page";
      label: string;
      page: Page;
    }
  | {
      type: "custom";
      label: string;
      url: string;
      newTab: boolean;
    };

export type Type = {
  blockType: "cta";
  backgroundColor: backgroundColorType;
  blockName?: string;
  content: unknown;
  actions: any;
};

type Data = Record<string, unknown>;

const customURLCondition = (_: Data, siblings: Data): boolean =>
  siblings.type === "custom";

export const CallToAction: Block = {
  slug: "cta",
  labels: {
    singular: "Call to Action",
    plural: "Calls to Action",
  },
  fields: [
    backgroundColor,
    {
      name: "content",
      type: "richText",
      label: "Content",
      required: true,
    },
    {
      name: "actions",
      label: "Actions",
      type: "array",
      minRows: 1,
      maxRows: 2,
      fields: [link],
    },
  ],
};

export const Component: React.FC<Type> = (props) => {
  const { content, actions } = props;

  return (
    <div>
      <div>
        <RichText content={content} />
        {actions && (
          <ul>
            {actions.map((action, i) => (
              <li key={i}>
                {action.type === "page" && (
                  <Link href="[...slug]" as={`/${action.page.slug}`}>
                    <a>{action.label}</a>
                  </Link>
                )}
                {action.type === "custom" && (
                  <a
                    href={action.url}
                    target={action.newTab ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    {action.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
