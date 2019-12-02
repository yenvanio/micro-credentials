import { Component, OnInit } from "@angular/core";
import { FireStoreService } from "src/app/services/firestore.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-badges",
  templateUrl: "./badges.component.html",
  styleUrls: ["./badges.component.scss"]
})
export class BadgesComponent implements OnInit {
  displayedColumns = ["course", "platform", "date", "file", "status", "delete"];
  badges;
  dateFormat = "yyyy/MM/dd h:mm:ss a";

  constructor(
    private fs: FireStoreService,
    private as: AuthService
  ) { }

  ngOnInit() {
    this.getBadges();
  }

  getBadges() {
    let badges: any[] = [];
    this.fs.getBadges(this.as.uid).subscribe(res => {
      res.forEach(b => {
        let d: any = b.data;
        d.id = b.id;
        console.log(d);
        badges.push(d)
      })
      this.badges = badges;
      console.log(this.badges);
    });
  }

  deleteBadge(id) {
    console.log(id);
    this.fs.deleteBadge(id);
  }
}
