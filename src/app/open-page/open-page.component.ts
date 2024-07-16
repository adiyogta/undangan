import { Component, OnInit } from '@angular/core';
import { AnimateComponent } from "../animate/animate.component";
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
interface GuestResponse {
  data: Guest[];
}

interface Guest {
  nama: string;
}
@Component({
  selector: 'app-open-page',
  standalone: true,
  imports: [AnimateComponent, RouterLink, RouterLinkActive,RouterModule],
  templateUrl: './open-page.component.html',
  styleUrl: './open-page.component.css'
})
export class OpenPageComponent implements OnInit {
  brideAndGroom: string = "Nesi & Yogta";
  weddingDate: string = "Dear,";
  guestName: string | null = null;
  isPlaying = true;
  musicStatus() {
    localStorage.setItem('shouldPlayMusic', this.isPlaying ? 'true' : 'false');
  }
  constructor(private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) {}

    ngOnInit() {
      this.guestName = this.route.snapshot.paramMap.get('guestName');
      if (this.guestName) {
        this.validateGuest(this.guestName);
      }
    }
    validateGuest(guestName: string) {
      this.http.get<GuestResponse>('https://script.google.com/macros/s/AKfycby0ljAjceQAhLO2RnGm_2U_Fv4F-eLx055Xfp_3Q7M0vgvpREZaTuvyEzZlxRmGWL6rsQ/exec')
        .subscribe({
          next: (response) => {
            const isValidGuest = response.data.some(guest => guest.nama.toLowerCase() === decodeURIComponent(guestName).toLowerCase());
            if (!isValidGuest) {
              this.router.navigate(['/404']);
            }
          },
          error: (err) => {
            console.error('Error validating guest:', err);
            // You might want to handle this error case, perhaps by showing an error message or redirecting
          }
        });
    }
}
