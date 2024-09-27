type ContentType = {
    language: string,
    text: string
}

export type ProjectType = {
    _id: number,
    title: string,
    imageUrl: string
    tags: string,
    content: ContentType[]
    link: string,
    category: string,
};