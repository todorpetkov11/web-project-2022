import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})
export class NewThreadComponent implements OnInit {

  

  constructor(private db: AngularFireDatabase) { }

  ngOnInit(): void {
  }

  // saveData(inputValue: string) {
  //   const ref = this.db.list("threads");
  //   ref.push(inputValue).then((resp) => {
  //     console.log(resp)
  //   }).catch((error) => {
  //     console.log(error)
  //   })

  // }

}
