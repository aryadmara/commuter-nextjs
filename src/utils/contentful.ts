import { createClient } from "contentful";

export const createContentClient = () => {
    return createClient({
        space: "g53mmfdzk2na",
        accessToken: "pQ28xJi8b-Ignb4G5sGCxpFfj43XmnkUZ49W6nj6ELs",
    })
}
const client = createContentClient()

export const getEntriesByType = async (type:any) =>{
    const response = await client.getEntries({
        content_type:type,
    })

    return response.items
}

export const getBlogPosts = async () =>{
    const result = await getEntriesByType("blogpost")
    const blogPost = result.map((blog) =>blog.fields)
    return blogPost
}