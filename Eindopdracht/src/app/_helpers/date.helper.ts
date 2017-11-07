export class dateHelper{
    toDate(dateString: string) {
        var parts = dateString.split("-");
        let date: Date = new Date();
        date.setFullYear(parseInt(parts[2]));
        date.setMonth(parseInt(parts[1])-1);
        date.setDate(parseInt(parts[0]));
        return date;
    }

    formatDateReversed(date: Date){
        var mm = date.getMonth() + 1;
        var dd = date.getDate();
    
        return [date.getFullYear(),"-",
                (mm>9 ? '' : '0') + mm,"-",
                (dd>9 ? '' : '0') + dd
               ].join('');
    
      }

      formatDate(date: Date){
        var mm = date.getMonth() + 1;
        var dd = date.getDate();
    
        return [(dd>9 ? '' : '0') + dd,"-",
        (mm>9 ? '' : '0') + mm,"-",
        date.getFullYear()
       ].join('');
      }

}