import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private firestore: Firestore = inject(Firestore);

  ngOnInit() {
    getDocs(collection(this.firestore, 'test')).then(response => {
      response.docs.map(r => {
        console.log('data', r.data());
        console.log('id', r.id);
      });
    });
  }

  // private async parsedData(): Promise<void | unknown[]> {
  //   return (await getDocs(await collection(this.firestore, 'test'))).docChanges
  // }
}
