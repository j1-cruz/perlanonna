export const TAZAS = 
        [
            {
                id: 0,
                title: 'Bear',
                descriptions: 'description',
                image: 'assets/images/productos/tazas/montaña/montaña.png',
                image2: 'assets/images/productos/tazas/montaña/montaña2.png',
                image3: 'assets/images/productos/tazas/montaña/montañas.png',
                modal: () => { return (this.image + this.img)}
            },
            {
                id: 1,
                title: 'Cerrano',
                descriptions: 'aire',
                image: 'assets/images/productos/mates/cerrano/cerrano.png',
                image2: 'assets/images/productos/mates/cerrano/cerrano2.png',
                image3: 'assets/images/productos/mates/cerrano/cerrano3.png',
                modal: [
                    {
                        id: 0,
                        img1: 'assets/images/productos/mates/bear/bear1.png',
                        img2: 'assets/images/productos/mates/bear/bear1.png'
                    }
                ]  
            },
            {
                id: 2,
                title: 'Octogonal',
                descriptions: 'La actualidad ',
                image:'assets/images/productos/mates/octogonal/octogonal.png',
                image2:'assets/images/productos/mates/octogonal/octogonal2.png',
                image3:'assets/images/productos/mates/octogonal/octogonal3.png',
                modal: [
                    {
                        id: 0,
                        img1: 'assets/images/productos/mates/bear/bear1.png',
                        img2: 'assets/images/productos/mates/bear/bear1.png'
                    }
                ]  
            },
            {
                id: 3,
                title: 'Green',
                img: 'assets/images/productos/mates/bear/bear1.png',
                descriptions: 'La actualidad ',
                image: 'assets/images/productos/mates/green/green.png',
                image2: 'assets/images/productos/mates/green/green2.png',
                image3: 'assets/images/productos/mates/green/green3.png',
                modal: [
                    {
                        id: 0,
                        img1: 'assets/images/productos/mates/bear/bear1.png',
                        img2: 'assets/images/productos/mates/bear/bear1.png'
                    }
                ]  
            }
          
        ]