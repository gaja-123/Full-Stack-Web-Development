import { coach } from "./coach";

export class cricketCoach implements coach{

    gettrainingdetails(): string{

        return 'practise spin bowling'
    }
}