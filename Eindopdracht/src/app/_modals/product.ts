export class product {
    naam: string;
    omschrijving:string;
    imgLocation:string;
    voorraad:number;
    maxLeentijdDagen:number;

    getInleverdatum(){
        let inleverDatum = new Date()
        inleverDatum.setDate(inleverDatum.getDate() + this.maxLeentijdDagen);
        return inleverDatum
      }
    
      getMinDatum(){
        let minDatum = new Date()
        minDatum.setDate(minDatum.getDate() + 1);
        return minDatum;
      }
    
      getMaxDatum(){
        let maxDatum = new Date()
        maxDatum.setDate(maxDatum.getDate() + this.maxLeentijdDagen);
        return maxDatum;
      }

}
