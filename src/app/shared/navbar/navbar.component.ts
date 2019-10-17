import { Component, OnInit } from "@angular/core";
import { Router, ChildActivationStart } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit
{
  constructor(private router: Router) { }

  ngOnInit() { }

  irUsuario(usuario: string)
  {
    if (!usuario)
    {
      return;
    }

    this.router.navigate(["/usuario", usuario]);
  }
}
