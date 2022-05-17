const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '7885b99137fa29c38b098468f31ca8d8',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;