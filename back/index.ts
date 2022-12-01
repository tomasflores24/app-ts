import server from './src/app';

const PORT:number = 3001;

server.listen(PORT, () => {
    console.log("%s Listening",PORT)
})

// 9.30 midu Typescript node