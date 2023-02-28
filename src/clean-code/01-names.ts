//En esta clase vemos como ponder nombres a nuestras variables
(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, flags: false },
        { id: 2, flags: false },
        { id: 3, flags: true },
        { id: 4, flags: false },
        { id: 5, flags: false },
        { id: 7, flags: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filesToDelete = filesToEvaluate.map( file => file.flags );

    // Malos
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const today = new Date();
    
    // días transcurridos - elapsed time in days
    const elapsedDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const numberFilesOnDirectory = 33;
    
    // primer nombre - first name
    const firstName = 'Fernando';
    
    // primer apellido - last name
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const daysOfLastUpdate = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const maxClassPerStudent = 6;


})();
