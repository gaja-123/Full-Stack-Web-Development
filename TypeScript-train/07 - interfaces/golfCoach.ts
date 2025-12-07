import { coach } from "./coach";

export class golfCoach implements coach{

    gettrainingdetails(): string {
        return 'hit 100 golf ball in golf range';
    }
}