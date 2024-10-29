import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Tarefa} from "../../../tarefa";
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, NgStyle, NgClass],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

  @Input() tarefa!: Tarefa;
  @Output() onDeleteTask = new EventEmitter<Tarefa>();
  @Output() onToggleConclude = new EventEmitter<Tarefa>();

  faTimes = faTimes;


  onDelete(tarefa: Tarefa) {
    this.onDeleteTask.emit(tarefa);
  }

  onToggle(tarefa: Tarefa) {
    this.onToggleConclude.emit(tarefa);
  }

}
