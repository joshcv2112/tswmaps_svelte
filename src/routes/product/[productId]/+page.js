export function load({ params }) {
    console.log('WHAT');
    return {
        post: {
            title: `Title for ${params.slug} goes here`,
            content: `Content for ${params.slug} goes here`
        }
    };
}