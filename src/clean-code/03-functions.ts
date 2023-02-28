//Nombre de variables segun la acción que realizan
(() => {

    function getMovieByID( movieId: string ) {
        console.log({ movieId });
    }

    function getMovieCastsById( id: string ) {
        console.log({ id });
    }

    function getActorByID( ActorId: string ) {
        console.log({ ActorId });
    }
    
    function createMovie(title: string, description: string, rating: number, cast: string[] ) {
        console.log({ title, description, rating, cast });
    }

    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    //Continuación 
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {

        if( isDead ) return 1500;

        if( isSeparated ) return 2500;

        return ( isRetired ) ? 3000 : 4000;

}
        
    


})();