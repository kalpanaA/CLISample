import{Component,Input} from '@angular/core';
import{ Employee} from './Employee';
import { NgDataGridModel } from 'angular2-datagrid';

@Component({    
    moduleId:module.id,
    selector: 'name-child',
    templateUrl: './employeeChild.component.html'
})
export class EmpChildComponent{
table = new NgDataGridModel<Employee>([]);
 @Input() empCh:Employee;
}
