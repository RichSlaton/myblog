import hydrate from 'next-mdx-remote/hydrate'
import {getFiles, getFilesBySlug} from '../../lib/mdx'
import BlogLayout from '../../layouts/blog'
import MDXComponents from '../../components/MDXComponents'

export default function Blog({mdxSource, frontMatter}) {
    const content = hydrate(mdxSource, {
        components: MDXComponents,
    })

    return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>

}

export async function getStaticPaths() {
    const post = await getFiles('blog')

    return {
        paths: posts.map((p) => ({
            params: {
                slug: p.replace(/\.mdx/, '')
            }
        })),
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const post = await getFilesBySlug('blog', params.slug)

    return {props: post}

}