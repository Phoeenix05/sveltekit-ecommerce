import type { PageLoad } from "./$types";

export const load = (async ({ params, fetch }) => {
    const data = await fetch(`https://dummyjson.com/products/${params.id}`)
        .then(res => res.json())
    
    return { data }
}) satisfies PageLoad