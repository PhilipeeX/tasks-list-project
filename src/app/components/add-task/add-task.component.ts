import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Tarefa} from "../../../tarefa";

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() onAddTask = new EventEmitter<Tarefa>();

  tarefa: string = '';
  categoria: string = '';
  concluido: boolean = false;


  onSubmit(){
    if (!this.tarefa){
      alert('Adicione um nome para a tarefa')
      return;
    }

    const novaTarefa = {
      tarefa: this.tarefa,
      categoria: this.categoria,
      concluido: this.concluido
    }
    this.onAddTask.emit(novaTarefa);

    this.tarefa = '';
    this.categoria = '';
    this.concluido = false;
  }
}
