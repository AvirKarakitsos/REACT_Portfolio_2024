type ContentType = {
    language: string,
    text: string
}

export type ProjectType = {
    _id: number,
    title: string,
    imageUrl: string,
    imageUrlShort: string,
    video: string,
    tags: string,
    content: ContentType[]
    link: string,
    category: string,
};

export type CategoryType = {
    _id: number,
    name: 'all' | 'openclassrooms' | '2024',
    color?: string
}

export type ObjectModal = {
    isOpen: boolean, 
    videoId: null | number
}