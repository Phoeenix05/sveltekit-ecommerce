import type { PageLoad } from "./$types";

export const load = (async ({ fetch }) => {
    const data = await fetch("https://dummyjson.com/products")
        .then(res => res.json())

    return { ...data }
}) satisfies PageLoad
