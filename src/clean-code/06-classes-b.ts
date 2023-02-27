( () => {

    //No aplicando principio de responsabilidad unica, pero utilizando mejores practicas

    type Gender = 'M' | 'F';

    interface PersonProperties {
       name     : string;
       gender   : Gender;
       birthdate: Date;

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
        birthdate   : Date;
        email       : string;
        gender      : Gender;
        name        : string;
        role        : string;
    }

    class User extends Person {

        public lastAccess   : Date;
        public email        : string;
        public role         : string;

        constructor( { birthdate, gender, name, email, role }: UserProperties ){

            super({ birthdate, gender, name });

            this.lastAccess   = new Date();
            this.email        = email;
            this.role         = role;
        }

        checkCredentials() {
            return true;
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

    class UserSettings extends User {

        public workingDirectory : string;
        public lastOpenFolder   : string;

        constructor({ workingDirectory, lastOpenFolder, email, role, name, gender, birthdate } : UserSettingsProperties){

            super({ email, role, name, gender, birthdate });

            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;

        }

    }

    const userSettings = new UserSettings( {
        workingDirectory: '/user/home',
        lastOpenFolder: 'home',
        email: 'oscar@gmail.co,',
        role: 'ADMIN',
        name: 'Oscar',
        gender: 'M',
        birthdate: new Date('2021-12-01')
    })

    console.log(userSettings)
    
    
} )();