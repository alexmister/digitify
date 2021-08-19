import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(public firestore: AngularFirestore) {

  }

  async ngOnInit() {
    const collection = await this.firestore.collection('posts').doc('1').valueChanges().subscribe(val => console.log(val));
    console.log(collection)

  }

}
