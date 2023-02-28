//Aplicando principio de responsabilidad unica.
//Priorizando la composicion frente a la herencia. Haciendo lo posible evitar las herencias

( () => {

    type Gender = 'M' | 'F';

    interface PersonProperties {
       birthdate: Date;
       gender   : Gender;
       name     : string;

    }

    class Person {

        public birthdate: Date;
        public gender   : Gender;
        public name     : string;

        constructor( { name, gender, birthdate }: PersonProperties ) { 
            this.name      = name;
            this.gender    = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProperties {
        email       : string;
        role        : string;
    }

    class User {

        public lastAccess   : Date;
        public email        : string;
        public role         : string;

        constructor( { email, role }: UserProperties ){


            this.lastAccess   = new Date();
            this.email        = email;
            this.role         = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProperties {
        workingDirectory: string,
        lastOpenFolder  : string,
    }

    class Settings {

        public workingDirectory : string;
        public lastOpenFolder   : string;

        constructor({ workingDirectory, lastOpenFolder } : SettingsProperties){


            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;

        }

    }

    interface UserSettingsProperties {
        workingDirectory: string,
        lastOpenFolder  : string,
        email           : string,
        role            : string,
        name            : string,
        gender          : Gender,
        birthdate       : Date,
    }

    class UserSettings {

        public person   : Person;
        public user     : User;
        public settings : Settings;

        constructor({ 
            name, gender, birthdate,
            email, role,
            lastOpenFolder, workingDirectory,
            } : UserSettingsProperties ){

            this.person     = new Person({ name, gender, birthdate });
            this.user       = new User({ email, role, });
            this.settings   = new Settings({ lastOpenFolder, workingDirectory, });

        }

    }

    const userSettings = new UserSettings( {
        workingDirectory: '/user/home',
        lastOpenFolder: 'home',
        email: 'oscar@gmail.com',
        role: 'ADMIN',
        name: 'Oscar',
        gender: 'M',
        birthdate: new Date('2021-12-01')
    })

    console.log(userSettings)
    
    
} )();