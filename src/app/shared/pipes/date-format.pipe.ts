import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

    private week_days: Map<string, string> = new Map<string, string>();
    constructor() {
        this.week_days.set('Mon', 'Poniedziałek');
        this.week_days.set('Tue', 'Wtorek');
        this.week_days.set('Wed', 'Środa');
        this.week_days.set('Thu', 'Czwartek');
        this.week_days.set('Fri', 'Piątek');
        this.week_days.set('Sat', 'Sobota');
        this.week_days.set('Sun', 'Niedziela');
    }

    transform(value: string) {
        const datePipe = new DatePipe('en-US');
        const week_day = datePipe.transform(value, 'EEE');
        const formattedDate = this.week_days.get(week_day) + ', ' +  datePipe.transform(value, 'dd.MM.yyyy, HH:mm');
        return formattedDate;
    }

}

