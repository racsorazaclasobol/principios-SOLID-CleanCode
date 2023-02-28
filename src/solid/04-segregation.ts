
interface Bird {
    eat(): void;
}

interface FlyingBirds { 
    fly(): void;
}

interface RunningBirds { 
    run(): void;
}

interface SwimmingBirds { 
    swim(): void;
}

class Tucan implements Bird, FlyingBirds {

    public fly() {}
    public eat() {}

}

class Colibri implements Bird, FlyingBirds {

    public fly() {}
    public eat() {}

}

class Avestrus implements Bird, RunningBirds {
    public eat() {}
    public run() {}
}

class Pinguino implements Bird, SwimmingBirds {

    public eat() {}
    public swim() {}

}