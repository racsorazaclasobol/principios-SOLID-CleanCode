//Principio de responsabilidad unica clase 47 y 48
(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService: ProductService;
        private mailer: Mailer;

        constructor( productService: ProductService, mailer: Mailer ){

            this.productService = productService;
            this.mailer = mailer;

        }

        loadProducts( id: number ){
            this.productService.getProducts( id );
        }

        saveProducts( product: Product ){
            this.productService.saveProduct( product );
        }

        notifyClient(){
            this.mailer.sendEmail( ['aaa@gmail.com'], 't-clientes' )
        }

    }

    class ProductService {
    
        getProducts( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }

    }

    class Mailer {

        private masterEmail: string = 'admin@gmail.com'

        sendEmail( emailList: string[], template: 't-clientes' | 'to-admin' ) {
            console.log('Enviando correo a los clientes');
        }

    }

    class CartBloc {

        private itemsInCart: Object[] = [];

        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }

    }
    
    const productService    = new ProductService();
    const mailer            = new Mailer();
    const cartBloc          = new CartBloc();

    const productBloc = new ProductBloc( productService, mailer )

    productBloc.loadProducts(10);
    productBloc.saveProducts({ id: 10, name: 'OLED TV' });
    productBloc.notifyClient();

    cartBloc.onAddToCart(10);

})();