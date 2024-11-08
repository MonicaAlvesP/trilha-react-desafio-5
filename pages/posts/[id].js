import React from 'react';
import { getGlobalData } from '../../utils/global-data';
import { getPostById } from '../../utils/mdx-utils';

import Head from 'next/head';
import CustomLink from '../../components/CustomLink';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Link from 'next/link';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';

const components = {
  a: CustomLink,
  Head,
};

export default function PostPage({ post, globalData }) {
  if (!post) {
    return <div>Post não encontrado</div>;
  }

  return (
    <Layout>
      <SEO
        title={`${post.title} - ${globalData.name}`}
        description={post.description}
      />
      <Header name={globalData.name} />
      <article className="px-6 md:px-0">
        <header>
          <h1 className="text-3xl md:text-5xl dark:text-white text-center mb-12">
            {post.title}
          </h1>
          {post.description && (
            <p className="text-xl mb-4">{post.description}</p>
          )}
        </header>
        <main>
          <article className="prose dark:prose-dark">
            {post.body}
          </article>
          <Link href="/">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-1 px-4 rounded mt-4">
              voltar
            </button>
          </Link>
        </main>
      </article>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
  const globalData = getGlobalData();
  const post = await getPostById(params.id);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      globalData,
      post,
    },
  };
};