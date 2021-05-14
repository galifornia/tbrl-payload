import React from "react";
import payload from "payload";
import { GetServerSideProps } from "next";
import getConfig from "next/config";
import { Type as PageType } from "../collections/Page";
import NotFound from "../components/NotFound";
import Head from "../components/Head";
import RenderBlocks from "../components/RenderBlocks";
import { Grid, Cell } from "@faceless-ui/css-grid";
import GridContainer from "../components/Layout/GridContainer";
import Template from "../components/Layout/Template";

const {
  publicRuntimeConfig: { SERVER_URL },
} = getConfig();

export type Props = {
  page?: PageType;
  statusCode: number;
};

const Page: React.FC<Props> = (props) => {
  const { page } = props;

  if (!page) {
    return <NotFound />;
  }

  return (
    <Template>
      <Head
        title={page.meta?.title || page.title}
        description={page.meta?.description}
        keywords={page.meta?.keywords}
      />
      <header>
        <h1>{page.title}</h1>
      </header>
      <div>
        {page.image && (
          <img
            src={`${SERVER_URL}/media/${
              page.image.sizes?.feature?.filename || page.image.filename
            }`}
            alt={page.image.alt}
          />
        )}
      </div>
      <RenderBlocks layout={page.layout} />
      <GridContainer>
        <Grid>
          <Cell cols={6}>Fist column</Cell>
          <Cell cols={6}>Here is some content</Cell>
        </Grid>
      </GridContainer>
    </Template>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.params?.slug || "home";

  const pageQuery = await payload.find({
    collection: "pages",
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!pageQuery.docs[0]) {
    ctx.res.statusCode = 404;

    return {
      props: {},
    };
  }

  return {
    props: {
      page: pageQuery.docs[0],
    },
  };
};
