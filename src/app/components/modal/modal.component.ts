import { Component, OnInit } from '@angular/core';
import { NuevoComponent } from '../nuevo/nuevo.component';
import { Metas } from '../../core/models/metas';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal',
  imports: [NuevoComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit {
  metas: Metas;
  constructor(private activatedRoute: ActivatedRoute) {
      const queryParams = this.activatedRoute.snapshot.queryParams;
      this.metas = JSON.parse(queryParams['meta']) as Metas;
      console.log(this.metas)

  }
  ngOnInit(): void {
  }

}
